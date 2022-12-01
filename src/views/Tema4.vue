<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manuales

    p Los manuales contienen toda la información sobre los recursos utilizados por el proyecto, explicando todo el trabajo que se ha realizado al desarrollar un sistema o mantenimiento; llevan una descripción muy bien detallada sobre las características físicas y técnicas de cada elemento.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Tipos de procedimientos

    .bloque-texto-g.color-secundario.p-md-5.p-sm-4.p-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.svg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Como se explicó anteriormente existen dos tipos de procedimientos los cuales son necesarios en algún momento. Estos son el mantenimiento preventivo y correctivo.<br><br>Dichos procedimientos se ofrecen como servicio por medio de pólizas a pequeñas y medianas empresas que cuenten con una cantidad moderada de equipos de cómputo, el cual consiste en optimizar el rendimiento de las computadoras y se realizan reportes de sus equipos de cómputo, con el fin de darle un mejor servicio en el menor tiempo posible.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Característica de manuales

    p Las características de los manuales se determinan por: 

    .row.justify-content-center.mb-5(data-aos="zoom-out")
      .col-lg-10
        img(src="@/assets/curso/tema4/img02.svg")


</template>

<script>
export default {
  name: 'Tema4',
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
