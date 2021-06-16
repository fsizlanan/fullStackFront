<template>
  <div class="products">
    <div class="panel panel-theme">
      <div class="panel-heading">Öne Çıkan Ürünler</div>
      <div class="panel-body">
        <div class="row">
          <div class="col-md-3 product" v-for="goster_one_cikan in goster_one_cikan" :key="goster_one_cikan.id" >
            <a href="#"
              ><img src="http://via.placeholder.com/200x200?text=UrunResmi"
            /></a>
            <p><router-link :to="{name:'Urun',params:{slug:goster_one_cikan.slug}}" tag="a" class="text-dark" >
              {{goster_one_cikan.urun_adi}}
             </router-link></p>
            <p class="price">{{goster_one_cikan.fiyati}} ₺</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : ['goster_one_cikan']
};
</script>

<style></style>
