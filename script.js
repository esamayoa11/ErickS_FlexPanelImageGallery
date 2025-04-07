const panels = document.querySelectorAll('.panel')

// Toggle open class
function toggleOpen() {
    // Close all other panels
    panels.forEach(panel => {
        if (panel != this) panel.classList.remove('open', 'open-active');
    });
    this.classList.toggle('open');
}

// Toggle open-active when transition ends
function toggleActive(e)
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

// Add event listeners
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitioned', toggleActive));
