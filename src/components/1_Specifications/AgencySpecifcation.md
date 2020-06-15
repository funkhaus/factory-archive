## General

1.  General [Fukhaus best practices explained here](https://docs.google.com/presentation/d/1xMqvylzoIwpEgwFEpXI8it_HGo7BUGrt8h65E0nvEQo/edit?usp=sharing).
1.  Component name, filename and top level class should all match.
1.  Component names should be `<component-name/>` not `<ComponentName/>`

## Vue

1.  Give Vue props a type and default always
1.  Style tag should be `<style lang="scss" scoped>`
1.  We use [wp-image](https://github.com/funkhaus/fuxt/blob/master/components/WpImage.vue) a lot, in general anytime you are displaying an image, use it. like `<wp-image :image="objectHere"/>`. It is included in this repo.

## CSS

1.  CSS use kebab case.
1.  Use scoped SCSS always.
1.  Avoid nesting SCSS. If going deeper than 2 levels, question yourself.
1.  Never use element selectors or ID's. Give everything you need to select a class.
