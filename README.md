# factory

The Funkhaus component Factory. Build as many components as you want and get paid fast.

Together with [James Lee](https://github.com/uptownhr), Funkhaus has set out to make a marketplace for talented developers to build single components for our agency projects.

## How it works

This repo is setup with [Project Boards](https://github.com/funkhaus/factory/projects) for each website we are working on at Funkhaus. Each Project has a `branch` of this repo that goes with it. There are also several `Issues` tagged with `component request` for each Project.

Any developer can request to build any component on any Project by making a PR to the project's branch (which is just a [Storybook](https://storybook.js.org/)). Each component has a time estimate and a budget that goes with it. You get paid once you finish the component.

## How to accept a Component Request

Each Project has a bunch of `Component Requests`, which are just GitHub issues. These "issues" explain the component we need built. See this for [example](https://github.com/funkhaus/factory/issues/3).

Any unassigned Component Request is up for grabs to the first developer that wants it. Review the request, ask questions and when ready, reply to the issue with a proposal to build the component. If accepted, the Issue will be tagged "accepted", and progressed to the Accepted column in the Project's board. You'll have 72 hours to complete the component before it is released and up for grabs by another developer.

## How to develop once a Component Request has been accepted

Every issue is assigned to a Github Project and every Github Project has an associated `branch`. For example, we currently have a `MakeMake` project and in return also have a branch named `makemake`.

### Fork and Branch setup

1. Fork this repository
2. Checkout the Project branch
3. Code your component
4. Create a new PR on the project branch, be sure to include a list of issues (Component Requests) your PR addresses.

### Storybook Development

We use storybook to develop and show off the components that have been created. If you are not familiar with storybook, checkout [storybook](https://storybook.js.org/).

To get started:

1. `npm install`
2. `npm run storybook`
3. develop your new component in the `src/components` directory

-   Be sure to create a new directory with the component name and GitHub issue number, like `Issue 3 - WorkBlock`. Place the component file in this directory.
-   At a minimum the `${component}.vue` file and `${component}.stories.js` file should be here.

For example:

```
- src/components
- - Issue 3 - WorkBlock
- - - WorkBlock.vue
- - - WorkBlock.stories.js
```

Please see this example for a better understanding of coding standards and how to pass in mock data.

## How to submit a finished Component for review

Once a Component Request has been accepted, and developed, you can open a Pull Request for review. When creating the Pull Request, please make the PR against the Project's Branch. IE: `factory:makemake` from `username:ISSUE-3`

In the GitHub Project Board, we will move your component issue to the "In Review" column and tag your issue as such. If we have notes for you, we will reply in the Issue, you'll make the changes and and open a new PR. Once the PR is merged and approved, you can send a Venmo request to `@funkhaus` or a PayPal invoice to `whatsup@funkhaus.us`. Be sure to include your issue number and component name in the payment request.

## How to get paid

Once your component PR has been approved and merged, you can send a Venmo request to `@funkhaus` or a PayPal invoice to `whatsup@funkhaus.us`. Be sure to include your issue number and component name in the payment request. We will pay you within 24 hours.

## Timeline

Most components should take between 2-4 hours to complete. So please don't accept a component unless you plan on finishing it within the next 72 hours. If more than 472 hours pass since starting on a component, you will be removed from the component and it's free for someone else to claim.

We will only pay for complete and approved components.

### Code styleguide and expectations

Each project branch includes a Project Specification and an Agency Specification in the Storybook. The Agency specification is essential the Funkhaus styleguide, and it doesn't change often. The Project Specification is unique to each project and covers things like fonts and colors used on the project, be sure to read both.

In general, each component should meet the following conditions.

-   Here is a whitelist of approved outside libraries, please get approval for any others:
    -   [lodash](https://lodash.com/):
    -   Be sure to only import functions you need
-   [vue-prlx](http://vue-prlx.surge.sh/):
-   Sorry, no Tailwind (yet).
-   What about animations?
    -   Almost all transitions you'll be asked to do can be completed with the Vue `<transition>` component and it's CSS or JS hooks.
    -   Please no GASP/Pop/Anime without approval.
-   This repo has linting built in, please use it.

We encourage the use of TODO, FIXME, NOTE, QUESTION etc. At Funkhaus use Atom and the [TODO-SHOW](https://atom.io/packages/todo-show) package.

#### Funkhaus best practices

[Here is a general overview of best practices at Funkhaus](https://docs.google.com/presentation/d/1xMqvylzoIwpEgwFEpXI8it_HGo7BUGrt8h65E0nvEQo/edit?usp=sharing), please consider these when building a component.

### Mock data

All our data generally comes our of WordPress using the WP-GQL. But we've setup some ways to access the data easily.

#### Import file

The file `db.json` found in `src/static` of this repo can used in your Storybook components. It includes mocks for various types of data we commonly use.

It's best to look at [the sample `<work-block>` component](https://github.com/funkhaus/factory/tree/master/src/components/Issue-1 - WorkBlock) to see how to use the API to mock data.

## Resources

Include some good things to read here.

1.  Code examples?
1.  CSS guides?
1.  Vue/Nuxt docs?

## TODO

-   Create sample project, issue and component.
-   Build out GitHub issue tags for things like difficulty level, budget, ready for code review etc.
-   Make sure Storybook works like we want it to, linting, (maybe remove test for now?),
-   Add breakpoints to Storybook?
-   Sample component for Storybook, use mock data.
    -   Update Mock data instructions with new Storybook example.
-   Allow some global components for mock purposes? Like WpImage and NuxtLink.
-   Figure out how to have some base.scss or vars.scss files global included, for breakpoints definitions and fonts?
    -   Use webfontloader for fonts [see here](https://github.com/typekit/webfontloader).
