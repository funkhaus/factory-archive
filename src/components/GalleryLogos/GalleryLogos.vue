<template lang="html">
    <div class="gallery-logos">
        <h3 v-if="title" class="title" v-html="title" />

        <div v-for="(name, i) in logoNames" class="container">
            <component :is="`svg-logo-${name}`" :key="name" class="logo" />
        </div>
    </div>
</template>

<script>
import SvgLogoNytBrandStudio from "@/assets/svgs/logos/logo-nyt-brand-studio.svg"
import SvgLogoVanityFair from "@/assets/svgs/logos/logo-vanity-fair.svg"
import SvgLogoVaynerMedia from "@/assets/svgs/logos/logo-vayner-media.svg"
import SvgLogoVogue from "@/assets/svgs/logos/logo-vogue.svg"
import SvgLogoVox from "@/assets/svgs/logos/logo-vox.svg"
import SvgLogoWsj from "@/assets/svgs/logos/logo-wsj.svg"

export default {
    components: {
        SvgLogoNytBrandStudio,
        SvgLogoVanityFair,
        SvgLogoVaynerMedia,
        SvgLogoVogue,
        SvgLogoVox,
        SvgLogoWsj
    },
    props: {
        title: {
            type: String,
            default: ""
        },
        logoNames: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.gallery-logos {
    margin: var(--unit-gutter) auto;
    max-width: 1024px;
    text-align: center;

    .title {
        color: var(--color-company);
        font-weight: 300;
    }

    .container {
        position: relative;
        display: inline-block;
        height: 100px;
        width: 200px;
    }

    .logo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 10px;
        box-sizing: border-box;

        * {
            fill: var(--color-company);
        }
    }
}
</style>
