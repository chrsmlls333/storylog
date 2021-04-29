# StoryLog

[![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) ![GENERATOR](https://img.shields.io/badge/made_with-jekyll-blue.svg) ![VERSION](https://img.shields.io/badge/current_version-1.0-green.svg) ![TRAVIS-CI](https://travis-ci.org/chrsmlls333/storylog.svg?branch=gh-pages)

Storylog is a minimalist, middle-running Jekyll theme designed for a writer's website, with discrete stories/parts/chapters and blog posts as well!

Based on [Textlog](https://github.com/heiswayi/textlog) by [Heiswayi Nrird](https://github.com/heiswayi)

**Demo:** https://chrsmlls333.github.io/storylog/

![SCREENSHOT](https://via.placeholder.com/250)

## Features

- Content-focused post layout
- Easily navigable overviews and feeds for posts and stories
- Pagination between posts or chapters
- Smart handling of stories in a Jekyll Collection
    - Each Story is a metadata doc
    - Story content is defined by matching Chapters, which can be arranged in Parts
    - Stories are supported by custom Ruby plugins to simplify the process
    - Stories can be viewed by Chapter or as one FullStory
- Clean design
- Dark Mode with smooth transition using mostly plain CSS
- Using system fonts like GitHub - no Google Fonts
- Supports article tagging
- Contains intro section on homepage
- Supports comment if enabled 
    - Disqus
    - Commento
    - Discord Forwarding
- Responsive and mobile-friendly

## Setup
- Install [RVM](https://rvm.io/)
- `rvm install 2.7`
- `rvm use 2.7`
- `gem install bundler -v 2.1.4`
- `bundle config set --local path 'vendor/bundle'` (optional)
- `bundle install`
- `bundle exec jekyll serve`

## License

[MIT](LICENSE.md)
