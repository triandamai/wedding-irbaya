<template>
  <div class="w-full max-w-screen flex flex-col">
    <HeaderWedding/>
    <SubHeaderWedding/>
    <TimeLine/>
    <ProtokolKesehatan/>
    <LoveGift/>
    <Wish/>
<!--<Bottomnavigation class="fixed"/>-->
  </div>
</template>

<script>

sakura.stop()
import {defineComponent} from "vue"
import TimeLine from "../components/TimeLine.vue";
import Bottomnavigation from "../components/Bottomnavigation.vue";
import HeaderWedding from "../components/HeaderWedding.vue";
import SubHeaderWedding from "../components/SubHeaderWedding.vue";
import MapSection from "../components/MapSection.vue";
import ProtokolKesehatan from "../components/ProtokolKesehatan.vue";
import LoveGift from "../components/LoveGift.vue";
import Wish from "../components/Wish.vue";
export default defineComponent({
components:{
  Wish,
  ProtokolKesehatan,
  MapSection,
  SubHeaderWedding,
  HeaderWedding,
  Bottomnavigation,
  TimeLine,
  LoveGift
}
})
</script>

<style scoped>

</style>