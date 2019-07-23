---
layout: default
---
# お品書き

<ul>
{% for post in site.posts %}
    <li>
        <a href="{{ post.url }}">{{ post.date | date_to_long_string }} {{ post.title }}</a>
        <p>{{ post.excerpt }}</p>
    </li>
{% endfor %}
</ul>
