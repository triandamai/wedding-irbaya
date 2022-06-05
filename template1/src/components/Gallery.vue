<template>
  <div class="container mx-auto mt-11 px-4">
    <h3 class="w-full text-center">Gallery</h3>
    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="hidden md:block md:w-1/2 px-4">
          <img class="h-full w-full  rounded shadow-md" src="../assets/img/bg_event_2.jpg"/>
        </div>
        <div class="md:w-1/2 h-auto px-4">
          <div class="mb-8"><img class="rounded shadow-md" src="../assets/img/2.jpg" alt=""></div>
          <div><img class="rounded shadow-md" src="../assets/img/3.jpg" alt=""></div>
        </div>
      </div>
    </section>

    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="../assets/img/4.jpg" alt=""></div>
        <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="../assets/img/5.jpg" alt=""></div>
      </div>
    </section>

    <section class="pt-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="../assets/img/7.jpg" alt=""></div>
        <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="../assets/img/bg_event.jpg" alt=""></div>
        <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="../assets/img/bg_event_2.jpg" alt=""></div>
        <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="../assets/img/invitation.jpg" alt=""></div>
      </div>
    </section>


  </div>

</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({})
</script>

<style scoped>

</style>