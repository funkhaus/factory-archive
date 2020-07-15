<template lang="html">
    <div class="about-slideshow">
        <div class="slideshow-panel">
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

        <div class="text-panel">
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
    background-color: var(--color-company);
    min-height: var(--unit-100vh);
    display: flex;
    flex-direction: row;

    .slideshow-panel {
        position: relative;
        width: 50%;
        padding: 50px 60px;
        box-sizing: border-box;

        .slideshow {
            height: 100%;
            width: 100%;
        }
    }

    .text-panel {
        width: 50%;
        padding: 0 65px;
        box-sizing: border-box;
        font-size: 25px;
        font-weight: 300;
        overflow-y: scroll;
        max-width: 640px;
        margin-right: auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    // Breakpoints
    @media #{$lt-tablet} {
        flex-direction: column;
        height: auto;

        .slideshow-panel {
            width: 100%;
            height: 100%;
            padding: 15px 15px 0;

            .slideshow {
                min-height: 50vh;
            }
        }

        .text-panel {
            width: 100%;
            padding: 0 15px 15px;
            font-size: 20px;
            margin-left: auto;

            justify-content: flex-start;
        }

        /deep/ .wp-content {
            padding: 20px;
            p:first-of-type {
                margin-top: 0;
            }
        }
    }
}
</style>
