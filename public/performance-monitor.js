// Performance monitoring script
(function() {
  'use strict';
  
  // Monitor Core Web Vitals
  function measureWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Monitor page load performance
  function measurePageLoad() {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        console.log('Time to First Byte:', navigation.responseStart - navigation.requestStart);
      }
    });
  }

  // Monitor image loading performance
  function measureImagePerformance() {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      img.addEventListener('load', () => {
        console.log(`Image ${index + 1} loaded in:`, performance.now());
      });
    });
  }

  // Initialize monitoring
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      measureWebVitals();
      measurePageLoad();
      measureImagePerformance();
    });
  } else {
    measureWebVitals();
    measurePageLoad();
    measureImagePerformance();
  }
})();
