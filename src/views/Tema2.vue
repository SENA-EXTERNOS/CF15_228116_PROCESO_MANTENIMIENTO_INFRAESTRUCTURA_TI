<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tecnología
    
    .bloque-texto-g.color-acento-contenido.bloque-inv.p-md-5.p-sm-4.p-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.svg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Significa el uso de equipos de telecomunicaciones y computadoras (computadoras) para transmitir, procesar y almacenar datos. El término incluye temas de computación, electrónica y telecomunicaciones.<br><br>Es importante señalar que el concepto de tecnología de la información surgió a mediados del siglo XX, pero la gente ha estado almacenando, procesando y transmitiendo información durante miles de años antes de Cristo. Por supuesto, estos procesos son muy diferentes a los de hoy.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Tipo de herramientas y arquitectura de servidores

    .BGIMG02.px-md-5.px-4 
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img02.svg")
        .col-lg-8(data-aos="fade-left")
          .cajon-b.color-acento-botones.p-3.mb-4(data-aos="fade-left")
            p.mb-0 #[b Tipo de herramientas]: Son un conjunto de herramientas utilizadas para administrar información sobre la computadora. Estas incluyen: Procesadores de texto, bases de datos, #[em software] de gráficos, correo electrónico, hojas de cálculo, motores de búsqueda, #[em software] de diseño, gestores, redes de telecomunicaciones, etc. El uso de estas herramientas requiere, además de conocimientos informáticos, la comprensión de sus elementos, las tareas que realizan y las operaciones básicas; su implementación requiere conocimiento del uso de la lógica, organización y esquemas de presentación. De esta manera sabremos qué se puede hacer con ellas.
          .BG04.p-4(data-aos="flip-up")
            p.mb-0 #[b Arquitectura de servidores]: Hace referencia a la arquitectura de una red informática en la que una serie de procesadores remotos llamados "clientes" solicitan y reciben servicios de un sistema central. Desde una computadora host llamada servidor. Por lo tanto, el término "modelo cliente-servidor" se analiza a continuación.

</template>

<script>
export default {
  name: 'Tema2',
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
