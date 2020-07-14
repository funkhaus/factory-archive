<template>
    <nuxt-link
        :class="classes"
        :to="to"
        @mouseover.native="startHover"
        @mouseleave.native="resetHover"
    >
        <!-- Image -->
        <wp-image
            v-if="image && !isNews"
            class="block-image"
            :image="image"
            mode="fullbleed"
        />

        <!-- Text -->
        <div class="block-text">
            <!-- Meta -->
            <div ref="meta" :style="metaStyle" class="meta">
                <!-- Play SVG -->
                <svg-button-play class="svg play" />
                <!-- Title -->
                <h3 v-if="title" class="title" v-html="title" />
                <!-- Logos -->
                <div v-if="logoNames.length" class="logos">
                    <component
                        :is="`svg-logo-${name}`"
                        v-for="(name, i) in logoNames"
                        :key="name"
                        class="logo"
                    />
                </div>
                <!-- Primary Credits -->
                <p
                    v-for="credit in formattedCreditsPrimary"
                    v-if="creditsPrimary"
                    :key="credit"
                    class="primary-credit credit"
                    v-html="credit"
                />
                <!-- Secondary Credits -->
                <div ref="secondary" class="additional-credits">
                    <p
                        v-for="credit in formattedCreditsSecondary"
                        v-if="creditsSecondary"
                        :key="credit"
                        class="credit"
                        v-html="credit"
                    />
                </div>
            </div>
            <!-- Date -->
            <time v-if="isNews" class="date" v-html="formattedDate" />
        </div>
    </nuxt-link>
</template>

<script>
// Helpers
import { formatDate } from "@/utils/tools"
// Components
import NuxtLink from "@/components/global/NuxtLink"
import WpImage from "@/components/global/WpImage"
// Assets
import SvgButtonPlay from "@/assets/svgs/button-play.svg"
import SvgLogoA52Color from "@/assets/svgs/company-logos/logo-a52-color.svg"
import SvgLogoA52 from "@/assets/svgs/company-logos/logo-a52.svg"
import SvgLogoElastic from "@/assets/svgs/company-logos/logo-elastic.svg"
import SvgLogoIndestrucible from "@/assets/svgs/company-logos/logo-indestrucible.svg"
import SvgLogoJax from "@/assets/svgs/company-logos/logo-jax.svg"
import SvgLogoRpsg from "@/assets/svgs/company-logos/logo-rpsg.svg"

export default {
    components: {
        NuxtLink,
        WpImage,
        SvgButtonPlay,
        SvgLogoA52Color,
        SvgLogoA52,
        SvgLogoElastic,
        SvgLogoIndestrucible,
        SvgLogoJax,
        SvgLogoRpsg
    },
    props: {
        isNews: {
            type: Boolean,
            default: false
        },
        hasHover: {
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
        creditsPrimary: {
            type: String,
            default: ""
        },
        creditsSecondary: {
            type: String,
            default: ""
        },
        logoNames: {
            type: Array,
            default: () => []
        },
        date: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            imageTranslateValue: "",
            secondaryCreditsHeight: ""
        }
    },
    computed: {
        classes() {
            return [
                "block-featured",
                { "is-news": this.isNews },
                { "has-hover": this.hasHover }
            ]
        },
        metaStyle() {
            return {
                "margin-bottom": `-${this.secondaryCreditsHeight}`
            }
        },
        formattedDate() {
            return formatDate(this.date)
        },
        formattedCreditsPrimary() {
            return this.creditsPrimary.split(/(?:\r\n|\r|\n)/g)
        },
        formattedCreditsSecondary() {
            return this.creditsSecondary.split(/(?:\r\n|\r|\n)/g)
        }
    },
    mounted() {
        if (this.creditsPrimary) {
            // Get height of block-text + padding to find how much to translate image on hover
            this.imageTranslateValue =
                this.$refs.meta.clientHeight + 100 + "px"
            // Get height of additional-credits to determine where to place meta so that
            // primary credits sit in the correct place before hover
            this.secondaryCreditsHeight =
                this.$refs.secondary.clientHeight + "px"
        }
    },
    methods: {
        startHover() {
            if (this.creditsPrimary) {
                // Move image up the height of meta
                this.$el.querySelector(
                    ".media"
                ).style.transform = `translateY(-${this.imageTranslateValue})`
            }
        },
        resetHover() {
            if (this.creditsPrimary) {
                // Return the image to its starting position
                this.$el.querySelector(".media").style.transform = "none"
            }
        }
    }
}
</script>

<style lang="scss">
:root {
    --unit-spacer: 17px;
}
.block-featured {
    display: block;
    position: relative;
    height: 720px;
    background-color: var(--color-company);
    overflow: hidden;

    .block-text {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        padding: 50px;
        box-sizing: border-box;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .title {
        position: relative;
        z-index: 30;

        margin: 0 0 0 -3px;
        font-size: 50px;
        font-weight: 300;
        color: var(--color-company);

        transition: color 0.4s $authenticMotion;
    }

    // Play Button
    .play {
        margin-bottom: 10px;
        pointer-events: none;
        // transition: opacity 0.4s $authenticMotion;
    }

    // Logos
    .logos {
        position: relative;
        z-index: 30;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .logo {
        height: 17px;
        width: auto;
        padding: var(--unit-spacer) var(--unit-spacer) 0 0;

        path,
        circle {
            fill: var(--color-company);
            opacity: 1;
        }
    }
    .logo-a52 {
        height: 15px;
    }
    .logo-elastic {
        height: 12px;
    }
    .logo-indestrucible {
        height: 10px;
    }

    // Credits
    .credit {
        font-weight: 300;
        margin: 3px 0;
    }
    .primary-credit {
        font-weight: 400;
        color: var(--color-company);
        transition: color 0.4s $authenticMotion;

        &:first-of-type {
            padding-top: var(--unit-spacer);
        }
    }

    // Hover state required styles
    &.has-hover {
        .play,
        .title,
        .primary-credit,
        .additional-credits {
            position: relative;
        }
        .title,
        .primary-credit {
            z-index: 30;
        }
        .play,
        .additional-credits {
            z-index: 10;
        }
        .block-image {
            .media {
                z-index: 20;
                transition: transform 0.4s $authenticMotion;
            }
        }
        .meta {
            transition: margin-bottom 0.4s $authenticMotion;
        }
    }

    // News styles
    &.is-news {
        background-color: var(--color-black);

        .block-text {
            justify-content: space-between;
        }
        .title {
            font-size: 70px;
        }
        .svg {
            display: none;
        }
    }
    .date {
        color: var(--color-company);
    }

    // Hovers
    @media #{$has-hover} {
        &.has-hover:hover {
            .meta {
                margin-bottom: 0 !important;
            }
            .title,
            .primary-credit {
                color: var(--color-black);
            }
        }
    }
}
</style>
