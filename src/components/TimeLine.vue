<template>
  <section :style="{backgroundImage:`url(${bg_event})`,height:`100%`,backgroundPposition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`}" class="w-screen" >
    <div class="bg-black bg-opacity-80 text-white py-2 h-full">
      <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div class="flex flex-col w-full sticky   mt-2  px-8">
          <p class=" text-yellow-300 uppercase tracking-loose">Sunday,8 August 2021</p>
          <p class="text-2xl md:text-2xl leading-normal md:leading-relaxed mb-2">Akad nikah</p>
          <p class="text-sm md:text-base text-gray-50 mb-4">
            At kediaman mempelai wanita
          </p>
          <a href="#"
             class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1.5 px-4 text-sm border border-yellow-300 hover:border-transparent">
            08.08 WIB</a>
        </div>

      </div>
      <div class="container mx-auto flex flex-col items-start md:flex-row  md:my-24">
        <div class="flex flex-col w-full sticky  mt-2  px-8">
          <p class="text-yellow-300 uppercase tracking-loose">Sunday, 8 Augut 2021</p>
          <p class="text-2xl md:text-2xl leading-normal md:leading-relaxed mb-2">Syukuran</p>
          <p class="text-sm md:text-base text-gray-50 mb-4">
            At kediaman mempelai wanita
          </p>
          <a href="#"
             class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1.5 px-4 text-sm border border-yellow-300 hover:border-transparent">
            10.00 WIB - 11.30 WIB</a>
          <a href="#"
             class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-1.5 px-4 text-sm border border-yellow-300 hover:border-transparent">
            13.00 WIB - 14.30 WIB</a>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from "vue";
import bg_event from "../assets/img/bg_event_2.jpg"
export default defineComponent({
  setup(){
    return{bg_event}
  }
})
</script>

<style scoped>

</style>