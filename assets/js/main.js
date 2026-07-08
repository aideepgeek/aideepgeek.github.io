// Main JavaScript file for Modern Jekyll Theme

// Dark mode toggle functionality
document.addEventListener('alpine:init', () => {
  Alpine.data('darkMode', () => ({
    dark: false,
    
    init() {
      this.dark = localStorage.getItem('theme') === 'dark' || 
                  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.updateTheme();
    },
    
    toggle() {
      this.dark = !this.dark;
      localStorage.setItem('theme', this.dark ? 'dark' : 'light');
      this.updateTheme();
    },
    
    updateTheme() {
      document.documentElement.classList.toggle('dark', this.dark);
    }
  }));
});

// Mobile menu functionality
document.addEventListener('alpine:init', () => {
  Alpine.data('mobileMenu', () => ({
    open: false,
    
    toggle() {
      this.open = !this.open;
      document.body.classList.toggle('overflow-hidden', this.open);
    },
    
    close() {
      this.open = false;
      document.body.classList.remove('overflow-hidden');
    }
  }));
});

// Search functionality
document.addEventListener('alpine:init', () => {
  Alpine.data('search', () => ({
    open: false,
    query: '',
    results: [],
    
    init() {
      this.$watch('open', value => {
        if (value) {
          this.$nextTick(() => {
            this.$refs.searchInput.focus();
          });
        }
      });
    },
    
    search() {
      if (this.query.length < 2) {
        this.results = [];
        return;
      }
      
      // Simple search implementation
      // In production, you might want to use Lunr.js or Algolia
      const posts = window.searchIndex || [];
      this.results = posts.filter(post => 
        post.title.toLowerCase().includes(this.query.toLowerCase()) ||
        post.content.toLowerCase().includes(this.query.toLowerCase())
      ).slice(0, 5);
    },
    
    close() {
      this.open = false;
      this.query = '';
      this.results = [];
    }
  }));
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.removeAttribute('loading');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
});

// Copy code functionality
document.querySelectorAll('pre code').forEach(codeBlock => {
  const button = document.createElement('button');
  button.className = 'copy-button';
  button.innerHTML = `
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
    </svg>
  `;
  
  button.addEventListener('click', () => {
    navigator.clipboard.writeText(codeBlock.textContent).then(() => {
      button.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      `;
      setTimeout(() => {
        button.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
        `;
      }, 2000);
    });
  });
  
  codeBlock.parentElement.style.position = 'relative';
  codeBlock.parentElement.appendChild(button);
});

// Reading progress indicator
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    progressBar.style.width = scrolled + '%';
  }
});

// Table of Contents generation
function generateTOC() {
  const content = document.querySelector('.prose-custom');
  const toc = document.getElementById('toc');
  
  if (!content || !toc) return;
  
  const headings = content.querySelectorAll('h2, h3, h4');
  
  if (headings.length === 0) {
    toc.parentElement.style.display = 'none';
    return;
  }
  
  const ul = document.createElement('ul');
  ul.className = 'space-y-2';
  
  headings.forEach(heading => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    a.href = '#' + heading.id;
    a.textContent = heading.textContent;
    a.className = 'block py-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors';
    
    if (heading.tagName === 'H3') {
      a.className += ' pl-4';
    } else if (heading.tagName === 'H4') {
      a.className += ' pl-8';
    }
    
    li.appendChild(a);
    ul.appendChild(li);
  });
  
  toc.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', generateTOC);

// External links open in new tab
document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.href.includes(window.location.hostname)) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});
