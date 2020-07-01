<template lang="html">
    <nuxt-link :to="path" class="next-project">
        <wp-image :image="image" />
        <div class="meta">
            <h4>Next Project</h4>
            <div class="credits">
                <!-- <h3 class="title" v-html="title" /> -->
                <split-text class="title" :text="title" />
                <h6>Credit - subtitle</h6>
                <h6>Credit - subtitle</h6>
                <h6>Credit - subtitle</h6>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
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
        // = "" (use split title to get to two lines)
        title: {
            type: String,
            default: ""
        },
        // = "" (use nl2btr and string replacement)
        credits: {
            type: String,
            default: ""
        },
        path: {
            type: String,
            default: ""
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
        display: inline-block;
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
        h6 {
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
            }
        }

        .credits {
            margin: 10px 0;
        }

        h6 {
            margin: 2.5px 0;
            font-size: 12px;
        }
    }

    // Hovers
    // @media #{$has-hover} {
    // }

    // Breakpoints
    @media #{$lt-phone} {
        flex-direction: column;
        .wp-image,
        .meta {
            width: 100%;
        }
    }
}
</style>
