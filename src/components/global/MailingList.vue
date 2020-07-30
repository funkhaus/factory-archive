<template>
    <div :class="classes">
        <slot name="top" />
        <slot />

        <transition :name="transitionName" mode="out-in">
            <div v-if="state != 'success'" key="form" class="form">
                <slot name="before-form" />

                <form
                    ref="form"
                    :action="actionUrl"
                    method="GET"
                    novalidate
                    @submit.prevent="onSubmit"
                >
                    <!-- <label for="mailing_list_email">Email</label> -->
                    <input
                        id="mailing_list_email"
                        v-model="email"
                        type="email"
                        class="email"
                        name="EMAIL"
                        :placeholder="placeholder"
                        @focus="$emit('focus')"
                        @blur="$emit('blur')"
                    />
                    <div
                        style="position: absolute; left: -5000px;"
                        aria-hidden="true"
                    >
                        <input
                            type="text"
                            :name="token"
                            tabindex="-1"
                            value=""
                        />
                    </div>
                    <slot name="within-form" />

                    <button class="submit" name="button" type="submit">
                        <slot name="submit-icon" />
                    </button>
                    <input
                        type="submit"
                        style="visibility:hidden;position:absolute"
                    />
                </form>

                <slot name="after-form" />
            </div>
            <div
                v-else-if="state == 'success'"
                key="success"
                class="success-message"
            >
                <span class="message" v-html="successMessage" />
                <slot name="success" />
            </div>
        </transition>

        <div v-if="state == 'error'" key="error" class="error-message">
            <span class="message" v-html="errorMessage" />
            <slot name="error" />
        </div>

        <slot name="bottom" />
    </div>
</template>

<script>
import fetchJsonp from "fetch-jsonp"
import Cookies from "js-cookie"
export default {
    props: {
        label: {
            type: String,
            default: "Email"
        },
        actionUrl: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        },
        successMessage: {
            type: String,
            default: "Thank You!"
        },
        submitText: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: "Email Address"
        },
        transitionName: {
            type: String,
            default: "newsletter-submit"
        },
        delay: {
            type: Number,
            default: 5000
        },
        cookieLength: {
            type: Number,
            default: 30
        }
    },
    data() {
        return {
            success: false,
            errorMessage: "",
            loading: false,
            email: ""
        }
    },
    computed: {
        state() {
            if (this.success) return "success"
            else if (this.errorMessage) return "error"
            return "none"
        },
        formAction() {
            const modified = this.actionUrl.replace("/post?", "/post-json?")
            return `${modified}&`
        },
        classes() {
            return [
                "mailing-list",
                `state-${this.state}`,
                { loading: this.loading },
                { empty: !this.email }
                // { "list-open": this.$store.state.mailingListOpened }
            ]
        }
    },
    mounted() {
        if (!Cookies.get("newsletter")) {
            setTimeout(() => this.$emit("cookieCreated"), this.delay)
            Cookies.set("newsletter", "true", { expires: this.cookieLength })
        }
    },
    methods: {
        isSuccess(response) {
            return response.result == "success"
        },
        getErrorMessage(response) {
            return response.msg
        },
        async onSubmit(e) {
            // serlize form data
            const formData = new FormData(this.$refs.form)
            const serialized = [...formData.entries()].map(e => {
                return `${encodeURIComponent(e[0])}=${encodeURIComponent(
                    e[1]
                )}`
            });
            // send request
            this.loading = true
            try {
                const response = await fetchJsonp(
                    this.formAction + serialized.join("&"),
                    {
                        jsonpCallback: "c"
                    }
                ).then(r => r.json())
                // handle error or success
                if (this.isSuccess(response)) this.success = true
                else this.errorMessage = this.getErrorMessage(response)
            } catch (err) {
                this.errorMessage = "Something went wrong."
            }
            this.$emit("addressSubmitted", {
                success: this.success,
                errorMessage: this.errorMessage
            })
            this.loading = false
        }
    }
}
</script>

<style lang="scss">
// define transition
.newsletter-submit-enter-active,
.newsletter-submit-leave-active {
    transition: opacity 300ms;
}
.newsletter-submit-enter,
.newsletter-submit-leave-to {
    opacity: 0;
}
</style>
