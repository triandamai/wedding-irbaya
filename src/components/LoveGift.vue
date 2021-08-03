<template>
  <section :style="{backgroundImage:`url(${bg_event})`,backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`}" class="">
    <div class="bg-black bg-opacity-80 text-white py-2 h-full">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="shadow sm:rounded-lg px-8 flex flex-col">
        <div class="px-4 py-5 sm:px-6">
          <h1 class="text-center" >Love Gift</h1>
        </div>
        <div class="rounded-md">

            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 md:grid md:grid-cols-1 sm:gap-4 sm:px-6">
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 justify-center text-center">
                Tanpa Mengurangi rasa hormat, bagi anda yang ingin memberikan tanda kasih untuk kami, dapat melalui:
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 md:grid md:grid-cols-1 sm:gap-4 sm:px-6 flex items-center w-full  justify-center place-content-center">
              <img src="../assets/img/qris.jpeg" class="md:w-1/2">
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 md:grid md:grid-cols-1 sm:gap-4 sm:px-6">
              <div class="rounded-md shadow w-full flex flex-col">
                <button @click="copyRekening" class="text-white bg-blue-600 text-xs py-2 px-4 rounded-md">
                  Copy Nomor Rekening
                </button>
              </div>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 justify-center text-center">

              </dd>

            </div>



        </div>
      </div>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->

  </section>
</template>

<script>
import {defineComponent, ref} from "vue";
import bg_event from "../assets/img/bg_event_2.jpg"
export default defineComponent({
  setup(){

    const copyRekening=()=>{
      const element = document.createElement("input")
      element.value = "0461310469"
      document.body.appendChild(element);
      element.select();
      document.execCommand('copy');
      document.body.removeChild(element);
    }
    return{bg_event,copyRekening}
  }
})
</script>

<style scoped>

</style>