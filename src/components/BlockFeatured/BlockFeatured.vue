<template>
    <nuxt-link :class="classes" :to="to">
        <!-- Image -->
        <wp-image
            v-if="image"
            class="block-image"
            :image="image"
            mode="fullbleed"
        >
        </wp-image>

        <!-- Text -->
        <div class="block-text">
            <h3 class="title" v-html="title" />
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
                v-if="credits"
                class="first-credit"
                v-html="formattedCredits[0]"
            />
            <div class="additional-credits spacer">
                <p
                    v-for="credit in formattedCredits.slice(1)"
                    v-if="credits"
                    :key="credit"
                    class="credit"
                    v-html="credit"
                />
            </div>
            <!-- Date -->
            <time v-if="date" class="date" v-html="formattedDate" />
        </div>

        <!-- Background Credits hover state -->
        <div class="credits-play">
            <svg-button-play class="svg play" />
            <h3 class="title spacer" v-html="title" />
            <p
                v-if="credits"
                class="first-credit spacer"
                v-html="formattedCredits[0]"
            />
            <div class="additional-credits">
                <p
                    v-for="credit in formattedCredits.slice(1)"
                    v-if="credits"
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
        logoNames: {
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

    .block-image {
        .media {
            transition: top 0.5s $authenticMotion;
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

        margin: 0 0 10px -3px;
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
        path,
        circle {
            fill: var(--color-company);
            opacity: 1;
        }
    }

    // Credits
    .first-credit {
        margin: 3px 0;
        color: var(--color-company);
        transition: color 0.5s $authenticMotion;
    }
    .additional-credits {
        max-height: 0;
        transition: max-height 0.5s $authenticMotion,
            opacity 0.5s $authenticMotion;
    }
    .credit {
        font-weight: 300;
        margin: 3px 0;
    }
    .spacer {
        opacity: 0;
        pointer-events: none;
    }
    .credits-play {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
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
            .media {
                top: -50%;
            }
            .title,
            .first-credit {
                color: var(--color-black);
            }
            .additional-credits {
                max-height: 200px;
            }
        }
    }
}
</style>
