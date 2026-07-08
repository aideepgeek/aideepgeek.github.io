---
layout: page
title: Services
subtitle: Comprehensive digital solutions for your business
permalink: /services/
---

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {% for service in site.services %}
  <article class="card group p-8 text-center hover:-translate-y-1 transition-transform duration-300">
    {% if service.icon %}
    <div class="w-16 h-16 mx-auto mb-6 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
      <span class="text-3xl">{{ service.icon }}</span>
    </div>
    {% endif %}
    <h3 class="text-xl font-bold text-secondary-900 dark:text-white mb-3">{{ service.title }}</h3>
    <p class="text-secondary-600 dark:text-secondary-400 mb-6">{{ service.excerpt | strip_html | truncate: 120 }}</p>
    <a href="{{ service.url | relative_url }}" class="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline">
      Learn More
      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </a>
  </article>
  {% endfor %}
</div>

<!-- CTA Section -->
<div class="mt-16 p-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl text-center">
  <h3 class="text-2xl font-bold text-white mb-4">Need something custom?</h3>
  <p class="text-white/80 mb-6 max-w-2xl mx-auto">I offer tailored solutions to meet your specific needs. Let's discuss how I can help you achieve your goals.</p>
  <a href="{{ '/contact/' | relative_url }}" class="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-secondary-50 transition-colors duration-200 shadow-lg">
    Get in Touch
    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  </a>
</div>
