<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mantenimiento
    
    p Es el proceso de tratar un activo en particular para que no se vea afectado por el paso del tiempo, el uso o los cambios de condición. Ya se trate de bienes físicos o virtuales, hay muchas áreas donde se puede aplicar el término. Como tal, puede referirse al mantenimiento de una vivienda, una obra de arte, un vehículo, un programa o conjunto de programas, un sistema, entre otros. El mantenimiento suele ser realizado por especialistas en este campo

    .BGIMG03.p-4(data-aos="zoom-out")
      PasosB.color-secundario
        .row.justify-content-center.align-items-center(titulo="Paso 1")
          .col-lg-5.col-10.order-lg-1.order-2(data-aos="fade-right")
            p El mantenimiento Preventivo y Correctivo consiste en mantener los equipos de trabajo en funcionamiento el mayor tiempo posible. Las métricas relevantes son la "disponibilidad" de la eficiencia y la máxima seguridad para los usuarios que lo utilizan.
            p.mb-0 El mantenimiento del sistema requiere un trabajo correspondiente a cada nivel de operación. Es importante recordar que el mantenimiento incluye tanto el #[em software] como el #[em hardware]. Requieren diferentes niveles de atención, pero son igualmente importantes para el buen funcionamiento del sistema.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/img01.png")
        .row.justify-content-center.align-items-center(titulo="Paso 2")
          .col-lg-5.col-10.order-lg-1.order-2(data-aos="fade-right")
            p.mb-0 <span style="color:#0B5999">Mantenimiento preventivo:</span> Todo lo que hacemos es para que nuestras computadoras funcionen de la mejor manera posible. Para ello, cada cierto tiempo conviene realizar una u otra prueba, cuanto más a menudo lo hagamos, menos posibilidades de lesión. Todo está pensado para evitar al máximo los problemas o minimizar los daños en caso de avería.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/img02.png")
        .row.justify-content-center.align-items-center(titulo="Paso 3")
          .col-lg-5.col-10.order-lg-1.order-2(data-aos="fade-right")
            p Para vigilar el estado de la computadora se pueden realizar ciertas tareas como las siguientes:
            ul.lista-ul--color
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Desfragmentar los discos duros
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Instalar las actualizaciones de seguridad de nuestro sistema operativo
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Mantener nuestras aplicaciones actualizadas
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Limpiar nuestros datos de navegación cada cierto tiempo
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Instalar alguna herramienta antimalware y hacer un scan periódicamente
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Vaciar la papelera de reciclaje, por más tonto que parezca
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/img03.svg")
        .row.justify-content-center.align-items-center(titulo="Paso 4")
          .col-lg-5.col-10.order-lg-1.order-2(data-aos="fade-right")
            p En el caso del #[em hardware], también podemos tomar un par de medidas para evitar problemas.
            ul.lista-ul--color
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Si se tiene una computadora de escritorio hay que mantener limpio la CPU por dentro y por fuera para evitar que se bloquee la ventilación puede prevenir un fallo grave en el procesador por sobrecalentamiento.
              li
                i.fas.fa-circle(style="color:#0B5999; font-size:x-small")
                | Tener un soplador o una lata de aire comprimido puede ayudar mucho.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/img04.svg")
        .row.justify-content-center.align-items-center(titulo="Paso 5")
          .col-lg-5.col-10.order-lg-1.order-2(data-aos="fade-right")
            p <span style="color:#0B5999">Mantenimiento correctivo:</span> Esto es lo que hace cuando algo sale mal y, una vez que se diagnostica el problema y se buscan formas de solucionarlo. La mayoría de los problemas informáticos son problemas de #[em software]. El malware, las aplicaciones que consumen muchos recursos, demasiados archivos basura que ocupan espacio en el disco, paquetes rotos, actualizaciones faltantes, controladores obsoletos, entre otros. se puede prevenir en la mayoría de los casos, pero no. Es difícil de resolver.
            p.mb-0 Si la falla es una falla de #[em hardware], los síntomas suelen ser más graves. Pantallas azules, kernel panic (pánico en la nube), bloqueos repentinos, ruidos extraños, la computadora se apaga sola o la torre no se enciende. Lo peor que puede pasar si tienes un problema grave de #[em software] es que tengas que formatear tu computadora, entonces los problemas de #[em hardware] son mucho más delicados, pero si falla el cuerpo de la máquina, puedes perderla.
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
