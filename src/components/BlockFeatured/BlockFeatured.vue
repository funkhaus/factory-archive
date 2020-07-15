<template>
    <smart-link
        :class="classes"
        :to="to"
        @mouseover.native="startHover"
        @mouseleave.native="resetHover"
    >
        <!-- Image -->
        <wp-image
            v-if="image && !isNews"
            class="block-image"
            :style="imageStyle"
            :image="image"
            mode="fullbleed"
        />

        <!-- Text -->
        <div class="block-text">
            <!-- Meta -->
            <div ref="meta" :style="metaStyle" class="meta">
                <!-- Play SVG -->
                <svg-button-play v-if="hasHover" class="svg play" />
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
    </smart-link>
</template>

<script>
// Helpers
import { formatDate } from "@/utils/tools"
// Components
import WpImage from "@/components/global/WpImage"
import SmartLink from "@/components/global/SmartLink"
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
        WpImage,
        SmartLink,
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
            secondaryCreditsHeight: "",
            currentMetaPosition: "",
            currentImagePosition: "0"
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
            if (this.hasHover) {
                return {
                    "margin-bottom": this.currentMetaPosition
                }
            }
        },
        imageStyle() {
            if (this.hasHover) {
                return {
                    transform: `translateY(-${this.currentImagePosition})`
                }
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
        if (this.hasHover) {
            // Get height of block-text + padding to find how much to translate image on hover
            this.imageTranslateValue =
                this.$refs.meta.clientHeight + 100 + "px"
            // Get height of additional-credits, set to negative to use with margin-bottom
            this.secondaryCreditsHeight =
                "-" + this.$refs.secondary.clientHeight + "px"
            // Move meta down equivalent of additional-credits height, so that
            // primary credits sit in the correct place before hover
            this.currentMetaPosition = this.secondaryCreditsHeight
        }
    },
    methods: {
        startHover() {
            if (this.hasHover) {
                // Move image up the height of meta
                this.currentImagePosition = this.imageTranslateValue
                // Move meta to its natural position
                this.currentMetaPosition = "0"
            }
        },
        resetHover() {
            if (this.hasHover) {
                // Return image to initial position
                this.currentImagePosition = "0"
                // Return meta to initial, lowered position
                this.currentMetaPosition = this.secondaryCreditsHeight
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
    .additional-credits {
        opacity: 0;
        transition: opacity 0.4s $authenticMotion;
    }
    // Play Button
    .play {
        margin-bottom: 10px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.4s $authenticMotion;
    }

    // Hover state required styles
    &.has-hover {
        .play,
        .title,
        .primary-credit,
        .additional-credits,
        .block-image {
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
            z-index: 20;
            height: 100%;
            transition: transform 0.4s $authenticMotion;
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
            .title,
            .primary-credit {
                color: var(--color-black);
            }
            .play,
            .additional-credits {
                opacity: 1;
            }
        }
    }
}
</style>
