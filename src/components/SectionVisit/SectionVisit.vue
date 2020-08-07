<template lang="html">
    <section class="section-visit">
        <h2>Visit Us</h2>

        <div class="section-map">
            <contact-city class="svg city" />

            <div class="map-city">
                <contact-map class="svg map" />

                <div class="location breadlam">
                    <icon-breadlam class="svg icon-breadlam" />
                    <icon-breadlam-hover class="svg icon-breadlam hover" />
                </div>
                <div class="location doomsday">
                    <icon-doomsday class="svg icon-doomsday" />
                    <icon-doomsday-hover class="svg icon-doomsday hover" />
                </div>
                <div class="location hauser-wirth">
                    <icon-hauser-wirth class="svg icon-hauser-wirth" />
                    <icon-hauser-wirth-hover
                        class="svg icon-hauser-wirth hover"
                    />
                </div>
                <div class="location little-tokyo">
                    <icon-little-tokyo class="svg icon-little-tokyo" />
                    <icon-little-tokyo-hover
                        class="svg icon-little-tokyo hover"
                    />
                </div>
                <div class="location piehole">
                    <icon-piehole class="svg icon-piehole" />
                    <icon-piehole-hover class="svg icon-piehole hover" />
                </div>
                <div class="location werstkuche">
                    <icon-werstkuche class="svg icon-werstkuche" />
                    <icon-werstkuche-hover class="svg icon-werstkuche hover" />
                </div>
            </div>

            <wp-content class="address" :html="address" />
        </div>
    </section>
</template>

<script>
// Components
import WpContent from "@/components/global/WpContent"

import ContactMap from "@/assets/svgs/contact/contact-map.svg"
import ContactCity from "@/assets/svgs/contact/contact-city.svg"
import IconBreadlam from "@/assets/svgs/contact/contact-map-breadlam.svg"
import IconBreadlamHover from "@/assets/svgs/contact/contact-map-breadlam-hover.svg"
import IconDoomsday from "@/assets/svgs/contact/contact-map-doomsday.svg"
import IconDoomsdayHover from "@/assets/svgs/contact/contact-map-doomsday-hover.svg"
import IconHauserWirth from "@/assets/svgs/contact/contact-map-hauser-wirth.svg"
import IconHauserWirthHover from "@/assets/svgs/contact/contact-map-hauser-wirth-hover.svg"
import IconLittleTokyo from "@/assets/svgs/contact/contact-map-little-tokyo-market.svg"
import IconLittleTokyoHover from "@/assets/svgs/contact/contact-map-little-tokyo-market-hover.svg"
import IconPiehole from "@/assets/svgs/contact/contact-map-piehole.svg"
import IconPieholeHover from "@/assets/svgs/contact/contact-map-piehole-hover.svg"
import IconWerstkuche from "@/assets/svgs/contact/contact-map-werstkuche.svg"
import IconWerstkucheHover from "@/assets/svgs/contact/contact-map-werstkuche-hover.svg"

export default {
    components: {
        WpContent,
        ContactMap,
        ContactCity,
        IconBreadlam,
        IconBreadlamHover,
        IconDoomsday,
        IconDoomsdayHover,
        IconHauserWirth,
        IconHauserWirthHover,
        IconLittleTokyo,
        IconLittleTokyoHover,
        IconPiehole,
        IconPieholeHover,
        IconWerstkuche,
        IconWerstkucheHover
    },
    props: {
        address: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            svgIsHovered: false
        }
    },
    methods: {
        svgHover() {
            return (this.svgIsHovered = !this.svgIsHovered)
        }
    }
}
</script>

<style lang="scss" scoped>
.section-visit {
    color: var(--color-red);
    padding: 100px;
    box-sizing: border-box;
    position: relative;
    min-height: 525px;
    overflow-x: hidden;
    h2 {
        font-family: var(--font-secondary);
        color: var(--color-red);
        text-align: center;
        font-size: 50px;
        font-weight: 500;
        text-transform: uppercase;
        margin: 0;
        position: relative;
        z-index: 50;
    }

    .svg {
        cursor: pointer;
    }

    .section-map {
        position: relative;
        display: block;
        margin: 0 auto;
        max-width: 1080px;
        height: 975px;

        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        .city {
            position: absolute;
            top: -40px;
            left: -40px;
            z-index: 10;
        }
        .map-city {
            position: relative;
            max-width: 800px;
            height: auto;
            z-index: 20;
            circle {
                fill: var(--color-black);
            }
        }
    }

    .address {
        position: absolute;
        top: 53%;
        right: 0%;
        z-index: 30;
        padding: var(--unit-gutter);
        border: 1px solid var(--color-red);
        background-color: var(--color-black);
        white-space: nowrap;
        /deep/ h4 {
            font-weight: 900;
            font-size: 30px;
            font-family: var(--font-secondary);
            margin: 0 0 10px 0;
        }
        /deep/ p {
            font-family: var(--font-primary);
            font-size: 24px;
            font-weight: 400;
            margin: 0;
        }
    }

    .location {
        position: absolute;
        .svg {
            transition: opacity 0.1s ease-in-out;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 1;
            z-index: 20;
            &.hover {
                opacity: 0;
                z-index: 30;
            }
        }
    }
    .breadlam {
        top: 53%;
        left: 65%;
    }
    .doomsday {
        top: 64%;
        left: 59%;
    }
    .hauser-wirth {
        top: 41%;
        left: 68%;
    }
    .little-tokyo {
        top: 55%;
        left: 17%;
    }
    .piehole {
        top: 62%;
        left: 45%;
    }
    .werstkuche {
        top: 49%;
        left: 52%;
    }

    // Hovers
    @media #{$has-hover} {
        .location:hover {
            .svg {
                opacity: 0;
                &.hover {
                    opacity: 1;
                    z-index: 40;
                }
            }
        }
    }

    // Breakpoints
    @media only screen and (max-width: 1200px) {
        .address {
            padding: 20px;
            top: 57%;
            right: -10%;
            /deep/ h4 {
                font-size: 21px;
            }
            /deep/ p {
                font-size: 18px;
            }
        }
    }
    @media #{$lt-tablet} {
        padding: 50px;

        .section-map {
            height: 700px;
            max-width: 800px;
            .city {
                max-width: 800px;
                height: auto;
            }
            .map {
                max-width: 600px;
                height: auto;
            }
            .location {
                transform: scale(0.75);
            }
            .address {
                right: 0;
            }
        }
    }
    @media #{$lt-phone} {
        padding: 20px;
        h2 {
            font-size: 30px;
            margin-bottom: 30px;
        }
        .section-map {
            height: 335px;
            max-width: 100%;
            justify-content: center;
            .city {
                max-height: 335px;
                width: auto;
                top: -17%;
                left: -35px;
            }
            .map {
                max-width: 335px;
                height: auto;
            }
            .location {
                transform: scale(0.4);
            }
            .address {
                top: unset;
                bottom: -15%;
                right: 50%;
                transform: translateX(50%);

                /deep/ h4 {
                    font-size: 18px;
                }
                /deep/ p {
                    font-size: 14px;
                }
            }
        }
    }
}
</style>
