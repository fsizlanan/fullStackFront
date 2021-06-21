<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Kaydol</div>
          <div class="panel-body">
            <!-- @include('layouts.partials.errors') -->

            <form
              @submit.prevent
              class="form-horizontal"
              role="form"
              method="POST"
            >
              <!-- @csrf -->
              <div class="form-group has-error">
                <label for="name" class="col-md-4 control-label"
                  >Kullanıcı Adı</label
                >
                <div class="col-md-6">
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    v-model="kayit.isim"
                    autofocus
                  />
                  <!-- <span class="help-block">
                                    <strong>Kullanıcı adı boş bırakılamaz</strong>
                                </span> -->
                </div>
              </div>

              <div class="form-group">
                <label for="email" class="col-md-4 control-label">Email</label>
                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    v-model="kayit.email"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="password" class="col-md-4 control-label"
                  >Şifre</label
                >
                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    v-model="kayit.password"
                  />
                </div>
              </div>

              <!-- <div class="form-group">
                <label for="password-confirm" class="col-md-4 control-label"
                  >Şifre (Tekrar)</label
                >
                <div class="col-md-6">
                  <input
                    id="password-confirm"
                    type="password"
                    class="form-control"
                    name="password_confirmation"
                  />
                </div>
              </div> -->

              <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                  <button
                    @click="storeKaydol"
                    type="submit"
                    class="btn btn-primary"
                  >
                    Kaydol
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      kayit: {
        isim: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    storeKaydol() {
      Axios.post("http://localhost:8000/api/kullanici/kaydol", {
        name: this.kayit.isim,
        email: this.kayit.email,
        password: this.kayit.password
      }).then(res => {
        console.log(res);
        this.$router.push({ path: '/' });
      });
    }
  }
};
</script>

<style></style>
