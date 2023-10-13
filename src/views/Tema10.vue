<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Mantenimiento de equipos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 El mantenimiento informático es una tarea que toda empresa u hogar debe realizar para lograr un rendimiento óptimo de los componentes y periféricos de cada sistema, de modo que el flujo de trabajo no se vea ralentizado por el mal funcionamiento o la lentitud de los equipos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema10/img01.svg")

    h3(data-aos="fade-right").mt-5 Tipo de equipos de computo
    
    p.mb-5 Antes, los equipos de cómputo ocupaban edificios enteros y eran utilizados para complejos cálculos científicos. Hoy en día, encontramos dispositivos multiusos con capacidades ilimitadas del tamaño de un reloj de pulso, incluso.<br><br>#[b Ahora bien, ¿qué computadora es mejor?, ¿qué capacidades le conviene más?, ¿Qué funciones de procesamiento y almacenamiento elegir? ¿Qué características multimedia debería elegir? Con tantas opciones, es difícil decir cuál es la mejor.]<br><br>Seguiremos con los tipos de ordenadores que aportan importantes beneficios y ayudan a mejorar la competitividad de empresas y clientes:

    .row.justify-content-center.mb-4
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema10/img02.svg')
          h4.text-center Supercomputadoras
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema10/img03.svg')
          h4.text-center #[em Mainframes] o macrocomputadoras
      .col-lg-4.col-md-6.col-8.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema10/img04.svg')
          h4.text-center Equipos ensamblados
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema10/img05.svg')
          h4.text-center #[em Laptops]
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema10/img06.svg')
          h4.text-center Computadoras de escritorio
      .col-lg-4.col-md-6.col-8(data-aos="flip-up")
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema10/img07.svg')
          h4.text-center Estaciones de trabajo

    h3(data-aos="fade-right").mt-5 Tipo de protocolos
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema10/img08.png")
      .col-lg-6(data-aos="fade-left")
        .cajon.color-acento-botones.p-4
          p.mb-0 Los protocolos para la transmisión de datos en internet más importantes son TCP - Protocolo de Control de Transmisión e IP - Protocolo de Internet. De manera conjunta - TCP/IP podemos enlazar los dispositivos que acceden a la red, algunos otros protocolos de comunicación asociados a internet son POP, SMTP y HTTP.

</template>

<script>
export default {
  name: 'Tema10',
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
