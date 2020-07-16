<template lang="html">
    <nuxt-link :to="to" class="next-project">
        <wp-image :image="image" mode="fullbleed">
            <h4 class="section-title">Next Project</h4>
        </wp-image>
        <div class="meta">
            <div class="hover-panel" />

            <h4 class="section-title">Next Project</h4>
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
        .section-title {
            display: none;
        }
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

        .hover-panel {
            position: absolute;
            left: 0;
            top: 0;
            width: 0%;
            // width: 25%; //remove
            height: 100%;
            z-index: 10;
            background-color: var(--color-company);
            transition: width 0.4s ease-in-out;
        }

        .section-title,
        .credit {
            position: relative;
            z-index: 20;
            margin: 0;
            font-weight: 300;
            transition: color 0.4s ease-in-out 0.3s;
        }

        .section-title {
            font-size: 25px;
            font-weight: 300;
        }

        .title {
            position: relative;
            z-index: 20;
            font-size: 30px;
            font-weight: 300;
            margin: 20px 0;
            display: block;
            transition: color 0.4s ease-in-out 0.3s;

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
            margin: 2.5px 0;
            font-size: 14px;
        }
    }

    // Hovers
    @media #{$has-hover} {
        .meta:hover {
            .section-title,
            .credit,
            .title {
                color: var(--color-black);
                transition: color 0.4s ease-out;
            }

            .hover-panel {
                width: 100%;
            }
        }
    }

    // Breakpoints
    @media #{$lt-phone} {
        flex-direction: column;
        padding: 20px 15px;
        height: auto;
        .wp-image,
        .meta {
            width: 100%;
            padding: 20px 0;
        }

        .meta {
            padding: 15px 10px 0 10px;
            .section-title {
                display: none;
            }
            .title {
                margin: 0 0 10px;
            }
            .credits {
                margin: 0;
            }
            .credit {
                font-size: 12px;
            }
        }

        .wp-image {
            min-height: 250px;
            .section-title {
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 20;
                padding: 15px 10px;
                margin: 0;
                font-size: 20px;
                font-weight: 300;
                color: var(--color-company);
            }
        }
    }
}
</style>
