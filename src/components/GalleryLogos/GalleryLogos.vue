<template lang="html">
    <div class="gallery-logos">
        <h3 v-if="title" class="title" v-html="title" />

        <!-- <img v-for="(logo, i) in logos" :src="logo.sourceUrl" class="logo" /> -->
        <component
            v-for="(name, i) in logoNames"
            :is="`svg-logo-${name}`"
            class="logo"
            :key="name"
        />
    </div>
</template>

<script>
import SvgLogoNytBrandStudio from "@/assets/svgs/logos/logo-nyt-brand-studio.svg";
import SvgLogoVanityFair from "@/assets/svgs/logos/logo-vanity-fair.svg";
import SvgLogoVaynerMedia from "@/assets/svgs/logos/logo-vayner-media.svg";
import SvgLogoVogue from "@/assets/svgs/logos/logo-vogue.svg";
import SvgLogoVox from "@/assets/svgs/logos/logo-vox.svg";
import SvgLogoWsj from "@/assets/svgs/logos/logo-wsj.svg";

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
};
</script>

<style lang="scss" scoped>
.gallery-logos {
    background-color: var(--color-black); //placeholder
    padding: 10px; //placeholder
    text-align: center;

    .title {
        color: var(--color-company);
        font-weight: 300;
    }

    .logo {
        height: 100px;
        width: auto;
        max-width: 200px;
        display: inline-block;
        padding: 10px;
        box-sizing: border-box;
        * {
            fill: var(--color-company);
        }
    }
}
</style>
