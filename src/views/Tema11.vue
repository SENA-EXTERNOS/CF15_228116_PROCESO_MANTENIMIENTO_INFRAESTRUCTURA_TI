<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Sistemas operativos y de computación
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema11/img01.svg")
      .col-lg-9(data-aos="fade-left")
        p Un sistema operativo móvil, es un conjunto de <i>software</i> que compila ciertas funciones de un teléfono móvil y brinda servicios a las aplicaciones móviles que se ejecutan en él. Al igual que los ordenadores con Windows, Linux o Mac OS, los dispositivos móviles también cuentan con sus propios sistemas operativos, como Android, iOS, etc. Los sistemas operativos móviles son más simples y se adaptan mejor a las conexiones inalámbricas, los formatos de medios móviles y las diferentes formas de almacenar datos en ellos.
        p.mb-0 Los sistemas operativos y fabricantes más famosos son:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-xl-7.col-8
            figure
              img(src='@/assets/curso/tema11/img02.png')
        h4.text-white.text-center Android
      .col-md.tarjeta.color-primario.p-5(data-aos="flip-up")
        .row.justify-content-center.mb-4
          .col-xl-7.col-8
            figure
              img(src='@/assets/curso/tema11/img03.png')
        h4.text-white.text-center Apple (iOS)
      .col-md.tarjeta.color-acento-botones.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-xl-7.col-8
            figure
              img(src='@/assets/curso/tema11/img04.png')
        h4.text-white.text-center Windows
    
    h3(data-aos="fade-right").mt-5 Aplicación móvil
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center
          .col-9
            img(src="@/assets/curso/tema11/img05.svg")
      .col-lg-9(data-aos="fade-left")
        .BGR07.p-5
          .h4 Aplicaciones móviles
          p.mb-0 Las aplicaciones son herramientas para teléfonos inteligentes y otros dispositivos, que pueden ayudar a los usuarios a realizar tareas específicas que normalmente se ejecutan en computadoras de escritorio; también permiten que la web sea más accesible en dispositivos móviles.

    h3(data-aos="fade-right").mt-5 Sistemas de Computación

    .bgf.p-5
      p Una experiencia informática consta de componentes de <i>hardware</i> y <i>software</i>. Los dispositivos físicos son dispositivos físicos como gabinetes, teclados, monitores, cables, amplificadores y modos lineales, clasificados por su función como periféricos de entrada, dispositivos de memoria o periféricos de entrada y salida. 

      p.mb-0 El término <i>software</i> se refiere a los programas con los que se controla un sistema informático. El <i>software</i> del cerebro, también llamado modelo, le da instrucciones al procesador para ejecutarlo.    

      .row.justify-content-center.mt-5
        .col-lg-6.col-10(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-11
              img(src="@/assets/curso/tema12/img01.svg")    
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-9
              img.w-90(src="@/assets/curso/tema12/img02.svg")



</template>

<script>
export default {
  name: 'Tema11',
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
