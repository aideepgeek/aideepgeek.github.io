---
layout: page
title: Blog
subtitle: Thoughts, tutorials, and insights about web development and design
permalink: /blog/
---

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {% for post in site.posts %}
  <article class="card group">
    <a href="{{ post.url | relative_url }}" class="block">
      <div class="relative overflow-hidden aspect-video">
        {% if post.image %}
        <img 
          src="{{ post.image | relative_url }}" 
          alt="{{ post.title }}"
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        >
        {% else %}
        <div class="w-full h-full bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-800 dark:to-secondary-700 flex items-center justify-center">
          <svg class="w-16 h-16 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
          </svg>
        </div>
        {% endif %}
      </div>
      <div class="p-6">
        <div class="flex items-center space-x-4 mb-3 text-sm text-secondary-500 dark:text-secondary-400">
          <span class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {{ post.date | date: "%B %d, %Y" }}
          </span>
        </div>
        <h3 class="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">{{ post.title }}</h3>
        <p class="text-secondary-600 dark:text-secondary-400 line-clamp-2">{{ post.excerpt | strip_html }}</p>
      </div>
    </a>
  </article>
  {% endfor %}
</div>
