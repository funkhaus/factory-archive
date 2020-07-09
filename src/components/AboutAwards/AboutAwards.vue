<template lang="html">
    <div class="about-awards">
        <div class="image-panel">
            <wp-image :image="image" mode="fullbleed" />
        </div>
        <div class="text-panel">
            <h4 v-html="'Awards'" />
            <div class="awards">
                <div v-for="(award, i) in awards" class="award">
                    <div class="wrapper">
                        <component
                            :is="`svg-award-${award.slug}`"
                            :key="award.slug"
                            class="logo"
                        />
                    </div>
                    <span>{{ award.total }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//  Components
import WpImage from "@/components/global/WpImage"
import SvgAwardAice from "@/assets/svgs/awards/aice.svg"
import SvgAwardAicp from "@/assets/svgs/awards/aicp.svg"

export default {
    components: {
        WpImage,
        SvgAwardAice,
        SvgAwardAicp
    },
    props: {
        image: {
            type: Object,
            default: () => {}
        },
        awards: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.about-awards {
    display: flex;
    flex-direction: row;
    background-color: beige; // DELETE
    height: var(--unit-100vh);
    // padding: 20px;
    // box-sizing: border-box;

    .image-panel,
    .text-panel {
        width: 50%;
        height: 100%;
        position: relative;
    }

    .image-panel {
        /deep/ .wp-image {
            position: absolute;
            top: 100px;
            right: 0px;
            left: 0px;
            bottom: 100px;
            width: 100%;
            height: auto;
        }
    }

    .text-panel {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 0 var(--unit-gutter);
        box-sizing: border-box;

        h4 {
            text-align: left;
            font-size: 50px;
            font-weight: 300;
            margin: 50px 0;
        }
    }

    .awards {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        // align-content: flex-start;
    }

    .award {
        span {
            display: block;
            font-weight: 300;
            font-size: 25px;
        }
        .wrapper {
            position: relative;
            display: inline-block;
            height: 100px;
            width: 100px;

            .logo {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
                padding: 10px;
                box-sizing: border-box;
                * {
                    fill: var(--color-black);
                }
            }
        }
    }

    // Breakpoints
    @media #{$lt-tablet} {
        flex-direction: column;

        .image-panel,
        .text-panel {
            width: 100%;
            height: 100%;
        }

        .image-panel {
            /deep/ .wp-image {
                position: absolute;
                top: 0px;
                right: 0px;
                left: 0px;
                bottom: 0px;
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>
