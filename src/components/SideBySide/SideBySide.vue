<template lang="html">
    <div class="side-by-side">
        <div class="images">
            <div v-for="(image, i) in images" class="wrapper">
                <wp-image :key="image.id" :image="image" :aspect-ratio="103" />
            </div>
        </div>
        <div class="text">
            <wp-content
                v-for="(text, i) in texts"
                :key="text"
                class="wrapper"
                :html="text"
            />
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

<style lang="scss">
.side-by-side {
    background-color: beige; //DELETE placeholder
    position: relative;
    font-size: 0px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

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
            // border-top: 2px solid red; // DELETE
            height: var(--unit-100vh);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
