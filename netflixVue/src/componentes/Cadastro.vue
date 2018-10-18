<template>
  <div id="login">
    <b-form @submit="salvarUsuario" @reset="onReset" id="Texto">
        <img src="../imagens/logoMini.png"/>

      <b-alert show variant="primary" v-show="Sucesso">
        Cadastrado com sucesso! <b-button href="#/" class="alert-link">x</b-button>
      </b-alert>

      <b-alert show variant="danger" v-show="Error">
        Preencha os campos corretamente!
        <b-button type="reset" class="alert-link-error">x</b-button>
      </b-alert>

      <b-alert show variant="danger" v-show="ErrorSenha">
        Senha incorreta!
        <b-button type="reset" class="alert-link-errorSenha">x</b-button>
      </b-alert>

      <p>Nome<input type="text" name="nome" placeholder="Nome" v-model="usuario.nome"></p>
      <p>Login<input type="email" name="login" placeholder="E-mail" v-model="usuario.login"></p>
      <p>Senha<input type="password" name="senha" placeholder="Password" v-model="confSenha"></p>
      <p>Confirme sua senha<input type="password" name="confSenha" placeholder="Password" v-model="usuario.senha"></p>
      <p id="obrig">Campos obrigatórios! *</p>

      <b-button type="submit" variant="warning" id="butonSalvar">SALVAR</b-button>

      <b-button  type="button" href="#/" variant="danger" id="link"> Retornar para login</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: "Cadastro",
    data() {
      return {
        confSenha: '',
        usuario: {
          id: '',
          nome: '',
          login: '',
          senha: ''
        },
        usuarioSalvo: null,
        Sucesso: false,
        Error: false,
        ErrorSenha: false
      }
    },
    methods: {
      salvarUsuario(evt) {
        evt.preventDefault();

        if (this.usuario.nome !== '' && this.usuario.login !== '' && this.usuario.senha !== '' && this.confSenha !== '') {
          if (this.confSenha === this.usuario.senha) {
            this.$http.post('http://localhost:3000/usuario', this.usuario).then(response => {
              this.usuarioSalvo = response.body;
              this.Sucesso = true;
            });
          }else{
            this.ErrorSenha = true;
          }
        } else {
          this.Error = true;
        }
      },
      onReset(evt) {
        evt.preventDefault();
        this.Error = false;
        this.ErrorSenha = false;
      }

    }


  }


</script>

<style lang="scss">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");

  .alert-link {
    margin-left: 90px;
    background: #25becd;
    border-radius: 40px;
    height: 40px;
    width: 40px;
    border: none;
    color: white;
  }
  .alert-link-error {
    margin-left: 20px;
    background: #cd2c24;
    border-radius: 40px;
    height: 40px;
    width: 40px;
    border: none;
  }
  .alert-link-errorSenha {
    margin-left: 150px;
    background: #cd2c24;
    border-radius: 40px;
    height: 40px;
    width: 40px;
    border: none;
  }
  #login {
    margin-left: 0px;
    margin-top: 0px;

  }

  body {
    background: url("../imagens/FundoNetflix5.jpg");
  }

  #Texto {
    color: white;
    position: absolute;
    margin-top: 25%;
    background: #0b2e13;
    width: 400px;
    height: 580px;
    padding: 20px;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;

  }

  #Texto input {
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

  #Texto img {
    margin-left: 35%;
    width: 25%;
    height: 15%;
  }

  #butonSalvar {
    width: 100%;
    color: white;
  }

  #obrig {
    color: #d8861c;
  }

  #link {
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
  }

  #link:hover {
    margin-left: 0px;
    margin-bottom: 10px;
    width: 100%;
  }
</style>
