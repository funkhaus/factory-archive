<template lang="html">
    <div class="about-slideshow">
        <div class="container">
            <slideshow :slides="slides" next-transition-name="fade">
                <wp-image
                    slot="slide"
                    slot-scope="{ slide }"
                    class="slide-image"
                    :image="slide"
                    mode="fullbleed"
                />
            </slideshow>
        </div>

        <div class="panel">
            <wp-content :html="text" />
        </div>
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
    height: var(--unit-100vh);

    .container {
        width: 50%;
        padding: 50px;
        box-sizing: border-box;
        position: relative;

        .slideshow {
            height: 100%;
            width: 100%;
        }
    }

    .panel {
        width: 50%;
        height: 100%;
        padding: 0 60px;
        box-sizing: border-box;
        font-size: 25px;
        font-weight: 300;
        overflow-y: scroll;

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
            padding: 20px;
        }

        .panel {
            width: 100%;
            padding: 20px;
            font-size: 14px;

            justify-content: flex-start;
        }
    }
}
</style>
