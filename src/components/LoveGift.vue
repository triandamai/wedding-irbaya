<template>
  <section :style="{backgroundImage:`url(${bg_event})`,height:`100%`,backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`}" class="w-screen" >
    <div class="bg-black bg-opacity-80 text-white py-2 h-full">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="shadow overflow-hidden sm:rounded-lg px-8">
        <div class="px-4 py-5 sm:px-6">

          <p class="mt-1 max-w-2xl text-sm text-gray-500 text-center">
            Love Gift
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 justify-center text-center">
                Tanpa Mengurangi rasa hormat, bagi anda yang ingin memberikan tanda kasih untuk kami, dapat melalui:
              </dd>
            </div>


            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <img src="../assets/img/qris.jpeg">
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div class="rounded-md shadow w-full flex flex-col">
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Copy Nomor Rekening
                </a>
              </div>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 justify-center text-center">
                Terima Kasih
              </dd>

            </div>

          </dl>

        </div>
      </div>
      <div class="shadow overflow-hidden w-full sm:rounded-lg px-8 ">
        <div class="rounded-md shadow w-full flex flex-col">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-b-md text-white bg-indigo-600 hover:bg-indigo-700">
            Lihat online
          </a>
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