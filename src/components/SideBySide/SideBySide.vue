<template lang="html">
    <div v-if="!isMobile" class="gallery-side-by-side">
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
                    :aspect-ratio="130"
                />
            </div>
        </div>
        <div class="text">
            <wp-content v-for="(text, i) in texts" :key="text" :html="text" />
        </div>
    </div>
    <div v-else class="gallery-side-by-side">
        <div v-for="(item, i) in items" v-if="items.length" class="mobile-item">
            <wp-image
                v-if="item.image"
                :key="item.image.id"
                :image="item.image"
                :aspect-ratio="130"
            />
            <wp-content :key="item.text" :html="item.text" />
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
        },
        isMobile: {
            type: Boolean,
            default: false
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
    background-color: beige; //DELETE placeholder
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    min-height: var(--unit-100vh);
    max-width: var(--unit-max-width);
    margin: 0 auto;

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
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: auto;
        }
    }

    .text {
        width: 50%;
        padding: 0 var(--unit-gutter);
        box-sizing: border-box;
        font-size: 14px;

        /deep/ .wp-content {
            height: var(--unit-100vh);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            font-size: 25px;
            font-weight: 300;
            max-width: 640px;
            margin: 0 auto;
        }
    }

    .mobile-item {
        display: none;
    }

    // // Breakpoints
    @media #{$lt-tablet} {
        flex-direction: column;
        background-color: beige;

        .wp-content {
            padding: 20px;
            box-sizing: border-box;
            font-size: 14px;
        }

        .text,
        .images {
            display: none;
        }

        .mobile-item {
            display: block;
        }
    }
}
</style>
