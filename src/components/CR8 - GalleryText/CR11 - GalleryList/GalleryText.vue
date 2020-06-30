<template>
    <div class="gallery-text">
        <!-- Title -->
        <p class="title">Our Ecosystem</p>

        <!-- Subtitle w/ Arrow -->
        <p class="subtitle">
            <span class="subtitle-text">We develop and produce original content for all genres and formats.</span>
            <span class="prompt">
                <p class="prompt-text">EXPLORE</p>
                <span class="arrow">Arrow</span>
            </span>
        </p>

        <!-- Block Links -->
        <nuxt-link
            v-for="(brand, index) in brands"
            :key="index" 
            class="brand-link"
            @mouseover.native="set(brand.name)" 
            @mouseout.native="set(null)"  
            :to="`/${brand.name}`" tag="span"
        >
            <span class="logo">{{brand.name}} </span>{{brand.text}}
        </nuxt-link>

        <!-- Images absolute -->
        <wp-image
            v-for="(image, index) in images"
            :key="`image-${index}`"
            class="image"
            :class="{'is-active': index == activeImage}"
            :image="image"
            mode="fullbleed"
        />

        <!-- Bottom Text -->
        <p class="end-text">These diverse talent are connected by a creative singularity.</p>
        <p class="end-text">Together we are <span class="logo">MakeMake</span></p>
    </div>
</template>

<script>
import WpImage from "@/components/global/WpImage"
import NuxtLink from "@/components/global/NuxtLink"

export default {
    components: { WpImage, NuxtLink },
    props: {
        rpsImages: {
            type: Array,
            default: () => []
        },
        elasticImages: {
            type: Array,
            default: () => []
        },
        primaryImages: {
            type: Array,
            default: () => []
        },
        a52Images: {
            type: Array,
            default: () => []
        },
        jaxImages: {
            type: Array,
            default: () => []
        },
        indestructibleImages: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            brand: null,
            brands: [
                { name: 'rock-paper-scissors', text: 'edits films, television, commercials, and music videos.'},
                { name: 'elastic', text: 'creates animation, motion design, and main titles.'},
                { name: 'a52', text: 'is a leader in visual effects.'},
                { name: 'primary', text: 'grades color and manages workflows and telecine.'},
                { name: 'jax', text: 'markets films, tv shows, and games.'},
                { name: 'indestructible', text: 'supervises musical direction, composition, and licensing.'},
            ],
            timer: null,
            imagesLength: 0,
            activeImage: 0
        }
    },
    computed: {
        images() {
            switch (this.brand) {
                case 'rock-paper-scissors':
                    this.imagesLength = this.rpsImages.length
                    return this.rpsImages
                case 'elastic':
                    this.imagesLength = this.elasticImages.length
                    return this.elasticImages
                case 'a52': 
                    this.imagesLength = this.a52Images.length
                    return this.a52Images
                case 'primary':
                    this.imagesLength = this.primaryImages.length
                    return this.primaryImages
                case 'jax': 
                    this.imagesLength = this.jaxImages.length
                    return this.jaxImages
                case 'indestructible': 
                    this.imagesLength = this.indestructibleImages.length
                    return this.indestructibleImages
            }
        }
    },
    methods: {
        set(brand) {
            if (!brand) return this.reset()
            this.brand = brand
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
            this.brand = null
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
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .prompt {
        position: relative;
        padding-left: 1rem;
    }
    .prompt-text {
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        transition: opacity 200ms ease;
        opacity: 0;
        padding: 0 16px 0 8px;
        margin: 0;

        //arrow offset for mobile
        padding-right: 75px;
    }

    .arrow {
        position: absolute;
        left: 24px;
        top: 50%;
        transform: translateY(-50%);
        transition: transform 400ms ease;
    }

    .brand-link {
        line-height: 1.5em;
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
        transition: opacity 0.4s ease-in-out;
        pointer-events: none;
        opacity: 0;
    }
    .image.is-active {
        opacity: 1;
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
                transform: translateY(-50%) translateX(100%);
            }
        }
        .brand-link:hover {
            position: relative;
            z-index: 20;
        }
    }

    // Breakpoints
    @media #{$lt-tablet} {
        // NOTE might want to change font sizes on mobile, no designs provided
    }
    
}

// temporary until logo svg is provided
.logo {
    text-transform: capitalize;
    font-weight: 800;
}
</style>
