<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 Licenciamientos
    
    p Una licencia de #[em software] es un acuerdo entre el autor, que tiene derecho a utilizarlo y distribuirlo, y el comprador de esta licencia para el uso de la licencia de #[em software] de acuerdo con un conjunto de términos y condiciones establecidos por el fabricante. Una licencia de #[em software] no es más que el derecho de hacer uso de un programa.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema13/img01.svg")
      .col-lg-9(data-aos="fade-left")
        .cajon.color-acento-botones.p-4
          p Hay varias categorías de licencias de #[em software], que van desde las menos restrictivas (#[em software] libre, #[em software] de código abierto, copyleft, etc.) hasta las licencias propietarias. Hay alrededor de nueve modelos de licencias de #[em software] en el mercado. 
          p.mb-0 Explore los diferentes tipos de licencias que se le presentarán a continuación:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-secundario
          .BGR02.p-4(titulo="Licencia De Adquisición Perpetua")
            .h4 Licencia De Adquisición Perpetua
            p.mb-0 Este es quizás el modelo de distribución de aplicaciones más tradicional, donde la solución se comercializa como un activo y quienes la compran tienen derecho a disfrutarla por el resto de sus vidas. Estas licencias compradas no incluyen mantenimiento y actualizaciones.
          .BGR02.p-4(titulo="Licencias De Uso")
            .h4 Licencias De Uso
            p.mb-0 Le permiten usar cierto #[em software], incluidas las actualizaciones, en un solo dispositivo. Estas licencias se pueden comprar juntas o por separado.
          .BGR02.p-4(titulo="Leasing")
            .h4 Leasing
            p.mb-0 También conocido como ASP (Proveedor de Servicios de Aplicaciones). En este caso, el #[em software] no está alojado en el #[em hardware] y servidores de la empresa pagando la cuota mensual.
          .BGR02.p-4(titulo="SAAS")
            .h4 SAAS
            p.mb-0 (#[em Software] as a Service) Funciona de la misma manera, pero no se instala localmente y el costo depende de la cantidad de usuarios activos del servicio.
          .BGR02.p-4(titulo="Programa gratuito")
            .h4 Programa gratuito
            p.mb-0 Los usuarios son libres de copiar, distribuir, modificar y ver el código fuente del programa. Pero el hecho de que sea gratuito no significa que el #[em software] sea necesariamente gratuito.
          .BGR02.p-4(titulo="#[em Software] de fuente libre")
            .h4 #[em Software] de fuente libre
            p.mb-0 Con este tipo de licencia, los clientes son libres de personalizar las soluciones de acuerdo con sus necesidades, modificar el código escrito por terceros, pero los desarrolladores pueden establecer restricciones de uso, lo que lo diferencia del #[em software] libre.
          .BGR02.p-4(titulo="Freeware")
            .h4 Freeware
            p.mb-0 Freeware nuevamente define qué #[em software] se distribuye y usa libremente, pero no necesariamente proporciona su propia lógica personalizada.
          .BGR02.p-4(titulo="Autofinanciamiento")
            .h4 Autofinanciamiento
            p.mb-0 Las empresas pueden incluso crear programas personalizados para satisfacer necesidades internas y sus propias soluciones. Si se une a un socio para compartir las cargas y los beneficios del desarrollo, el modelo de licencia aplicable es la adquisición compartida.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema13/img02.png")

    separador
    #t_13_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 13.1 Tipos de sistemas operativos
    
    p El tipo de sistema operativo varía según el #[em hardware] y las características de cada dispositivo. Algunos de ellos son para computadoras y otros para dispositivos móviles. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema5/img01.svg")
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR06")
          div(titulo="Dependiendo del usuario, puede ser")
            p.mb-0 Un sistema operativo multiusuario que permite que varios usuarios ejecuten sus programas al mismo tiempo, o un sistema operativo de un solo usuario que permite que solo se ejecute el programa de un usuario a la vez.
          div(titulo="Dependiendo de cómo se administren las tareas, pueden ser")
            p.mb-0 Un sistema operativo de una sola tarea que permite que solo se ejecute un proceso a la vez, o un sistema operativo multitarea que puede ejecutar varios procesos al mismo tiempo. 
          div(titulo="Dependiendo de la gestión de recursos, puede ser")
            p.mb-0 Un sistema operativo centralizado que permite utilizar los recursos de una sola computadora, o un sistema operativo distribuido que permite que varias computadoras trabajen simultáneamente.

</template>

<script>
export default {
  name: 'Tema13',
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
