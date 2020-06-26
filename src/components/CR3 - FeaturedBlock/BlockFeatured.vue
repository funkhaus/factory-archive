<template>
    <nuxt-link :class="classes" :to="to">
        <wp-image
            v-if="image"
            class="block-image"
            :image="image"
            mode="fullbleed"
        >
        </wp-image>
        <div class="block-text">
            <h3 class="title" v-html="title" />
            <!-- Logos -->
            <div v-if="logos.length" class="logos">
                <div v-for="i in logos" :key="i.id" class="logo-container">
                    <div class="sizer">
                        <img class="logo" :src="i.sourceUrl" />
                    </div>
                </div>
            </div>
            <!-- Credit -->
            <p v-if="credits" class="credit" v-html="credits" />
            <!-- Date -->
            <time v-if="date" class="date" v-html="formattedDate" />
        </div>
    </nuxt-link>
</template>

<script>
// Helpers
import { formatDate } from "@/utils/tools"
// Components
import NuxtLink from "@/components/global/NuxtLink"
import WpImage from "@/components/global/WpImage"

export default {
    components: {
        NuxtLink,
        WpImage
    },
    props: {
        isPost: {
            type: Boolean,
            default: false
        },
        to: {
            type: String,
            required: true
        },
        image: {
            type: Object,
            default: () => {}
        },
        title: {
            type: String,
            default: ""
        },
        credits: {
            type: String,
            default: ""
        },
        logos: {
            type: Array,
            default: () => []
        },
        date: {
            type: String,
            default: ""
        }
    },
    computed: {
        classes() {
            return ["block-featured", { "is-post": this.isPost }]
        },
        formattedDate() {
            return formatDate(this.date)
        }
    }
}
</script>

<style lang="scss">
.block-featured {
    display: block;
    position: relative;
    height: 720px;

    .block-text {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 10;

        padding: 50px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .title {
        margin: 0;
        font-size: 50px;
    }
    // Logos
    .logos {
        display: flex;
        flex-wrap: wrap;
    }
    .logo-container {
        width: 50px;
        margin-right: 15px;

        .sizer {
            padding-bottom: 100%;
            position: relative;
        }
        .logo {
            position: absolute;
            top: 25%;
            transform: translateY(-50%);
            object-fit: contain;
            height: 100%;
            width: 100%;
        }
    }
    // Post styles
    &.is-post {
        // TODO use some varialbe here
        background-color: #000;

        .block-text {
            justify-content: space-between;
        }
    }

    // Hovers
    // @media #{$has-hover} {
    //     &:hover {
    //     }
    // }
    // Breakpoints
    // @media #{$lt-phone} {
    // }
}
</style>
