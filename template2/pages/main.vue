<script setup lang="ts">
function scrollTo(el){
   const element = document.getElementById(el)
    if(!element) return
    window.scrollTo(0,element.offsetTop)
}
</script>
<template>
<div>
    <Fab @go="scrollTo"/>
    <Hero />
    <Couple />
    <Event />
    <Gallery/>
    <Ayat/>
    <Protocol />
    <Wish/>
    <Footer/>
</div>
</template>