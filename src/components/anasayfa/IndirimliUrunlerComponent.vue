<template>
  <div class="products">
    <div class="panel panel-theme">
      <div class="panel-heading">İndirimli Ürünler</div>
      <div class="panel-body">
        <div class="row">
          <div class="col-md-3 product" v-for="goster_indirimli in goster_indirimli" :key="goster_indirimli.id">
            <router-link :to="{name:'Urun',params:{slug:goster_indirimli.slug}}"
              ><img src="http://via.placeholder.com/200x200?text=UrunResmi"
            /></router-link>
            <p><router-link :to="{name:'Urun',params:{slug:goster_indirimli.slug}}" tag="a" class="text-dark" >{{goster_indirimli.urun_adi}}</router-link></p>
            <p class="price">{{goster_indirimli.fiyati}} ₺</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : ['goster_indirimli']
};
</script>

<style></style>
