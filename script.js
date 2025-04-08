const panels = document.querySelectorAll('.panel')
const panel3 = document.querySelector('.panel3');

// Animate panels in order on load
window.addEventListener('DOMContentLoaded', () => {
    const panelsArray = Array.from(panels);
    
    // Pre-position panels off-screen
    panelsArray.forEach(panel => {
        panel.style.transform = 'translateX(100vw)';
        panel.style.opacity = '0';
        panel.style.visibility = 'hidden';
    });

    //Animate each pandel in order
    panelsArray.forEach((panel, index) => {
        setTimeout(() => {
            panel.style.visibility = 'visible';
            panel.classList.add('animate-in');

        panel.addEventListener(
            'animationend', 
            () => { 
                panel.classList.remove('animate-in');
                panel.style.transform = '';
                panel.style.opacity = '1';    
            }, 
            { once: true } 
        );
    }, index * 1500);
  });
});

// Toggle open class
function toggleOpen() {
    // Close all other panels
    panels.forEach(panel => {
        if (panel != this) panel.classList.remove('open', 'open-active');
    });
    this.classList.toggle('open');
}

// Toggle open-active when transition ends
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

// Add event listeners
panels.forEach(panel => {
    panel.addEventListener('click',toggleOpen);
    panel.addEventListener('transitionend', toggleActive);
});

// Reveal blur overlay on panel3
panel3.addEventListener('click', function() {
    this.classList.toggle('revealed');
});