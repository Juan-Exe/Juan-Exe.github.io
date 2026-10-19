const translations = {
    en: {
        // Hero
        'hero-desc': 'Hi! I\'m <b>Juan Diego</b>. Systems Engineering student, <b>Full Stack Developer</b> and <b>IT Administrator</b> with 1 year of professional experience and over 4 years building software. I have built and operated <b>certified electronic signature</b> and <b>biometric identity validation</b> platforms in production, under ONAC accreditation.',
        'hero-btn': 'CONTACT ME',
        'hero-stat-exp': 'Year of work experience',
        'hero-stat-projects': 'Finished projects',
        'hero-stat-hours': 'Systems in production',

        // About
        'typewriter-about-text': 'About me.',
        'sidebar-role': 'Sys. Eng. · Full Stack · UX/UI',
        'sidebar-label-email': 'EMAIL',
        'sidebar-label-location': 'LOCATION',
        'sidebar-label-github': 'GITHUB',
        'sidebar-info-location': 'Colombia',
        'about-p1': 'Hi! I\'m Juan Diego, a <b>Systems Engineering</b> student with 8 completed semesters. I consider myself a proactive, committed and responsible person, with over 4 years building applications and web pages designed and programmed by me; using design tools such as <b>Photoshop</b>, <b>Illustrator</b> and <b>Figma</b>, and developing in various languages such as <b>JavaScript</b>, <b>TypeScript</b>, <b>C#</b>, <b>Python</b>, <b>Java</b> and <b>Ruby</b>, with experience in frameworks like <b>React</b>, <b>Next.js</b>, <b>Express</b> and <b>FastAPI</b>, as well as databases like <b>MySQL</b>, <b>PostgreSQL</b>, <b>MariaDB</b> and <b>Redis</b>.',
        'about-p2': 'During my year at <b>PKI Services</b>, a Digital Certification Authority accredited by <b>ONAC</b>, I developed and operated three production systems: <b>FirmaLegal Online</b> (certified electronic signature), <b>Certified Email and SMS</b> with receipts signed using <b>PKI</b> cryptography, and <b>Identity Validation</b> with facial recognition and OCR. I administered and hardened two <b>Ubuntu</b> servers with <b>Docker</b>, <b>Nginx</b>, <b>WireGuard</b>, <b>UFW</b> and <b>Fail2Ban</b>, with continuous deployment through <b>GitHub Actions</b> and automatic rollback.',
        'about-p3': 'I work with measured evidence: I set up continuous static analysis with <b>SonarCloud</b> across all three systems, raising one from <b>Security Rating E to A</b> with <b>86 automated tests</b> in <b>Jest</b> and <b>Supertest</b>; and optimised queries up to <b>161×</b> documenting every improvement. I also implemented the company’s <b>IT governance</b> on <b>ManageEngine Endpoint Central</b>, with device control policies and anti-ransomware EDR. I have been a <b>speaker</b> at RedCOLSI’s <b>XXI EDESI 2026 meeting</b>, awarded Outstanding.',

        // Skills
        'typewriter-skills-text': 'Skills.',

        // Experience
        'typewriter-experience-text': 'Experience.',
        'exp-fold-open': 'View details',
        'exp-fold-close': 'Hide details',
        'exp-pki-role': 'Full Stack Developer & IT Administrator',
        'exp-pki-detail': '<div class=\"experience-fold-inner\"><p class="experience-intro">Development and operation of three production systems for a Digital Certification Authority accredited by ONAC (20-ECD-004), with full ownership of the cycle: development, infrastructure, security, code quality and deployment.</p><ul class="experience-systems"><li><b>FirmaLegal Online</b> — Certified electronic signature platform. Node.js backend with MySQL and Redis, digital PDF signing through X.509 certificates, job queues with Bull and OTP over WhatsApp. I managed a rollout of 1,271 signers for institutional clients.</li><li><b>Certified Email and SMS</b> — Legally binding notification platform: 22 REST endpoints, PDF receipts signed with RSA/SHA-256, certified bulk sending from CSV and integration with SendGrid and Infobip, with delivery and open tracking webhooks.</li><li><b>Identity Validation</b> — Biometric verification with facial recognition and document OCR. Python microservice using InsightFace, EasyOCR and Tesseract; 2,197 validations processed and threshold recalibration measured across 1,666 real attempts.</li><li><b>Infrastructure and security</b> — Administration and hardening of two Ubuntu servers (IONOS and Hostinger): Ed25519 key-only access, WireGuard VPN, double firewall with UFW, Fail2Ban and Cockpit restricted to the private network. I brought production up to standard without service interruption.</li><li><b>Quality with SonarCloud</b> — Continuous static analysis across all three systems. I raised the Security Rating from <b>E to A</b>, resolved 21 security findings and implemented <b>86 automated tests</b> with Jest and Supertest, passing 80% coverage with an approved Quality Gate.</li><li><b>IT governance with Endpoint Central</b> — Implementation of ManageEngine Endpoint Central Cloud as the unified management console: USB device and executable control policies, EDR with anti-ransomware, and incident handling verified by digital signature and SHA-256 hash.</li><li><b>Continuous deployment</b> — GitHub Actions pipelines to two environments, with automatic rollback, verified prior backup and concurrency control. I produced 90 pages of formal technical documentation.</li><li><b>Institutional client support</b> — Direct liaison with <b>Universidad Libre</b>, the <b>Colegio de la Universidad Libre</b> and <b>J&amp;E Inmobiliaria</b>, as well as end signers. Diagnosis of issues against production data, individual follow-up on a rollout of 1,271 signers, and reports in plain language so the client could decide on pending cases.</li></ul><p class="experience-stack"><strong>Stack:</strong> Node.js · Express · Next.js · Python · C# · Ruby · JavaScript · MySQL · MariaDB · Redis · Sequelize · Docker · Nginx · Linux · Bash · WireGuard · Fail2Ban · UFW · GitHub Actions · SonarCloud · Jest · Supertest · PKI · X.509 · JWT · bcrypt · SendGrid · Infobip · Twilio · PDFKit · InsightFace · EasyOCR · Tesseract</p></div>',
        'exp-pki-date': 'Oct 2025 — Oct 2026',
        'exp-secbi-role': 'Speaker and Researcher',
        'exp-secbi-detail': '<div class=\"experience-fold-inner\"><p class="experience-intro">Research group at Universidad Cooperativa de Colombia, where I develop my degree project and share technical knowledge with my peers.</p><ul class="experience-systems"><li><b>Speaker at the XXI Departmental Research Group Meeting EDESI 2026</b> — RedCOLSI Córdoba Node, with the project “Gamification and artificial intelligence (AI) as a technique to improve learning”. Awarded <b>Outstanding</b>.</li><li><b>Quiz Adventure</b> — Degree project at TRL 5 technology readiness level: an educational video game for Saber Pro exam preparation, developed within the research group.</li><li>Sharing technical knowledge clearly with groups of students, fostering collective growth and collaborative work.</li></ul></div>',
        'exp-secbi-date': '2023 — 2026',

        // Projects
        'typewriter-projects-text': 'Projects.',
        'proj-frisbyroll-desc': 'A D&D 5e character sheet web application in production. Models twelve classes with their subclasses across twenty levels, with 279 automated tests and a Python pipeline that extracts 761 entries from the PDF manual.',
        'proj-quiz-desc': 'Degree project at TRL 5 maturity level in the SECBI research group: an educational video game for Saber Pro exam preparation, with client-server architecture, a web admin panel and custom GLSL shaders.',
        'proj-aws-desc': 'Complete AWS architecture for the Cloud Computing course: a custom 500-host VPC with an Internet Gateway, an EC2 instance with an elastic IP serving two web applications through Nginx, seven DynamoDB tables and a serverless upload API using pre-signed URLs, where the file type and size travel inside the cryptographic signature. It includes scheduled shutdown with Lambda and EventBridge, and least-privilege IAM roles instead of embedded credentials.',
        'proj-comic-desc': 'Comic reading platform with CBR/CBZ archive processing. I optimised chapter loading 71× and the reading query 161× with composite indexes, documenting each improvement with reproducible measurements.',
        'proj-prestige-desc': 'Cutting-edge digital platform for a luxury barbershop. Allows booking appointments, exploring barber portfolios and purchasing exclusive hair care products.',
        'proj-justmusic-desc': 'A music streaming application whose concept is to offer a space for both users and musicians, where they can share and discover new music.',
        'proj-reservas-desc': 'Academic space reservation system for Universidad Cooperativa de Colombia. Manages classrooms, auditoriums, labs and courts with role-based access control.',
        'proj-frisby-desc': 'An interactive trivia application to test knowledge on music, film and pop culture, designed for streaming on OBS Studio.',

        // Certs
        'typewriter-certs-text': 'Certifications.',
        'cert-laboral-title': 'Employment Certificate',
        'cert-laboral-date': 'Oct 2025 — Oct 2026 · 1 year',
        'cert-ponente-title': 'Speaker · EDESI 2026',
        'cert-ponente-date': 'May 2026 · Outstanding',
        'cert-english-title': 'English Certificate B1',
        'cert-english-date': 'Dec 2021',
        'cert-tech-title': 'Basic Programming',
        'cert-tech-date': 'Aug 2025 · 159 hours',
        'cert-download': 'Download',

        // Contact
        'typewriter-contact-text': 'Contact.',
        'contact-text': 'Have a project in mind or want to work together? Feel free to reach out.',
        'contact-label-email': 'EMAIL',
        'contact-label-cv': 'CV',
        'contact-label-cv-value': 'Download resume',

        // Intro words
        'intro-words': ['CREATIVE', 'RESPONSIBLE', 'PROACTIVE'],

        // Lang button
        'lang-btn': 'EN',
    },
    es: {
        // Hero
        'hero-desc': '¡Hola! Soy <b>Juan Diego</b>. Estudiante de Ingeniería en Sistemas, <b>Desarrollador Full Stack</b> y <b>Administrador de TI</b> con 1 año de experiencia profesional y más de 4 años desarrollando. He construido y operado plataformas de <b>firma electrónica certificada</b> y <b>validación biométrica de identidad</b> en producción, bajo acreditación ONAC.',
        'hero-btn': 'CONTÁCTAME',
        'hero-stat-exp': 'Año de experiencia laboral',
        'hero-stat-projects': 'Proyectos terminados',
        'hero-stat-hours': 'Sistemas en producción',

        // About
        'typewriter-about-text': 'Sobre mi.',
        'sidebar-role': 'Ing. en Sistemas · Full Stack · UX/UI',
        'sidebar-label-email': 'EMAIL',
        'sidebar-label-location': 'UBICACIÓN',
        'sidebar-label-github': 'GITHUB',
        'sidebar-info-location': 'Colombia',
        'about-p1': '¡Hola! Soy Juan Diego, estudiante de <b>Ingeniería en Sistemas</b> con 8 semestres concluidos. Me considero una persona proactiva, comprometida y responsable, con más de 4 años desarrollando aplicaciones y páginas web diseñadas y programadas por mí; utilizando herramientas de diseño como <b>Photoshop</b>, <b>Illustrator</b> y <b>Figma</b>, y desarrollando en diversos lenguajes como <b>JavaScript</b>, <b>TypeScript</b>, <b>C#</b>, <b>Python</b>, <b>Java</b> y <b>Ruby</b>, con experiencia en frameworks como <b>React</b>, <b>Next.js</b>, <b>Express</b> y <b>FastAPI</b>, además de manejar bases de datos como <b>MySQL</b>, <b>PostgreSQL</b>, <b>MariaDB</b> y <b>Redis</b>.',
        'about-p2': 'Durante mi año en <b>PKI Services</b>, una Entidad de Certificación Digital acreditada ante <b>ONAC</b>, desarrollé y operé tres sistemas en producción: <b>FirmaLegal Online</b> (firma electrónica certificada), <b>Correo y SMS Certificado</b> con constancias firmadas mediante criptografía <b>PKI</b>, y <b>Validación de Identidad</b> con reconocimiento facial y OCR. Administré y endurecí dos servidores <b>Ubuntu</b> con <b>Docker</b>, <b>Nginx</b>, <b>WireGuard</b>, <b>UFW</b> y <b>Fail2Ban</b>, con despliegue continuo mediante <b>GitHub Actions</b> y rollback automático.',
        'about-p3': 'Trabajo con evidencia medida: implementé análisis estático continuo con <b>SonarCloud</b> sobre los tres sistemas, llevando uno de <b>Security Rating E a A</b> con <b>86 pruebas automatizadas</b> en <b>Jest</b> y <b>Supertest</b>; y optimicé consultas hasta <b>161×</b> documentando cada mejora. También implementé el <b>gobierno de TI</b> de la organización sobre <b>ManageEngine Endpoint Central</b>, con políticas de control de dispositivos y EDR anti-ransomware. He sido <b>ponente</b> en el <b>XXI Encuentro EDESI 2026</b> de RedCOLSI, con distinción Sobresaliente.',

        // Skills
        'typewriter-skills-text': 'Habilidades.',

        // Experience
        'typewriter-experience-text': 'Mi experiencia.',
        'exp-fold-open': 'Ver detalle',
        'exp-fold-close': 'Ocultar detalle',
        'exp-pki-role': 'Desarrollador Full Stack & Administrador de TI',
        'exp-pki-detail': '<div class=\"experience-fold-inner\"><p class="experience-intro">Desarrollo y operación de tres sistemas en producción para una Entidad de Certificación Digital acreditada ante ONAC (20-ECD-004), con responsabilidad completa sobre el ciclo: desarrollo, infraestructura, seguridad, calidad de código y despliegue.</p><ul class="experience-systems"><li><b>FirmaLegal Online</b> — Plataforma de firma electrónica certificada. Backend Node.js con MySQL y Redis, firma digital de PDF mediante certificados X.509, colas de trabajo con Bull y OTP por WhatsApp. Gestioné un despliegue de 1.271 firmantes para clientes institucionales.</li><li><b>Correo y SMS Certificado</b> — Plataforma de notificaciones con validez probatoria: 22 endpoints REST, constancias PDF firmadas con RSA/SHA-256, envío masivo certificado desde CSV e integración con SendGrid e Infobip, con webhooks de trazabilidad de entrega y apertura.</li><li><b>Validación de Identidad</b> — Verificación biométrica con reconocimiento facial y OCR de documentos. Microservicio Python con InsightFace, EasyOCR y Tesseract; 2.197 validaciones procesadas y recalibración de umbrales medida sobre 1.666 intentos reales.</li><li><b>Infraestructura y seguridad</b> — Administración y endurecimiento de dos servidores Ubuntu (IONOS y Hostinger): acceso exclusivo por llave Ed25519, VPN WireGuard, doble firewall con UFW, Fail2Ban y Cockpit restringido a la red privada. Homologué producción sin interrumpir el servicio.</li><li><b>Calidad con SonarCloud</b> — Análisis estático continuo sobre los tres sistemas. Elevé el Security Rating de <b>E a A</b>, resolví 21 hallazgos de seguridad e implementé <b>86 pruebas automatizadas</b> con Jest y Supertest, superando el 80% de cobertura con Quality Gate aprobado.</li><li><b>Gobierno de TI con Endpoint Central</b> — Implementación de ManageEngine Endpoint Central Cloud como consola de gestión unificada: políticas de control de dispositivos USB y ejecutables, EDR con anti-ransomware y gestión de incidentes verificada por firma digital y hash SHA-256.</li><li><b>Despliegue continuo</b> — Pipelines con GitHub Actions a dos entornos, con rollback automático, respaldo previo verificado y control de concurrencia. Elaboré 90 páginas de documentación técnica formal.</li><li><b>Atención al cliente institucional</b> — Interlocución directa con <b>Universidad Libre</b>, el <b>Colegio de la Universidad Libre</b> y <b>J&amp;E Inmobiliaria</b>, además de los firmantes finales. Diagnóstico de incidencias sobre datos de producción, seguimiento individual de un despliegue de 1.271 firmantes e informes en lenguaje no técnico para que el cliente pudiera decidir sobre los casos pendientes.</li></ul><p class="experience-stack"><strong>Stack:</strong> Node.js · Express · Next.js · Python · C# · Ruby · JavaScript · MySQL · MariaDB · Redis · Sequelize · Docker · Nginx · Linux · Bash · WireGuard · Fail2Ban · UFW · GitHub Actions · SonarCloud · Jest · Supertest · PKI · X.509 · JWT · bcrypt · SendGrid · Infobip · Twilio · PDFKit · InsightFace · EasyOCR · Tesseract</p></div>',
        'exp-pki-date': 'Oct 2025 — Oct 2026',
        'exp-secbi-role': 'Ponente e Investigador',
        'exp-secbi-detail': '<div class=\"experience-fold-inner\"><p class="experience-intro">Semillero de investigación de la Universidad Cooperativa de Colombia, donde desarrollo mi trabajo de grado y comparto conocimiento técnico con mis compañeros.</p><ul class="experience-systems"><li><b>Ponente en el XXI Encuentro Departamental de Semilleros de Investigación EDESI 2026</b> — RedCOLSI Nodo Córdoba, con el proyecto «La gamificación y la inteligencia artificial (IA) como técnica para mejorar el aprendizaje». Distinción <b>Sobresaliente</b>.</li><li><b>Quiz Adventure</b> — Trabajo de grado con nivel de madurez tecnológica TRL 5: videojuego educativo para la preparación de las pruebas Saber Pro, desarrollado en el marco del semillero.</li><li>Transmisión de conocimientos técnicos de manera clara ante grupos de estudiantes, fomentando el crecimiento colectivo y el trabajo colaborativo.</li></ul></div>',
        'exp-secbi-date': '2023 — 2026',

        // Projects
        'typewriter-projects-text': 'Proyectos.',
        'proj-frisbyroll-desc': 'Aplicación web de fichas de rol de D&D 5e en producción. Modela doce clases con sus subclases a lo largo de veinte niveles, con 279 pruebas automatizadas y una canalización en Python que extrae 761 entradas desde el manual en PDF.',
        'proj-quiz-desc': 'Trabajo de grado con nivel de madurez TRL 5 en el semillero SECBI: videojuego educativo para la preparación de las pruebas Saber Pro, con arquitectura cliente-servidor, panel web de administración y shaders GLSL propios.',
        'proj-aws-desc': 'Arquitectura completa sobre AWS para el curso de Computación en la Nube: VPC propia de 500 hosts con Internet Gateway, instancia EC2 con IP elástica sirviendo dos aplicaciones web mediante Nginx, siete tablas DynamoDB y una API serverless de carga segura con URLs pre-firmadas, donde el tipo y el tamaño viajan dentro de la firma criptográfica. Incluye apagado programado con Lambda y EventBridge, y roles IAM de permiso mínimo en lugar de credenciales embebidas.',
        'proj-comic-desc': 'Plataforma de lectura de cómics con procesamiento de archivos CBR/CBZ. Optimicé la carga de capítulos 71× y la consulta de lectura 161× con índices compuestos, documentando cada mejora con mediciones reproducibles.',
        'proj-prestige-desc': 'Plataforma digital de vanguardia para una barbería de lujo. Permite reservar turnos, explorar portafolios de barberos y adquirir productos capilares exclusivos.',
        'proj-justmusic-desc': 'Una aplicación de streaming de música cuyo concepto es ofrecer un espacio tanto para usuarios como para músicos, donde puedan compartir y descubrir nueva música.',
        'proj-reservas-desc': 'Sistema de reserva de espacios académicos para la Universidad Cooperativa de Colombia. Permite gestionar aulas, auditorios, laboratorios y canchas con control por roles.',
        'proj-frisby-desc': 'Una aplicación de trivia interactiva que permite poner a prueba conocimientos sobre música, cine y cultura pop, diseñada para transmisiones en OBS Studio.',

        // Certs
        'typewriter-certs-text': 'Certificados.',
        'cert-laboral-title': 'Certificación Laboral',
        'cert-laboral-date': 'Oct 2025 — Oct 2026 · 1 año',
        'cert-ponente-title': 'Ponente · EDESI 2026',
        'cert-ponente-date': 'May 2026 · Sobresaliente',
        'cert-english-title': 'Certificado de Inglés B1',
        'cert-english-date': 'Dic 2021',
        'cert-tech-title': 'Programación Nivel Básico',
        'cert-tech-date': 'Ago 2025 · 159 horas',
        'cert-download': 'Descargar',

        // Contact
        'typewriter-contact-text': 'Contacto.',
        'contact-text': '¿Tienes un proyecto en mente o quieres trabajar juntos? No dudes en contactarme.',
        'contact-label-email': 'CORREO',
        'contact-label-cv': 'CV',
        'contact-label-cv-value': 'Descargar hoja de vida',

        // Intro words
        'intro-words': ['CREATIVO', 'RESPONSABLE', 'PROACTIVO'],

        // Lang button
        'lang-btn': 'ES',
    }
};

// Default language: English
let currentLang = 'en';

function applyLang(lang) {
    const t = translations[lang];

    // Hero
    document.querySelector('.hero-desc').innerHTML = t['hero-desc'];
    document.querySelector('.hero-btn').textContent = t['hero-btn'];
    const statLabels = document.querySelectorAll('.hero-stat-label');
    if (statLabels[0]) statLabels[0].textContent = t['hero-stat-exp'];
    if (statLabels[1]) statLabels[1].textContent = t['hero-stat-projects'];
    if (statLabels[2]) statLabels[2].textContent = t['hero-stat-hours'];

    // About sidebar
    document.querySelector('.sidebar-role').textContent = t['sidebar-role'];
    const sidebarLabels = document.querySelectorAll('.sidebar-info-label');
    if (sidebarLabels[0]) sidebarLabels[0].textContent = t['sidebar-label-email'];
    if (sidebarLabels[1]) sidebarLabels[1].textContent = t['sidebar-label-location'];
    if (sidebarLabels[2]) sidebarLabels[2].textContent = t['sidebar-label-github'];
    const locationVal = document.querySelector('.sidebar-info-item:nth-child(2) .sidebar-info-value');
    if (locationVal) locationVal.textContent = t['sidebar-info-location'];

    // About text paragraphs
    const aboutPs = document.querySelectorAll('.about-text p');
    if (aboutPs[0]) aboutPs[0].innerHTML = t['about-p1'];
    if (aboutPs[1]) aboutPs[1].innerHTML = t['about-p2'];
    if (aboutPs[2]) aboutPs[2].innerHTML = t['about-p3'];

    // Experience — each item declares its own key via data-exp, so adding or
    // reordering jobs in the HTML cannot desynchronise the translations.
    document.querySelectorAll('.experience-item').forEach(item => {
        const key = item.getAttribute('data-exp');
        if (!key) return;
        const role = item.querySelector('.experience-role');
        if (role && t['exp-' + key + '-role']) role.textContent = t['exp-' + key + '-role'];
        // innerHTML: the detail block holds a paragraph, a <ul> of systems and
        // the stack line, not plain text.
        const detail = item.querySelector('.experience-detail');
        if (detail && t['exp-' + key + '-detail']) detail.innerHTML = t['exp-' + key + '-detail'];
        // The fold label lives in CSS content: attr(), so translate the attributes.
        const label = item.querySelector('.experience-summary-label');
        if (label) {
            label.setAttribute('data-closed', t['exp-fold-open']);
            label.setAttribute('data-open', t['exp-fold-close']);
        }
        const date = item.querySelector('.experience-date');
        if (date && t['exp-' + key + '-date']) date.textContent = t['exp-' + key + '-date'];
    });

    // Projects descriptions — keyed by data-proj for the same reason.
    document.querySelectorAll('.project-row').forEach(row => {
        const key = row.getAttribute('data-proj');
        const desc = row.querySelector('.project-desc');
        if (desc && key && t['proj-' + key + '-desc']) {
            desc.innerHTML = t['proj-' + key + '-desc'];
        }
    });

    // Contact
    const contactText = document.querySelector('.contact-text p');
    if (contactText) contactText.textContent = t['contact-text'];
    const contactLabels = document.querySelectorAll('.contact-item-label');
    contactLabels.forEach(label => {
        const val = label.textContent.trim();
        if (val === 'EMAIL' || val === 'CORREO') label.textContent = t['contact-label-email'];
        if (val === 'CV') label.textContent = t['contact-label-cv'];
    });
    const cvValue = document.querySelector('.contact-item:nth-child(3) .contact-item-value');
    if (cvValue) cvValue.textContent = t['contact-label-cv-value'];

    // Certs
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // Store typewriter texts for use by the typewriter observers
    window._tw_about = t['typewriter-about-text'];
    window._tw_skills = t['typewriter-skills-text'];
    window._tw_experience = t['typewriter-experience-text'];
    window._tw_projects = t['typewriter-projects-text'];
    window._tw_certs = t['typewriter-certs-text'];
    window._tw_contact = t['typewriter-contact-text'];
    window._intro_words = t['intro-words'];

    // Update lang button label
    const btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = t['lang-btn'];

    // Reset typewriters so they re-trigger on next scroll
    window._aboutTyped = false;
    window._skillsTyped = false;
    window._expTyped = false;
    window._projTyped = false;
    window._certsTyped = false;
    window._contactTyped = false;

    const ids = ['typewriter-about','typewriter-skills','typewriter-experience','typewriter-projects','typewriter-certs','typewriter-contact'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '';
    });

    // Re-hide slide-up-blur inside sections so they re-animate
    ['about-body','skills-body','experience-body','projects-body'].forEach(cls => {
        document.querySelectorAll('.' + cls + ' .slide-up-blur').forEach(el => el.classList.remove('visible'));
    });
    document.querySelectorAll('.contact-section .slide-up-blur').forEach(el => el.classList.remove('visible'));

    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
}

function toggleLang() {
    applyLang(currentLang === 'en' ? 'es' : 'en');
}

// Expose globally
window.toggleLang = toggleLang;
window.applyLang = applyLang;
window._currentLang = () => currentLang;

// Init: use saved language or English on first visit
const _savedLang = localStorage.getItem('lang') || 'en';
// Set intro words immediately (before DOMContentLoaded) so the splash uses correct language
window._intro_words = translations[_savedLang]['intro-words'];
window._tw_about = translations[_savedLang]['typewriter-about-text'];
window._tw_skills = translations[_savedLang]['typewriter-skills-text'];
window._tw_experience = translations[_savedLang]['typewriter-experience-text'];
window._tw_projects = translations[_savedLang]['typewriter-projects-text'];
window._tw_certs = translations[_savedLang]['typewriter-certs-text'];
window._tw_contact = translations[_savedLang]['typewriter-contact-text'];
currentLang = _savedLang;

document.addEventListener('DOMContentLoaded', () => {
    applyLang(_savedLang);
});
