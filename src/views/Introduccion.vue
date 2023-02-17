<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Estimado Aprendiz. A través de este componente de formación, podrá aprender a utilizar la tecnología y los planes de mantenimiento de la infraestructura de comunicaciones, comenzando por la planificación de diferentes tipos de actividades de mantenimiento e identificando las necesidades de los clientes o la empresa que, en última instancia, se van a satisfacer.
        p Asimismo, el enfoque de lo que aprenderá aquí, tendrá como meta estimular las destrezas básicas y fortalecer habilidades para la utilización del sistema operativo de una computadora y dar solución a pequeños conflictos o inconvenientes, que puedan presentar en su momento.
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/intro/img01.svg")

    figure.mb-4(data-aos="zoom-out")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
