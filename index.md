---
layout: page
title: About
tagline: me.
---
{% include JB/setup %}

## Some Stuff

Here's where I'll post an introduction to the site talking about how/why/when I post things.

If Liquid is parsing things correctly a post list should show up below:

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

Here I'm testing to see if I can get away with not using JS to fill the viewport. Maybe content will fill it, let's see.

Wow.

Is it working?

## NOW IT IS

## NOW IT IS

## NOW IT IS

## NOW IT IS

## NOW IT IS

## NOW IT IS

## NOW IT IS

## NOW IT IS
## NOW IT IS
## NOW IT IS

## NOW IT IS