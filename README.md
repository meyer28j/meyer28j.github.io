# meyer28j.github.io

## Compilation

You can compile the SASS files by running ```sass sass/main.scss main.css```

## Assignment 4 Changes

The primary ```styles.css``` file was refactored into many partial SASS files under ```sass/``` then collected and compiled through ```sass/main.scss``` into the final stylesheet ```main.css```. The SASS files are organized by function rather than section, with classes being modified in specific ways within each partial file.

Partial SASS files:
1. ```\_colors.scss``` - stores all variables for colors to be applied in other partials.
2. ```\_spacing.scss``` - stores all variables for padding and margin spacing to be applied in other partials.
3. ```\_layout.scss``` - handles grid/flexbox layout parameters for all major sections and containers, including layout changes at breakpoints. It does NOT include some flexbox structures used for small components, such as aligning logos within their container or aligning an image for a particular section.
4. ```\_components.scss``` - configures all generic component classes such as cards and split-screen.
5. ```\_base.scss``` - applies the other partials and handles the foundational elements, such as applying color, font, spacing, etc.
6. ```main.scss``` - imports partials to be compiled into the final main.css.


## Assignment 3 Changes

This assignment changed many of the flexbox/CSS grid structures as needed. In many places, flexbox was introduced to simply center content or line up one or two elements in a row. 

Media queries were added for tablet and desktop view. Much of the "work" done to make the desktop view look nice is done in the tablet breakpoint CSS but with overflow allowed so for some sections no extra code was needed for the desktop breakpoint.

Some content still does not match the wireframes as many of the content was shuffled around when moving everything to one page.

### Browser Testing

This webpage was tested on:
1. Firefox
2. Brave (Chromium)

No issues were seen.

## Assignment 2 Changes

1. All pages combined to reduce content amount
    - resulted in a mashup of original leader-content from homepage wireframe with content on each individual page wireframe
    - 

2. Instead of hiding sidebar on mobile, use it to replace the "Here's my resume" sections
    - effectively the same thing, but sidebar includes extra content not present in the "Here's my resume" sections


