export const paragraph = {
  introduction:
    "Nací en Ciudad de La Plata, dónde actualmente vivo, trabajo y disfruto de hacer los que me gusta. Mis inicios con el deporte surgen de una infancia ligada a hacer distintas disciplinas, principalmente fútbol. A medida que iba creciendo, me vi en diferentes situaciones físicas, algunas muy desfavorables y con mucho sobre peso, las cuales, siempre intente mejorar para poder sentirme bien conmigo mismo y no dejar de hacer la disciplina que tanto me gusta y disfruto. Por eso, desde los 13 años, me interioricé en estudiar e informarme sobre entrenamiento y nutrición. Posteriormente, crecí y llegó el momento de inscribirme en la Facultad, dónde comencé la carrera de Educación Física. No conforme, fui por más. Comencé a capacitarme en diferentes cursos nacionales e internacionales, sobre preparación física y nutrición deportiva. Hoy, soy preparador físico especializado en varias áreas del entrenamiento, con cierto conocimiento para ayudarte a llegar a una mejor forma física, o aumentar tu rendimiento deportivo.",
  view: "Creo firmemente que hacer actividad física es un simple paso que podemos hacer como seres humanos para evitar miles de problemas y enfermedades. Sé, y seguramente vos también, todos los beneficios que trae hacer ejercicio; lo cual, haría poco relevante que te lo explique por qué, seguramente, sabes que es necesario para tu salud. Sin embargo, lo que no sabes, es que la actividad física no es lo mismo a ser deportista. Que no necesitas hacer locuras para estar mejor físicamente o ser más sano. Con locuras, quiero decir que no es necesario ir todos los días al gimnasio, a correr a diario. En fin, hacer cosas como si fueras un deportista. Quiero que entiendas que se puede adaptar la actividad física a cualquier estilo de vida, que, de hecho, debería ser así. El movimiento es natural y es lo más vital que tenemos, hay que cuidarlo y defenderlo desde las herramientas que tengamos.",
  objective:
    "Tengo muchos objetivos como preparador físico, pero en este plano quiero describir dos misiones de vida. Una, y la principal, es sacar a personas de una mala forma física. Quiero que seas más saludable, que te sientas mejor al mirarte, evitarte los dolores de cabeza que produce el sedentarismo y los malos hábitos de la vida. Con esto, no quiero cambiar tu vida, me quiero adentrar en ella y darte herramientas para que puedas hacer de ella una vida más saludable. Mi otra misión es la deportiva. Esto lo hago por amor al deporte y por qué me encanta ayudar a deportistas a mejorar su rendimiento deportivo.",
};
export const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};
export const cards = {
  gym: {
    title: "ENTRENAMIENTO PERSONALIZADO",
    text: "Ejecutaremos un plan de entrenamiento adaptado a tus circunstancias y objetivos, el cual, evolucionará a lo largo del tiempo.",
  },
  statistics: {
    title: "SEGUIMIENTO DIARIO",
    text: "A través de una plantilla, iremos midiendo el progreso obtenido. A la misma, tendrás acceso para visualizar y realizar ciertos comentarios, despejar tus dudas. Esta se podrá leer de forma sencilla mediante gráficos y notas hechas por nosotros.",
  },
  food: {
    title: "PLAN ALIMENTICIO",
    text: "Diseñaremos una guía alimentaria que se adapte a tus gustos, necesidades y creencias para poder comer de forma flexible, abarcando todas las necesidades de tu cuerpo, sin enroscarnos tanto.",
  },
  force: {
    title: "REVISIÓN TÉCNICA DE LOS EJERCICIOS",
    text: "Mensualmente, obtendrás un informe de tu progreso, en el cual haremos correcciones con más profundidad. Sincronizaremos, por un medio de contacto directo, para poder resolver consultas de forma personal y leer tu informe.",
  },
};
export const data = [
  {
    id: 1,
    title: "M.E: ENTRENAMIENTO FUNCIONAL",
    location: "La Plata. Parque San Martín.",
    description:
      "Recomendado para personas que le cuesta la adherencia al entrenamiento, iniciantes, o para aquellas personas que le gusta entrenar para mejorar su salud y aspecto físico.",
    price: {
      local: "6.500",
    },
    point: {
      one: "Guía alimenticia general.",
      two: "Evaluaciones fisicas.",
      three: "Registro de trabajo.",
      four: "WhatsApp M.E para despejar consultas y dudas.",
      five: "Clase por turnos semanales.",
    },
  },
  {
    id: 2,
    title: "M.E: PERSONALIZADO",
    location: "La Plata. Parque San Martín.",
    description:
      "Recomendado para personas que tienen el entrenamiento como estilo de vida, que buscan un cambio físico, o que realizan deportes de forma recreativa.",
    price: {
      local: "$8.000",
      international: "",
    },
    point: {
      one: "Charla introductoria.",
      two: "Planificación individualizada.",
      three: "Plan de alimentación personalizado.",
      four: "Guía alimencia general.",
      five: "WhatsApp staff uno a uno.",
      six: "Evaluaciones.",
      seven: "Informe evolutivo.",
      eight: "Ajustes periódicos",
    },
  },
  {
    id: 3,
    title: "M.E: PERSONALIZADO: DEPORTISTAS",
    location: "La Plata. Parque San Martín.",
    description:
      "Recomendado para aquellas personas que buscan aumentar su rendimiento deportivo, y por consiguiente, evitar cualquier tipo de lesión.",
    price: {
      local: "$8.000",
      international: "",
    },
    sport: "si",
    point: {
      one: "Charla introductoria.",
      two: "Planificación individualizada.",
      three: "Plan de alimentación personalizado.",
      four: "Guía alimencia general.",
      five: "WhatsApp staff uno a uno.",
      six: "Evaluaciones.",
      seven: "Informe evolutivo.",
      eight: "Ajustes periódicos",
    },
  },
  {
    id: 4,
    title: "PERSONALIZADO",
    location: "Online.",
    description:
      "Recomendado para personas que tienen al entrenamiento como un estilo de vida, buscan un cambio físico, o realizan deportes de forma recreativa.",
    point: {
      one: "Charla inicial.",
      two: "Rutina y planificacion individualizada.",
      three: "Plan de comidas pensado en vos.",
      four: "Material explicativo de los ejercicios a ejecutar.",
      five: "Resolución de dudas por Whatsapp.",
      six: "Informe evolutivo.",
      seven: "Ajustes en la rutina.",
      eight:
        "Una videollamada por ciclos, para resolver dudas de forma más personal.",
    },
    price: {
      local: "5.000",
      international: "100",
    },
  },
  {
    id: 5,
    title: "PERSONALIZADO: DEPORTISTAS.",
    location: "Online",
    description:
      "Recomendado para aquellas personas que buscan aumentar su rendimiento deportivo, y por consiguiente, evitar cualquier tipo de lesión.",
    point: {
      one: "Charla inicial.",
      two: "Rutina y planificacion individualizada.",
      three: "Plan de comidas pensado en vos.",
      four: "Material explicativo de los ejercicios a ejecutar.",
      five: "Resolución de dudas por Whatsapp.",
      six: "Informe evolutivo.",
      seven: "Ajustes en la rutina.",
      eight:
        "Una videollamada por ciclos, para resolver dudas de forma más personal.",
    },
    price: {
      local: "5.000",
      international: "100",
    },
    sport: "si",
  },
];
