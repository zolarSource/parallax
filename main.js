const parallax = (e) => {
    document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX * speed/ 40 }px)`;
    });
}

document.addEventListener('mousemove', parallax);