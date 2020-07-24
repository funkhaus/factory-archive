<template lang="html">
    <section
        v-intersection-observer="{
            threshold: 0
        }"
        class="section-awards"
        @has-intersected="hasIntersected()"
    >
        <h2 class="title" v-html="title" />

        <ul class="awards">
            <li v-for="(award, i) in awards" class="award">
                <count-up
                    class="count"
                    element="span"
                    :to="award.total"
                    :start-count="startCount"
                    :duration="1200"
                />

                <p v-html="award.text" />
            </li>
        </ul>
    </section>
</template>

<script>
//  Components
import CountUp from "@/components/global/CountUp"

// Directives
import Vue from "vue"
import intersectionObserver from "@/directives/IntersectionObserver"
Vue.directive("intersection-observer", intersectionObserver)

export default {
    components: {
        CountUp
    },
    props: {
        title: {
            type: String,
            default: "Awards"
        },
        awards: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            startCount: false
        }
    },
    methods: {
        // Start count when component hasIntersected
        hasIntersected() {
            this.startCount = true
        }
    }
}
</script>

<style lang="scss" scoped>
.section-awards {
    position: relative;
    background-color: var(--color-pink);
    color: var(--color-black);
    padding: 60px 50px;
    box-sizing: border-box;

    .title {
        font-family: var(--font-secondary);
        font-size: 75px;
        font-weight: 500;
        text-transform: uppercase;
        -webkit-text-stroke: 1.5px var(--color-pink);
        margin: 0;
        position: absolute;
        top: -47px;
        left: 50%;
        transform: translate(-50%);
    }

    .awards {
        list-style: none;
        margin: 0;
        padding: 0;
        columns: 2;
        max-width: var(--unit-max-width);
        margin: 0 auto;
    }
    .award {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 10px 0;
        .count {
            font-family: var(--font-primary);
            font-size: 50px;
            font-weight: 400;
            min-width: 75px;
            height: auto;
            text-align: center;
        }
        p {
            font-family: var(--font-secondary);
            display: inline-block;
            font-size: 20px;
            font-weight: 500;
            text-transform: uppercase;
            margin: 0 10px;
        }
    }

    // Breakpoints
    @media #{$lt-phone} {
        padding: 50px 20px;

        .title {
            font-size: 30px;
            top: -20px;
        }
        .awards {
            columns: 1;
        }
        .award {
            margin: 0 0 10px 0;
            .count {
                font-size: 20px;
                min-width: 30px;
            }
            p {
                font-size: 12px;
            }
        }
    }
}
</style>
