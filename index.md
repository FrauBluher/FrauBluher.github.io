---
layout: page
title: Who?
---
{% include JB/setup %}

## Hey, it's me, Pavlo!

[Here's my short CV.](http://pavlo.me/pavlo-manovi-cv-short.pdf)

Recent Posts:

***

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

***


