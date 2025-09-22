document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'JUST MUSIC',
            images: [
                'img/JUST MUSIC/JUST MUSIC INICIO.jpg',
                'img/JUST MUSIC/JUST MUSIC LOGIN.jpg',
                'img/JUST MUSIC/JUST MUSIC REGISTER.jpg',
                'img/JUST MUSIC/JUST MUSIC LOGIN PUESTO.jpg',
                'img/JUST MUSIC/JUST MUSIC CATALOG.jpg',
                'img/JUST MUSIC/JUST MUSIC PAGE.jpg',
            ],
            desc: 'Una aplicación de streaming de música cuyo concepto es ofrecer un espacio tanto para usuarios como para músicos, donde puedan compartir y descubrir nueva música de manera sencilla y rápida.',
            github: 'https://github.com/Juan-Exe/Proyecto-Just-Muisc'
        },
        {
            title: 'COMIC HOUSE',
            images: [
                'img/COMIC HOUSE/COMIC HOUSE INICIO.png.png',
                'img/COMIC HOUSE/COMIC HOUSE catalogo.jpg',
                'img/COMIC HOUSE/COMIC HOUSE comic.jpg',
                'img/COMIC HOUSE/COMIC HOUSE login.jpg',
                'img/COMIC HOUSE/COMIC HOUSE register.jpg',
                'img/COMIC HOUSE/COMIC HOUSE responsive.jpg',
                'img/COMIC HOUSE/COMIC HOUSE responsive 2.jpg',
                'img/COMIC HOUSE/COMIC HOUSE responsive 3.jpg',
                'img/COMIC HOUSE/COMIC HOUSE responsive login.jpg',
                'img/COMIC HOUSE/COMIC HOUSE responsive register.jpg',
            ],
            desc: 'Una aplicación de streaming de cómics que permite a los usuarios leer sus cómics favoritos de manera sencilla y rápida. Hecho bajo HTML, PHP y CSS, Comic House permite buscar, leer y gestionar cómics de manera eficiente, utilizando una base de datos MySQL para gestionar los usuarios y los cómics disponibles.',
            github: 'https://github.com/Juan-Exe/Comic-House'
        },
        {
            title: 'FRISBY TRIVIA',
            images: [
                'img/FRISBY TRIVIA/FRISBY TRIVIA INICIO.png',
                'img/FRISBY TRIVIA/FRISBY TRIVIA SELECCION.png',
                'img/FRISBY TRIVIA/FRSIBY TRIVIA GESTION.png',
                'img/FRISBY TRIVIA/FRSIBY TRIVIA REGISTROO.png',
                'img/FRISBY TRIVIA/FRISBY TRIVIA GAME.png',
            ],
            desc: 'La Frisby Trivia es un proyecto de juego personal, es una aplicación de trivia que permite a los usuarios poner a prueba sus conocimientos sobre música, cine y más temas juveniles y de cultura pop. Hecho bajo HTML, NODE.JS y CSS, Frisby Trivia ofrece una experiencia de juego interactiva y entretenida dirigida a jugarse en obs studio para imitar una transmisión de quien quiere ser millonario.',
            github: 'https://github.com/Juan-Exe/FRISBY-TRIVIA.git'
        }
    ];

    const popup = document.getElementById('project-popup');
    const closeBtn = document.getElementById('project-popup-close');
    const sliderImages = popup.querySelector('.slider-images');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const popupTitle = document.getElementById('popup-title');
    const popupDesc = document.getElementById('popup-desc');
    const popupGithub = document.getElementById('popup-github');

    let currentProject = 0;
    let currentImage = 0;

    function openPopup(index) {
        currentProject = index;
        currentImage = 0;
        renderPopup();
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    }

    function renderPopup() {
        const project = projects[currentProject];
        popupTitle.textContent = project.title;
        popupDesc.textContent = project.desc;
        popupGithub.href = project.github;
        sliderImages.innerHTML = '';
        project.images.forEach((img, i) => {
            const image = document.createElement('img');
            image.src = img;
            image.alt = project.title;
            image.className = 'slider-img' + (i === currentImage ? ' active' : '');
            sliderImages.appendChild(image);
        });
    }

    prevBtn.addEventListener('click', function() {
        const project = projects[currentProject];
        currentImage = (currentImage - 1 + project.images.length) % project.images.length;
        renderPopup();
    });

    nextBtn.addEventListener('click', function() {
        const project = projects[currentProject];
        currentImage = (currentImage + 1) % project.images.length;
        renderPopup();
    });

    closeBtn.addEventListener('click', closePopup);
    popup.addEventListener('click', function(e) {
        if (e.target === popup) closePopup();
    });

    document.querySelectorAll('.pro-cont-flex-con-cont-pry').forEach((card, idx) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            openPopup(idx);
        });
    });
});
