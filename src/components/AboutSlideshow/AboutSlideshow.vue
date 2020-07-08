<template lang="html">
    <div class="about-slideshow">
        <div class="container">
            <slideshow :slides="slides" next-transition-name="fade">
                <wp-image
                    slot="slide"
                    slot-scope="{ slide }"
                    class="slide-image"
                    :image="slide"
                    :aspect-ratio="1.3"
                />
            </slideshow>
        </div>

        <wp-content :html="text" />
    </div>
</template>

<script>
import WpImage from "@/components/global/WpImage"
import WpContent from "@/components/global/WpContent"
import Slideshow from "@/components/global/Slideshow"

export default {
    components: {
        WpImage,
        WpContent,
        Slideshow
    },
    props: {
        slides: {
            type: Array,
            default: () => []
        },
        text: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss">
.about-slideshow {
    display: flex;
    flex-direction: row;
    background-color: beige;

    .container {
        width: 50%;
        padding: 50px;
        box-sizing: border-box;
        position: relative;
    }

    .slideshow {
        height: 100%;
        width: 100%;
    }

    .wp-content {
        width: 50%;
        height: 100%;
        padding: 60px;
        box-sizing: border-box;
        font-size: 25px;
        font-weight: 300;

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    // Breakpoints
    @media #{$lt-tablet} {
        flex-direction: column;

        .container {
            width: 100%;
            height: 100%;
        }

        .slideshow,
        .wp-content {
            // width: 100%;
        }

        .wp-content {
            width: 100%;
            padding: 20px;
            font-size: 14px;
        }
    }
}
</style>
