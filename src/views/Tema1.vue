<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Planes de Contingencia
    
    p Cada técnico necesita ayudar al cliente para que no gaste más de lo necesario en el funcionamiento. No se deje engañar por la verdad desde el principio. Con ese fin, es importante seguir un plan de contingencia de 4 pasos que le permita abordar muchos problemas y minimizar el impacto en su negocio. Por lo tanto, un buen servicio debería hacer esto:

    .BGIMG01.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          AcordionA(tipo="a" clase-tarjeta="BGR01")
            div(titulo="Análisis de riesgo")
              p.mb-0 ¿No es seguro trabajar en Internet? ¿Ha perdido muchos archivos importantes porque no guarda copias de seguridad? ¿Existen malas prácticas en la gestión del #[em hardware] informático? Todas estas cosas deben conocerse y resolverse para ayudarlo a evitar problemas.
            div(titulo="Definir una política de incidencias")
              p.mb-0 Debe conocer el protocolo a seguir cuando ocurren problemas aleatorios en la computadora. Por ejemplo, habrá muchos problemas que ni siquiera requieren que un técnico venga a su empresa y se pueden manejar de forma remota. En otros casos, debes recuperar los archivos perdidos lo antes posible y tener un grupo de respaldo para seguir trabajando.
            div(titulo="Adoptar medidas informáticas preventivas")
              p.mb-0 Se refiere a las principales tareas de mantenimiento preventivo de las computadoras, tales como limpiar la torre por dentro o reparar equipos periféricos, logrando que tus dispositivos duren más.
            div(titulo="Informar a los empleados")
              p.mb-0 Los empleados saben qué hacer si sucede algo para evitar que el problema empeore, o para tratar de solucionarlo ellos mismos y empeorarlo.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img01.svg")

    p Con esta sencilla fórmula (planificación de contingencia para el mantenimiento preventivo), estará preparado para problemas graves que afecten el normal desarrollo de su negocio. En lugar de confiar en los servicios de tecnología que no se preocupan por el bienestar general de su negocio, hágalo bien la primera vez.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Procedimientos de Laboratorio
    
    p Son prácticas básicas de seguridad en el lugar de trabajo, herramientas de #[em hardware] y #[em software] y eliminación de materiales. Las instrucciones de seguridad ayudan a prevenir accidentes, lesiones y protegen el equipo contra daños. Algunas de estas pautas están diseñadas para proteger el medio ambiente de la contaminación causada por la eliminación inadecuada de materiales.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Prácticas seguras de laboratorio
    
    .h4 Prácticas de protección personal
    p.animation-1.mb-5 Las prácticas seguras de trabajo ayudan a prevenir lesiones personales y daños a los equipos informáticos. Por seguridad, el lugar de trabajo debe estar limpio, organizado y debidamente iluminado. Todos deben entender y seguir las reglas de seguridad.<br><br>Siga siempre las instrucciones básicas de seguridad para evitar cortes, quemaduras, descargas eléctricas y daños en los ojos. Se recomienda tener a mano un extintor y un botiquín de primeros auxilios en caso de incendio o accidente. Los cables retorcidos o sueltos pueden suponer un riesgo de fallo en la instalación de la red. Los cables deben colocarse en conductos de cables o bandejas de cables para evitar peligros.<br><br>A continuación, se proporciona una lista completa de medidas básicas de seguridad informática:

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-primario
          .BGR02.p-4(titulo="Medida 1")
            p.mb-0 Quítese el reloj y las joyas y use ropa suelta.
          .BGR02.p-4(titulo="Medida 2")
            p.mb-0 Antes de realizar cualquier mantenimiento, apague el dispositivo y desconecte el cable de alimentación.
          .BGR02.p-4(titulo="Medida 3")
            p.mb-0 Inserte bordes afilados en la computadora.
          .BGR02.p-4(titulo="Medida 4")
            p.mb-0 Nunca abra la fuente de alimentación o la pantalla CRT.
          .BGR02.p-4(titulo="Medida 5")
            p.mb-0 No toque las áreas calientes de la impresora ni utilice alto voltaje.
          .BGR02.p-4(titulo="Medida 6")
            p.mb-0 Saber dónde está el extintor y cómo usarlo.
          .BGR02.p-4(titulo="Medida 7")
            p.mb-0 Mantenga su lugar de trabajo libre de alimentos y bebidas.
          .BGR02.p-4(titulo="Medida 8")
            p.mb-0 Mantenga su área de trabajo limpia y ordenada.
          .BGR02.p-4(titulo="Medida 9")
            p.mb-0 Cuando levante objetos pesados, doble las rodillas para evitar lesiones.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img02.svg")

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Procedimientos para proteger a las personas

    p Siga las pautas de seguridad eléctrica para evitar incendios, lesiones o la muerte en su hogar o lugar de trabajo. Las fuentes de alimentación y los monitores CRT son dispositivos de alto voltaje.
    p #[b Advertencia]: No use una muñequera antiestática cuando realice el mantenimiento de fuentes de alimentación o monitores CRT. Solo los técnicos capacitados deben intentar reparar las fuentes de alimentación y los monitores CRT.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center
          .col-8
            img(src="@/assets/curso/tema1/img03.svg")
      .col-lg-9(data-aos="fade-left")
        .cajon.color-primario.p-4
          p Algunas partes de la impresora pueden calentarse durante el uso y otras partes pueden tener alto voltaje. Consulte el manual de su impresora para ver los componentes de alto voltaje. Algunos componentes retienen alto voltaje incluso cuando la impresora está apagada. Permita que la impresora se enfríe antes de servir.
          p.mb-0 Los equipos eléctricos tienen requisitos especiales de energía. Por ejemplo: las fuentes de alimentación están diseñadas para computadoras portátiles específicas. Reemplazar la fuente de alimentación con otro tipo de computadora portátil o dispositivo puede dañar la fuente de alimentación y la computadora portátil.

    p Siga las normas de seguridad contra incendios para proteger la vida, la propiedad y el equipo. Para evitar descargas eléctricas o daños a la computadora, apáguela y desconecte el cable de alimentación antes de intentar cualquier reparación. 
    p Los incendios pueden propagarse rápidamente y tener consecuencias muy costosas. El uso adecuado de un extintor de incendios puede evitar que un pequeño incendio se salga de control. Sea consciente de la posibilidad de un encendido accidental y sepa qué hacer cuando trabaje con componentes de la computadora. Tenga cuidado con el olor de las computadoras y los dispositivos electrónicos. Cuando los componentes electrónicos se sobrecalientan o se cortocircuitan, emiten un olor a quemado. Siga el código de incendios:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img04.svg")
      .col-lg-8(data-aos="fade-left")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta(style="background-color:#4DD0E1")
              span 1
            | Nunca apague un fuego descontrolado o descontrolado
          li 
            .lista-ol--cuadro__vineta(style="background-color:#4DD0E1")
              span 2
            | Planifique siempre su escape antes de empezar
          li 
            .lista-ol--cuadro__vineta(style="background-color:#4DD0E1")
              span 3
            | Salga del edificio rápidamente
          li 
            .lista-ol--cuadro__vineta(style="background-color:#4DD0E1")
              span 4
            | Llame a la línea de emergencia para obtener ayuda
          li 
            .lista-ol--cuadro__vineta(style="background-color:#4DD0E1")
              span 5
            | Ubique y lea el manual del operador antes de usar un extintor de incendios en el lugar de trabajo

    p Todos los tipos de extintores contienen una sustancia química especial para extinguir diferentes tipos de incendios; de acuerdo con el material que se encuentre afectado en el momento, debe tener en cuenta las instrucciones indicadas en el extintor. 

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-8
        img(src="@/assets/curso/tema1/img05.svg")

    p Es importante saber cómo usar un extintor de incendios. Ahora tenga en cuenta el significado de las siglas QAAR para entender cómo usar el extintor:

    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-secundario(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-9.col-8(data-aos="fade-right")
              .h4 Q
              p.mb-0 Retire la llave de seguridad.
            .col-lg-3.col-4.mb-lg-0.mb-4(data-aos="fade-left")
              img(src="@/assets/curso/tema1/img06.svg")
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mb-lg-0.mb-4(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img07.svg")
            .col-lg-9.col-8(data-aos="fade-left")
              .h4 A
              p.mb-0 Apunte a la base del fuego, no a la llama.
          .row.justify-content-center.align-items-center
            .col-lg-9.col-8(data-aos="fade-right")
              .h4 A
              p.mb-0 Apriete el engranaje.
            .col-lg-3.col-4.mb-lg-0.mb-4(data-aos="fade-left")
              img(src="@/assets/curso/tema1/img08.svg")
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mb-lg-0.mb-4(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img09.svg")
            .col-lg-9.col-8(data-aos="fade-left")
              .h4 R
              p.mb-0 Pulverizar moviendo la boquilla de lado a lado.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Procedimientos para proteger equipos y datos
    
    p Partiendo de lo anterior, ahora se detallarán los procedimientos para proteger los equipos:

    .row.justify-content-center.mb-5(data-aos="zoom-out")
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
          .BGR03A.p-4
            p.mt-5.mb-0 Las descargas electrostáticas - ESD, las condiciones climáticas severas y el suministro de energía deficiente pueden dañar los dispositivos informáticos. Siga las pautas de manejo adecuadas, tenga en cuenta las preocupaciones ambientales y use dispositivos duraderos y potentes para evitar daños en el dispositivo y pérdida de datos.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
          .BGR03A.p-4
            p.mt-5.mb-0 La electricidad estática es la acumulación de carga eléctrica en la superficie. La ESD ocurre cuando una acumulación de carga no puede ser retenida por un objeto y se transfiere a otro objeto, causando daño. Puede destruir los componentes electrónicos en los sistemas informáticos.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
          .BGR03A.p-4
            p.mt-5.mb-0 Para que una persona experimente ESD, se debe generar una carga estática de al menos 3000 V. Por ejemplo, puede acumular electricidad estática si camina sobre un piso alfombrado, y si toca a otra persona, ambos pueden electrocutarse. Si la descarga es dolorosa o ruidosa, probablemente sea superior a 10 000 V. En comparación, menos de 30 V de la electricidad estática puede dañar los componentes de la computadora.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img13.svg' alt='AvatarTop')
          .BGR03A.p-4
            p.mt-5 Las instrucciones para evitar daños por ESD son:
            ul.lista-ul--color
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Guarde todos los componentes en bolsas antiestáticas hasta la instalación.
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Utilice el suelo de la mesa del comedor. 
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Utilizar la plataforma en el lugar de trabajo.
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Use muñequeras antiestáticas cuando trabaje en una computadora.

    .h4 Von Neuman y Harvard
    figure.mb-4(data-aos="zoom-out")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
