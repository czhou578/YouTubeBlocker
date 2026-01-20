# Blocking Out YouTube with CSS

Today, I will show you a cool project for aficionados of CSS: a Google Chrome YouTube home blocker extension that helps you avoid distractions and stay focused.

We all have problems staying focused and getting distracted especially by the recommendations on YouTube's homepage. This CSS snippet will hide the homepage content and recommendations on the video page, allowing you to visit YouTube only when you intend to watch specific videos.

## Global Styles

First, we need to set some global styles to ensure that certain colors are applied globally, and that certain elements are hidden by default. Refer to the `youtubecss.css` file for the complete code.

## Hompage Blocker

For the homepage blocker, I targeted the main content area of YouTube's homepage. The following CSS code hides the main content area, leaving only the header and search bar visible:

```css
/*checked*/
#video-title-link ytd-rich-grid-media[mini-mode] h3.ytd-rich-grid-media {
  cursor: pointer !important;
  pointer-events: none !important;
}

/*checked*/
#details.ytd-rich-grid-media {
  cursor: default !important;
  pointer-events: none !important;
}

/*checked*/
img.yt-img-shadow {
  visibility: hidden !important;
}

.title.ytd-guide-entry-renderer,
img.yt-img-shadow,
ytd-guide-entry-renderer[line-end-style="dot"]
  #newness-dot.ytd-guide-entry-renderer {
  visibility: hidden !important;
}

ytd-guide-entry-renderer,
#guide-section-title.ytd-guide-section-renderer {
  cursor: default !important;
  pointer-events: none !important;
  visibility: hidden !important;
}

/*checked*/
#video-title.ytd-rich-grid-media {
  visibility: hidden !important;
}

/* checked */
#avatar.ytd-rich-grid-media {
  visibility: hidden !important;
}

/* checked */
.badge.ytd-badge-supported-renderer {
  visibility: hidden !important;
}

/* checked */
#button.ytd-menu-renderer yt-icon.ytd-menu-renderer {
  visibility: hidden !important;
}

/* checked */
ytd-thumbnail #thumbnail.ytd-thumbnail {
  cursor: default !important;
  visibility: hidden !important;
}

/*checked*/
ytd-thumbnail.ytd-rich-grid-media:before {
  visibility: hidden !important;
}
/*checked*/
#text-container.ytd-channel-name,
ytd-rich-grid-media[mini-mode] #video-title.ytd-rich-grid-media {
  visibility: hidden !important;
}

/*checked*/
ytd-video-meta-block.grid #metadata.ytd-video-meta-block,
ytd-video-meta-block.compact #metadata.ytd-video-meta-block,
.ytd-video-meta-block[meta-block].grid.ytd-video-meta-block
  #metadata.ytd-video-meta-block,
.ytd-video-meta-block[meta-block].compact.ytd-video-meta-block
  #metadata.ytd-video-meta-block {
  visibility: hidden !important;
}

#additional-metadata-line.ytd-video-meta-block {
  visibility: hidden !important;
}

ytd-toggle-button-renderer #button.ytd-toggle-button-renderer {
  visibility: hidden !important;
}

#buttons.ytd-rich-grid-media > *.ytd-rich-grid-media {
  visibility: hidden !important;
}

/*checked*/
#text.complex-string.ytd-channel-name {
  visibility: hidden !important;
}

/*checked*/
yt-formatted-string[has-link-only_]:not([force-default-style])
  a.yt-simple-endpoint.yt-formatted-string:visited {
  visibility: hidden !important;
}

/*checked*/
#metadata-line.ytd-video-meta-block span.ytd-video-meta-block {
  visibility: hidden !important;
}

/*checked*/
#container.ytd-channel-name {
  /* visibility: hidden !important; */
  display: none !important;
}

/*checked*/
ytd-video-meta-block.grid #channel-name.ytd-video-meta-block,
.ytd-video-meta-block[meta-block].grid.ytd-video-meta-block
  #channel-name.ytd-video-meta-block {
  visibility: hidden !important;
}

#byline-container.ytd-video-meta-block {
  visibility: hidden !important;
}

ytd-video-meta-block,
.ytd-video-meta-block[meta-block] {
  visibility: hidden !important;
}

#title.ytd-rich-shelf-renderer,
#subtitle.ytd-rich-shelf-renderer {
  visibility: hidden !important;
}
```

What the above code does is that it hides various elements on the YouTube homepage, including video titles, thumbnails, channel names, and metadata.

What you will see often in this article is that I use !important to override the default CSS properties. It works in this case because YouTube uses inline styles that have high specificity. In real practice, you want to avoid using !important as much as possible to maintain manageable CSS.

## Recommendation Blocker

The recommendation blocker works similarly by targeting the recommendation section on the video page. The following CSS code hides the recommendation section:

```css
img.yt-img-shadow {
  visibility: visible !important;
}

ytd-compact-video-renderer #video-title.ytd-compact-video-renderer {
  visibility: hidden !important;
}

#text-container.ytd-channel-name {
  visibility: hidden !important;
}

#metadata-line.ytd-video-meta-block span.ytd-video-meta-block {
  visibility: hidden !important;
}

#button.ytd-menu-renderer yt-icon.ytd-menu-renderer {
  visibility: hidden;
}

ytd-thumbnail-overlay-time-status-renderer
  yt-icon.ytd-thumbnail-overlay-time-status-renderer {
  visibility: hidden;
}

ytd-compact-radio-renderer.use-ellipsis
  #video-title.ytd-compact-radio-renderer {
  visibility: hidden;
}

ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail {
  cursor: pointer !important;
  pointer-events: none !important;
  visibility: hidden !important;
  display: none !important;
}

ytd-thumbnail #thumbnail.ytd-thumbnail {
  cursor: pointer !important;
  pointer-events: none !important;
  visibility: hidden !important;
}

yt-chip-cloud-chip-renderer.yt-chip-cloud-renderer,
.details.ytd-compact-video-renderer,
.details.ytd-compact-radio-renderer,
ytd-button-renderer #button.ytd-button-renderer {
  cursor: default !important;
  pointer-events: none !important;
  visibility: hidden !important;
}

a.yt-simple-endpoint.ytd-button-renderer {
  visibility: visible;
}

#button.ytd-button-renderer
  yt-icon.ytd-button-renderer
  + yt-formatted-string.ytd-button-renderer,
ytd-button-renderer yt-formatted-string.ytd-button-renderer {
  visibility: visible !important;
}

#text.ytd-channel-name {
  visibility: hidden !important;
}

ytd-toggle-button-renderer #button.ytd-toggle-button-renderer {
  visibility: visible !important;
}

ytd-playlist-custom-thumbnail-renderer,
ytd-compact-playlist-renderer #video-title.ytd-compact-playlist-renderer {
  visibility: hidden !important;
}

ytd-thumbnail-overlay-side-panel-renderer,
yt-formatted-string.ytd-thumbnail-overlay-side-panel-renderer,
yt-icon.ytd-thumbnail-overlay-side-panel-renderer {
  visibility: hidden !important;
}

yt-img-shadow.empty img.yt-img-shadow {
  visibility: hidden !important;
  cursor: default !important;
}

.badge-style-type-verified-artist.ytd-badge-supported-renderer {
  visibility: hidden !important;
}

#movie-title.ytd-compact-movie-renderer,
.movie-metadata.ytd-compact-movie-renderer {
  visibility: hidden !important;
}

#name.ytd-author-comment-badge-renderer {
  visibility: visible !important;
}

ytd-compact-video-renderer:not([watch-feed-big-thumbs])
  ytd-thumbnail.ytd-compact-video-renderer {
  visibility: hidden !important;
}

yt-img-shadow.ytd-playlist-video-thumbnail-renderer {
  display: none !important;
}
```

This code hides various elements in the recommendation section, including video titles, thumbnails, channel names, and metadata.

## Undoing Some Changes

In some cases, you might want to undo some of the hiding effects for specific elements. For example, you would want to enable visibility for user video contexts (ex, when you navigate to your own channel adn want to see your own videos).

```css
ytd-thumbnail #thumbnail.ytd-thumbnail {
  visibility: visible !important;
  display: block !important;
}

img.yt-img-shadow {
  visibility: visible !important;
}

#text-container.ytd-channel-name {
  visibility: visible !important;
}

#container.ytd-channel-name {
  visibility: visible !important;
  display: block !important;
}
```

In another case, you definitely want to see the search results when you perform a search on YouTube. The following CSS code will ensure that the search results are visible:

```css
ytd-video-renderer[use-prominent-thumbs] ytd-thumbnail.ytd-video-renderer {
  visibility: visible !important;
}

ytd-thumbnail #thumbnail.ytd-thumbnail {
  cursor: pointer !important;
  visibility: visible !important;
}

img.yt-img-shadow {
  visibility: visible !important;
}

.yt-simple-endpoint {
  display: block !important;
  visibility: visible !important;
}

ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail {
  visibility: visible !important;
}

/* watch this */
#metadata-line.ytd-video-meta-block span.ytd-video-meta-block {
  visibility: visible !important;
}

#text-container.ytd-channel-name,
ytd-rich-grid-media[mini-mode] #video-title.ytd-rich-grid-media,
#container.ytd-channel-name {
  visibility: visible !important;
  display: block !important;
}

yt-img-shadow.empty img.yt-img-shadow {
  visibility: visible !important;
}

ytd-guide-entry-renderer,
#guide-section-title.ytd-guide-section-renderer {
  visibility: visible !important;
}
```

Now, with the CSS completed, I assembled the Chrome extension by following the standard procedure of creating a `manifest.json` file and including the home CSS file as a content script.

The `content.js` file is responsible for sending messages to the background script to inject the CSS file when the user navigates to YouTube pages. Depending on the URL, the background script will send code words like "user" or "home" to indicate which CSS file to inject.

We let the `background.js` inject the CSS file into YouTube pages depending on the request message from the content script.

Thats it! Once the extension is loaded into Chrome, it effectively blocks out distractions on YouTube, allowing for a more focused viewing experience.

You can find the complete code for this project on my [GitHub repository](https://github.com/czhou578/YouTubeBlocker)

Feel free to customize the CSS further to suit your needs. Happy coding!

Colin Zhou
