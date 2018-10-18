<template>
  <div class="lista">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="slider">
          <h3>{{titulo}}</h3>
          <span v-on:mouseover="scrollEsquerda()" v-on:mouseout="clearScroll()" class="handle handlePrev active">
              <i class="fa fa-caret-left" aria-hidden="true"></i>
          </span>
          <div ref="scroller" class="row">
            <div class="row__inner">

              <filme v-for="filme in filmes" :key="filme.id" v-bind:nome="filme.titulo"
                     v-bind:imagem="filme.imagem" v-bind:url="filme.url + '?rel=0&autoplay=1'"></filme>
            </div>
          </div>
          <span v-on:mouseover="scrollDireita()" v-on:mouseout="clearScroll()" class="handle handleNext active">
            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Filme from "./Filme";

  export default {
    name: "categoria",
    props: ['titulo', `filmes`],
    components: {Filme},
    data() {
      return {
        intervalo: 0
      }
    },
    methods: {
      scrollDireita: function () {
        // pega o valor que estava inacessivel para a parte de baixo com o this.alguma coisa
        const that = this;
        this.intervalo = setInterval(function () {
          that.$refs.scroller.scrollLeft += 1
        }, 4);
      },
      scrollEsquerda: function () {
        const that = this;
        this.intervalo = setInterval(function () {
          that.$refs.scroller.scrollLeft -= 1
        }, 4);
      },
      clearScroll() {
        clearInterval(this.intervalo);
      }

    }
  }
</script>

<style lang="scss">

</style>
