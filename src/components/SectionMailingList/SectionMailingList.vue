<template>
    <div class="section-mailing-list">
        <h3 class="mailing-list-title">
            Stay In Touch
        </h3>
        <!-- Mailing List -->
        <mailing-list
            :action-url="actionUrl"
            :token="token"
            :placeholder="placeholder"
            :submit-text="submitText"
        >
            <svg-button-arrow-right
                slot="submit-icon"
                class="svg button-submit"
            />
        </mailing-list>
    </div>
</template>

<script>
// Components
import MailingList from "@/components/global/MailingList"
// Assets
import SvgButtonArrowRight from "@/assets/svgs/button-arrow-right.svg"

export default {
    components: {
        MailingList,
        SvgButtonArrowRight
    },
    data() {
        return {
            actionUrl: "",
            token: "",
            placeholder: "Your Email",
            submitText: "join us"
        }
    }
}
</script>

<style lang="scss">
:root {
    --color-red: #f96447;
    --color-pink: #f7aea8;
}
.section-mailing-list {
    padding: 100px 0;
    text-align: center;
    color: var(--color-red);
    background-color: var(--color-pink);

    .mailing-list-title {
        margin: 0 0 25px;
        font-family: var(--font-secondary);
        font-size: 50px;
        font-weight: 400;
        text-transform: uppercase;
    }

    // Mailing List styles
    .form {
        position: relative;
        width: 560px;
        margin: 0 auto;
    }
    .email {
        width: 100%;
        padding-right: 50px;
        box-sizing: border-box;
        border: 0;
        border-bottom: 2px solid var(--color-red);
        background-color: transparent;

        font-family: var(--font-secondary);
        color: var(--color-red);
        font-size: 25px;

        &::placeholder {
            color: var(--color-red);
        }
    }
    .submit {
        position: absolute;
        right: 0;
        top: 7px;

        background-color: transparent;
        border: 0;
        cursor: pointer;
    }

    // Breakpoints
    @media #{$lt-phone} {
        .mailing-list-title {
            margin-bottom: 15px;
            font-size: 25px;
        }
        .form {
            width: 279px;
        }
        .email {
            font-size: 14px;
        }
        .submit {
            right: 0;
            top: 2px;
        }
        .button-submit {
            width: 17px;
        }
    }
}
</style>
