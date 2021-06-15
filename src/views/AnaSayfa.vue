<template>
  <div class="container">
    <div class="container">
      <header-component :kategoriler="kategoriler" />
    </div>
    <div class="container">
      <one-cikan-urunler-component />
      <hr />
      <cok-satan-urunler-component />
      <hr>
      <indirimli-urunler-component />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OneCikanUrunlerComponent from '../components/anasayfa/OneCikanUrunlerComponent.vue';
import CokSatanUrunlerComponent from '../components/anasayfa/CokSatanUrunlerComponent.vue';
import IndirimliUrunlerComponent from '../components/anasayfa/IndirimliUrunlerComponent.vue';
import HeaderComponent from '../components/anasayfa/HeaderComponent.vue';
export default {
  components: {
    OneCikanUrunlerComponent,
    CokSatanUrunlerComponent,
    IndirimliUrunlerComponent,
    HeaderComponent
  },
  data() {
    return {
      kategoriler: []
    };
  },

  created() {
    axios.get("http://localhost:8000/api/anasayfa").then(res => {
      console.log(res);
      this.kategoriler = res.data;
    });
  }
};
</script>

<style></style>
