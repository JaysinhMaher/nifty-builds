// Prevent browser from restoring scroll position on reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
}

// Scroll-triggered dynamic fade animation for all .fade elements
window.addEventListener('DOMContentLoaded', () => {
    // Always scroll to top on page load
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = (i * 0.07) + 's';
                entry.target.classList.add('animated-fade');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.fade').forEach(el => {
        observer.observe(el);
    });
});

// Typewriter js - Index
var app = document.getElementById('indexTypeWriter');
var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("High Quality ")
    .pauseFor(400)
    .deleteAll()
    .typeString('Customisable ')
    .pauseFor(400)
    .deleteAll()
    .typeString('Professional ')
    .pauseFor(400)
    .deleteAll()
    .start();

// Typewriter js - Index
var app = document.getElementById('servicesTypeWriter');
var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("Fast ")
    .pauseFor(400)
    .deleteAll()
    .typeString('Efficient ')
    .pauseFor(400)
    .deleteAll()
    .typeString('Experienced ')
    .pauseFor(400)
    .deleteAll()
    .start();


// Typewriter js - Index
var app = document.getElementById('contactTypeWriter');
var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("Professional ")
    .pauseFor(400)
    .deleteAll()
    .typeString('Swift ')
    .pauseFor(400)
    .deleteAll()
    .typeString('Skilled ')
    .pauseFor(400)
    .deleteAll()
    .start();



