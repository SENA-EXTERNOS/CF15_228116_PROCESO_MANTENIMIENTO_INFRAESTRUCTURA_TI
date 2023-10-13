<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Electrónica básica
    
    p.mb-5 Consiste en estudiar componentes electrónicos discretos fundamentales, como bloques de construcción para circuitos de programación. El estudio del funcionamiento de circuitos analógicos y digitales se basa en la comprensión de componentes discretos como resistencias, diodos y transistores.<br><br>#[b Componentes electrónicos]: Son dispositivos que forman parte de un circuito electrónico. Estos componentes se pueden dividir en semiconductores, activos, pasivos, optoelectrónicos, electromagnéticos, etc. Están diseñados para conectarse a una placa de circuito impreso, generalmente mediante soldadura para formar un circuito.
    
    .BGIMG04.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.order-lg-1.order-2
            .h4 Transformador
            p.mb-0 Esta es una bobina de cobre que aumenta o disminuye el voltaje en un circuito de CA y mantiene la frecuencia. En un transformador ideal, la potencia que ingresa al dispositivo (es decir, sin pérdidas) es igual a la potencia recibida en la salida. Dependiendo del diseño, tamaño, etc., las máquinas reales tienen muy poca pérdida. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img01.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.order-lg-1.order-2
            .h4 Contacto
            p.mb-0 Un interruptor es un dispositivo que cambia la corriente en un circuito eléctrico. Puede ser automático, centrífugo, triturado, submarino, eléctrico, ferroviario, etc. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img02.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.order-lg-1.order-2
            .h4 Diodo
            p.mb-0 Es un dispositivo semiconductor, que permite que la corriente fluya en una dirección y tiene propiedades similares a un interruptor. En resumen, la curva característica de un diodo (I-U) consta de dos partes: bajo cierta diferencia de potencia se comporta como un circuito abierto (conduce corriente), y por encima de ella como un cortocircuito con una pequeña resistencia.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img03.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.order-lg-1.order-2
            .h4 LED (#[em Light Emitting Diode])
            p.mb-0 Es un dispositivo semiconductor que emite luz monocromática, roja, verde, azul, amarilla, infrarroja, láser, etc. cuando están directamente polarizados y pasa una corriente eléctrica a través de ellos. Sus terminales son ánodo (terminal largo) y cátodo (terminal corto). Su voltaje de umbral es de 1,3 a 4 V, dependiendo del color del diodo. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img04.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.order-lg-1.order-2
            .h4 Resistencias o resistores
            p.mb-0 Es un componente pasivo, no produce corriente ni tensión en el circuito, tiene cierta resistencia a la corriente, su valor está en ohmios y lo conocemos por el código de colores. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img05.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.order-lg-1.order-2
            .h4 Potenciómetros
            p.mb-0 Son resistencias variables que tienen una pista de carbón en su interior y el trazador la atraviesa. Dependiendo de la posición del cursor, el valor de resistencia del elemento cambia. Los potenciómetros generalmente se usan en circuitos de muy baja corriente para aumentarla, porque no consumen mucha.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img06.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.order-lg-1.order-2
            .h4 Circuito Integrado (IC)
            p.mb-0 Este es un chip muy delgado que contiene muchos componentes microelectrónicos interconectados. Los circuitos integrados (IC) contienen varios componentes pequeños. Según información de CI, tienen diferentes funciones o aplicaciones, pueden ser amplificadores, contadores, multiplexores, codificadores, flip-flops, etc. La dirección final calculada es en sentido antihorario desde el punto de referencia. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img07.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.order-lg-1.order-2
            .h4 Condensador
            p.mb-0 Son dispositivos que pueden almacenar temporalmente una carga eléctrica. Consisten en dos superficies metálicas, llamadas anclas, separadas por un medio aislante llamado dieléctrico. Las principales características de un condensador son: su valor, capacidad de almacenamiento y la tensión de ruptura dieléctrica, que es el valor máximo de tensión que puede soportar el dieléctrico; y la tolerancia, que es la diferencia máxima entre el valor nominal y el valor real, expresada en porcentaje.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img08.png")

</template>

<script>
export default {
  name: 'Tema6',
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
