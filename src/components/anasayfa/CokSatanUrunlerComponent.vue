<template>
  <div class="products">
    <div class="panel panel-theme">
      <div class="panel-heading">Çok Satan Ürünler</div>
      <div class="panel-body">
        <div class="row">
          <div class="col-md-3 product" v-for="goster_cok_satan in goster_cok_satan" :key="goster_cok_satan.id">
            <router-link :to="{name:'Urun', params : {slug:goster_cok_satan.slug}}">
              <img src="http://via.placeholder.com/200x200?text=UrunResmi"/> </router-link>
            <p> <router-link tag="a" :to="{name:'Urun',params:{slug:goster_cok_satan.slug}}" class="text-dark" >
              {{goster_cok_satan.urun_adi}}</router-link></p>
            <p class="price">{{goster_cok_satan.fiyati}} ₺</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : ['goster_cok_satan']
};
</script>

<style></style>
