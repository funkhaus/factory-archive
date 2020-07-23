<template lang="html">
    <section class="section-representation">
        <h2 class="title" v-html="title" />

        <div class="panel">
            <div v-for="(region, i) in regions" class="region">
                <h4 class="location" v-html="region.title" />
                <wp-content :html="region.text" class="detail" />
                <a
                    v-for="(person, i) in region.people"
                    :src="`mailto:${person.email}`"
                    target="_blank"
                    class="person"
                    v-html="person.name"
                />
            </div>
            <div class="illustration">
                <svg-ghost class="svg" />
            </div>
        </div>

        <a class="logo-funkhaus" href="https://funkhaus.us" target="_blank">
            <svg-logo-funkhaus-site-by class="svg" />
        </a>
    </section>
</template>

<script>
//  Components
import WpContent from "@/components/global/WpContent"
import SvgGhost from "@/assets/svgs/illustrations/ghost.svg"
import SvgLogoFunkhausSiteBy from "@/assets/svgs/logo-funkhaus-site-by.svg"

export default {
    components: {
        WpContent,
        SvgGhost,
        SvgLogoFunkhausSiteBy
    },
    props: {
        title: {
            type: String,
            default: "Representation"
        },
        regions: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.section-representation {
    position: relative;
    color: var(--color-pink);
    background-color: var(--color-red);
    padding: 100px 50px;
    box-sizing: border-box;

    .title {
        font-size: 75px;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--color-black);
        white-space: nowrap;
        -webkit-text-stroke: 1.5px var(--color-red);
        margin: 0;
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translate(-50%);
    }

    .panel {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        max-width: 1080px;
        margin: 0 auto;
    }

    .region,
    .illustration {
        width: 50%;
        text-align: left;
    }

    .region {
        color: var(--color-black);
        margin: 70px 0;
        .location {
            text-transform: uppercase;
            font-size: 30px;
            font-weight: 500;
            margin: 0;
        }
        /deep/ .detail {
            margin-bottom: 40px;
            font-size: 20px;
            > p {
                margin: 5px 0;
            }
        }
        .person {
            display: block;
            font-size: 20px;
            margin: 15px 0;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
        }
    }

    .illustration .svg {
        width: 125px;
        height: auto;
        path:nth-child(1),
        path:nth-child(7) {
            fill: var(--color-black);
        }
    }

    .logo-funkhaus {
        padding: 20px;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--color-black);
    }

    @media #{$has-hover} {
        .person:hover {
            color: var(--color-red);
            -webkit-text-stroke: 1px var(--color-black);
        }
    }

    // Breakpoints
    @media #{$lt-phone} {
        padding: 30px 20px 120px 20px;
        .title {
            font-size: 25px;
            top: -14px;
        }
        .region,
        .illustration {
            width: 100%;
            text-align: center;
        }

        .region {
            margin: 25px 0;
            .location {
                font-size: 25px;
            }
            /deep/ .detail {
                margin-bottom: 25px;
                font-size: 16px;
            }
            .person {
                font-size: 15px;
            }
        }

        .illustration .svg {
            width: 90px;
        }

        .logo-funkhaus {
            padding: 0px;
        }
    }
}
</style>
