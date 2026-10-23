const projectTranslations = {
    en: {
        'back-link': '← Back',
        'github-btn': 'View on GitHub',
        'live-btn': 'View live',
        'label-year': 'Year',
        'label-tech': 'Technologies',
        'label-desc': 'Description',
        'lang-btn': 'EN',

        projects: {
            'frisby-roll': {
                desc: 'Web application <b>in production</b> for creating and managing <b>D&amp;D 5th edition</b> character sheets in Spanish. It models twelve classes with their subclasses across twenty levels, and does the arithmetic for the player so they do not have to know the rules by heart.',
                sections: [
                    {
                        title: 'The problem',
                        paragraphs: [
                            'A D&amp;D character sheet is a spreadsheet in disguise: every ability modifier, armour class, hit point total and proficiency bonus depends on the others and shifts with every level. Newcomers spend more time reconciling numbers than playing.',
                            'Frisby Roll turns the sheet into an <b>eight-step wizard</b> \u2014 race, class, ability scores, background, personality, skills, equipment and name \u2014 where each choice recalculates the rest. The player decides who they want to be; the application handles the arithmetic.',
                        ],
                    },
                    {
                        title: 'The content',
                        paragraphs: [
                            'The challenge was not the interface but the data: the rules live in a PDF manual hundreds of pages long. I wrote a <b>Python pipeline</b> that extracts <b>761 entries</b> \u2014 races, classes, subclasses, backgrounds, spells and equipment \u2014 and normalises them into the PostgreSQL schema.',
                            'Transcribing that by hand would have taken weeks and introduced silent errors: a mistyped modifier goes unnoticed until someone plays with a wrong sheet.',
                        ],
                    },
                    {
                        title: 'Trusting the numbers',
                        paragraphs: [
                            'An application that does the maths for you is only useful if it is always right. Hence <b>279 automated tests</b>, with <b>Vitest</b> for the rules logic and <b>Playwright</b> for the full character-creation journeys.',
                            'The tests cover the cases a player would otherwise discover the hard way: proficiency progression on level-up, hit dice per class, and subclasses that override base rules.',
                        ],
                    },
                    {
                        title: 'Architecture',
                        paragraphs: [
                            'Built with <b>Next.js 16</b> and <b>React 19</b> in <b>TypeScript</b>, with <b>PostgreSQL</b> on <b>Supabase</b> and deployed to <b>Vercel</b>. Strict typing is not decorative here: in a domain where a property may be a number, a die or a formula, the compiler catches mistakes before they reach the table.',
                            'Each player edits their own sheet while the dungeon master sees the state of the whole table, so state syncs live rather than living only in the browser.',
                        ],
                    },
                ],
            },
            'quiz-adventure': {
                desc: 'Educational video game for <b>Saber Pro</b> exam preparation, developed as a <b>degree project</b> in the SECBI research group at <b>TRL 5</b> technology readiness level. It was presented as a paper at the XXI EDESI 2026 meeting of RedCOLSI, where it received an Outstanding distinction.',
                sections: [
                    {
                        title: 'The idea',
                        paragraphs: [
                            'Studying for a standardised exam is tedious, and drop-off is high. Quiz Adventure turns that study into <b>turn-based combat</b>: every question is an attack. Answer correctly and you strike the enemy; get it wrong and you lose a heart. The mechanic holds attention where a plain questionnaire loses it.',
                        ],
                    },
                    {
                        title: 'Architecture',
                        paragraphs: [
                            'The system is <b>decoupled client-server</b>: the game runs in <b>Godot 4</b> with GDScript, and the backend is a <b>seven-endpoint</b> REST API in <b>FastAPI</b> with SQLAlchemy over PostgreSQL, all containerised with Docker.',
                            'The design decision that defines the project: <b>the correct answer never travels to the client</b>. The game receives the question and the options, but validation happens on the server. If the correct answer were sent alongside the question, inspecting the traffic or the process memory would be enough to cheat, and the tool would lose all value as an assessment instrument.',
                            'A <b>web admin panel</b> completes the system, for managing the question bank without touching the database.',
                        ],
                    },
                    {
                        title: 'Mechanics and art',
                        paragraphs: [
                            'Combat gives visual feedback both ways: attack animations for the player and the enemy, and damage states for each. Custom <b>GLSL shaders</b> handle the impact flash when a character is hit.',
                            '<b>Difficulty</b> shows up in the cost of a mistake: at higher levels, a wrong answer costs more lives. That is how progression matters without changing the rules of the game.',
                        ],
                    },
                ],
            },
            'data-warehouse': {
                desc: '<b>Business intelligence</b> solution on <b>SQL Server</b> analysing an organisation\u2019s hardware fleet: 603 machines with their maintenance history. The work covers the full cycle, from extracting the operational data to the predictive model that exploits it.',
                sections: [
                    {
                        title: 'ETL process',
                        paragraphs: [
                            'The source is two operational tables: <b>EQUIPO</b> and <b>MANTENIMIENTO</b>. The ETL turns them into a flat table ready for analysis, computing five derived variables: each machine\u2019s <b>age</b> with <code>DATEDIFF</code> over its purchase date, the count of <b>preventive</b> and <b>corrective maintenance</b> through subqueries by type, the <b>brand</b> brought in with a <code>LEFT JOIN</code>, and a binary flag for whether the machine has ever been serviced.',
                            'I used subqueries rather than direct joins for a concrete reason: a join against the maintenance table would duplicate each machine\u2019s row once per maintenance record, skewing the analysis. With subqueries, each machine stays a single record.',
                            'The result is wrapped in a <b>reusable view</b> that applies two requirements: active machines only, excluding the asset tags present in an imported flat file. Comparing both tables required <code>COLLATE DATABASE_DEFAULT</code> to align their collations. The view returns exactly <b>603 records</b>.',
                        ],
                    },
                    {
                        title: 'Dimensional model',
                        paragraphs: [
                            'On top of the operational data I built a <b>star schema</b>: a central fact table holding the foreign keys of each measurement, surrounded by <b>17 dimension tables</b> \u2014 brand, machine type, processor brand, maintenance type, user, agent, intake type, status, plus year and month time dimensions, among others.',
                            'The time dimensions are generated from the actual maintenance dates with <code>SELECT DISTINCT</code>, so the cube\u2019s calendar reflects the effective period of the data rather than an arbitrary range. Each dimension carries its primary key with <code>IDENTITY</code>, and the fact table its 16 corresponding foreign keys.',
                        ],
                    },
                    {
                        title: 'Data mining',
                        paragraphs: [
                            'With the dataset prepared I applied two techniques in <b>Orange</b>, taking machine brand as the target variable.',
                            'The <b>decision tree</b> revealed age as the variable with the strongest predictive power: it splits the root and leaves an almost pure node among machines two years old or younger, where 198 of 202 are Lenovo (98%). Preventive maintenance came second in importance. In the older branch the distribution flips and HP takes over with 164 machines out of 401.',
                            '<b>k-means segmentation</b> was evaluated between 2 and 8 groups using the <b>silhouette index</b> as the criterion. Cluster C1 proved the most homogeneous, made up entirely of Dell machines, with a mean silhouette of 0.708. The scatter plot confirmed that cluster C5 concentrates the oldest machines in the fleet.',
                        ],
                    },
                ],
            },
            'infraestructura-aws': {
                desc: 'Complete <b>AWS</b> architecture built from scratch: custom network, compute, NoSQL database, object storage and serverless functions. Every component was configured on a <b>least-privilege</b> basis and verified in operation.',
                sections: [
                    {
                        title: 'Network',
                        paragraphs: [
                            'The starting point is a <b>custom VPC</b> sized for 500 hosts, with its Internet Gateway, route table and public subnet. The default VPC was not used: defining the network from scratch gives control over addressing and isolates the resources.',
                            'The instance gets an <b>elastic IP</b>, so the public address survives reboots. Without it, every shutdown would change the access point and break anything depending on it.',
                        ],
                    },
                    {
                        title: 'Compute and applications',
                        paragraphs: [
                            'On the <b>EC2</b> instance I configured <b>Nginx</b> serving two web applications: a static one that queries data, and a <b>Flask</b> one with its Python dependencies. Administrative access goes through <b>EC2 Instance Connect</b> and PuTTY with a key, no passwords.',
                        ],
                    },
                    {
                        title: 'Data',
                        paragraphs: [
                            'The data layer is <b>seven DynamoDB tables</b>, queried both from <b>CloudShell</b> and from the web application. The site solves five query challenges against those tables, from partition-key lookups to compound filters.',
                        ],
                    },
                    {
                        title: 'Serverless and automation',
                        paragraphs: [
                            'Two <b>Lambda</b> functions cover different needs. The first generates <b>pre-signed URLs</b> for uploading files to <b>S3</b> without exposing credentials: the file type and size travel <b>inside the cryptographic signature</b>, so the server cannot receive anything other than what was authorised, however the client tries.',
                            'The second shuts the instance down on a schedule, triggered by an <b>EventBridge</b> rule. It is cost control: an instance left running overnight and at weekends bills without serving anyone.',
                            'All access between services is handled with least-privilege <b>IAM roles</b> \u2014 the Lambda can only stop instances, the EC2 can only write to its bucket \u2014 instead of credentials embedded in the code.',
                        ],
                    },
                ],
            },
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
        'live-btn': 'Ver en producción',
        'label-year': 'Año',
        'label-tech': 'Tecnologías',
        'label-desc': 'Descripción',
        'lang-btn': 'ES',

        projects: {
            'frisby-roll': {
                desc: 'Aplicaci\u00f3n web <b>en producci\u00f3n</b> para crear y gestionar fichas de personaje de <b>D&amp;D 5.\u00aa edici\u00f3n</b> en espa\u00f1ol. Modela doce clases con sus subclases a lo largo de veinte niveles, y hace las cuentas por el jugador para que no tenga que saberse las reglas de memoria.',
                sections: [
                    {
                        title: 'El problema',
                        paragraphs: [
                            'Una ficha de D&amp;D es una hoja de c\u00e1lculo disfrazada: el modificador de cada caracter\u00edstica, la clase de armadura, los puntos de golpe y la competencia dependen unos de otros y cambian con cada nivel. Quien empieza a jugar dedica m\u00e1s tiempo a cuadrar n\u00fameros que a jugar.',
                            'Frisby Roll resuelve la ficha como un <b>asistente de ocho pasos</b> \u2014raza, clase, caracter\u00edsticas, trasfondo, personalidad, habilidades, equipo y nombre\u2014 donde cada decisi\u00f3n recalcula el resto. El jugador elige qu\u00e9 quiere ser; la aplicaci\u00f3n se encarga de la aritm\u00e9tica.',
                        ],
                    },
                    {
                        title: 'El contenido',
                        paragraphs: [
                            'El reto no era la interfaz sino los datos: las reglas viven en un manual en PDF de cientos de p\u00e1ginas. Escrib\u00ed una <b>canalizaci\u00f3n en Python</b> que extrae <b>761 entradas</b> \u2014razas, clases, subclases, trasfondos, conjuros y equipo\u2014 y las normaliza en el esquema de PostgreSQL.',
                            'Transcribir eso a mano habr\u00eda tomado semanas y habr\u00eda introducido errores silenciosos: un modificador mal copiado no se nota hasta que alguien juega con una ficha incorrecta.',
                        ],
                    },
                    {
                        title: 'Confianza en los n\u00fameros',
                        paragraphs: [
                            'Una aplicaci\u00f3n que calcula por ti solo sirve si acierta siempre. Por eso tiene <b>279 pruebas automatizadas</b> con <b>Vitest</b> para la l\u00f3gica de reglas y <b>Playwright</b> para los recorridos completos de creaci\u00f3n de personaje.',
                            'Las pruebas cubren los casos que un jugador descubrir\u00eda de la peor forma: la progresi\u00f3n de competencia al subir de nivel, los dados de golpe por clase, y las subclases que modifican reglas base.',
                        ],
                    },
                    {
                        title: 'Arquitectura',
                        paragraphs: [
                            'Construida con <b>Next.js 16</b> y <b>React 19</b> en <b>TypeScript</b>, con <b>PostgreSQL</b> sobre <b>Supabase</b> y desplegada en <b>Vercel</b>. El tipado estricto no es decorativo: en un dominio donde una propiedad puede ser un n\u00famero, un dado o una f\u00f3rmula, el compilador atrapa los errores antes de que lleguen a la mesa de juego.',
                            'Cada jugador edita su ficha y el m\u00e1ster ve el estado de toda la mesa, as\u00ed que el estado se sincroniza en vivo en lugar de guardarse solo en el navegador.',
                        ],
                    },
                ],
            },
            'quiz-adventure': {
                desc: 'Videojuego educativo para la preparaci\u00f3n de las pruebas <b>Saber Pro</b>, desarrollado como <b>trabajo de grado</b> en el Semillero SECBI con un nivel de madurez tecnol\u00f3gica <b>TRL 5</b>. Fue presentado como ponencia en el XXI Encuentro EDESI 2026 de RedCOLSI, donde obtuvo distinci\u00f3n Sobresaliente.',
                sections: [
                    {
                        title: 'La idea',
                        paragraphs: [
                            'Estudiar para una prueba estandarizada es tedioso, y el abandono es alto. Quiz Adventure convierte ese estudio en un <b>combate por turnos</b>: cada pregunta es un ataque. Si el estudiante responde bien, golpea al enemigo; si falla, pierde un coraz\u00f3n. La mec\u00e1nica sostiene la atenci\u00f3n donde un cuestionario plano la pierde.',
                        ],
                    },
                    {
                        title: 'Arquitectura',
                        paragraphs: [
                            'El sistema es <b>cliente-servidor desacoplado</b>: el juego corre en <b>Godot 4</b> con GDScript, y el backend es una API REST de <b>siete endpoints</b> en <b>FastAPI</b> con SQLAlchemy sobre PostgreSQL, todo contenedorizado con Docker.',
                            'La decisi\u00f3n de dise\u00f1o que define el proyecto: <b>la respuesta correcta nunca viaja al cliente</b>. El juego recibe el enunciado y las opciones, pero la validaci\u00f3n ocurre en el servidor. Si la respuesta correcta se enviara junto con la pregunta, bastar\u00eda con inspeccionar el tr\u00e1fico o la memoria del proceso para hacer trampa, y la herramienta perder\u00eda todo valor como instrumento de evaluaci\u00f3n.',
                            'Completa el sistema un <b>panel web de administraci\u00f3n</b> para gestionar el banco de preguntas sin tocar la base de datos.',
                        ],
                    },
                    {
                        title: 'Mec\u00e1nicas y arte',
                        paragraphs: [
                            'El combate tiene retroalimentaci\u00f3n visual en ambos sentidos: animaciones de ataque del jugador, del enemigo, y estados de da\u00f1o para cada uno. Los <b>shaders GLSL</b> propios resuelven el destello de impacto cuando un personaje recibe un golpe.',
                            'La <b>dificultad</b> se refleja en el costo del error: en los niveles m\u00e1s altos, una respuesta incorrecta cuesta m\u00e1s vidas. Es la forma de que la progresi\u00f3n importe sin cambiar las reglas del juego.',
                        ],
                    },
                ],
            },
            'data-warehouse': {
                desc: 'Soluci\u00f3n de <b>inteligencia de negocios</b> sobre <b>SQL Server</b> para el an\u00e1lisis del parque tecnol\u00f3gico de una organizaci\u00f3n: 603 equipos con su historial de mantenimientos. El trabajo cubre el ciclo completo, desde la extracci\u00f3n de los datos operativos hasta el modelo predictivo que los explota.',
                sections: [
                    {
                        title: 'Proceso ETL',
                        paragraphs: [
                            'La fuente son dos tablas operativas: <b>EQUIPO</b> y <b>MANTENIMIENTO</b>. El ETL las transforma en una tabla plana lista para el an\u00e1lisis, calculando cinco variables derivadas: la <b>antig\u00fcedad</b> de cada equipo con <code>DATEDIFF</code> sobre su fecha de compra, el conteo de <b>mantenimientos preventivos</b> y <b>correctivos</b> mediante subconsultas por tipo, la <b>marca</b> tra\u00edda con un <code>LEFT JOIN</code>, y un indicador binario de si el equipo ha recibido mantenimiento.',
                            'Us\u00e9 subconsultas en lugar de joins directos por una raz\u00f3n concreta: un join contra la tabla de mantenimientos duplicar\u00eda la fila de cada equipo tantas veces como mantenimientos tenga, y eso falsear\u00eda el an\u00e1lisis. Con subconsultas, cada equipo permanece como un \u00fanico registro.',
                            'El resultado se encapsula en una <b>vista reutilizable</b> que aplica dos filtros del requerimiento: solo equipos activos, y excluyendo las placas presentes en un archivo plano importado. La comparaci\u00f3n entre ambas tablas requiri\u00f3 <code>COLLATE DATABASE_DEFAULT</code> para alinear sus intercalaciones. La vista entrega exactamente <b>603 registros</b>.',
                        ],
                    },
                    {
                        title: 'Modelo dimensional',
                        paragraphs: [
                            'Sobre los datos operativos constru\u00ed un <b>modelo estrella</b>: una tabla de hechos central con las claves for\u00e1neas de cada medici\u00f3n, rodeada de <b>17 tablas de dimensi\u00f3n</b> \u2014marca, tipo de equipo, marca de procesador, tipo de mantenimiento, usuario, agente, tipo de ingreso, estado, y dimensiones de tiempo de a\u00f1o y mes, entre otras\u2014.',
                            'Las dimensiones de tiempo se generan a partir de las fechas reales de mantenimiento con <code>SELECT DISTINCT</code>, de modo que el calendario del cubo refleja el periodo efectivo de los datos y no un rango arbitrario. Cada dimensi\u00f3n lleva su clave primaria con <code>IDENTITY</code>, y la tabla de hechos sus 16 claves for\u00e1neas correspondientes.',
                        ],
                    },
                    {
                        title: 'Miner\u00eda de datos',
                        paragraphs: [
                            'Con el conjunto preparado apliqu\u00e9 dos t\u00e9cnicas en <b>Orange</b>, tomando la marca del equipo como variable objetivo.',
                            'El <b>\u00e1rbol de decisi\u00f3n</b> revel\u00f3 que la antig\u00fcedad es la variable con mayor poder predictivo: parte la ra\u00edz y deja un nodo casi puro en los equipos de dos a\u00f1os o menos, donde 198 de 202 son Lenovo (98%). La segunda variable en importancia result\u00f3 ser el mantenimiento preventivo. En la rama de mayor antig\u00fcedad la distribuci\u00f3n se invierte y HP pasa a dominar con 164 equipos de 401.',
                            'La <b>segmentaci\u00f3n k-means</b> se evalu\u00f3 entre 2 y 8 grupos usando el <b>\u00edndice de silueta</b> como criterio. El cl\u00faster C1 result\u00f3 el m\u00e1s homog\u00e9neo, compuesto en su totalidad por equipos Dell, con una silueta media de 0,708. El gr\u00e1fico de dispersi\u00f3n confirm\u00f3 que el cl\u00faster C5 concentra los equipos de mayor antig\u00fcedad del parque.',
                        ],
                    },
                ],
            },
            'infraestructura-aws': {
                desc: 'Arquitectura completa sobre <b>AWS</b> construida desde cero: red propia, c\u00f3mputo, base de datos NoSQL, almacenamiento de objetos y funciones sin servidor. Cada componente se configur\u00f3 con el criterio de <b>permiso m\u00ednimo</b> y se verific\u00f3 en funcionamiento.',
                sections: [
                    {
                        title: 'Red',
                        paragraphs: [
                            'El punto de partida es una <b>VPC propia</b> dimensionada para 500 hosts, con su Internet Gateway, tabla de rutas y subred p\u00fablica. No se us\u00f3 la VPC por defecto: definir la red desde cero permite controlar el direccionamiento y aislar los recursos.',
                            'La instancia recibe una <b>IP el\u00e1stica</b>, de modo que la direcci\u00f3n p\u00fablica sobrevive a los reinicios. Sin ella, cada detenci\u00f3n del servidor cambiar\u00eda el punto de acceso y romper\u00eda cualquier configuraci\u00f3n que dependa de \u00e9l.',
                        ],
                    },
                    {
                        title: 'C\u00f3mputo y aplicaciones',
                        paragraphs: [
                            'Sobre la instancia <b>EC2</b> configur\u00e9 <b>Nginx</b> sirviendo dos aplicaciones web: una est\u00e1tica que consulta datos, y otra en <b>Flask</b> con sus dependencias de Python. El acceso administrativo se hace por <b>EC2 Instance Connect</b> y por PuTTY con llave, sin contrase\u00f1as.',
                        ],
                    },
                    {
                        title: 'Datos',
                        paragraphs: [
                            'La capa de datos son <b>siete tablas en DynamoDB</b>, consultadas tanto desde <b>CloudShell</b> como desde la aplicaci\u00f3n web. El sitio resuelve cinco retos de consulta sobre esas tablas, desde b\u00fasquedas por clave de partici\u00f3n hasta filtros compuestos.',
                        ],
                    },
                    {
                        title: 'Serverless y automatizaci\u00f3n',
                        paragraphs: [
                            'Dos funciones <b>Lambda</b> cubren necesidades distintas. La primera genera <b>URLs pre-firmadas</b> para subir archivos a <b>S3</b> sin exponer credenciales: el tipo y el tama\u00f1o del archivo viajan <b>dentro de la firma criptogr\u00e1fica</b>, de modo que el servidor no puede recibir algo distinto a lo autorizado aunque el cliente lo intente.',
                            'La segunda apaga la instancia seg\u00fan un horario, disparada por una regla de <b>EventBridge</b>. Es control de costos: una instancia encendida de noche y fines de semana consume sin dar servicio.',
                            'Todo el acceso entre servicios se resuelve con <b>roles IAM</b> de permiso m\u00ednimo \u2014la Lambda solo puede detener instancias, el EC2 solo puede escribir en su bucket\u2014 en lugar de credenciales incrustadas en el c\u00f3digo.',
                        ],
                    },
                ],
            },
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
    if (path.includes('frisby-roll')) return 'frisby-roll';
    if (path.includes('quiz-adventure')) return 'quiz-adventure';
    if (path.includes('data-warehouse')) return 'data-warehouse';
    if (path.includes('infraestructura-aws')) return 'infraestructura-aws';
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
        // A project with no public repo links to the deployed app
        // instead, and the label has to say so.
        const esRepo = (githubBtn.getAttribute('href') || '').includes('github.com');
        if (textNode) textNode.textContent = ' ' + t[esRepo ? 'github-btn' : 'live-btn'];
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

    // Long-form sections. Only the newer project pages have these, and the
    // DOM order matches the order of the `sections` array.
    if (key && t.projects[key] && t.projects[key].sections) {
        const blocks = document.querySelectorAll('.project-detail-section');
        t.projects[key].sections.forEach((section, i) => {
            const block = blocks[i];
            if (!block) return;
            const title = block.querySelector('.project-section-title');
            if (title) title.textContent = section.title;
            const paras = block.querySelectorAll('.project-section-text');
            section.paragraphs.forEach((html, j) => {
                if (paras[j]) paras[j].innerHTML = html;
            });
        });
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
