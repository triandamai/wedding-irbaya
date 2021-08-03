<template>
  <section :style="{backgroundImage:`url(${bg_event})`,backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`}" class="">
    <div class="bg-black bg-opacity-80 text-white py-2 h-full">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="shadow sm:rounded-lg px-8">
        <div class="px-4 py-5 sm:px-6">
          <h1 class="text-center" >Love Gift</h1>
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
                <a @click="copyRekening" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Copy Nomor Rekening
                </a>
              </div>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 justify-center text-center">

              </dd>

            </div>

          </dl>

        </div>
      </div>
      <div class="shadow overflow-hidden w-full sm:rounded-lg px-8 ">
        <div class="rounded-md shadow w-full flex flex-col">
          <a @click="modal = true" class="cursor-pointer inline-flex items-center justify-center px-5 py-3 border text-center border-transparent text-base font-medium rounded-b-md text-white bg-indigo-600 hover:bg-indigo-700">
            Ucapkan Selamat & Do'a Untuk:<br/>
            Irbaya & Opan
          </a>
        </div>
      </div>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="fixed z-10 inset-0 overflow-y-auto" v-show="modal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
        <!--
          Background overlay, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="modal = false" aria-hidden="true"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-2 w-full pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex md:flex lg:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <!-- Heroicon name: outline/exclamation -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Ucapan selamat
                </h3>
                <div class="mt-2 flex flex-col">
                    <input placeholder="Nama" class="p-2 mb-2"/>
                    <textarea placeholder="Ucapan & Doa" class="p-2"/>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <a type="button" class="w-full inline-flex justify-center text-xs rounded-md border border-transparent shadow-sm px-3 py-2 bg-blue-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto">
              Kirim
            </a>
            <button type="button" @click="modal = false" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto">
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent, ref} from "vue";
import bg_event from "../assets/img/bg_event_2.jpg"
export default defineComponent({
  setup(){
    const modal = ref(false)
    const copyRekening=()=>{
      const element = document.createElement("input")
      element.value = "0461310469"
      document.body.appendChild(element);
      element.select();
      document.execCommand('copy');
      document.body.removeChild(element);
    }
    return{bg_event,modal,copyRekening}
  }
})
</script>

<style scoped>

</style>