---
layout: page
title: Projects
subtitle: A selection of my recent work
permalink: /projects/
---

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {% for project in site.projects %}
  <article class="card group">
    <a href="{{ project.url | relative_url }}" class="block">
      <div class="relative overflow-hidden aspect-video">
        {% if project.image %}
        <img 
          src="{{ project.image | relative_url }}" 
          alt="{{ project.title }}"
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        >
        {% else %}
        <div class="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center">
          <svg class="w-16 h-16 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
        {% endif %}
        <div class="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div class="p-6">
        <div class="flex items-center space-x-2 mb-3">
          {% for category in project.categories limit:2 %}
          <span class="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded">{{ category }}</span>
          {% endfor %}
        </div>
        <h3 class="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">{{ project.title }}</h3>
        <p class="text-secondary-600 dark:text-secondary-400 line-clamp-2">{{ project.excerpt | strip_html }}</p>
      </div>
    </a>
  </article>
  {% endfor %}
</div>
