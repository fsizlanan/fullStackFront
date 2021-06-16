<template>
  <div class="container">
    <ol class="breadcrumb">
      <li>
        <router-link to="/" tag="a" class="btn btn-primary"
          >Anasayfa</router-link
        >
      </li>
      <li>
        <router-link to="/kategori" tag="a" class="btn btn-secondary"
          >Kategori</router-link
        >
      </li>
      <li class="active">
        <router-link
          :to="{
            name: 'Kategori',
            params: {
              slug: slug
            }
          }"
          tag="a"
          class="btn btn-success"
          >{{ kategori[0].kategori_adi }}</router-link
        >
      </li>
    </ol>
    <div class="row">
      <div class="col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading"></div>
          <div class="panel-body">
            <h3>Alt Kategoriler</h3>
            <div
              class="list-group categories"
              v-for="index in altKategori.altKategori"
              :key="index.id"
            >
              <router-link
                :to="{
                  name: 'Kategori',
                  params: {
                    slug: index.slug
                  }
                }"
                tag="a"
                class="list-group-item"
              >
                <i class="fa fa-arrow-circle-right">
                  {{ index.kategori_adi }}</i
                >
              </router-link>
            </div>
            <form>
              <div class="form-group">
                <div class="checkbox">
                  <label> <input type="checkbox" /> 100-200 </label>
                </div>
              </div>
              <div class="form-group">
                <div class="checkbox">
                  <label> <input type="checkbox" /> 200-300 </label>
                </div>
              </div>
            </form>
            -->
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="products bg-content">
          Sırala
          <a href="?order=coksatanlar" class="btn btn-default">Çok Satanlar</a>
          <a href="?order=yeni" class="btn btn-default">Yeni Ürünler</a>
          <hr />
          <div class="row">
            <div class="col-md-12" v-if="altKategori.urunler.length == 0">
              Bu kategoride henüz ürün bulunmamaktadır.
            </div>
            <div
              class="col-md-3 product"
              v-for="urun in altKategori.urunler"
              :key="urun.id"
              v-else
            >
              <a href=""
                ><img src="http://via.placeholder.com/200x200?text=UrunResmi"
              /></a>
              <p>
                <router-link
                  :to="{
                    name: 'Urun',
                    params: {
                      slug: urun.slug
                    }
                  }"
                  class=""
                  tag="a"
                >
                  {{ urun.urun_adi }}
                </router-link>
              </p>
              <p class="price">{{ urun.fiyati }} ₺</p>
              <p><a href="#" class="btn btn-theme">Sepete Ekle</a></p>
            </div>
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
      kategori: [],
      altKategori: {
        altKategori: [],
        urunler: []
      }
    };
  },
  computed: {},
  mounted() {
    axios
      .get("http://localhost:8000/api/anasayfa/" + this.slug)
      .then(res => {
        this.kategori = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    axios.get("http://localhost:8000/api/kategori/" + this.slug).then(res => {
      this.altKategori.altKategori = res.data.alt_kategoriler;
      this.altKategori.urunler = res.data.urunler;
    });
  }
};
</script>

<style></style>
