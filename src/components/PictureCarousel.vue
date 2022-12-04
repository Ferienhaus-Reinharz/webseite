<template>
    <div id="myCarousel" class="carousel slide bg-inverse ml-auto mr-auto" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img v-if="!this.smartphone" class="d-block w-100" src="../assets/pictures/CarouselPictures/CarouselPic1.png" alt="First slide">
                <img v-if="this.smartphone" class="d-block w-100" src="../assets/pictures/CarouselPictures/CarouselPicSmartphone1.png" alt="First slide">
            </div>
            <div class="carousel-item">
                <img v-if="!this.smartphone" class="d-block w-100" src="../assets/pictures/CarouselPictures/CarouselPic2.png" alt="Second slide">
                <img v-if="this.smartphone" class="d-block w-100" src="../assets/pictures/CarouselPictures/CarouselPicSmartphone2.png" alt="Second slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a> 
    </div>
</template>
<script>
export default {
  name: "PictureCarousel",
  data(){
    return{
      smartphone: false,
    };
  },
  components: {
  },
  methods: {

  },
  created(){
    if(window.screen.width < 480){
      this.smartphone = true;
    } else{
      this.smartphone = false;
    }
  }
}
</script>