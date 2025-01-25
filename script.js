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