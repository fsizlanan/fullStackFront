<template>
  <div class="container">
    <ol class="breadcrumb">
      <li>
        <router-link to="/" class="btn btn-primary" tag="a"
          >Anasayfa</router-link
        >
      </li>
      <li v-for="kategoriler in urun.kategoriler" :key="kategoriler.id">
        <router-link
          :to="{
            name: 'Kategori',
            params: {
              slug: kategoriler.slug
            }
          }"
          class="btn btn-secondary"
          >{{ kategoriler.kategori_adi }}</router-link
        >
      </li>
      <li class="active">
        <router-link to="" class="btn btn-success" tag="a">{{
          urun.urun[0].urun_adi
        }}</router-link>
      </li>
    </ol>
    <div class="bg-content">
      <div class="row">
        <div class="col-md-5">
          <img src="http://via.placeholder.com/400x200?text=UrunResmi" />
          <hr />
          <div class="row">
            <div class="col-xs-3">
              <a href="#" class="thumbnail"
                ><img src="http://via.placeholder.com/60x60?text=UrunResmi"
              /></a>
            </div>
            <div class="col-xs-3">
              <a href="#" class="thumbnail"
                ><img src="http://via.placeholder.com/60x60?text=UrunResmi"
              /></a>
            </div>
            <div class="col-xs-3">
              <a href="#" class="thumbnail"
                ><img src="http://via.placeholder.com/60x60?text=UrunResmi"
              /></a>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <h1>{{ urun.urun[0].urun_adi }}</h1>
          <p class="price">{{ urun.urun[0].fiyati }} ₺</p>
          <p><a href="#" class="btn btn-success">Sepete Ekle</a></p>
        </div>
      </div>

      <div>
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active">
            <a href="#t1" data-toggle="tab">Ürün Açıklaması</a>
          </li>
          <li role="presentation">
            <a href="#t2" data-toggle="tab">Yorumlar</a>
          </li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="t1">
            {{ urun.urun[0].aciklama }}
          </div>
          <div role="tabpanel" class="tab-pane" id="t2">
            Henüz yorum yapılmadı
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["slug"],
  data() {
    return {
      urun: {
        urun: [],
        kategoriler: []
      }
    };
  },
  mounted() {
    axios.get("http://localhost:8000/api/urun/" + this.slug).then(res => {
      console.log(res);
      this.urun.urun = res.data.urun;
      this.urun.kategoriler = res.data.kategoriler;
    });
  }
};
</script>

<style></style>
