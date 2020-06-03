# factory

The Funkhaus component Factory - a proof of concept for an upcoming component marketplace

Explain what this repo is for. Mention James Lee.

## How to install Storybook

Install instructions go here.

## How to accept a Component Request

## How to submit a finished Component for review

## How to get paid

Venmmo or PayPal

## References

### Code styleguide and expectations

No outside libraries
Lodash allowed, give examples of how.
Give a whitelist?
What about animations?
Explain included Linting config etc..

### Fonts

How to give out fonts to Devs?

### Funkhaus best practices

Explain this: https://docs.google.com/presentation/d/1xMqvylzoIwpEgwFEpXI8it_HGo7BUGrt8h65E0nvEQo/edit?usp=sharing

### Mock data

All our data generally comes our of WordPress using the WP-GQL. But we've setup some ways to access the data easily.

#### Option 1 - Import file

The file `db.json` found in the root of this repo can be downloaded, and used in your components like this:

```
<template>
    <example-component :prop-name="api.pages"/>
<template>

<script>
import mockApi from "~/assets/db.json"
export default {
    data() {
        return {
            api: mockApi
        }
    }
}
</script>
```

#### Option 2 - API endpoints

Alternatively, you can access this the mock API via Typicode's JSON server like so:

- https://my-json-server.typicode.com/funkhaus/factory/image
- https://my-json-server.typicode.com/funkhaus/factory/images
- https://my-json-server.typicode.com/funkhaus/factory/images/cG9zdDoyODk=
- https://my-json-server.typicode.com/funkhaus/factory/page
- https://my-json-server.typicode.com/funkhaus/factory/pages

These endpoints just map to the contents of `db.json`, so feel free to dig into that file to find what you need.

TODO:

- Array of ACF logos

## TODO

- Finish this documentation
- Setup GitHub issue templates for Component Request: https://help.github.com/en/github/building-a-strong-community/configuring-issue-templates-for-your-repository
- Build out GitHub issue tags for things like difficulty level, budget, ready for code review etc.
