<template>

  <div class="gui-card">
    <div class="gui-card__media">
      <img  v-if="!trocafilme" v-on:mouseover="visibilidade" class="gui-card__img" v-bind:src="imagem" alt="" />
      <iframe  v-if="trocafilme" v-on:mouseout="visibilidade" class="gui-card__img" v-bind:src="url"
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>

      </iframe>
    </div>
    <div>
      <div >
        {{nome}}
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Filme",
      props: ['nome','imagem','url'],
      components: {

      },
      data() {
        return {
          trocafilme: false
        }
      },
      methods: {
        visibilidade: function () {
          this.trocafilme = !this.trocafilme
        }
      }
    }
</script>

<style lang="scss">

</style>
