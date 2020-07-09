<template lang="html">
    <nuxt-link :to="to" class="next-project">
        <!-- Question: How should i use aspect ratio here? -->
        <!-- <wp-image :image="image" :aspect-ratio="72" /> -->
        <wp-image :image="image" mode="fullbleed" />
        <div class="meta">
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

        // Use with aspect ratio?
        // display: inline-flex;
        // flex-direction: column;
        // justify-content: center;
    }

    .meta {
        width: 50%;
        padding: 20px;
        box-sizing: border-box;
        color: var(--color-company);

        display: inline-flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: flex-start;

        h4,
        li {
            margin: 0;
            font-weight: 300;
        }

        h4 {
            font-size: 25px;
            font-weight: 300;
        }

        .title {
            font-size: 30px;
            font-weight: 300;
            margin: 20px 0;
            display: block;

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

        li {
            margin: 2.5px 0;
            font-size: 12px;
        }
    }

    // Breakpoints
    @media #{$lt-phone} {
        flex-direction: column;
        .wp-image,
        .meta {
            width: 100%;
        }

        .wp-image {
            min-height: 250px;
        }
    }
}
</style>
