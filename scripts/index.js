hljs.highlightAll();

document.querySelectorAll('.menu_link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const idName = anchor.getAttribute('href');

        const section = document.querySelector(idName);

        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});