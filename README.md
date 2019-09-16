# HD-Smooth-Scroll

Enable smooth scroll effect on your website. This is a PlainJS solution. No JQuery required.

Smooth scrolling describes a behavior, when a link that references an element on the same webpage is clicked on. These links usually contain a hashtag, plus the id of the referenced section. Normally, on clicking such a hashtag-link, the browser jumps immediately to the desired section. Smooth scroll causes the window to move towards the section with a smooth transistion.

``` HTML
<!-- on clicking this link, the browser will jump to the element, with id="section2" -->
<a href="#section2">Go to section 2</a>

...

<div id="section2"></div>
```

## Installation

Just download the minified file: [download](./hd-smooth-scroll.min.js)

Then add it to your website. It doesn't matter where you put it. However putting all JS-Files at the bottom of the HTML-document is recommended.

``` HTML
<!DOCTYPE html>
<html>
    <head>...</head>
    <body>
        ...
        <script src="hd-smooth-scroll.min.js">
    </body>
<html>
```

## Usage

This plugin works automatically! Just integrate it to your website and smooth scrolling will work automatically for all links, that reference an element on the page.

*Note:* If a link references just the current page, the window will scroll to the top of the page.

``` HTML
<a href="#">To Page Top</a>
```