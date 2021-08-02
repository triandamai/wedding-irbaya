<template>
  <section :style="{backgroundImage:`url(${bg_event})`,height:`100%`,backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`}" class="w-screen" >
    <div class="bg-black bg-opacity-80 text-white py-2 h-full">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="shadow overflow-hidden sm:rounded-lg px-8">
        <div class="px-4 py-5 sm:px-6">

          <p class="mt-1 max-w-2xl text-sm text-gray-500 text-center">
            InsyaAllah akan diselenggarakan pada:
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Akad
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Minggu, 8 Agustus 2021
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Pukul
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                08.00 WIB
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Tempat
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Kediaman mempelai wanita. Perumahan Grand Tanjung Elok. Jl Pinus 1 Nomor 1, Purwokerto Selatan, Banyumas.
               </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 justify-center">
                *Mengingat situasi dan kondisi yang tidak memungkinkan di masa pandemi COVID-19 ini, kami sekeluarga memohon maaf karena tidak bisa mengundang tamu.
                Untuk dapat melihat proses akad dapat melalui link berikut
              </dd>
            </div>
          </dl>
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