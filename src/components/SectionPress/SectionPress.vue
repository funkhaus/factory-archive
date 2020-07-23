<template lang="html">
    <section class="section-press">
        <h2 class="title" v-html="title" />

        <ul class="press">
            <li v-for="(item, i) in allItems" class="item">
                <split-text v-if="item.title" :text="item.title" element="p" />
                <component
                    :is="item.svg"
                    v-else-if="item.svg"
                    :class="`logo ${item.svg}`"
                />
                <!-- TODO: make class kebabCase -->
            </li>
        </ul>
    </section>
</template>

<script>
import _kebabCase from "lodash/kebabCase"

//  Components
import SplitText from "@/components/global/SplitText"
import SvgFireLady from "@/assets/svgs/illustrations/fire-lady.svg"
import SvgChildishGambino from "@/assets/svgs/illustrations/childish-gambino.svg"
import SvgRollerGal from "@/assets/svgs/illustrations/roller-gal.svg"

export default {
    components: {
        SplitText,
        SvgChildishGambino,
        SvgFireLady,
        SvgRollerGal
    },
    props: {
        title: {
            type: String,
            default: "Recent Press"
        },
        items: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            allItems: this.items
        }
    },
    computed: {
        AddSvgsToItems() {
            // gets middle index
            const middleIndex = Math.floor(this.items.length / 2)
            console.log("middleIndex", middleIndex)
            // // adds to middle
            this.allItems.splice(middleIndex, 0, { svg: "SvgChildishGambino" })

            // adds to start
            this.allItems.unshift({ svg: "SvgFireLady" })

            // adds to end
            this.allItems.push({ svg: "SvgRollerGal" })
            console.log("items", this.allItems)

            return this.allItems
        }
    }
}
</script>

<style lang="scss">
.section-press {
    position: relative;
    color: var(--color-pink);
    background-color: var(--color-black);
    padding: 60px 50px;
    box-sizing: border-box;
    .title {
        font-size: 75px;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--color-black);
        white-space: nowrap;
        -webkit-text-stroke: 1.5px var(--color-pink);
        margin: 0;
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translate(-50%);
    }

    .press {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        .item {
            font-size: 20px;
            font-weight: 500;
        }

        .line {
            display: block;
            margin: 10px 0;
        }
        .line-1 {
            font-weight: 500;
        }
        .line-2 {
            font-weight: 400;
        }
    }

    // Breakpoints
    // only position absolute svgs gt-tablet
    @media #{"only screen and (min-width: 1024px)"} {
        .SvgFireLady,
        .svg-fire-lady {
            position: absolute;
            right: -40px;
            top: 40px;
        }

        .SvgRollerGal,
        .SvgRollerGal {
            position: absolute;
            bottom: 0;
            right: 0;
        }

        .SvgChildishGambino,
        .svg-childish-gambino {
            position: absolute;
            top: 50%;
            left: 40px;
            transform: translateY(-50%);
        }
    }

    @media #{$lt-phone} {
        padding: 60px 20px;
        .title {
            top: -25px;
            font-size: 30px;
        }

        .press {
            .line-1 {
                font-size: 18px;
            }
            .line-2 {
                font-size: 16px;
            }
        }
    }
}
</style>
