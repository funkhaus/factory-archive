<template>
    <div class="site-hamburger">
        <div class="outer-circle"></div>
        <div class="inner-circle"></div>
    </div>
</template>

<style lang="scss">
:root {
    --color-rpsg: #fdc760;
}
.site-hamburger {
    position: fixed;
    right: 30px;
    top: 30px;

    height: 26px;
    width: 26px;
    padding: 20px;
    cursor: pointer;

    .outer-circle {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: var(--color-rpsg);
        transition: transform 0.4s $authenticMotion;
    }

    .inner-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        height: 20px;
        width: 20px;
        border-radius: 50%;
        transition: height 0.4s $authenticMotion, width 0.4s $authenticMotion;
    }

    // Opened state
    .open & .outer-circle {
        transform: scale(200);
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
    }
    // Breakpoints
    @media #{$lt-phone} {
        right: 0;
        top: 0;
    }
}
</style>
