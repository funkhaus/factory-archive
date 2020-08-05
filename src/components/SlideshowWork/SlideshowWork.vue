<template lang="html">
    <slideshow
        ref="slideshow"
        class="slideshow-work"
        :slides="images"
        :swipe-events="true"
        @update:activeIndex="updateIndex"
    >
        <wp-image
            v-if="slide.sourceUrl"
            slot="slide"
            slot-scope="{ slide }"
            class="slide-image"
            :image="slide"
            mode="fullbleed"
        />

        <icon-arrow slot="nav-next" />
        <icon-arrow slot="nav-prev" />

        <div slot="after" class="dots">
            <div
                v-for="(dot, i) in images"
                :class="['dot', { active: i == activeIndex }]"
                @click="goTo(i)"
            />
        </div>
    </slideshow>
</template>

<script>
// Components
import Slideshow from "@/components/global/Slideshow"
import WpImage from "@/components/global/WpImage"
import IconArrow from "@/assets/svgs/icon-arrow.svg"

export default {
    components: { Slideshow, WpImage, IconArrow },
    props: {
        images: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            activeIndex: 0
        }
    },
    computed: {},
    methods: {
        updateIndex(i) {
            this.activeIndex = i
        },
        goTo(i) {
            this.$refs.slideshow.goToSlide(i)
        }
    }
}
</script>

<style lang="scss" scoped>
.slideshow-work {
    min-height: 300px;
    height: var(--unit-100vh);

    /deep/ .nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100;
        cursor: pointer;
        background: none;
        &:focus {
            outline: none;
        }

        &.prev {
            left: 30px;
        }
        &.next {
            right: 30px;
            svg {
                transform: rotate(180deg);
            }
        }

        svg {
            width: 30px;
            height: auto;
            path {
                fill: var(--color-grey);
                transition: fill 0.4s ease-in-out;
            }
        }
    }

    /deep/ .slide {
        width: unset;
        height: unset;
        top: 100px;
        left: 100px;
        right: 100px;
        bottom: 100px;
    }

    .dots {
        position: absolute;
        bottom: 70px;
        left: 50%;
        z-index: 100;
        transform: translateX(-50%);
        width: 100%;
        text-align: center;

        .dot {
            display: inline-block;
            height: 8px;
            width: 8px;
            border-radius: 50%;
            background-color: var(--color-orange);
            opacity: 0.25;
            margin: 5px;
            transition: opacity 0.4s ease-in-out;
            cursor: pointer;

            &.active {
                opacity: 1;
            }
        }
    }

    // Hovers
    @media #{$has-hover} {
        /deep/ .nav:hover svg path {
            fill: var(--color-orange);
        }
        .dot:hover {
            opacity: 1;
        }
    }
    // Breakpoints
    @media #{$lt-phone} {
        /deep/ .slide {
            left: 20px;
            right: 20px;
        }
        /deep/ .nav {
            display: none;
        }
    }
}
</style>
