<template>
<div class="">
  <section :style="{backgroundImage:`url(${bg_event})`,height:`100%`,backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`}" >
    <div class="bg-black bg-opacity-80 text-white py-2">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="shadow sm:rounded-lg px-8 md:mx-20">
        <div class="px-4 py-5 sm:px-6 mt-10">
          <h1 class="text-center" > InsyaAllah akan diselenggarakan pada:</h1>
        </div>
        <div class=" rounded-md">
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
              <MapSection/>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd class="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2 justify-center">
                Mengingat situasi dan kondisi yang tidak memungkinkan di masa pandemi COVID-19 ini, kami sekeluarga memohon maaf karena tidak bisa mengundang tamu.
                Untuk dapat melihat proses akad dapat melalui link berikut
              </dd>
            </div>

          </dl>
        </div>
      </div>
      <div class="shadow overflow-hidden sm:rounded-lg px-8 md:mx-20 mb-10">
        <div class="rounded-md shadow w-full flex flex-col">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-b-md text-white bg-indigo-600 hover:bg-indigo-700">
            Lihat online
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import {defineComponent} from "vue";
import bg_event from "../assets/img/bg_event_2.jpg"
import MapSection from "./MapSection.vue";
export default defineComponent({
  components: {MapSection},
  setup(){
    return{bg_event}
  }
})
</script>

<style scoped>

</style>