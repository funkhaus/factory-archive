---
name: Component Request
about: used to define a component that a developer can build.
title: Component Request - {componentName} - {x}hrs
labels: component request, available
assignees: ''

---

## Component Description

This component is used {where} to display {what}.

## Design

Please also see attached screenshots for quick reference.

- Desktop: https://xd.adobe.com/view/1234-5678/
- Mobile: https://xd.adobe.com/view/1234-5678/

If no mobile designs provided, please use your best judgment for responsiveness.

Email {projectOwnerEmail} for the design password.

## Props

```
props: {
    exampleObject: {
        type: Object,
        default: () => {}
        // Mock: api.page
    },
    exampleArray: {
        type: Array,
        default: () => []
        // Mock: api.pages
    },
    exampleNumber: {
        type: Number,
        default: 0
    },
    exampleString: {
        type: String,
        default: ""
    },
    exampleBoolean: {
        type: Boolean,
        default: true
    }
}
```

## Events

Describe any events that should be emitted by this component.

  1. `menuOpened` when {something} is clicked on

## Required components

List out any components that are used by this new component. For example, if you are building a grid that is made up of block components.

  1. `required-component` is used for {what}

## Time & Budget

I expect this to take {x} hours to complete, and will pay ${y} for it.
