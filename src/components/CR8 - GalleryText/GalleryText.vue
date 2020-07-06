<template>
    <div class="gallery-text">
        <!-- Title -->
        <h2 class="title">Our Ecosystem</h2>

        <!-- Subtitle w/ Arrow -->
        <div class="subtitle">
            <span class="subtitle-text">We develop and produce original content for all genres and formats.</span>
            <span class="prompt">
                <span class="prompt-text" >EXPLORE</span>
                <svg-arrow-right class="arrow" />
            </span>
        </div>
        
        <!-- Block Links -->
        <div class="text">
            <nuxt-link
                v-for="(company, index) in companies"
                :key="`${index}-${company.name}`" 
                class="company-link"  
                :to="`/${company.name}`" tag="span"
            >
                <component 
                    :is="`logo-${company.name}`"
                    class="company-logo"
                    @mouseover="set(company)" 
                    @mouseout="set(null)" />
                {{company.text}}
            </nuxt-link>
        </div>

        <!-- Images absolute -->
        <transition
            v-for="(image, index) in images"
            :key="image.id"
            name="fade"
            mode="out-in"
        >
            <wp-image
                v-show="index == activeImage"
                class="image"
                :image="image"
                mode="fullbleed"
            />
        </transition>

        <!-- Bottom Text -->
        <p class="end-text">These diverse talent are connected by a creative singularity.</p>
        <p class="end-text">Together we are <span class="logo">MakeMake</span></p>

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

export default {
    components: { 
        WpImage, NuxtLink, SvgArrowRight, 
        //Company Logos
        LogoRockPaperScissors, LogoElastic, LogoA52, LogoPrimary, LogoJax, LogoIndestructible
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
            if (!company) return this.reset()
            this.company = company
            this.start()
        },
        start() {
            if (!this.timer) {
                this.timer = setInterval( () => {                    
                    return this.activeImage < this.imagesLength
                        ? this.activeImage = this.activeImage + 1 
                        : this.activeImage = 0
                }, 500)
            }
        },
        reset() {
            clearInterval(this.timer)
            this.company = null
            this.activeImage = 0
            this.timer = null
        }
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

    .subtitle {
        display: inline-block;
        cursor: pointer;
        margin-block-end: 1em;
        line-height: 1.5em;
    }
    
    .prompt {
        position: relative;
        // right screen edge offset for arrow
        padding-left: 100px;
    }

    .prompt-text {
        font-size: 14px;
        font-weight: 800;
        opacity: 0;
        transition: opacity 200ms $authenticMotion;

        // center inline style
        position:absolute;
        top: 50%;
        left: 1rem;
        transform: translateY(-55%);
    }

    .arrow {
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translateY(-70%);
        transition: transform 200ms $authenticMotion;
    }

    .text {
        max-width: 1280px;
    }

    .company-link {
        line-height: 1.5em;
    }

    .company-logo {
        padding-right: 0.25rem;
        //centers the logo inside inline style
        height: 35px;
        transform: translateY(18%);
    }

    // Images
    .image {
        position: absolute;
        top: 35%;
        left: 15%;
        right: 15%;
        bottom: 15%;
        margin: auto;
        z-index: 10;
        pointer-events: none;
    }

    // Hover states
    @media #{$has-hover} {
        .subtitle:hover {
            .subtitle-text {
                text-decoration: underline;
            }
            .prompt-text {
                opacity: 1;
            }
            .arrow {
                transform: translateY(-70%) translateX(200%);
            }
        }
        .company-link:hover {
            position: relative;
            z-index: 20;
        }
    }

    // Breakpoints
    @media #{$lt-tablet} {
        // NOTE might want to change font sizes on mobile, no designs provided
    }
    
}

//fade transition effect
.fade-enter-active, .fade-leave-active {
    transition: opacity 200ms $authenticMotion;
}
.fade-enter, .fade-leave-to {
    //prevent complete fade out
    opacity: 0.25;
}

// temporary until logo svg is provided
.logo {
    text-transform: capitalize;
    font-weight: 800;
}
</style>
