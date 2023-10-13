<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1  Redes
    
    p Una red se define como la interconexión de sistemas informáticos por medio de dispositivos de telecomunicaciones y un medio físico (alámbrico o inalámbrico)

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema15/img01.png")
      .col-lg-8(data-aos="fade-right")
        AcordionA.color-primario(tipo="a" clase-tarjeta="BGR08")
          div(titulo="LAN (red de área local)")
            p.mb-0 Una red de área local es una red restringida, la mayoría de la cual es privada, que conecta computadoras dentro de un solo edificio, oficina o campus universitario.
          div(titulo="MAN (red de área metropolitana)")
            p.mb-0 La red de área metropolitana está diseñada para conectar dispositivos en una ciudad.
          div(titulo="WAN (red de área amplia)")
            p.mb-0 Una red de área amplia es una red que proporciona transporte en una gran área geográfica (regional, nacional o incluso internacional).
          div(titulo="PAN (redes de área personal)")
            p.mb-0 Las PAN tienen un alcance muy limitado (varios metros) y se utilizan para conectar de forma inalámbrica dispositivos personales (PC, portátiles, teléfonos móviles, PDA, impresoras, etc.).
      
    h3(data-aos="fade-right").mt-5 Redes convergentes
    
    .row.justify-content-center.mb-4
      .col-lg-12.px-0.cajon.color-primario.p-4.order-lg-1.order-2
        p.mx-4.mb-0 Una red convergente o red multiservicio se refiere a la integración de servicios de voz, datos y video sobre una red IP como un protocolo de capa de red. Este artículo presenta la integración de servicios de voz sobre IP (VoIP) como un ejemplo de una red convergente. La arquitectura de esta red consiste principalmente en pasarelas de medios, controladores de medios, pasarelas de señalización y guardianes. Los diferentes servicios ofrecidos tienen diferentes características y requisitos de red, por lo que la red de convergencia tuvo que superar desafíos técnicos.

    p Aprendiz, recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
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
