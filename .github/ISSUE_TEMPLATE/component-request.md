---
name: Component Request
about: Describe this issue template's purpose here.
title: Component Request - {componentName} - ${budget}
labels: 'component request'
assignees: ''

---

## Component Description 

This component is used {where} to display {what}.

## Design

Please also see attached screenshots for quick reference. 

Desktop: https://xd.adobe.com/view/1234-5678/
Mobile: https://xd.adobe.com/view/1234-5678/

If no mobile designs provided, please use your best judgment for responsiveness. 

## Props

```
props: {
    exampleObject: {
        type: Object,
        default: () => {}
        // Mock: https://my-json-server.typicode.com/funkhaus/factory/posts/1
    },
    exampleArray: {
        type: Array,
        default: () => []
        // Mock: https://my-json-server.typicode.com/funkhaus/factory/posts/1
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

## Nested components

List out any components that are used by this new component. For example, if you are building a grid that is made up of block components. 

  1. `nested-component` is used for {what}

## Budget

I expect this to take {x} hours to complete, and will pay ${y} for it.
