# factory

The Funkhaus component Factory. Build as many components as you want and get paid fast.

Together with [James Lee](https://github.com/uptownhr), Funkhaus has set out to make a marketplace for talented developers to build single components for our agency projects.

## Quick start

1.  Find an available component to [build here](https://github.com/funkhaus/factory/issues?q=is%3Aopen+is%3Aissue+label%3Aavailable+label%3A%22component+request%22)
1.  Get approval to build it by commenting on the issue
1.  Pull down the branch for that [component's project](https://github.com/funkhaus/factory/branches)
1.  Build the component, and commit a PR to that project branch.

## How it works

This repo is setup with [Project Boards](https://github.com/funkhaus/factory/projects) for each website we are working on at Funkhaus. Each Project has a `branch` of this repo that goes with it. There are also several `Issues` tagged with `component request` for each Project.

Any developer can request to build any component on any Project by making a PR to the project's branch (which is just a [Storybook](https://storybook.js.org/)). Each component has a time estimate and a budget that goes with it. You get paid once you finish the component.

## How to accept a Component Request

Each Project has a bunch of `Component Requests` or `CR` for short, which are just GitHub issues. These "issues" explain the component we need built. See this for [example](https://github.com/funkhaus/factory/issues/3).

Any unassigned CR is up for grabs to the first developer that wants it. Review the request, ask questions and when ready, reply to the issue with a proposal to build the component. If accepted, the CR Issue will be tagged "accepted", and progressed to the Accepted column in the Project's board. You'll have 72 hours to complete the component before it is released and up for grabs by another developer.

## How to develop once a Component Request has been accepted

Every issue is assigned to a Github Project and every Github Project has an associated `branch`. For example, we currently have a `MakeMake` project and in return also have a branch named `makemake`.

### Branch project setup

1. Clone the Project branch [from here](https://github.com/funkhaus/factory/branches)
2. Code your component
3. Create a new PR on the project branch, be sure to include a list of issues (Component Requests) your PR addresses in the PR description.

### Storybook Development

We use storybook to develop and show off the components that have been created. If you are not familiar with storybook, checkout [storybook](https://storybook.js.org/).

To get started:

1. `npm install`
2. `npm run storybook`
3. Develop your new component in the `src/components` directory

-   Be sure to create a new directory with the component name and GitHub CR issue number, like `CR1 - WorkBlock`. Place the component file in this directory. [See an example component here](https://github.com/funkhaus/factory/tree/master/src/components/CR1%20-%20WorkBlock).
-   At a minimum the `${component}.vue` file and `${component}.stories.js` file should be here.
-   Name your storybook story like `@{githubusername} / CR1 - WorkBlock`. This will organzine all your components into a Storybook structure.

For example:

```
- src/components
- - CR1 - WorkBlock
- - - WorkBlock.vue
- - - WorkBlock.stories.js
```

Please see look at the above example for a better understanding of coding standards and how to pass in mock data.

## How to submit a finished Component for review

Once a CR has been accepted, and developed, you can open a Pull Request for review. When creating the Pull Request, please make the PR against the Project's Branch. IE: `factory:makemake`.

In the GitHub Project Board, we will move your CR to the "In Review" column and tag your issue as such. If we have notes for you, we will reply in the issue, you'll make the changes and and open a new PR.

## How to get paid

Once your component PR has been approved and merged, you can send a Venmo request to `@funkhaus` or a PayPal invoice to `whatsup@funkhaus.us`. Be sure to include your issue number and component name in the payment request. We will pay you within 24 hours.

## Timeline

Most components should take between 2-4 hours to complete. So please don't accept a component unless you plan on finishing it within the next 72 hours. If more than 72 hours pass since starting on a component, you will be removed from the component and it's free for someone else to claim.

We will only pay for complete and approved components.

### Code style guide and expectations

Each project branch includes a Project Specification and an Agency Specification markdown file in the Storybook.

The Agency specification is essentially the Funkhaus style guide, and it doesn't change often.

The Project Specification is unique to each project and covers things like fonts and colors used on the project, be sure to read both.

#### Dependent components

It's common that a Project will include some dependent or global components (often mentioned in the Component Request). You can put these in the `/global` folder, they will be ignored by Storybook.

A common example of this is `<router-link>` or `<nuxt-link>`, or some of the related WordPress [`fuxt` components we often use](https://github.com/funkhaus/fuxt/tree/master/components).

#### Funkhaus best practices

[Here is a general overview of best practices at Funkhaus](https://github.com/funkhaus/best-practices), please consider these when building a component.

### Mock data

All our data generally comes our of WordPress using the WP-GQL. The file `db.json` found in `src/static` of this repo can used in your Storybook components to mock these data structures.

But we've setup some ways to access the data easily. Please see this [sample Storybook component](https://github.com/funkhaus/factory/tree/master/src/components/CR1%20-%20WorkBlock). to see how it's used.

## SVGs

For all icons or logos, it's recommended that you use a SVG file. These should be placed in `/src/assets/svgs` and then imported and used as a component, but please prepended component name with SVG.

For example, in a Vue Component you'd end up with:

```
import SvgLogoFunkhaus from "@/assets/svgs/logo-funkhaus.svg"

components: {
    SvgLogoFunkhaus
},

<svg-logo-funkhaus class="svg" />

```

## CSS & SCSS variables

Each project includes a global stylesheet, and a SCSS variables stylesheet injected into each component automatically. These style sheets are used to share basic fonts and colors etc, often times as CSS or SCSS variables.

Often times you'll need to use a project color or project font, you'd just do this:

```
.title {
    font-family: var(--font-primary);
    color: var(--color-yellow);
}
.sub-title {
    font-family: var(--font-secondary);
    color: var(--color-red);
}
```

Everything you need is generally explained in each Project Specification included in the Storybook. But for advanced users, this explains where things are defined in code:

1.  You can see what fonts weights are available by looking in the `/src/styles/fonts.css` file.
1.  You can see what CSS vars are available by looking in the `/src/styles/global.scss` file.

## Breakpoints & Hover States

Similar to the way fonts and color variables are defined, we use SCSS variables to unify media queries for responsive breakpoints and hover states. This will be defined in each Project Specification.

These variables are injected into each component automatically, so you'd simply be able to do this:

```
// Hover states
@media #{$has-hover} {
    &:hover .image {
        border: 4px solid #0000ff;
    }
}

// Breakpoints
@media #{$lt-tablet} {
    .image {
        border: 4px solid #ff0000;
    }
}
```

## Fonts

Each project includes the required fonts and weights. If one is missing, please comment on the component request issue.

Font's should be used by CSS var, like so:

```
.title {
    font-family: var(--font-primary);
}
.sub-title {
    font-family: var(--font-secondary);
    weight: 600;
}
```

Available fonts and weights are explained in each Project Specification, but can also be found in `/src/styles/fonts.css` and `/src/styles/global.scss`.

## Resources

Some good things to read here.

1.  [Funkhaus best practices](https://github.com/funkhaus/best-practices)
1.  [Maintainable CSS](https://maintainablecss.com/chapters/semantics/)
1.  [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)

## TODO

-   Create sample project, issue and component.
-   Build out GitHub issue tags for things like difficulty level, budget, ready for code review etc.
