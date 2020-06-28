<template>
	<div class="gallery-list d-fcc">

		<div v-if="variant == 'column'" class="list-columns">
			<template v-for="(colItems, index) in listItems">
				<div :key="index" class="list-column">
					<template v-for="(colItem, i) in colItems">
						<div :key="i" class="list-item">
							<p class="column-text">{{colItem.title}} </p>
							<div :class="`hover-image-box d-fcc is-variant-${variant}`">
								<wp-image class="hover-image" :image="colItem.featuredImage" />
							</div>
						</div>
					</template>
				</div>
			</template>
		</div>

		<div v-if="variant == 'comma'" class="list-comma">
			<template v-for="(listItem, index) in listItems">
				<span :key="`comma-${index}`" class="list-item">
					<span class="comma-text hover-text">
						{{listItem.title}}<span v-if="index != listItems.length - 1">,&nbsp;</span>
					</span>
					<span class="comma-text space-holder">
						{{listItem.title}}<span v-if="index != listItem.length - 1">,&nbsp;</span>
					</span>
					<div class="hover-image-box d-fcc">
						<wp-image :class="`hover-image is-variant-${variant}`" :image="listItem.featuredImage" />
					</div>
				</span>
			</template>
		</div>

	</div>
</template>

<script>
import WpImage from "@/components/global/WpImage";

export default {
    components: { WpImage },
    props: {
        items: {
            // Mock: api.pages (each item contains the name, and the image)
            type: Array,
            default: () => []
        },
        title: {
            // Only used on the sentence variant
            type: String,
            default: ""
        },
        variant: {
            type: String,
            default: "column" // Or comma
        },
        date: {
            type: String,
            default: ""
        }
	},
	data() {
		return {
			itemPerRow: 7,
		}
	},
	computed: {
		splitItems() {
			let items = JSON.parse(JSON.stringify(this.items))
			let x = 0, arr = []
			while(items.length) {
				arr[x] = items.splice(0, this.itemPerRow)
				x++
			}
			return arr
		},
		listItems() {
			return this.variant == 'column' ? this.splitItems : this.items
		}
	}
};
</script>

<style lang="scss" scoped>
.d-fcc {
	display: flex;
	align-items: center;
	justify-content: center;
}

.gallery-list {
	position: relative;
    min-height: 75vh;
	background-color: blue;
	padding: 5rem;
	box-sizing: border-box;
	z-index: 1;
}

// Column Variant
.list-columns {
	display: flex;
	justify-content: center;
	width: 100%;
}
.list-column {
	flex: 1 1 100%;
	display: flex;
	flex-direction: column;
}
.list-column + .list-column {
	margin-left: 1rem;
}

// Comma Variant
.list-comma {
	display: flex;
	flex-wrap: wrap;
}

// List Item + Hover
.list-item {
	cursor: pointer;
	.column-text {
		font-size: 1.5rem;
		color: var(--color-brand);
	}
	.comma-text {
		font-size: 3rem;
		color: var(--color-black);
	}
	.space-holder {
		display: none;
		color: transparent;
	}
	.hover-image-box {
		position: absolute;
		top: 0; left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 2
	}
	.hover-image {
		display: none;
		width: 90%;
		margin: 0 auto;
		pointer-events: none;
	}
	.hover-image-box.is-variant-column {
		z-index: -1;
	}
	.hover-image.is-variant-comma {
		width: 65%;
	}

	&:hover {
		.hover-text {
			position: absolute;
			color: var(--color-brand);
			z-index: 3
		}
		.space-holder {
			display: block;
		}
		.hover-image {
			display: block;
		}
	}
}

</style>
