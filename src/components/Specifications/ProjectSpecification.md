# Doomsday

This is a website for Doomsday. They are a production company based in Los Angeles.

## Designs

-   Desktop: https://xd.adobe.com/view/c0d9243f-2f1f-4b20-614b-bef83eff7c19-b6e8/grid
-   Mobile: https://xd.adobe.com/view/dd5e5638-85b6-40a8-4caa-797e6dbe406a-ab6f/grid

Email drew@funkahus.us for the password to the design files.

## Design References

All [the SVG's can be found here](https://www.dropbox.com/sh/j5ddp8f4w8l3ii3/AAAZ1BC1JIgUBC2IKikh9xD2a?dl=0).

Here are some example links for the director roster to director landing page transition.

1.  [Maman Corp](https://www.maman-corp.com). - It positions type on scroll, rather than click.
1.  [Studio Augmenta](https://studioaugmenta.com/) - This example is a little jumpy, but kinda of what I was thinking
1.  [Moon Safari](https://www.moonsafari.archi/projets/) - When you click on the text, it stays in the same spot when the next page loads

## CSS vars

CSS vars are defined in `@/styles/global.scss`, you should review that file before you begin. If there are any common variables you think are missing, please let us know.

## Fonts

Font's families are defined as CSS vars above, but the following weights are available:

```
--font-primary: Favorit
- 400 (book, italic)

--font-secondary: Secondary: Druk Wide
- 500 (book, italic)
- 700 (book, italic)
```

You can also see what fonts are available in `@/styles/fonts.css`.

## Breakpoints

The site uses the following breakpoints:

```
$gt-wide: "only screen and (min-width: 1800px)";
$lt-tablet: "only screen and (max-width: 1024px)";
$lt-phone: "only screen and (max-width: 750px)";
$lt-phone-landscape: "only screen and (max-width: 750px) and (orientation: landscape)";
$has-hover: "(hover: hover)";
```
