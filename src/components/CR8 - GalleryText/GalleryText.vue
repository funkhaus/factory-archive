<template>
    <div class="gallery-text">
        <!-- Title -->
        <h2 class="title">Our Ecosystem</h2>

        <!-- Subtitle w/ Arrow -->
        <div class="subtitle">
            <span class="subtitle-text">We develop and produce original content for all genres and formats.</span>
            <span class="prompt">
                <span class="text" >explore</span>
                <svg-arrow-right class="arrow" />
            </span>
        </div>
        
        <!-- Block Links -->
        <div class="text-block">
            <span
                v-for="company in companies"
                :key="company.name"
            >
                <nuxt-link 
                    class="company-link" 
                    :to="`/${company.name}`"
                    @mouseover.native="set(company)" 
                    @mouseleave.native="reset()"
                >
                    <component 
                        :is="`logo-${company.name}`"
                        class="company-logo"
                        :class="`is-${company.name}`"
                    />
                </nuxt-link>
                <span class="text">{{company.text}} </span>
            </span>
        </div>

        <!-- Images absolute -->
        <transition-group
            v-show="images.length > 0"
            class="transition-block"
            name="fade"
            mode="in-out"
        >
            <wp-image
                v-for="(image, index) in images"
                :key="image.id"
                v-show="index == activeImage"
                class="image"
                :image="image"
                mode="fullbleed"
            />
        </transition-group>
        

        <!-- Bottom Text -->
        <p class="end-text">These diverse talent are connected by a creative singularity.</p>
        <p class="end-text">Together we are <logo-makemake class="company-logo is-makemake" /></p>

    </div>
</template>

<script>
import WpImage from "@/components/global/WpImage"
import NuxtLink from "@/components/global/NuxtLink"
import SvgArrowRight from "@/assets/svgs/arrow-right.svg"

// Company Logos
import LogoRockPaperScissors from '@/assets/svgs/companies/logo-rock-paper-scissors.svg'
import LogoElastic from '@/assets/svgs/companies/logo-elastic.svg'
import LogoA52 from '@/assets/svgs/companies/logo-a52.svg'
import LogoPrimary from '@/assets/svgs/companies/logo-primary.svg'
import LogoJax from '@/assets/svgs/companies/logo-jax.svg'
import LogoIndestructible from '@/assets/svgs/companies/logo-indestructible.svg'

import LogoMakemake from '@/assets/svgs/companies/logo-makemake.svg'

export default {
    components: { 
        WpImage, 
        NuxtLink, 
        SvgArrowRight, 
        //Company Logos
        LogoRockPaperScissors, 
        LogoElastic, 
        LogoA52, 
        LogoPrimary, 
        LogoJax, 
        LogoIndestructible, 
        LogoMakemake
    },
    props: {
        companies: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            company: null,
            timer: null,
            activeImage: 0
        }
    },
    computed: {
        images() {
            return this.company ? this.company.images : []
        },
        imagesLength () {
            return this.images.length
        }
    },
    methods: {
        set(company) {
            if (this.company) return
            this.company = company
            this.start()
        },
        start() {
            clearInterval(this.timer)
            this.timer = setInterval( () => {
                if (this.activeImage < this.imagesLength) {
                    this.activeImage++
                } else {
                    this.activeImage = 0
                }
            }, 800)
        },
        reset() {
            clearInterval(this.timer)
            this.company = null
            this.activeImage = 0
            this.timer = null
        }
    },
    destroyed() {
        clearInterval(this.timer)
    }
}
</script>

<style lang="scss" scoped>
.gallery-text {
    position: relative;
    z-index: 0;
    background-color: black;
    padding: var(--unit-gutter);
    box-sizing: border-box;

    font-size: 33px;
    font-weight: 300;
    color: #d8d9be;

    .title {
        font-size: 33px;
        font-weight: 300;
    }

    .subtitle {
        display: inline-block;
        cursor: pointer;
        margin-block-end: 1em;
        line-height: 1.5em;
        .subtitle-text {
            border-bottom: 1px solid transparent;
            transition: border 400ms $authenticMotion;
        }
    }
    
    .prompt {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        margin-left: 8px;

        .text {
            font-size: 12px;
            font-weight: 600;
            opacity: 0;
            transition: opacity 400ms $authenticMotion;
            vertical-align: middle;
            text-transform: uppercase;
        }

        .arrow {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            transition: transform 400ms $authenticMotion;
        }
    }

    .text-block {
        max-width: 1280px;
        line-height: 1.5em;
    }

    .company-logo {
        padding: 0 4px;
        vertical-align: middle;
        position: relative;
        top: -2px;
        &.is-indestructible {
            top: -4px;
        }
        &.is-makemake {
            max-width: 240px;
            top: -4px;
        }
    }

    // Images
    .transition-block {
        position: absolute;
        top: 35%;
        left: 15%;
        right: 15%;
        bottom: 15%;
        margin: auto;
        z-index: 10;
        pointer-events: none;
        background-color: black;
    }

    // Hover states
    @media #{$has-hover} {
        .subtitle:hover {
            .subtitle-text {
                border-color: #d8d9be;
            }
            .prompt {
                .text {
                    opacity: 1;
                }
                .arrow {
                    transform: translateY(-50%) translateX(170%);
                }
            }
        }
        .company-link:hover {
            position: relative;
            z-index: 20;
            ~ .text {
                position: relative;
                z-index: 20;    
            }
        }
    }

    // Breakpoints
    @media #{$lt-tablet} {
        // NOTE might want to change font sizes on mobile, no designs provided
    }
    
}

//fade transition effect
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s $authenticMotion;
}

</style>
