const parallax = (e) => {
    document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translate(${event.clientX * speed/ 60 }px, ${event.clientY * speed/ 30 }px)`;
    });
}

document.addEventListener('mousemove', parallax);