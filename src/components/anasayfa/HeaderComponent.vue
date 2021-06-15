<template>
  <div class="row">
    <div class="col-md-3">
      <div class="panel panel-default">
        <div class="panel-heading">Kategoriler</div>
        <div
          v-for="index in kategoriler"
          :key="index.id"
          class="list-group categories"
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
            ><i class="fa fa-television"></i>
            {{ index.kategori_adi }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div
        id="carousel-example-generic"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img
              src="http://via.placeholder.com/600x400?text=UrunResmi"
              alt="..."
            />
            <div class="carousel-caption">
              Slide 1
            </div>
          </div>
        </div>
        <a
          class="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            class="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            class="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="col-md-3">
      <div class="panel panel-default" id="sidebar-product">
        <div class="panel-heading">Günün Fırsatı</div>
        <div class="panel-body">
          <a href="#">
            <img
              src="http://via.placeholder.com/400x485?text=UrunResmi"
              class="img-responsive"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["kategoriler"]
};
</script>

<style></style>
