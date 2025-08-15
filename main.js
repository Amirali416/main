document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    background.style.transform = `translateX(${x}px) translateY(${y}px)`;
});
