<template>
  <div class="w-full max-w-screen h-screen  overflow-x-hidden flex flex-col">
    <HeaderWedding/>
    <SubHeaderWedding/>
    <TimeLine/>
    <ProtokolKesehatan/>
    <LoveGift/>
    <Wish/>
    <!--<Bottomnavigation class="fixed"/>-->
    <div class="fixed bottom-0 right-0 mr-6 mb-10 z-20 bg-gray-500 object-bottom rounded-full">
      <button @click="play"  class="text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2  opacity-25  text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>

sakura.stop()
import {defineComponent,ref, onMounted} from "vue"
import TimeLine from "../components/TimeLine.vue";
import Bottomnavigation from "../components/Bottomnavigation.vue";
import HeaderWedding from "../components/HeaderWedding.vue";
import SubHeaderWedding from "../components/SubHeaderWedding.vue";
import MapSection from "../components/MapSection.vue";
import ProtokolKesehatan from "../components/ProtokolKesehatan.vue";
import LoveGift from "../components/LoveGift.vue";
import Wish from "../components/Wish.vue";
import song from "../assets/music.mp3"

export default defineComponent({
  components: {
    Wish,
    ProtokolKesehatan,
    MapSection,
    SubHeaderWedding,
    HeaderWedding,
    Bottomnavigation,
    TimeLine,
    LoveGift
  },
  setup() {
    const isPlay = ref(false)
    var audio = null
    const play = () => {
      isPlay.value = !isPlay.value
      if(isPlay.value) {

        audio.pause()
      }else {
        audio.play()
      }
    }


    onMounted(() => {
      audio = new Audio(song)
      audio.play()
      isPlay.value = true
      audio.addEventListener("ended",()=>{
        audio.play()
      })

    })



    return {
       play
    }
  }
})
</script>

<style scoped>

</style>