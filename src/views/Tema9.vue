<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Ensambles de equipos
    
    p #[b Ensambles y desensambles]: Este es un proceso que debe llevarse a cabo con mucho cuidado, no se puede ignorar y se deben aplicar las reglas de seguridad e higiene esenciales para que las piezas no se dañen y sean de fácil acceso.
    p A continuación, se mencionarán los pasos para el ensamble de un equipo:

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema9/img01.svg")
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-primario
          p(numero="1" titulo="Paso 1") Coloque el microprocesador (aplique pasta térmica al microprocesador), la memoria RAM, el disipador térmico y el ventilador en la placa base.
          p(numero="2" titulo="Paso 2") Fuente de alimentación y su conexión a la bandeja.
          p(numero="3" titulo="Paso 3") Después de instalar todos los componentes anteriores en la placa base, colóquelos en la bandeja e instálelos.
          p(numero="4" titulo="Paso 4") Cuando haya terminado, coloque el DVD y el disco duro frente al soporte.
          p(numero="5" titulo="Paso 5") Como todo está dentro de la bandeja, conecte los cables IDE o SATA que transferirán la información de la placa base (microprocesador, RAM) a los discos (disco duro y DVD), debemos especificarlos. El enchufe solo funciona en una dirección.
        
    .row.justify-content-center.mb-4
      .col-lg-7(data-aos="fade-right")
        LineaTiempoD.color-primario
          p(numero="6" titulo="Paso 6") Después de conectar los cables IDE o SATA, debemos conectar todos los cables relacionados a la fuente de alimentación de la computadora, que se encargará de transferir energía a los distintos dispositivos.
          p(numero="7" titulo="Paso 7") Después de completar las conexiones de los cables de alimentación, conecte los cables del panel frontal de la siguiente manera: Estos conectores suelen estar ubicados cerca de los puertos AGP/PCI y tienen su propio color.
          p(numero="8" titulo="Paso 8") Lo último que debemos hacer dentro de la bandeja es verificar que todos los conectores estén conectados y luego continuar e instalar la bandeja.
          p(numero="9" titulo="Paso 9") Después de ensamblar la CPU y conectar los periféricos, solo queda conectar los cables de alimentación.
          p(numero="10" titulo="Paso 10") Compruebe si está encendido y funciona correctamente.
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema9/img02.svg")


</template>

<script>
export default {
  name: 'Tema9',
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
