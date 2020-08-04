<template lang="html">
    <a class="block-contact" :href="`mailto:${email}`" target="_blank">
        <component :is="svgName" :class="`svg ${svgName}`" />
        <div class="panel">
            <split-text class="name" :text="name" separator=" " />
            <p class="title" v-html="title" />
        </div>
    </a>
</template>

<script>
// Helpers
import _kebabCase from "lodash/kebabCase"
// Components
import SvgAnimalDanielleHinde from "@/assets/svgs/animals/animal-danielle-hinde.svg"
import SplitText from "@/components/global/SplitText"

export default {
    components: { SvgAnimalDanielleHinde, SplitText },
    props: {
        name: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            default: ""
        }
    },
    computed: {
        // Starts count when component hasIntersected
        svgName() {
            return `svg-animal-${_kebabCase(this.name)}`
        }
    }
}
</script>

<style lang="scss" scoped>
.block-contact {
    width: 50%;
    height: auto;
    color: var(--color-red);
    padding: 20px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .name {
        font-family: var(--font-secondary);
        color: var(--color-red);
        font-size: 30px;
        font-weight: 500;
        margin: 10px 0;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;

        display: inline-flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: flex-start;
    }

    .svg {
        transform-origin: 80% 80%;
        transition: all 0.2s ease-in-out;
        path {
            transition: all 0.4s ease-in-out;
        }
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            color: var(--color-pink);
            .name {
                color: var(--color-pink);
            }

            .svg {
                transform: rotateZ(8deg);
                path:nth-child(1) {
                    fill: var(--color-pink);
                }
            }
        }
    }

    // Breakpoints
    @media #{$lt-tablet} {
        flex-direction: column;
        .panel {
            text-align: center;
        }
        .name {
            align-items: center;
        }
    }
    @media #{$lt-phone} {
        width: 100%;

        .name {
            font-size: 20px;
        }
        .title {
            font-size: 16px;
        }

        .svg {
            max-width: 150px;
            height: auto;
        }
    }
}
</style>
