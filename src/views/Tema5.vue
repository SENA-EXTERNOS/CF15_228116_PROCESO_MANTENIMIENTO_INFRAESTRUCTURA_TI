<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Electricidad
    p.mb-5 La electricidad es una forma de energía que se manifiesta con el movimiento de los electrones de la capa externa de los átomos que hay en la superficie de un material conductor. La electricidad es un fenómeno íntimamente ligado en la materia y a la vida. Gencat (s.f.).
    .BGM05.px-md-5.px-4.py-4.mb-4
      p.mb-5 Avanzando con el tema, la electricidad se caracteriza por:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="BGR06")
            div(titulo="Característica 1")
              p.mb-0 Cuando lleva una carga positiva y toca un componente cargado negativamente, está pasando una cierta cantidad de voltaje y amperaje a ese componente; por supuesto los componentes están preparados para soportar una determinada carga, pero si transmitimos más de la que soportan, pueden fallar.
            div(titulo="Característica 2")
              p.mb-0 Se puede decir que la carga transferida por la energía electrostática tiende a ser pequeña; pero a veces el voltaje puede ser muy alto aun cuando la corriente sea muy baja, ten en cuenta que los componentes de la computadora solo están diseñados para trabajar con 230V.
            div(titulo="Característica 3")
              p.mb-0 También existe el riesgo de que incluso con un componente desmontado como el procesador, la electricidad estática haga que cambie de estado, insertando datos "aleatorios" en él antes de conectarlo a la PC. Esto es un peligro real, y la prueba es que, incluso los fabricantes recomiendan tocar objetos metálicos o llevar una pulsera antiestática, para descargar la electricidad estática que pueda haber en tu cuerpo.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema5/img01.svg")

</template>

<script>
export default {
  name: 'Tema5',
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
