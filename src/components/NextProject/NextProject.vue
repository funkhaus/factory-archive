<template lang="html">
    <nuxt-link :to="to" class="next-project">
        <wp-image :image="image" mode="fullbleed" />
        <div class="meta">
            <div class="hover-effect" />

            <h4>Next Project</h4>
            <div class="credits">
                <split-text class="title" :text="title" element="h2" />
                <ul>
                    <li
                        v-for="credit in formattedCredits"
                        v-if="formattedCredits.length"
                        class="credit"
                        v-html="credit"
                    />
                </ul>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
// Helpers
import { nl2br } from "@/utils/tools"

// Components
import WpImage from "@/components/global/WpImage"
import NuxtLink from "@/components/global/NuxtLink"
import SplitText from "@/components/global/SplitText"

export default {
    components: {
        WpImage,
        NuxtLink,
        SplitText
    },
    props: {
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
        to: {
            type: String,
            default: ""
        }
    },
    computed: {
        formattedCredits() {
            // replaces all instances of '-' with '—' and new lines with <br>s
            return nl2br(this.credits.replace(new RegExp("-", "g"), "—")).split(
                "<br>"
            )
        }
    }
}
</script>

<style lang="scss" scoped>
.next-project {
    background-color: var(--color-black);
    display: flex;
    flex-direction: row;
    padding: var(--unit-gutter);
    box-sizing: border-box;
    height: 625px;

    .wp-image {
        width: 50%;
        position: relative;
    }

    .meta {
        width: 50%;
        padding: 50px;
        box-sizing: border-box;
        color: var(--color-company);
        position: relative;
        z-index: 20;

        display: inline-flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: flex-start;

        .hover-effect {
            position: absolute;
            left: 0;
            top: 0;
            width: 0%;
            height: 100%;
            z-index: 10;
            background-color: var(--color-company);
            transition: all 0.4s ease-in-out;
        }

        h4,
        .credit {
            margin: 0;
            font-weight: 300;
            transition: color 0.4s ease-in-out 0.2s;
        }

        h4 {
            font-size: 25px;
            font-weight: 300;
        }

        .title {
            position: relative;
            font-size: 30px;
            font-weight: 300;
            margin: 20px 0;
            display: block;
            transition: all 0.4s ease-in-out 0.2s;

            /deep/ .line {
                display: block;
                font-weight: 300;
            }
        }

        .credits {
            margin: 10px 0;
        }

        ul {
            padding: 0;
            margin: 0;
            list-style: none;
        }

        .credit {
            position: relative;
            margin: 2.5px 0;
            font-size: 14px;
        }
    }

    // Hovers
    @media #{$has-hover} {
        .meta:hover {
            h4,
            .credit,
            .title {
                color: var(--color-black);
                z-index: 20;
            }

            .hover-effect {
                width: 100%;
            }
        }
    }

    // Breakpoints
    @media #{$lt-phone} {
        flex-direction: column;
        .wp-image,
        .meta {
            width: 100%;
            padding: 20px 0;
        }

        .wp-image {
            min-height: 250px;
        }
    }
}
</style>
