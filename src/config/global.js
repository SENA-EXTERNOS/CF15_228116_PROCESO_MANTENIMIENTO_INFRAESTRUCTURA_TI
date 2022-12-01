export default {
  global: {
    componenteFormativo: 'Proceso de mantenimiento de la infraestructura TI',
    descripcionCurso:
      'Este componente está diseñado para el buen mantenimiento y la contingencia de los dispositivos que conforman la infraestructura tecnológica T.I. empleando los distintos manuales con los que se cuentan en el lugar de trabajar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planes de Contingencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Procedimientos de Laboratorio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Prácticas seguras de laboratorio',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Procedimientos para proteger a las personas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Procedimientos para proteger a las personas',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tecnología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipo de herramientas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Arquitectura de servidores',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mantenimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de mantenimiento',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Clasificación de mantenimiento',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Manuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de procedimientos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Característica de manuales',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Electricidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipo de instrumentos de medición',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Aislamiento',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Elaboración de fichas técnicas',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Electrónica Básica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Componentes electrónicos',
            hash: 't_6_1',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Planos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Tipo de planos eléctricos',
            hash: 't_7_1',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Herramientas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Tipo de herramientas',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Uso de herramientas',
            hash: 't_8_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.3',
            titulo: 'Clasificación de dispositivos',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Ensambles de equipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Mantenimiento de equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Tipo de equipos de computo',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Tipo de protocolos',
            hash: 't_10_2',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'Sistemas Operativos Dispositivos Móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '11.2',
            titulo: 'Aplicación móvil',
            hash: 't_11_1',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        icono: 'far fa-file-alt',
        numero: '12',
        titulo: 'Sistemas de Computación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        icono: 'far fa-file-alt',
        numero: '13',
        titulo: 'Licenciamientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '13.1',
            titulo: 'Tipos de sistemas operativos',
            hash: 't_13_1',
          },
        ],
      },
      {
        nombreRuta: 'tema14',
        icono: 'far fa-file-alt',
        numero: '14',
        titulo: 'Periféricos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema15',
        icono: 'far fa-file-alt',
        numero: '15',
        titulo: 'Redes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '15.1',
            titulo: 'Tipos de sistemas operativos',
            hash: 't_15_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Explicación componentes PC',
      referencia:
        'Gálvez A. (17 jun 2016) Explicación componentes PC. [video]. Youtube.',
      tipo: 'video',
      link: 'https://youtu.be/-1clqsilLQ0',
    },
    {
      tema: 'Mantenimiento de equipo',
      referencia:
        'Mañuico, R.(2022) Mantenimiento de computadoras PC paso a paso [video]. Youtube.',
      tipo: 'video',
      link: 'https://youtu.be/VK4MquWx_a0',
    },
    {
      tema: 'Tipos De Redes (Lan, Man Y Wan)',
      referencia:
        'InsppectorTula (2019)Tipos De Redes (Lan, Man Y Wan) [video]. Youtube.',
      tipo: 'video',
      link: 'https://youtu.be/WK0TrTvOXe4',
    },
    {
      tema:
        'S5 Herramientas para mantenimiento de un ordenador/Normas de seguridad e Higiene',
      referencia:
        'Reyna Castillo (2017) S5 Herramientas para mantenimiento de un ordenador/Normas de seguridad e Higiene [video]. Youtube.',
      tipo: 'video',
      link: 'https://youtu.be/mv9JMbwMnPk',
    },
  ],
  glosario: [
    {
      termino: 'ANS',
      significado:
        'Acuerdo de nivel de servicio: Es un acuerdo mutuo. Proveedores y clientes de productos o servicios.',
    },
    {
      termino: 'Funcional u operativo',
      significado:
        'Es la condición de un activo técnico, diagnosticada por personal debidamente calificado, correspondiente a elementos en buen estado de funcionamiento, cuyas funciones y funciones impiden su uso primario previsto durante el período de uso especificado.',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        'Conjunto de elementos físicos o materiales que constituyen una computadora o un sistema informático.',
    },
    {
      termino: 'PDA',
      significado:
        'Un asistente digital personal, computadora de bolsillo, organizador personal o planificador de bolsillo electrónico es una computadora portátil con un sistema de reconocimiento de escritura a mano que originalmente fue diseñado como un planificador electrónico personal (para usar con calendarios, listas de contactos, blocs de notas, recordatorios, dibujos, etc.).',
    },
    {
      termino: 'Redes',
      significado:
        'Una red informática, también conocida como red informática o red informática, es un conjunto de información (archivos) y recursos (CD, impresoras, etc.).',
    },
    {
      termino: 'SAN',
      significado:
        'Es una red de almacenamiento integral. Se trata de una arquitectura completa que agrupa los siguientes elementos. Una red de alta velocidad de canal de fibra o iSCSI. Un equipo de interconexión dedicado. Elementos de almacenamiento de red.',
    },
    {
      termino: 'Servicio',
      significado: 'Trabajo, especialmente cuando se hace para otra persona.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'Un conjunto de programas y rutinas que permiten a una computadora realizar tareas específicas.',
    },
    {
      termino: 'TI',
      significado: 'Tecnologías de Información.',
    },
    {
      termino: 'WLAN',
      significado:
        'Es una red inalámbrica de comunicación para distancias cortas y funciona mediante ondas de radio o infrarrojas. Con los rápidos avances de Internet, ya no era necesario utilizar cableado como las redes tradicionales.',
    },
  ],
  referencias: [
    {
      referencia: 'bsginstitute. (s.f.). bsginstitute. Obtenido de',
      link:
        'https://bsginstitute.com/bs-campus/blog/que-es-mantenimiento-preventivo-1133',
    },
    {
      referencia:
        'Burgos Hernández, Agustín Emilio/ Cuaran Muñoz, Juan Carlos. Software Educativo Multimedia En La Línea Para Mantenimiento De Computadores. Universidad Antonio Nariño, 9999. Print.',
    },
    {
      referencia: 'eurofins. (21 de junio de 2020). envira. Obtenido de',
      link:
        'https://envira.es/es/diferentes-tipo-de-mantenimiento-existen-empresa/#:~:text=Dependiendo%20del%20trabajo%20a%20realizar,%3A%20preventivo%2C%20correctivo%20y%20predictivo',
    },
    {
      referencia:
        'Hamacher Carl Vranesic Zvonko Zaky Satwat, Organización de Computadores, España, McGraw-Hill, 2003.',
    },
    {
      referencia:
        'icontec internacional. (17 de 03 de 1999). docplayer. Obtenido de',
      link: 'https://docplayer.es/77035573-Guia-tecnica-colombiana-62.html',
    },
    {
      referencia: 'informacion, t. (2018).',
      link:
        'https://www.tecnologias-informacion.com/arquitectura-servidores.html',
    },
    {
      referencia: 'Martins, J. (16 de agosto de 2022). asana. Obtenido de',
      link: 'https://asana.com/es/resources/contingency-plan',
    },
    {
      referencia: 'Serneguet, M. (20 de 03 de 2018). DATADEC. Obtenido de',
      link: 'https://www.datadec.es/blog/pasos-plan-mantenimiento-preventivo',
    },
    {
      referencia: 'web, h. p. (s.f.). protocolo de comunicaciones. Obtenido de',
      link: 'https://neo.lcc.uma.es/evirtual/cdd/tutorial/modelos/clbas.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
