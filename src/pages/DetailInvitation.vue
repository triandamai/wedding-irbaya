<template>
  <div class="w-full h-screen">
    <HeaderWedding/>
    <SubHeaderWedding/>
    <TimeLine/>
    <MapSection/>
    <ProtokolKesehatan/>
    <LoveGift/>
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
import ProtokolKesehatan from "../components/ProtokolKesehatan.vue";
import LoveGift from "../components/LoveGift.vue";
export default defineComponent({
components:{
  ProtokolKesehatan,
  MapSection,
  SubHeaderWedding,
  HeaderWedding,
  Bottomnavigation,
  TimeLine,
  Gallery,
  LoveGift
}
})
</script>

<style scoped>

</style>