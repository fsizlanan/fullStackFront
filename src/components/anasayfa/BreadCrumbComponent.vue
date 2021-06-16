<template>
    <ol class="breadcrumb">
      <li>
          <router-link to="/" class="btn btn-primary" tag="a" >Anasayfa</router-link>
          </li>
      <li>
          <router-link :to="{
              name : this.name,
              params : {
                  slug : this.slug
              }
          }" class="btn btn-secondary">
          {{this.name}}
          </router-link>
        <a
          href="">
          </a>
      </li>
      <li class="active"></li>
    </ol>
  
</template>

<script>
export default {
    props : ['name','slug']
}
</script>

<style>

</style>