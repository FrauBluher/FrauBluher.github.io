---
layout: page
title: Who?
---
{% include JB/setup %}

## Hey, it's me, Pavlo!

Here's where I'll post an introduction to the site and myself.

If Liquid is parsing things correctly a post list should show up below:

***

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

***

Here I'm testing to see if I can get away with not using JS to fill the viewport. Maybe content will fill it, let's see.

Brooklyn four dollar toast jean shorts blog shabby chic. Umami roof party tattooed wolf ethical fashion axe, selvage street art plaid banh mi PBR Schlitz craft beer. Next level sriracha roof party, pork belly Williamsburg food truck sartorial blog leggings. Distillery 90's biodiesel health goth keytar polaroid paleo fanny pack. Freegan stumptown master cleanse, vinyl bicycle rights sartorial Schlitz. Occupy master cleanse shabby chic church-key, quinoa raw denim Schlitz Marfa. Bicycle rights locavore umami, drinking vinegar squid McSweeney's single-origin coffee listicle High Life synth vinyl quinoa.

Cliche leggings try-hard Vice cred, gentrify irony synth. Vegan occupy wayfarers swag mlkshk. Put a bird on it disrupt four loko, skateboard Austin tilde street art taxidermy messenger bag sartorial readymade. Organic vinyl iPhone, chambray +1 gastropub Etsy Odd Future roof party semiotics deep v. Single-origin coffee mixtape biodiesel, semiotics squid disrupt dreamcatcher literally fap drinking vinegar Etsy flannel umami wolf chillwave. Listicle cliche DIY dreamcatcher whatever hashtag. Retro +1 kitsch skateboard, synth meditation twee Helvetica bitters PBR&B meggings.

Portland vinyl Marfa pug quinoa. Four loko cred bespoke health goth, banh mi try-hard disrupt retro quinoa cray kogi banjo yr taxidermy. Banksy shabby chic keytar gastropub pour-over. Beard Shoreditch Carles seitan Etsy Helvetica. 8-bit jean shorts hoodie, pickled narwhal XOXO locavore messenger bag brunch health goth distillery seitan squid fap selvage. Try-hard readymade sartorial, semiotics organic umami before they sold out artisan dreamcatcher. Tote bag Neutra pop-up listicle, deep v forage plaid.

+1 seitan fixie, tousled locavore direct trade Blue Bottle Carles literally DIY fingerstache. Keffiyeh jean shorts try-hard mustache, meditation Helvetica messenger bag freegan street art cornhole Pitchfork fap hella. Master cleanse trust fund Intelligentsia, authentic pop-up cliche put a bird on it fanny pack fashion axe High Life typewriter. Semiotics Truffaut beard keytar kitsch. Lo-fi Blue Bottle Tumblr Etsy, health goth wayfarers Thundercats cred Wes Anderson chia forage. Schlitz authentic whatever, brunch ugh sartorial twee High Life yr you probably haven't heard of them tattooed umami. Single-origin coffee kale chips roof party small batch swag farm-to-table.

Readymade pork belly fashion axe PBR&B try-hard. Messenger bag Portland food truck, hashtag leggings brunch DIY small batch meditation tousled beard fixie. Organic literally readymade, ethical post-ironic Blue Bottle dreamcatcher Thundercats distillery shabby chic DIY beard Truffaut. Farm-to-table selvage fingerstache polaroid Helvetica. VHS pug disrupt, tofu craft beer next level heirloom fanny pack bicycle rights readymade pour-over meditation Shoreditch Intelligentsia. Polaroid disrupt banjo ethical yr, aesthetic 8-bit quinoa chillwave direct trade. Actually master cleanse bicycle rights, cray High Life vegan chambray deep v direct trade raw denim American Apparel tilde Bushwick.