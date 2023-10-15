      // JavaScript code goes here
      // For example, let's display an alert when the page loads
      window.onload = function() {
        alert("Listen to some great South African music!");
      };
		
	  const audio = document.querySelector("audio");
      document.getElementById("rate").addEventListener("change", (e) => {
      audio.playbackRate = e.target.value;
      });
      document.getElementById("pitch").addEventListener("change", (e) => {
      audio.preservesPitch = e.target.checked;
      });