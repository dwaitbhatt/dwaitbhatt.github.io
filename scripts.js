// Hover video effects - automatically handles all projects with hover videos
document.addEventListener('DOMContentLoaded', function() {
  const itemsWithHover = document.querySelectorAll('[data-hover-video]');
  
  itemsWithHover.forEach(item => {
    // Find the video container (.two) - search within the row
    const videoElement = item.querySelector('.two');
    if (!videoElement) {
      console.warn('Video container not found for:', item);
      return;
    }
    
    const video = videoElement.querySelector('video');
    if (!video) {
      console.warn('Video element not found for:', item);
      return;
    }
    
    // Ensure video is hidden and paused initially
    videoElement.style.opacity = "0";
    videoElement.style.transition = "opacity 0.2s ease-in-out";
    video.pause();
    video.currentTime = 0;
    
    // Load video metadata when user hovers (for better performance)
    let videoLoaded = false;
    
    item.addEventListener('mouseenter', function() {
      // Load video if not already loaded
      if (!videoLoaded) {
        video.load();
        videoLoaded = true;
      }
      
      // Show and play video
      videoElement.style.opacity = "1";
      video.currentTime = 0;
      
      // Use requestAnimationFrame to ensure opacity is set before playing
      requestAnimationFrame(function() {
        video.play().catch(function(error) {
          // Handle autoplay restrictions
          console.log("Video autoplay prevented:", error);
        });
      });
    });
    
    item.addEventListener('mouseleave', function() {
      videoElement.style.opacity = "0";
      video.pause();
    });
  });
});

