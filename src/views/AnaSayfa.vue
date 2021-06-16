<template>
  <div class="container">
    <div class="container">
      <header-component
        :kategoriler="kategoriler"
        :goster_slider="goster_slider"
        :urun_gunun_firsati="urun_gunun_firsati"
      />
    </div>
    <div class="container">
      <one-cikan-urunler-component :goster_one_cikan="goster_one_cikan" />
      <hr />
      <cok-satan-urunler-component :goster_cok_satan="goster_cok_satan" />
      <hr />
      <indirimli-urunler-component :goster_indirimli="goster_indirimli" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OneCikanUrunlerComponent from "../components/anasayfa/OneCikanUrunlerComponent.vue";
import CokSatanUrunlerComponent from "../components/anasayfa/CokSatanUrunlerComponent.vue";
import IndirimliUrunlerComponent from "../components/anasayfa/IndirimliUrunlerComponent.vue";
import HeaderComponent from "../components/anasayfa/HeaderComponent.vue";
export default {
  components: {
    OneCikanUrunlerComponent,
    CokSatanUrunlerComponent,
    IndirimliUrunlerComponent,
    HeaderComponent
  },
  data() {
    return {
      kategoriler: [],
      goster_slider: [],
      urun_gunun_firsati: "",
      goster_one_cikan: [],
      goster_cok_satan: [],
      goster_indirimli: []
    };
  },

  created() {
    axios.get("http://localhost:8000/api/anasayfa").then(res => {
      this.kategoriler = res.data.kategori;
      this.goster_slider = res.data.goster_slider;
      this.urun_gunun_firsati = res.data.urun_gunun_firsati;
      this.goster_one_cikan = res.data.goster_one_cikan;
      this.goster_cok_satan = res.data.goster_cok_satan;
      this.goster_indirimli = res.data.goster_indirimli;
    });
  }
};
</script>

<style></style>
