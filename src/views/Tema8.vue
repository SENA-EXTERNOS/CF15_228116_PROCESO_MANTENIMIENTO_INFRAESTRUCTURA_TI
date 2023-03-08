<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Herramientas
    
    h3(data-aos="fade-right").mt-5 Tipo de herramientas
    
    p Las computadoras se han convertido en una parte fundamental del trabajo diario de los humanos como especie dominante. Son omnipresentes y ya están a la altura de la televisión en cuanto a su presencia en el hogar.

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema8/img01.svg")
      .col-lg-9(data-aos="fade-left")
        .cajon.color-acento-botones.p-4
          p De todos los tipos de ordenadores que pueden existir, los portátiles y los ordenadores personales son los más habituales y no están exentos de problemas técnicos y necesidades de mantenimiento.
          p.mb-0 Por eso la demanda de talleres de informática es tan alta. Aquí nombraremos un conjunto de herramientas que les ayudarán a la realización de mantenimiento:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-secundario
          .BGR02.p-4(titulo="ESD")
            .h4 Herramientas ESD
            p Existen dos herramientas ESD: 
            ul.lista-ul--color
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | La pulsera antiestática.
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Alfombrilla antiestática.
          .BGR02.p-4(titulo="Manuales")
            .h4 Herramientas manuales
            p.mb-0 Destornillador plano, destornillador phillips, destornillador torx, destornillador hexagonal, pinzas de punta de aguja, cortahílos, tenazas, linterna.
          .BGR02.p-4(titulo="Limpieza")
            .h4 Herramientas de limpieza
            p.mb-0 Paño suave, aire comprimido, aturas para cables, organizador de piezas.
          .BGR02.p-4(titulo="Diagnóstico")
            .h4 Herramientas de diagnóstico
            p.mb-0 Multímetro digital.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema8/img02.svg")

    h3(data-aos="fade-right").mt-5 Uso de herramientas

    .bloque-texto-g.color-acento-botones.bloque-inv.bloque-color-secundario.p-md-5.p-sm-4.p-3.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img03.png')})`}"
      )(data-aos="fade-left")
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.text-white.mb-0 #[b Herramientas de Hardware]: Hay una herramienta para cada tarea. Asegúrese de conocer el uso adecuado de cada herramienta y utilice la correcta para el trabajo que tiene entre manos. El uso hábil de herramientas y #[em software] facilita el trabajo y garantiza que las tareas se realicen de manera correcta y segura.

    p El kit debe incluir todas las herramientas necesarias para reparar el dispositivo. A medida que gane experiencia, aprenderá las herramientas que necesita para diferentes tipos de trabajos.
    p Los instrumentos utilizados en el momento de realizar un mantenimiento funcionan de una forma específica, estos son: destornilladores y llaves, pinzas de presión, multímetro, silicón multiusos, cámara térmica, pulsera antiestática, cinta eléctrica líquida y pinzas.      

</template>

<script>
export default {
  name: 'Tema8',
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
