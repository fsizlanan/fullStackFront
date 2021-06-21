<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src="../../assets/img/logo.png" />
        </a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form class="navbar-form navbar-left" method="post">
          <div class="input-group">
            <input
              v-model="search"
              type="text"
              id="navbar-search"
              class="form-control"
              placeholder="Ara"
            />
            <span class="input-group-btn">
              <button @click="arama" type="button" class="btn btn-default">
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right" style="display : block;">
          <li>
            <a href="#"
              ><i class="fa fa-shopping-cart"></i> Sepet
              <span class="badge badge-theme">5</span></a
            >
          </li>
          <li><a href="#">Oturum Aç</a></li>
          <li><router-link to="/kaydol" tag="a"> Kaydol</router-link></li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Profil <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a href="#">Siparişlerim</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Çıkış</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      search: "",
      searchData: []
    };
  },
  methods: {
    arama() {
      Axios.post(
        "http://localhost:8000/api/urun/search/" + this.search + "?page=" + 1
      ).then(res => {
        console.log(res.data);
        this.searchData = res.data.data;
        this.$store.dispatch("searchData", this.searchData);
        this.$router.push("urun_ara");
      });
    }
  }
};
</script>

<style></style>
