<template lang="html">
    <div class="gallery-logos">
        <h3 v-if="title" class="title" v-html="title" />
        <svg-icon-play />

        <img v-for="(logo, i) in logos" :src="logo.sourceUrl" class="logo" />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        logos: {
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
    }
}
</style>
