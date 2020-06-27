# Make Make Entertainment

This is a website for {clientName}. They are a {companyType} based in {companyLocation}.

## Designs

-   Desktop: https://xd.adobe.com/view/7151981e-160b-4249-53ed-9dc365d20fa8-0760/
-   Mobile: https://xd.adobe.com/view/fdfa03f9-36db-4e2f-5200-19ec6adc2d57-8bcb/

Email drew@funkhaus.us for the password.

## CSS vars

These CSS vars should be used for styling common elements.

```
    // Common colors
    --color-company (changes throughout site)
    --color-black (used as alternate to company color)

    // These are common measurements used on the site
    --unit-100vh (use instead of 100vh always)
    --unit-gutter (40px)
    --unit-max-width (1800px)
```

## Fonts

Font's families are defined as CSS vars already, but the following weights are available:

```
    RM Neue (sans-serif)
    - 300 (regular, italic)
    - 400 (regular, italic)
    - 600 (regular)
    - 900 (regular)

```

## Breakpoints

The site uses the following breakpoints:

```
    // Device supports hovers
    @media #{$has-hover} {

    }

    // Screen greater-than 1800px wide
    @media #{$gt-wide} {

    }

    // Screen less-than 1024px wide
    @media #{$lt-tablet} {

    }
```
