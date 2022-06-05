<script setup lang="ts">
    const props =defineProps({
        slides:{
            type:Array,
            required:true
        },
        controls: {
            type: Boolean,
            default: false,
        },
        indicators: {
            type: Boolean,
            default: false,
        },
        interval: {
            type: Number,
            default: 5000,
        },
    })

    const currentSlide = ref(0)
    const slideInterval = ref(null)
    const direction = ref('right')

    function setCurrentSlide(index){
        currentSlide.value = index
    }
    function prev(step = -1){
        const index = currentSlide.value > 0 ? currentSlide.value + step : props.slides.length -1

        setCurrentSlide(index)
        direction.value = 'left'
        startSlideTimer()
    }

    function _next(step = 1){
            let index =0;
            if(step >= 0 && step <= props.slides.length -1){
                index = currentSlide.value + step
            }else{
                index = props.slides.length -1
            }
            if(index >= 0 && index <= props.slides.length -1){
                setCurrentSlide(index)
            }else{
                setCurrentSlide(0)
            }
            direction.value = 'right'
    }

    function next(step =1){
         
        _next(step)
        startSlideTimer()
    }
    function startSlideTimer(){
        stopSlideTimer()
        slideInterval.value = setInterval(()=>{
            _next()
        },props.interval)
    
    }

    function stopSlideTimer(){
        clearInterval(slideInterval.value)
    }

    function switchSlide(index){
        const step = index = currentSlide.value

       
        if(step > 0){
            next(step)
        }else{
            prev(step)
        }
    }

    onMounted(()=>{
        startSlideTimer()
    })
    onBeforeUnmount(()=>{
        stopSlideTimer()
    })
</script>
<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-indicators
        v-if="indicators"
        :total="slides.length"
        :current-index="currentSlide"
        @switch="switchSlide($event)"
      ></carousel-indicators>
      <carousel-item
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
      ></carousel-item>
      <carousel-controls
        v-if="controls"
        @prev="prev"
        @next="next"
      ></carousel-controls>
    </div>
  </div>
</template>
<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  position: relative;
  width: 900px;
  height: 400px;
  overflow: hidden;
  display: flex;
	flex-wrap: nowrap;
	align-content: center;
	margin: auto;
	text-align: center;
	justify-content: center;
}
</style>