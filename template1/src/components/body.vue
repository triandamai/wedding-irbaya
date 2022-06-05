<template>
<router-view v-slot="{Component}">
  <transition name="fade"
              enter-active-class="transition-all transition-fastest ease-out-quad"
              leave-active-class="transition-all transition-faster ease-in-quad"
              enter-to-class="opacity-0 scale-70"
              enter-class="opacity-100 scale-70"
              leave-to-class="opacity-0 scale-70"
              leave-class="opacity-100 scale-100"
  ><component :is="Component"/></transition>
</router-view>
</template>
