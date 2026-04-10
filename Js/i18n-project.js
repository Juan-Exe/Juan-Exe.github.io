const projectTranslations = {
    en: {
        'back-link': '← Back',
        'github-btn': 'View on GitHub',
        'label-year': 'Year',
        'label-tech': 'Technologies',
        'label-desc': 'Description',
        'lang-btn': 'ES',

        projects: {
            'comic-house': {
                desc: 'A <b>comic streaming</b> platform that allows users to read their favorite comics and manga easily and quickly. Built with <b>HTML</b>, <b>PHP 8.2</b> and <b>CSS</b> with <b>Tailwind CSS</b>, Comic House lets users search, read and manage comics efficiently, using a <b>MariaDB</b> database to handle users and available titles. Fully containerized with <b>Docker</b> and <b>Apache</b>.',
            },
            'prestige-barbers': {
                desc: 'A cutting-edge digital platform for a <b>luxury barbershop</b>, with aesthetics inspired by brands like Balenciaga. Clients can explore <b>professional barber portfolios</b>, <b>book appointments</b> with specific professionals and purchase <b>exclusive hair care products</b>. The system features <b>JWT</b> authentication, a full admin panel, an e-commerce module and a fully <b>Dockerized</b> deployment without XAMPP dependencies.',
            },
            'just-music': {
                desc: 'A <b>music streaming</b> application designed to offer a space for both users and musicians, where they can share and discover new music. Built entirely in <b>Java</b> with <b>JavaFX</b>, it features user and artist profiles, a music catalog and an integrated player.',
            },
            'reservas-ucc': {
                desc: 'An <b>academic space reservation system</b> developed for <b>Universidad Cooperativa de Colombia</b>. Allows students, professors and administrators to book classrooms, auditoriums, laboratories and sports courts. Features authentication via <b>institutional email</b> (@ucc.edu.co), <b>role-based</b> access control, administrative approval workflows, password recovery via <b>Nodemailer</b> and <b>Dockerized</b> deployment.',
            },
            'frisby-trivia': {
                desc: 'An <b>interactive trivia</b> application that lets users test their knowledge on music, film and pop culture topics. Built with <b>HTML</b>, <b>Node.js</b> and <b>CSS</b>, Frisby Trivia delivers an entertaining game experience designed to be played through <b>OBS Studio</b>, mimicking a Who Wants to Be a Millionaire broadcast. Uses <b>Express 5</b>, <b>MariaDB</b> and <b>Docker</b>.',
            },
        }
    },
    es: {
        'back-link': '← Volver',
        'github-btn': 'Ver en GitHub',
        'label-year': 'Año',
        'label-tech': 'Tecnologías',
        'label-desc': 'Descripción',
        'lang-btn': 'EN',

        projects: {
            'comic-house': {
                desc: 'Una plataforma de <b>streaming de cómics</b> que permite a los usuarios leer sus cómics y mangas favoritos de manera sencilla y rápida. Hecho con <b>HTML</b>, <b>PHP 8.2</b> y <b>CSS</b> con <b>Tailwind CSS</b>, Comic House permite buscar, leer y gestionar cómics eficientemente, utilizando una base de datos <b>MariaDB</b> para gestionar usuarios y títulos disponibles. Completamente contenedorizado con <b>Docker</b> y <b>Apache</b>.',
            },
            'prestige-barbers': {
                desc: 'Plataforma digital de vanguardia para una <b>barbería de lujo</b>, con estética inspirada en marcas como Balenciaga. Permite a los clientes explorar <b>portafolios profesionales</b> de barberos, <b>reservar turnos</b> con profesionales específicos y adquirir <b>productos capilares exclusivos</b>. El sistema cuenta con autenticación <b>JWT</b>, panel de administración completo, módulo de e-commerce y despliegue <b>Dockerizado</b> sin dependencias de XAMPP.',
            },
            'just-music': {
                desc: 'Una aplicación de <b>streaming de música</b> cuyo concepto es ofrecer un espacio tanto para usuarios como para músicos, donde puedan compartir y descubrir nueva música. Desarrollada completamente en <b>Java</b> con <b>JavaFX</b>, cuenta con perfiles de usuario y artista, catálogo musical y reproductor integrado.',
            },
            'reservas-ucc': {
                desc: 'Sistema de <b>reserva de espacios académicos</b> desarrollado para la <b>Universidad Cooperativa de Colombia</b>. Permite a estudiantes, docentes y administradores reservar aulas, auditorios, laboratorios y canchas deportivas. Cuenta con autenticación por <b>correo institucional</b> (@ucc.edu.co), control de acceso por <b>roles</b>, flujos de aprobación administrativa, recuperación de contraseña vía <b>Nodemailer</b> y despliegue <b>Dockerizado</b>.',
            },
            'frisby-trivia': {
                desc: 'Una aplicación de <b>trivia interactiva</b> que permite a los usuarios poner a prueba sus conocimientos sobre música, cine y cultura pop. Hecho con <b>HTML</b>, <b>Node.js</b> y <b>CSS</b>, Frisby Trivia ofrece una experiencia de juego entretenida diseñada para jugarse en <b>OBS Studio</b>, imitando una transmisión de ¿Quién quiere ser millonario?. Usa <b>Express 5</b>, <b>MariaDB</b> y <b>Docker</b>.',
            },
        }
    }
};

// Detect which project this page is for based on the URL
function getProjectKey() {
    const path = window.location.pathname;
    if (path.includes('comic-house')) return 'comic-house';
    if (path.includes('prestige-barbers')) return 'prestige-barbers';
    if (path.includes('just-music')) return 'just-music';
    if (path.includes('reservas-ucc')) return 'reservas-ucc';
    if (path.includes('frisby-trivia')) return 'frisby-trivia';
    return null;
}

function applyProjectLang(lang) {
    const t = projectTranslations[lang];
    const key = getProjectKey();

    // Back link
    const backLink = document.querySelector('.back-link');
    if (backLink) backLink.textContent = t['back-link'];

    // GitHub button
    const githubBtn = document.querySelector('.project-detail-github');
    if (githubBtn) {
        // Keep the SVG, only update the text node
        const textNode = Array.from(githubBtn.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
        if (textNode) textNode.textContent = ' ' + t['github-btn'];
    }

    // Meta labels
    const labels = document.querySelectorAll('.meta-label');
    labels.forEach(label => {
        const txt = label.textContent.trim();
        if (txt === 'Año' || txt === 'Year') label.textContent = t['label-year'];
        if (txt === 'Tecnologías' || txt === 'Technologies') label.textContent = t['label-tech'];
        if (txt === 'Descripción' || txt === 'Description') label.textContent = t['label-desc'];
    });

    // Project description
    if (key && t.projects[key]) {
        const descEl = document.querySelector('.project-detail-meta .meta-value p, .project-detail-meta p.meta-value');
        if (descEl) descEl.innerHTML = t.projects[key].desc;
    }

    // Lang button
    const btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = t['lang-btn'];

    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    window._currentProjectLang = lang;
}

function toggleProjectLang() {
    const current = window._currentProjectLang || localStorage.getItem('lang') || 'en';
    applyProjectLang(current === 'en' ? 'es' : 'en');
}

window.toggleProjectLang = toggleProjectLang;

// Init with saved language
const _savedLang = localStorage.getItem('lang') || 'en';
window._currentProjectLang = _savedLang;

document.addEventListener('DOMContentLoaded', () => {
    applyProjectLang(_savedLang);
});
