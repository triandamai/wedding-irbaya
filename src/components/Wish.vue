<template>
  <section class="antialiased sans-serif text-gray-600">

  <div class="flex flex-col  shadow-sm overflow-hidden mx-4">
    <p class="text-blue-600  text-xs text-s py-2 px-4 rounded-md mx-6 text-center mt-10">
      Ucapkan Selamat & Do'a Untuk Irbaya & Opan
    </p>
    <button @click="modal = true" class="text-white bg-blue-600 text-xs py-2 px-4 rounded-md mx-6">
      Tulis Do'a & Ucapan
    </button>
    <div class="">
      <div class="flex flex-col h-full relative">

        <div class="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24">
            <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" /></svg>
        </div>

        <div class="h-full relative z-6">
          <div>
            <p class="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xs md:text-2xl">
              {{state.currentWish.wish}}
            </p>
          </div>
        </div>

        <div class="flex my-4 justify-center items-center">
          <button @click="prevIndex"  class="text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-8 w-8 inline-block rounded-full mx-2  opacity-25 bg-indigo-300 text-gray-600"></button>
          <button  class="text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-12 w-12 inline-block rounded-full  mx-2 opacity-25 bg-indigo-300 text-gray-600"></button>
          <button @click="nextIndex" class="text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-8 w-8 inline-block rounded-full  mx-2 opacity-25 bg-indigo-300 text-gray-600">JW</button>
        </div>

        <div class="flex justify-center px-6 pt-2 pb-6 md:py-6">
          <div class="text-center">
            <h2 class="text-sm md:text-base font-bold text-gray-700 leading-tight">{{state.currentWish.name}}</h2>
          </div>
        </div>
      </div>


    </div>

  </div>

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
                  <input placeholder="Nama" v-model="name" class="p-2 mb-2"/>
                  <textarea placeholder="Ucapan & Doa" v-model="wish" class="p-2"/>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <a type="button" @click="send" class="w-full inline-flex justify-center text-xs rounded-md border border-transparent shadow-sm px-3 py-2 bg-blue-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto">
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
import {defineComponent, onMounted, ref} from "vue";
import {useStore} from "../store/store.ts";

export default defineComponent({
  setup(){
    const modal = ref(false)
    const name = ref("")
    const wish = ref("")

    const {state,sendWish,nextIndex,prevIndex,getAll} = useStore()
    onMounted(()=>{
      getAll()
      setTimeout(()=>{
       if(state.wish.length > 0){
         nextIndex()
       }
      },1000)
    })
    const send=()=>{
      sendWish({wish:wish.value,name:name.value})
      modal.value = false
    }

    return{modal,state,wish,name,nextIndex,prevIndex,send}
  }
})
</script>

<style scoped>

</style>