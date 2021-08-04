<template>
  <div class="h-screen overflow-y-hidden">
    <!-- partial:index.partial.html -->
    <img alt="image-top-right" class="top-right-decoration" src="https://i.imgur.com/dGOOfnA.png">
    <img alt="image-top-left" class="top-left-decoration" src="https://i.imgur.com/t6ffnbn.png">

    <div class="flex-col justify-center mt-16">
      <section id="media" class="w-full flex justify-center">
        <img class="rounded-full w-1/2 max-w-1/2" :style="{width:'200px'}" src="../assets/img/amplo.jpg">
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
        <a class="container cursor-pointer flex flex-row" @click="gotoInvitationDetail">
          <div class="venue w-full">Buka Undangan</div>
        </a>
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


img {
  max-width: 100%;
  height: auto;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .top-right-decoration {
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    display: block;
  }

  .top-left-decoration {
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    display: block;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .top-right-decoration {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
  }

  .top-left-decoration {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .top-right-decoration {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
  }

  .top-left-decoration {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .top-right-decoration {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
  }

  .top-left-decoration {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .top-right-decoration {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
  }

  .top-left-decoration {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
}


.title h1 {
  font-family: 'Dancing Script', cursive;
  font-weight: bold;
  font-style: normal;
  font-size: 30px;
  margin: 32px 0;
  color: #674ea7;
}

.title h2 {
  font-family: 'Dancing Script', cursive;
  font-weight: bold;
  font-style: normal;
  margin: 0;
  padding: 0;
  font-size: 24px;
  color: #e25c67;
  line-height: 1;
}

.dance-med {
  font-family: 'Dancing Script', cursive;
  font-weight: bolder;
  font-style: normal;
  font-size: 32px;
  color: #674ea7;
  margin: 16px;
  text-align: center;
}

.title h3 {
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 24px;
  color: #674ea7;
  margin-top: 5px;
}

.title h4 {

  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 16px;
  color: #674ea7;
  margin-top: 5px;
}

.title p {
  color: #564861;
  margin: 30px 0 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 16px;
}

.wrap {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  /* padding: 20px; */
  text-align: center;
  /* min-height:100%; */
}


/** **/


.title {
  margin-bottom: 40px;
}

#time {
  width: auto;
  height: auto;
  padding: 20px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 16px;
}

.venue {
  width: auto;
  height: auto;
  background-color: #674ea7;
  border-radius: 16px;
  text-align: center;
  color: #fff;
  padding: 8px;
}

.venue a {
  text-decoration: none;
  color: #fff;
}

.container {
  display: grid;

  border-radius: 10px;
  overflow: hidden;
}



a {
  text-decoration: none;
}

.actions {
  display: flex;
  font-size: 12px;

}
</style>