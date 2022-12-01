<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 14
      h1 Periféricos
    
    p.animation-1.mb-5 En una computadora, periféricos es un nombre general para dispositivos auxiliares y dispositivos individuales o dispositivos conectados a la unidad central de procesamiento de la computadora.<br><br>Se dividen en las siguientes categorías principales:

    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-primario(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-10.col-9(data-aos="fade-right")
              .h4 Extensión de entrada
              p.mb-0 Si es necesario, los datos se capturan y digitalizan, el usuario u otro dispositivo los ingresa y luego se envían a una computadora para su procesamiento.
            .col-lg-2.col-3.mb-lg-0.mb-4(data-aos="fade-left")
              img(src="@/assets/curso/tema14/img01.svg")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-3.mb-lg-0.mb-4(data-aos="fade-right")
              img(src="@/assets/curso/tema14/img02.svg")
            .col-lg-10.col-9(data-aos="fade-left")
              .h4 Dispositivos de salida
              p.mb-0 Dispositivos que proyectan o muestran información fuera de la computadora. Periféricos de entrada/salida (E/S): se utilizan para conectar la computadora al entorno externo.
          .row.justify-content-center.align-items-center
            .col-lg-10.col-9(data-aos="fade-right")
              .h4 Equipos de almacenamiento
              p.mb-0 Dispositivos que almacenan datos e información.
            .col-lg-2.col-3.mb-lg-0.mb-4(data-aos="fade-left")
              img(src="@/assets/curso/tema14/img03.svg")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-3.mb-lg-0.mb-4(data-aos="fade-right")
              img(src="@/assets/curso/tema14/img04.svg")
            .col-lg-10.col-9(data-aos="fade-left")
              .h4 Accesorios de comunicación
              p.mb-0 Permiten la interacción entre dos o más dispositivos.

</template>

<script>
export default {
  name: 'Tema14',
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
