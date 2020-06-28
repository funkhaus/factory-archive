<template>
	<div class="gallery-list d-fcc" :style="`${backgroundColor}`">

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
			<p class="comma-title">{{title}}</p>
			<div class="comma-variant-list">
				<template v-for="(listItem, index) in listItems">
					<span :key="`comma-${index}`" class="list-item">
						<span class="comma-text hover-text">
							{{listItem.title}}<span class="comma-separator" v-if="index != listItems.length - 1">,&nbsp;</span>
						</span>
						<span class="comma-text space-holder">
							{{listItem.title}}<span class="comma-separator" v-if="index != listItems.length - 1">,&nbsp;</span>
						</span>
						<div class="hover-image-box is-variant-${variant} d-fcc">
							<wp-image v-if="listItem.featuredImage" :class="`hover-image is-variant-${variant}`" :image="listItem.featuredImage" />
						</div>
					</span>
				</template>
			</div>
			<p class="comma-date">{{date}}</p>
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
		},
		backgroundColor() {
			console.log('background')
			return this.variant == 'column' ? 'background-color: black;' : 'background-color: #3094b8;'
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
	padding: 5rem 48px 5rem 52px;
	box-sizing: border-box;
	z-index: 1;
	
	font-family: 'RM Neue';

	//variables
	--color-comma-text: #282828;
}

// Column Variant
.list-columns {
	display: flex;
	justify-content: space-around;
	width: 100%;
}
.list-column {
	flex: 0 0 200px;
	max-width: 30%;
	display: flex;
	flex-direction: column;
}

// Comma Variant
.list-comma {
	display: block;
	.comma-variant-list{
		display: flex;
		flex-wrap: wrap;
	}
	.comma-title {
		display: block;
		margin-bottom: 37px;
		padding-left: 8px;

		font-size: 30px;
		font-weight: 300;
		color: var(--color-comma-text);
	}
	.comma-date {
		display: none;
	}
}

// List Item + Hover
.list-item {
	cursor: pointer;
	.column-text {
		font-size: 1.5rem;
		color: #fdc760;
	}
	.comma-text {
		font-size: 84px;
		color: var(--color-comma-text);
		text-transform: capitalize;
		font-weight: 300;
		display: inline-block;
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
		width: 80%;
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
		.column-text {
			color: var(--color-brand);
		}
		.hover-text {
			position: absolute;
			color: var(--color-brand);
			z-index: 3
		}
		.space-holder {
			display: inline-block;
		}
		.hover-image {
			display: block;
		}
	}
}

@media #{$lt-tablet} {
	.list-columns {
		flex-wrap: wrap;
	}
	.list-column {
		flex: 1 1 100%;
		max-width: none;
	}
	.list-comma {
		.comma-title {
			display: none;
		}
		.comma-date {
			display: block;
			position: absolute;
			left: 0; bottom: 1rem;
			text-align: center;
			width: 100%;
		}
	}
	
	.list-item {
		position: relative;
		display: block;
		width: 100%;
		text-align: center;
		.comma-text {
			width: 100%;
			font-size: 70px;
		}
		.comma-separator {
			display: none;
		}
		.hover-image-box {
			position: fixed;
			min-height: 75vh;
			height: auto;
			width: 90%;
			left: 50%;
			transform: translateX(-50%);
		}

		&:hover {
			.hover-text {
				width: 100%;
			}
			.hover-image {
				width: 100%;
			}	
		}
	}
}

</style>
