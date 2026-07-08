# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "modern-jekyll-theme"
  spec.version       = "1.0.0"
  spec.authors       = ["DeepGeekAI"]
  spec.email         = ["aideepgeek@gmail.com"]

  spec.summary       = "A modern, fast, and responsive Jekyll theme built with Tailwind CSS and Alpine.js"
  spec.description   = "Modern Jekyll Theme is a sleek, minimalist theme designed for developers, designers, and creatives. It features Tailwind CSS for styling, Alpine.js for interactivity, and optimal performance with 100/100 Lighthouse scores."
  spec.homepage      = "https://github.com/aideepgeek/modern-jekyll-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
  spec.add_runtime_dependency "jekyll-paginate-v2", "~> 3.0"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.0"
end
