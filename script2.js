// Team Modal Functions
function openTeamModal() {
  document.getElementById("teamModal").style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

function closeTeamModal() {
  document.getElementById("teamModal").style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("teamModal");
  if (event.target == modal) {
    closeTeamModal();
  }
};
