<template>
  <div id="login">

    <b-form @submit.prevent="verificaLogin" id="texto">
      <img src="../imagens/logoMini.png"/>
      <b-alert show dismissible show variant="warning" v-show="showSucesso">
        Cadastro não encontrado!
      </b-alert>
      <p>Login<input type="text" name="" placeholder="Email" v-model="login"></p>
      <p>Senha<input type="password" name="" placeholder="Password" v-model="senha"></p>
      <b-button type="submit" variant="danger" id="butonEntrar">ENTRAR</b-button>
      <b-button id="linkLogin" href="#/cadastro" variant="link" v-b-tooltip.hover title="Cadastre-se agora!">Ainda não é
        cadastrado?
      </b-button>

    </b-form>
  </div>
</template>

<script>

  export default {
    name: "Login",

    data() {
      return {
        login: '',
        senha:'',
        usuarios: [],
        showSucesso: false

      }
    },
    created() {
      this.$http.get('http://localhost:3000/usuario').then(response => {
        this.usuarios = response.body;
      });
    },
    methods: {
      verificaLogin(evt) {
        evt.preventDefault();
        for (var i = 0, l = this.usuarios.length; i < l; i++) {
          if(this.login === this.usuarios[i].login && this.senha === this.usuarios[i].senha){
            this.$router.push({name:'App'});
            // this.usuarioLogado(this.usuarios[i].id);
          }
        }

        this.showSucesso = true;
      },

      //mandar valor para o json
      // usuarioLogado: function(e) {
      //
      //   this.$http.put('http://localhost:3000/usuario.id='+ e +'/log=', 1).then(response => {
      //     this.usuarioSalvo = response.body;
      //
      //   });
      // }
    }
  }


</script>

<style lang="scss">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");

  #login {
    margin-left: 0px;
    margin-top: 0px;

  }

  body {
    background: url("../imagens/FundoNetflix5.jpg");
  }

  #texto {
    color: white;
    position: absolute;
    margin-top: 25%;
    background: #0b2e13;
    width: 400px;
    height: 400px;
    padding: 20px;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;

  }

  #texto input {
    width: 100%;
    background: #0a0d10;
    border: #1b1e21;
    border: none;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    color: white;
    outline: none;
  }

  ::placeholder {
    color: #929292;
  }

  #texto img {
    margin-left: 35%;
    width: 30%;
    height: 30%;
  }

  img {
    width: 20%;
    height: 20%;
  }

  #linkLogin {
    margin-top: 30px;
    margin-left: 20%;
    cursor: pointer;
    color: #fefefe;
  }

  #linkLogin:hover {
    margin-top: 30px;
    margin-left: 20%;
    cursor: pointer;
    color: red;
  }

  #butonEntrar {
    width: 100%;

  }
</style>
