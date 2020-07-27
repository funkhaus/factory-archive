<template>
    <div class="site-hamburger">
        <div class="outer-circle"></div>
        <div class="inner-circle"></div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
:root {
    --color-rpsg: #fdc760;
}
.site-hamburger {
    position: fixed;
    right: 50px;
    top: 50px;
    // cursor: pointer;

    height: 26px;
    width: 26px;

    .outer-circle {
        height: 100%;
        width: 100%;
        // height: 26px;
        // width: 26px;
        border-radius: 50%;
        background-color: var(--color-rpsg);
        // cursor: pointer;

        transition: transform 0.4s $authenticMotion;
    }

    .inner-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 20000;
        transform: translate(-50%, -50%);

        height: 20px;
        width: 20px;
        border-radius: 50%;
        cursor: pointer;

        transition: height 0.4s $authenticMotion, width 0.4s $authenticMotion;
    }

    // Opened state
    .open & .outer-circle {
        transform: scale(200);
        // cursor: auto;
    }
    .open & .inner-circle {
        height: 15px;
        width: 15px;
        background-color: var(--color-black);
    }

    // Hovers
    @media #{$has-hover} {
        &:hover .inner-circle {
            height: 15px;
            width: 15px;
            background-color: var(--color-black);
        }
        .open & .inner-circle:hover {
            height: 17px;
            width: 17px;
        }
    }
    // Breakpoints
    // @media #{$lt-phone} {
    // }
}
</style>
