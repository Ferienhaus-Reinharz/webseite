<template>
    <div>
      <PictureCarousel/>
      <StartseitenInformationen/>
    </div>
</template>

<script>
import PictureCarousel from "../components/PictureCarousel.vue";
import StartseitenInformationen from "../components/StartseitenInformationen.vue";

export default {
  name: "HomeView",
  data(){
    return{
    };
  },
  components: {
    PictureCarousel,
    StartseitenInformationen,
  },
  methods: {

  },
  created(){
  }
}
</script>

<style lang="scss">

</style>