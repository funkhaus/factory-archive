<template lang="html">
    <div class="about-awards">
        <div class="image-panel">
            <wp-image :image="image" mode="fullbleed" />
        </div>
        <div class="text-panel">
            <h4 class="title" v-html="'Awards'" />
            <div class="awards">
                <div v-for="(award, i) in awards" class="award">
                    <div class="wrapper">
                        <component
                            :is="`svg-award-${award.slug}`"
                            class="logo"
                        />
                    </div>

                    <count-up
                        class="count"
                        element="span"
                        :to="award.total"
                        :start-count="startCount"
                        :duration="2000"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//  Components
import WpImage from "@/components/global/WpImage"
import CountUp from "@/components/global/CountUp"
import SvgAwardLogoAice from "@/assets/svgs/awards/logo-aice.svg"
import SvgAwardLogoAicp from "@/assets/svgs/awards/logo-aicp.svg"

export default {
    components: {
        WpImage,
        SvgAwardLogoAice,
        SvgAwardLogoAicp,
        CountUp
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
    },
    // NOTE: Using this to simulate in-view boolean bc count-up only starts when start-count prop changes
    data() {
        return {
            startCount: false
        }
    },
    mounted() {
        // simulating in-view
        setTimeout(() => {
            this.startCount = true
        }, 1200)
    }
}
</script>

<style lang="scss" scoped>
.about-awards {
    display: flex;
    flex-direction: row;
    background-color: var(--color-company);
    height: var(--unit-100vh);
    padding: 20px;
    box-sizing: border-box;

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
        .title {
            text-align: left;
            font-size: 50px;
            font-weight: 300;
            margin: 50px 0;
            padding: 0 35px;
            color: var(--color-black);
        }
    }

    .awards {
        width: 100%;
        max-width: 550px;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        align-content: flex-start;
    }
    .award {
        padding: 15px;
        box-sizing: border-box;
        width: 25%;
        .count {
            display: block;
            font-weight: 300;
            font-size: 25px;
            color: var(--color-black);
            margin-top: 10px;
        }
        .wrapper {
            position: relative;
            display: inline-block;
            height: 80px;
            width: 80px;
            .logo {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
                * {
                    fill: var(--color-black);
                }
            }
        }
    }

    // Breakpoints
    @media #{$lt-tablet} {
        .text-panel {
            padding: 0 20px;
        }
        .award {
            width: 33.33%;
        }
    }
    @media #{$lt-phone} {
        flex-direction: column;
        min-height: 100vh;
        height: auto;

        .image-panel,
        .text-panel {
            width: 100%;
            height: 100%;
        }
        .image-panel {
            min-height: 50vh;
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

        .text-panel {
            padding: 30px 0;
            .title {
                margin: 0 0 30px 0;
                font-size: 40px;
            }
        }

        .awards {
            margin-left: auto;
        }
        .award {
            width: 50%;
        }
    }
}
</style>
