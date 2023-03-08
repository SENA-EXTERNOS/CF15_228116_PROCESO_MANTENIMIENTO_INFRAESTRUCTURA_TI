<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mantenimiento
    
    p.mb-5 Es el proceso de tratar un activo en particular para que no se vea afectado por el paso del tiempo, por el uso o los cambios de condición, ya sea bienes físicos o virtuales, además, existen más áreas donde se puede aplicar el término, por ejemplo; puede referirse al mantenimiento de una vivienda, una obra de arte, un vehículo, un programa o conjunto de programas, un sistema, entre otros. El mantenimiento suele ser realizado por especialistas en este campo.

    .BGIMG03.p-4(data-aos="zoom-out")
      PasosB.color-secundario
        .row.justify-content-center.align-items-center(titulo="Paso 1")
          .col-lg-5.col-10.order-lg-1.order-2(data-aos="fade-right")
            p El mantenimiento Preventivo y Correctivo consiste en mantener los equipos de trabajo en funcionamiento el mayor tiempo posible. Las métricas relevantes son la "disponibilidad" de la eficiencia y la máxima seguridad para los usuarios que lo utilizan.
            p.mb-0 El mantenimiento del sistema requiere un trabajo correspondiente a cada nivel de operación. Es importante, recordar que el mantenimiento incluye tanto el <i>software</i> como el <i>hardware</i>. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/img01.png")
        .row.justify-content-center.align-items-center(titulo="Paso 2")
          .col-lg-5.col-10.order-lg-1.order-2(data-aos="fade-right")
            p.mb-0 <span style="color:#0B5999">Mantenimiento preventivo:</span> Hace referencia a todo lo que hacemos para que los equipos funcionen de la mejor manera posible. Para ello, cada cierto tiempo conviene realizar una u otra prueba, cuanto más a menudo lo hagamos, menos posibilidades de lesión. Todo está pensado para evitar los problemas o minimizar los daños en caso de avería.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/img02.png")
        .row.justify-content-center.align-items-center(titulo="Paso 3")
          .col-lg-5.col-10.order-lg-1.order-2(data-aos="fade-right")
            p Para vigilar el estado de la computadora se pueden realizar ciertas tareas como las siguientes:
            ul.lista-ul--color
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Desfragmentar los discos duros.
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Instalar las actualizaciones de seguridad del sistema operativo.
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Mantener las aplicaciones actualizadas.
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Limpiar los datos de navegación cada cierto tiempo.
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                p.mb-0 Instalar alguna herramienta antimalware y hacer un <i>scan</i> periódicamente.
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Vaciar la papelera de reciclaje constantemente.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/img03.svg")
        .row.justify-content-center.align-items-center(titulo="Paso 4")
          .col-lg-5.col-10.order-lg-1.order-2(data-aos="fade-right")
            p En el caso del #[em hardware], también podemos tomar un par de medidas para evitar problemas.
            ul.lista-ul--color
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Si se tiene una computadora de escritorio, hay que mantener limpia la CPU por dentro y por fuera para evitar que se bloquee la ventilación, esto puede prevenir un fallo grave en el procesador por sobrecalentamiento.
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Tener un soplador o una lata de aire comprimido puede ayudar mucho.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/img04.svg")
        .row.justify-content-center.align-items-center(titulo="Paso 5")
          .col-lg-5.col-10.order-lg-1.order-2(data-aos="fade-right")
            p <span style="color:#0B5999">Mantenimiento correctivo:</span> hace referencia a las acciones que se deben hacer, cuando algo sale mal y, una vez que se diagnóstica el problema, se buscan formas para solucionarlo. La mayoría de los problemas informáticos son problemas de <i>software</i>, por ejemplo, el <i>malware</i>, las aplicaciones que consumen muchos recursos, demasiados archivos basura que ocupan espacio en el disco, paquetes rotos, actualizaciones faltantes, controladores obsoletos, entre otros. En la mayoría de los casos se pueden solucionar.
            p.mb-0 Si la falla es de <i>hardware</i>, los síntomas suelen ser más graves, por ejemplo, pantallas azules, <i>kernel panic</i> (pánico en la nube), bloqueos repentinos, ruidos extraños, la computadora se apaga sola o la torre no enciende. Lo peor que puede pasar si tienes un problema grave de <i>software</i> es que tengas que formatear tu computadora, mientras que, los problemas de <i>hardware</i> son más delicados, porque si falla el cuerpo de la máquina, puedes perderla.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/img05.svg")

</template>

<script>
export default {
  name: 'Tema3',
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
