---
layout: default
---
# 読んだ本

<ul class="list">
{% for post in site.posts %}
    <li class="list-item">
        <a href="{{ post.url }}">
            <div class="list-item-box">
                <div class="title">{{ post.title }}</div>
                <div class="description">{{ post.excerpt }}</div>
                <div class="post-date">{{ post.date | date_to_long_string }}</div>
            </div>
        </a>
    </li>
{% endfor %}
</ul>
