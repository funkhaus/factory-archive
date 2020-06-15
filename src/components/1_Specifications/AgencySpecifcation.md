# Funkhaus style guide

[See an example component here](https://github.com/funkhaus/factory/tree/master/src/components/Issue%201%20-%20WorkBlock).

Here is a whitelist of approved outside libraries, please get approval for any others:

-   [lodash](https://lodash.com/):
    -   Be sure to only import functions you need, for example `import _get from "lodash/get"`.
-   [vue-prlx](http://vue-prlx.surge.sh/).
-   Sorry, no Tailwind.
-   What about animations?
    -   Almost all transitions you'll be asked to do can be completed with the Vue `<transition>` component and it's CSS or JS hooks.
    -   Please no GASP/Pop/Anime without approval.
-   This repo has linting built in, please use it.

We encourage the use of TODO, FIXME, NOTE, QUESTION etc. At Funkhaus use Atom and the [TODO-SHOW](https://atom.io/packages/todo-show) package.

## General setup notes

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

## Responsive Breakpoints

All components should be responsive. Here are some tips.

1. Generally never use a fixed width like `500px`, you're better to use `width: 100%; max-width: 500px;`.
1. In general, you only need one specific breakpoint for below `1024px`. If you find yourself needing more, question if a `max-width` could do it better.
