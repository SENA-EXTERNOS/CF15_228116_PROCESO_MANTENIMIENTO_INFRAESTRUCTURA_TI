<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Licenciamientos y periféricos
    
    p Una licencia de <i>software</i> es un acuerdo entre el autor y el comprador, donde dice que el comprador tiene derecho a utilizarlo y distribuirlo de acuerdo con un conjunto de términos y condiciones establecidos por el fabricante. Una licencia de <i>software</i> no es más que el derecho a hacer uso de un programa.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema13/1.svg")
      .col-lg-9(data-aos="fade-left")
        .cajon.color-acento-botones.p-4
          p Hay varias categorías de licencias de #[em software], que van desde las menos restrictivas (#[em software] libre, #[em software] de código abierto, copyleft, etc.) hasta las licencias propietarias. Hay alrededor de nueve modelos de licencias de #[em software] en el mercado. 
          p.mb-0 Explore los diferentes tipos de licencias que se le presentarán a continuación:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-secundario
          .BGR02.p-4(titulo="Licencia Perpetua")
            .h4 Licencia De Adquisición Perpetua
            p.mb-0 Este es quizás el modelo de distribución de aplicaciones más tradicional, donde la solución se comercializa como un activo y quienes la compran tienen derecho a disfrutarla por el resto de sus vidas. Estas licencias compradas no incluyen mantenimiento y actualizaciones.
          .BGR02.p-4(titulo="Licencias de Uso")
            .h4 Licencias De Uso
            p.mb-0 Le permiten usar cierto #[em software], incluidas las actualizaciones, en un solo dispositivo. Estas licencias se pueden comprar juntas o por separado.
          .BGR02.p-4(titulo="Leasing")
            .h4 Leasing
            p.mb-0 También conocido como ASP (Proveedor de Servicios de Aplicaciones). En este caso, el <i>software</i> no está alojado en el <i>hardware</i> y servidores de la empresa.
          .BGR02.p-4(titulo="SAAS")
            .h4 SAAS
            p.mb-0 (#[em Software] as a Service) Funciona de la misma manera, pero no se instala localmente y el costo depende de la cantidad de usuarios activos del servicio.
          .BGR02.p-4(titulo="Programa gratuito")
            .h4 Programa gratuito
            p.mb-0 Los usuarios son libres de copiar, distribuir, modificar y ver el código fuente del programa. Sin embargo, no su totalidad de licencia es gratuita, habrá determinadas funciones o extensiones que requieren un costo. 
          .BGR02.p-4(titulo="<em>Software</em> de fuente libre")
            .h4 #[em Software] de fuente libre
            p.mb-0 Con este tipo de licencia, los clientes son libres de personalizar las soluciones de acuerdo con sus necesidades, modificar el código escrito por terceros, pero los desarrolladores pueden establecer restricciones de uso, lo que lo diferencia del #[em software] libre.
          .BGR02.p-4(titulo="<i>Freeware</i>")
            .h4 <i>Freeware</i>
            p.mb-0 <i>Freeware</i> nuevamente define qué <i>software</i> se distribuye y usa libremente, pero no necesariamente proporciona su propia lógica personalizada. 
          .BGR02.p-4(titulo="Autofinanciamiento")
            .h4 Autofinanciamiento
            p.mb-0 Las empresas pueden incluso, crear programas personalizados para satisfacer necesidades internas. Si se une a un socio para compartir las cargas y los beneficios del desarrollo, el modelo de licencia aplicable es la adquisición compartida.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema13/img02.png")

    h3(data-aos="fade-right").mt-5 Tipos de sistemas operativos
    
    p El tipo de sistema operativo varía según el #[em hardware] y las características de cada dispositivo. Algunos de ellos son para computadoras y otros para dispositivos móviles. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema5/img01.svg")
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR06")
          div(titulo="Sistema Operativo Multiusuario")
            p.mb-0 Dependiendo del usuario, puede ser: un sistema operativo multiusuario que permite a varios usuarios ejecutar sus programas al mismo tiempo, o un sistema operativo de un solo usuario a la vez.
          div(titulo="Sistema Operativo una sola tarea")
            p.mb-0 Dependiendo de cómo se administren las tareas, pueden ser: un sistema operativo de una sola tarea que permite que solo se ejecute un proceso a la vez, o un sistema operativo multitarea que puede ejecutar varios procesos al mismo tiempo.
          div(titulo="Sistema Operativo Centralizado")
            p.mb-0 Dependiendo de la gestión de recursos, puede ser: un sistema operativo centralizado que permite utilizar los recursos de una sola computadora, o un sistema operativo distribuido que permite que varias computadoras trabajen simultáneamente.

    h3(data-aos="fade-right").mt-5 Periféricos

    p.mb-5 En una computadora, periféricos es un nombre general para dispositivos auxiliares y dispositivos individuales o dispositivos conectados a la unidad central de procesamiento de la computadora.<br><br>Se dividen en las siguientes categorías principales:

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
