<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Sistemas de Computación
    
    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-9
            img.w-90(src="@/assets/curso/tema12/img02.svg")
        p.mb-0 Las aplicaciones móviles son aplicaciones para teléfonos inteligentes y otros dispositivos móviles. Las aplicaciones ayudan a los usuarios a realizar tareas específicas que normalmente se realizan en computadoras de escritorio y hacen que la web sea más accesible en dispositivos móviles.
      .col-lg-6.col-10(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-11
            img(src="@/assets/curso/tema12/img01.svg")
        p.mb-0 El término #[em software] se refiere a los programas con los que se controla un sistema informático. El #[em software] del cerebro, también llamado modelo, le da instrucciones al procesador para ejecutarlo.

</template>

<script>
export default {
  name: 'Tema12',
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
