<template>
  <div class="container-sm">
    <b-overlay :show="loading" no-wrap>    </b-overlay>

      <div class="row mt-4" v-lazy-container="{ selector: 'img' }">
        <!-- border -->
        <div class=" col-md-2 col-sm-3 col-6 mb-2 px-1 bg-ligh item-content " v-for="(img,index) in images" v-bind:key="index"  @click="deleteItem(index)">
              <div class=" d-flex justify-content-center align-items-center box" >
                <img :data-src="img.url"  class="lazy-img">
                  <span class="position-absolute d-none delete-item">
               <div >
                  <div class="d-flex justify-content-center align-items-center">
                    <b-icon icon="trash" variant="dark" font-scale="2"></b-icon> 
                  </div>
                  <div class="font16 text-dark fw-bold">Eliminar</div>
               </div>
              </span>
              </div>
            
        </div>
      </div>
  </div>
</template>

<script>

export default {
  components: {
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
      this.loading = false;
    }
  }
};
</script>
<style>
/* .box{
  min-height:250px;
} */
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
