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
          >{{ kategori.kategori_adi }}</router-link
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
                  <label>
                    <input @change="check()" v-model="onbin" type="checkbox" />
                    0-10000
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="checkbox">
                  <label>
                    <input
                      @change="check2()"
                      v-model="onbinuzeri"
                      type="checkbox"
                    />
                    1000 üzeri
                  </label>
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
          <button @click="cokSatanlar" class="btn btn-default bg-danger">
            Çok Satanlar
          </button>
          <button @click="yeniUrunler" class="btn btn-default bg-info ml-2">
            Yeni Ürünler
          </button>
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
                  class="btn btn-info mt-2"
                  tag="a"
                >
                  {{ urun.urun_adi }}
                </router-link>
              </p>
              <p class="price bg-secondary">{{ urun.fiyati }} ₺</p>
              <p><a href="#" class="btn btn-success">Sepete Ekle</a></p>
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
      },
      filtre: [],
      onbin: false,
      onbinuzeri: false,
      fiyat: 0
    };
  },
  computed: {},
  mounted() {
    axios
      .get("http://localhost:8000/api/anasayfa/" + this.slug)
      .then(res => {
        this.kategori = res.data[0];
      })
      .catch(err => {
        console.log(err);
      });
    axios.get("http://localhost:8000/api/kategori/" + this.slug).then(res => {
      this.altKategori.altKategori = res.data.alt_kategoriler;
      this.altKategori.urunler = res.data.urunler;
    });
  },

  methods: {
    cokSatanlar() {
      axios
        .get(
          "http://localhost:8000/api/kategori/" +
            this.slug +
            "?order=coksatanlar"
        )
        .then(res => {
          this.altKategori.urunler = res.data.urunler;
        });
    },
    yeniUrunler() {
      axios
        .get("http://localhost:8000/api/kategori/" + this.slug + "?order=yeni")
        .then(res => {
          this.altKategori.urunler = res.data.urunler;
        });
    },
    check() {
      if (this.onbin == true) {
        this.fiyat = 10;
        this.onbinuzeri = false;
        axios
          .get(
            "http://localhost:8000/api/kategori/" +
              this.slug +
              "?fiyati=" +
              this.fiyat
          )
          .then(res => {
            this.altKategori.urunler = res.data.filter;
          });
      } else {
        axios
          .get("http://localhost:8000/api/kategori/" + this.slug)
          .then(res => {
            this.altKategori.altKategori = res.data.alt_kategoriler;
            this.altKategori.urunler = res.data.urunler;
          });
      }
    },

    check2() {
      if (this.onbinuzeri == true) {
        this.onbin = false;
        this.fiyat = 10.001;
        axios
          .get(
            "http://localhost:8000/api/kategori/" +
              this.slug +
              "?fiyati=" +
              this.fiyat
          )
          .then(res => {
            this.altKategori.urunler = res.data.filter;
          });
      } else {
        axios
          .get("http://localhost:8000/api/kategori/" + this.slug)
          .then(res => {
            this.altKategori.altKategori = res.data.alt_kategoriler;
            this.altKategori.urunler = res.data.urunler;
          });
      }
    }
  },
  watch: {}
};
</script>

<style></style>
