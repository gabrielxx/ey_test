<template>
  <div class="container-sm">
    <b-overlay :show="loading" no-wrap></b-overlay>
      <div class="row mt-4" v-lazy-container="{ selector: 'img' }">
        <div class=" col-md-2 col-sm-3 col-6 mb-2 px-1 bg-ligh item-content"  v-for="(img,index) in images" v-bind:key="index"  @click="deleteItem(index)">
          <contentImage :src="img.url"></contentImage>
        </div>      
      </div>
  </div>
</template>

<script>
import contentImage from "@/components/contentImage.vue"
import { setTimeout } from 'timers';
export default {
  components: {
    contentImage
  },
  data(){
    return {
      images : [],
      loading : false,
      endpoint :  process.env.VUE_APP_IMAGES_API
    }
  },
  created(){
    this.onLoadImages();
  },
  methods : {
     onLoadImages(){
      this.loading = true;
      this.$axios(this.endpoint + "/photos")
        .then((response) => {
            this.images = response.data;
            this.loading = false;
        })
        .catch(()=>{
            this.loading = false;
        })
    },
    deleteItem(index){
      this.loading = true;
      this.images.splice(index,1);
      setTimeout(() =>{
        this.loading = false;
      },1000)
    }
  }
};
</script>
<style>

.item-content{
  cursor: pointer;

}
.item-content:hover{
  opacity: 0.8;
}
.item-content:hover > .box .delete-item{
  display: block !important;
}
.font16{
  font-size: 16px;
}
.lazy-img{
  max-width: 100%;
}
.lazy-img[lazy=loading],.lazy-img[lazy=error] {
    margin: 100px 0;
    width: 50px !important;
}
.lazy-img[lazy=loaded] {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
}
</style>
