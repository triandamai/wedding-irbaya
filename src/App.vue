<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Invitation from "./components/Invitation.vue"


export default defineComponent({
  name: 'App',
  components: {
    Invitation
  },
  created() {

  }
})
</script>

<style>

* {
  /* margin: 0;
    padding: 0; */
  font-family: 'Arvo', serif;
}

body {
  font-family: Arial, Helvetica, Sans-serif;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh;
    width: 100%; */
  flex-direction: column;
}

</style>
