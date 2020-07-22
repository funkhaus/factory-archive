<template>
    <component :is="element" v-text="displayNumber" />
</template>

<script>
export default {
    props: {
        from: {
            type: Number,
            default: 0
        },
        to: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
            default: 1000 // Duration is in milliseconds
        },
        element: {
            type: String,
            default: "div"
        },
        startCount: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            displayNumber: this.from,
            countInterval: null
        }
    },
    computed: {
        interval() {
            return this.duration / (this.to - this.from)
        }
    },
    watch: {
        startCount(newVal) {
            if (newVal && !this.countInterval) {
                this.countInterval = setInterval(
                    () => this.incrementDisplayNimber(),
                    this.interval
                )
            } else this.displayNumber = this.from
        }
    },
    methods: {
        beginCount() {},
        incrementDisplayNimber() {
            this.displayNumber += 1
            if (this.displayNumber == this.to) this.clearCountInterval()
        },
        clearCountInterval() {
            clearInterval(this.countInterval)
            this.countInterval = null
        }
    }
}
</script>
