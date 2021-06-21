<template>
  <div class="container">
    <ol class="breadcrumb">
      <li><a href="" class="link">Anasayfa</a></li>
      <li class="active">Arama Sonucu</li>
    </ol>

    <div class="products bg-content" style="">
      <div class="row">
        <div class="col-md-12 text-center" v-if="searchData.length <= 0">
          Ürün Bulunamadı
        </div>
        <div
          class="col-md-3 product"
          v-else
          v-for="item in searchData"
          :key="item.id"
        >
          <router-link
            :to="{ name: 'Urun', params: { slug: item.slug } }"
            tag="a"
          >
            <img
              src="http://via.placeholder.com/200x200?text=UrunResmi"
              :alt="item.urun_adi"
            />
          </router-link>
          <p>
            <router-link
              :to="{ name: 'Urun', params: { slug: item.slug } }"
              tag="a"
              class="btn btn-info mt-2"
              >{{ item.urun_adi }}
            </router-link>
          </p>
          <p class="price">{{ item.fiyati }} ₺</p>
          <!-- <VueTailwindPagination
            :current="currentPage"
            :total="total"
            :per-page="perPage"
            @page-changed="current = $event"
          /> -->
        </div>
      </div>
      <pagination :data="searchData" @pagination-change-page="searchData" />
    </div>
  </div>
</template>

<script>
// import Axios from 'axios';
import { mapGetters } from "vuex";
// import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
export default {
  //   components: { VueTailwindPagination },
  computed: {
    ...mapGetters(["searchData"])
  },
  methods: {
      searchData(page){
          if(typeof page == "undefined"){
              page = 1;
          }
      }
  },
};
</script>

<style></style>
