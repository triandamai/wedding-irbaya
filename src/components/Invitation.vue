<template>
  <div class="h-screen overflow-y-hidden dark:bg-white">
    <!-- partial:index.partial.html -->
    <img alt="image-top-right" class="top-right-decoration" src="https://i.imgur.com/dGOOfnA.png">
    <img alt="image-top-left" class="top-left-decoration" src="https://i.imgur.com/t6ffnbn.png">

    <div class="flex-col justify-center mt-16">
      <section id="media" class="w-full flex justify-center">
        <img class="rounded-full w-1/2 max-w-1/2" :style="{width:'200px'}" src="../assets/img/amplo.webp">
      </section>
      <p class="dance-med">
        Dear
      </p>
      <div class="wrap">
        <div class="title">
          <h4> Bpk/Ibu/Saudara/i</h4>
          <h1>{{ guest }}</h1>
        </div>
      </div>

      <div class="actions mx-6">
        <button class="container cursor-pointer flex flex-row" @click="gotoInvitationDetail">
          <div class="venue w-full">Buka Undangan</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import {useRoute,useRouter} from "vue-router"

export default defineComponent({
 setup(){
   const route = useRoute()
   const router = useRouter()
   const gotoInvitationDetail=()=>{
     router.push({path:'/we-are-merried'})
   }
   return{
     guest:route.params.guest,
     gotoInvitationDetail
   }
 }

})
</script>

<style scoped>


/*******************************/


</style>