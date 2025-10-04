document.addEventListener('DOMContentLoaded', () => {
  const state5Radio = document.getElementById('state-5');
  const backgroundMusic = document.getElementById('background-music');

  const handleStateChange = () => {
    if (state5Radio.checked) {
      // Attempt to play the music when the "Together" state is active
      backgroundMusic.play().catch(error => {
        console.log("Autoplay prevented:", error);
        // Fallback for strict autoplay policies: user interaction required
      });
    } else {
      // Pause and reset the music when navigating away from the "Together" state
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0; 
    }
  };

  // Listen for changes in the radio buttons (i.e., when a "flip" button is clicked)
  document.querySelectorAll('input[name="card-state"]').forEach(radio => {
    radio.addEventListener('change', handleStateChange);
  });

  // Handle initial state on load
  if (state5Radio.checked) {
      handleStateChange();
  }
});