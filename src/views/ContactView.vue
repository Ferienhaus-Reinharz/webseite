<template>
    <div>
      <AnfragenForm/>
      <ContactInfo/>
      <StandortKarte/>
    </div>
</template>

<script>
import AnfragenForm from "../components/AnfragenForm.vue";
import ContactInfo from "../components/ContactInfo.vue";
import StandortKarte from "../components/StandortKarte.vue";

export default {
  name: "ContactView",
  data(){
    return{

    };
  },
  components: {
    AnfragenForm,
    ContactInfo,
    StandortKarte
  },
  methods: {

  },
  created(){

  }
}
</script>

<style lang="scss">

</style>