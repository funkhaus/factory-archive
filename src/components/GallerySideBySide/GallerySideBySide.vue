<template lang="html">
    <div class="gallery-side-by-side">
        <!-- Mobile  -->
        <div class="gallery-mobile">
            <div
                v-for="(item, i) in items"
                v-if="items.length"
                class="mobile-item"
            >
                <div class="wrapper">
                    <wp-image
                        v-if="item.image"
                        :key="item.image.id"
                        :image="item.image"
                    />
                </div>
                <div class="panel">
                    <wp-content :html="item.text" />
                </div>
            </div>
        </div>
        <!-- Desktop  -->
        <div class="gallery-desktop">
            <div class="images">
                <div
                    v-for="(image, i) in images"
                    v-if="images.length"
                    class="wrapper"
                >
                    <wp-image
                        v-if="image"
                        :key="image.id"
                        :image="image"
                        mode="fullbleed"
                    />
                </div>
            </div>
            <div class="text">
                <div v-for="(text, i) in texts" class="panel">
                    <wp-content :html="text" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WpImage from "@/components/global/WpImage"
import WpContent from "@/components/global/WpContent"

export default {
    components: {
        WpImage,
        WpContent
    },
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        images() {
            let images = []
            this.items.forEach(el => images.push(el.image))
            return images
        },
        texts() {
            let text = []
            this.items.forEach(el => text.push(el.text))
            return text
        }
    }
}
</script>

<style lang="scss" scoped>
.gallery-side-by-side {
    // hide mobile on desktop
    .gallery-mobile {
        display: none;
    }
    .gallery-desktop {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        min-height: var(--unit-100vh);
    }

    .images {
        width: 50%;
        padding: 0 var(--unit-gutter);
        box-sizing: border-box;
        position: relative;

        .wrapper {
            height: var(--unit-100vh);
            position: sticky;
            top: 0px;
        }

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

    .text {
        width: 50%;
        padding: 0 var(--unit-gutter);
        box-sizing: border-box;
        font-size: 14px;

        .panel {
            min-height: var(--unit-100vh);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        /deep/ .wp-content {
            font-size: 25px;
            font-weight: 300;
            max-width: 640px;
            margin: 0 auto;
        }
    }

    // Breakpoints
    @media #{$lt-tablet} {
        .gallery-desktop {
            display: none;
        }

        .gallery-mobile {
            display: block;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            min-height: var(--unit-100vh);
        }

        .wp-content {
            padding: 20px;
            box-sizing: border-box;
            font-size: 14px;
        }
    }
}
</style>
