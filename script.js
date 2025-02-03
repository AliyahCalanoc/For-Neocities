// Function to toggle the visibility of the content inside each collage item
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    // Toggle the visibility of the extra content
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";  // Show content
    } else {
        content.style.display = "none";   // Hide content
    }
}
