<template lang="html">
    <nuxt-link :to="path" class="next-project">
        <wp-image :image="image" mode="fullbleed" />
        <div class="meta">
            <h4>Next Project</h4>
            <div class="credits">
                <split-text class="title" :text="title" />
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
import { nl2br } from "@/utils/tools";

// Components
import WpImage from "@/components/global/WpImage";
import NuxtLink from "@/components/global/NuxtLink";
import SplitText from "@/components/global/SplitText";

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
        path: {
            type: String,
            default: ""
        }
    },
    computed: {
        formattedCredits() {
            return nl2br(this.credits).split("<br>");
        }
    }
};
</script>

<style lang="scss" scoped>
.next-project {
    background-color: var(--color-black); //placeholder
    display: flex;
    flex-direction: row;

    .wp-image {
        width: 50%;
        position: relative;
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
        align-content: stretch;
        align-items: flex-start;

        h3,
        h4,
        p {
            margin: 0;
            font-weight: 300;
        }

        h4 {
            font-size: 24px;
        }

        /deep/ .title {
            font-size: 32px;
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

        p {
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
