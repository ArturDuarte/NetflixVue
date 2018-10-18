<template>
  <div class="topo">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <h1 id="titulo">{{titulo}}</h1>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <div class="for-group">
          <input type="text" class="form-control " id="campoPesquisa"
                 placeholder="Digite sua pesquisa" required="required"
                 autocomplete="off">
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
        <b-button id="logoff" type="submit" href="#/" variant="danger" v-b-tooltip.hover
                  title="Sair para a tela de login">Logoff
        </b-button>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
        <h1 id="usuario">Bem vindo:{{usuario}}</h1>
      </div>
    </div>
    <div id="esq">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <div id="cat">
          <h1>UM ÓTIMO PROGRAMA PARA</h1>
            <h2>O FIM DE SEMANA</h2>
            <!--<b-dropdown id="ddown-buttons" text="Lista de categorias" class="m-2">-->
              <!--<b-dropdown-item-button>AÇÃO</b-dropdown-item-button>-->
              <!--<b-dropdown-item-button>AVENTURA</b-dropdown-item-button>-->
              <!--<b-dropdown-item-button>COMÉDIA</b-dropdown-item-button>-->
              <!--<b-dropdown-item-button>SUSPENSE</b-dropdown-item-button>-->
              <!--<b-dropdown-item-button>TERROR</b-dropdown-item-button>-->
            <!--</b-dropdown>-->
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <iframe id="frame" width="100%" height="498" v-on:url-filme="urlFilme = $event" v-bind:src="urlFilme"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
import Filme from "./Filme";
<script>
  export default {
    name: "topo",
    props: ['titulo', 'logoff', 'usuario', 'filme'],
    data() {
      return {
        urlFilme: ''
      }
    }

  }
</script>

<style lang="scss">
  #esq {
    background: url("../imagens/images.jpg")
  }

  #titulo {
    color: #ff0f0f;
    font-size: 350%;
    text-align: left;
    margin-top: 15px;
    margin-bottom: 40px;
    margin-left: 20px;
  }

  #logoff {
    color: #fefefe;
    font-size: 100%;
    margin-top: 25px;
    margin-bottom: 40px;
    cursor: pointer;
    margin-left: 90%;
  }

  h2 {
    color: white;
    margin-bottom: 10px;
  }

  #cat {
    margin-bottom: 200px;

  }
  #cat h1{
    font-size: 28px;
    margin-top: 5%;
    margin-left: -30%;
  }
  #cat h2{
    margin-left: 10%;
    font-size: 52px;
    font-family: "Square721 BT";
  }
  #usuario {
    color: #fefefe;
    font-size: 100%;
    margin-top: 35px;
    margin-bottom: 40px;
    margin-left: 10px;
  }

  #frame {
    width: 90%;
    height: 100%;
    /*box-shadow: 0 0 15px 10px white;*/
  }
  #campoPesquisa {
    margin-top: 30px;
    width: 100%;
    height: 30px;
  }
  .row {
    margin-right: 0 !important;
  }
</style>
