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
        >
        </wp-image>

        <!-- Block Text -->
        <div class="block-text">
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
            <!-- Credits -->
            <p
                v-for="credit in formattedCredits"
                v-if="credits"
                :key="credit"
                class="primary-credit credit"
                v-html="credit"
            />
            <!-- spacer to create space for hover state credits -->
            <div class="additional-credits spacer">
                <p
                    v-for="credit in formattedCreditsSecondary"
                    v-if="creditsSecondary"
                    :key="credit"
                    class="credit"
                    v-html="credit"
                />
            </div>
            <!-- Date -->
            <time v-if="isNews" class="date" v-html="formattedDate" />
        </div>

        <!-- Credits - hover state -->
        <div ref="hover" class="credits-hover">
            <svg-button-play class="svg play" />
            <!-- Spacer because visible title & primary credits are in Block Text above -->
            <h3 class="title spacer" v-html="title" />
            <p
                v-for="credit in formattedCredits"
                v-if="credits"
                :key="credit"
                class="primary-credit credit spacer"
                v-html="credit"
            />
            <!-- Secondary Credits -->
            <div ref="secondary" class="additional-credits hover-state">
                <p
                    v-for="credit in formattedCreditsSecondary"
                    v-if="creditsSecondary"
                    :key="credit"
                    class="credit"
                    v-html="credit"
                />
            </div>
        </div>
    </nuxt-link>
</template>

<script>
// Helpers
import { formatDate } from "@/utils/tools"
import { nl2br } from "@/utils/tools"
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
        credits: {
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
            creditsHeight: ""
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
        formattedDate() {
            return formatDate(this.date)
        },
        formattedCredits() {
            return nl2br(this.credits).split("<br>")
        },
        formattedCreditsSecondary() {
            return nl2br(this.creditsSecondary).split("<br>")
        }
    },
    mounted() {
        if (this.credits) {
            // Get height of credits block to find how much to translate image
            this.imageTranslateValue = this.$refs.hover.clientHeight + "px"
            // Get height of additional credits to set the spacer height on hover
            this.creditsHeight = this.$refs.secondary.clientHeight + "px"
        }
    },
    methods: {
        startHover() {
            if (this.credits) {
                // Move image up the height of the credits block
                this.$el.querySelector(
                    ".media"
                ).style.transform = `translateY(-${this.imageTranslateValue})`
                // Animate height of credits spacer to match visible credits
                this.$el.querySelector(
                    ".additional-credits"
                ).style.maxHeight = `${this.creditsHeight}`
                // Animate background hover state credits up from translated position
                this.$refs.secondary.style.transform = "none"
            }
        },
        resetHover() {
            if (this.credits) {
                this.$el.querySelector(".media").style.transform = "none"
                this.$el.querySelector(
                    ".additional-credits.spacer"
                ).style.maxHeight = "0"
                this.$refs.secondary.style.transform = "translateY(100%)"
            }
        }
    }
}
</script>

<style lang="scss">
.block-featured {
    display: block;
    position: relative;
    height: 720px;
    background-color: var(--color-company);
    overflow: hidden;

    .block-image {
        .media {
            transition: transform 0.5s $authenticMotion;
        }
    }
    .block-text {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 10;

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

        transition: color 0.5s $authenticMotion;
    }

    // Play Button
    .play {
        margin-bottom: 10px;
        pointer-events: none;
        transition: opacity 0.5s $authenticMotion;
    }

    // Logos
    .logos {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .logo {
        height: 17px;
        padding: var(--unit-spacer) var(--unit-spacer) 0 0;

        path,
        circle {
            fill: var(--color-company);
            opacity: 1;
        }
    }
    .logo-jax {
        height: 17px;
    }
    .logo-rpsg {
        height: 17px;
    }
    .logo-a52 {
        height: 15px;
    }
    .logo-a52-color {
        height: 17px;
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
        transition: color 0.5s $authenticMotion;

        &:first-of-type {
            padding-top: var(--unit-spacer);
        }
    }
    .additional-credits.spacer {
        max-height: 0;
        transition: max-height 0.5s $authenticMotion;
    }
    .additional-credits.hover-state {
        transform: translateY(100%);
        transition: transform 0.5s $authenticMotion;
    }
    // Spacer used to occupy same amount of space so background lines up with foreground
    .spacer {
        opacity: 0;
        pointer-events: none;
    }
    .credits-hover {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 5;

        padding: 50px;
        box-sizing: border-box;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
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
        }
    }
}
</style>
