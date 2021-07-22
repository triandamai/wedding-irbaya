<template>
  <div class="w-full h-screen">
    <HeaderWedding/>
    <SubHeaderWedding/>
    <TimeLine/>
    <Gallery/>
    <MapSection/>
    <Bottomnavigation/>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import TimeLine from "../components/TimeLine.vue";
import Bottomnavigation from "../components/Bottomnavigation.vue";
import Gallery from "../components/Gallery.vue";
import HeaderWedding from "../components/HeaderWedding.vue";
import SubHeaderWedding from "../components/SubHeaderWedding.vue";
import MapSection from "../components/MapSection.vue";
export default defineComponent({
components:{
  MapSection,
  SubHeaderWedding,
  HeaderWedding,
  Bottomnavigation,
  TimeLine,
  Gallery
}
})
</script>

<style scoped>

</style>