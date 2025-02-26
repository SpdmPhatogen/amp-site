function toggleDropdown(dropdownId, event) {
    event.preventDefault();
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let dropdown of dropdowns) {
        if (dropdown.id !== dropdownId) {
            dropdown.classList.remove('show');
        }
    }
    document.getElementById(dropdownId).classList.toggle('show');
}

// Close dropdowns when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let dropdown of dropdowns) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    }
}

// Function to fetch latest Souless video
async function updateLatestSoulessVideo() {
    const CHANNEL_ID = 'UCq_0GYqwqtqWLVXUgHn6TKw'; // Souless channel ID
    const API_KEY = 'YOUR_API_KEY'; // You'll need to get a YouTube Data API key
    
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`);
        const data = await response.json();
        
        if (data.items && data.items[0]) {
            const videoId = data.items[0].id.videoId;
            const iframe = document.querySelector('.project-card:last-child iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
        }
    } catch (error) {
        console.error('Error fetching latest video:', error);
    }
}

// Update video on page load
document.addEventListener('DOMContentLoaded', updateLatestSoulessVideo); 