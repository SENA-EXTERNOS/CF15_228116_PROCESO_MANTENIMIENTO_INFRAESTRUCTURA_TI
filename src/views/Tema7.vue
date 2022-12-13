<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Planos
    
    p.animation-1 Los esquemas eléctricos son gráficos que organizan y describen varios diagramas de características de cableado que describen las características de los materiales y equipos disponibles.<br><br>Una instalación eléctrica se puede representar en uno o más niveles diferentes. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.order-lg-1.order-2(data-aos="flip-up")
        .cajon.color-primario.p-4
          p Para representar estos planos, es posible utilizar diferentes tipos de planos eléctricos prescritos y estandarizados, donde el plano eléctrico se entiende como un conjunto de conexiones eléctricas y relaciones correspondientes a través de símbolos de componentes del sistema eléctrico.
          p.mb-0 En la confección de un plano o un esquema se suelen utilizar símbolos y figuras, así como marcas o referencias.
      .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema7/img01.png")

    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Tipo de planos eléctricos
    
    p Tipos de planos eléctricos
    .row.justify-content-center.mb-4
      .col-lg-7.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema7/img02.png")
      .col-lg-5(data-aos="fade-left")
        LineaTiempoD.color-primario
          p(numero="1" titulo="Alimentación General") Este tipo de planos describe la fuente de alimentación y cualquier circuito auxiliar derivado de la fuente de alimentación principal. Estos caminos alimentan los diversos componentes eléctricos y de control que componen el sistema representado. Estos planos incluyen elementos tales como transformadores, interruptores, fusibles, dispositivos de protección magnética (breakers), fuentes de alimentación, cables de corriente trifásica, etc.
          p(numero="2" titulo="Planos de Potencia") Un diagrama de potencia muestra las conexiones del elemento del sistema que más energía consume, generalmente un motor eléctrico. Generalmente contiene los siguientes elementos: motores, protecciones termomagnéticas (protectores de motor), fusibles, protecciones magnéticas (cavidades), térmicas, contactores (arrancadores), variadores de frecuencia, servomotores, arrancadores suaves, alimentación trifásica. sistema de suministro, etc.
          p(numero="3" titulo="Planos de Mando") Los niveles de comando o control describen la lógica de comunicación del sistema. A veces, esta lógica está diseñada para controlar los componentes que se muestran en los esquemas eléctricos. Suelen incluir elementos tales como: botones, selectores, indicadores luminosos, bobinas (de válvulas o relés), contactos abiertos o cerrados (relés o sensores), etc.
          p(numero="4" titulo="Planos de entrada y salidas") En sistemas con controladores como los PLC, un conjunto de planos contiene planos de entrada y salida. Las capas de entrada representan las conexiones desde el campo hasta el controlador, normalmente botones, selectores y contactos. En las fotos originales se pueden ver las conexiones que van del controlador al campo, generalmente las bobinas y las luces indicadoras.
          p(numero="5" titulo="Planos de alimentación") Los diagramas de fuente de alimentación muestran cómo ciertos elementos reciben energía de los circuitos descritos en el diagrama general de fuente de alimentación. Los elementos que normalmente cubre este plan incluyen sensores, fuentes de alimentación, interfaces de operador y controles.
          p(numero="6" titulo="Planos de borneras") Estos planos muestran los detalles de conexión de cada conjunto de estaciones terminales involucradas en el sistema.
          p(numero="7" titulo="Planos de armario") Los planos de armarios muestran la distribución de elementos en los armarios.
          p(numero="8" titulo="Plano de red") Un mapa de red muestra la conectividad de los nodos en diferentes redes del sistema.

</template>

<script>
export default {
  name: 'Tema7',
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
