<template>
  <div class="">
    <!-- partial:index.partial.html -->
    <section id="media" class="flex flex-col" :style="{backgroundImage:`url(${bg})`,height:`100vh`,backgroundPosition: `center`,backgroundRepeat: `no-repeat`,backgroundSize: `cover`}">
      <div class="wrap bg-black h-full bg-opacity-50 flex flex-col">
        <div class="title mt-10">
          <h1>Dewi Irbaya MH </h1>
          <h2>&</h2>
          <h1 >Fanuruh Muhamad</h1>
          <h3>Are getting married</h3>
          <p>
            <span class="date">8<sup>th</sup> August 2021</span>
          </p>

        </div>
        <a class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-bounce animate-ping animate-pulse" fill="none" viewBox="0 0 24 24" stroke="#ffff">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </a>
      </div>

<!--      <div class="music">-->
<!--        <audio src="../assets/mp3/song.mp3" id="my_audio" loop="loop"></audio>-->
<!--      </div>-->

    </section>

  </div>
</template>

<script>
import {defineComponent} from "vue"
import bg from "../assets/img/bg_event.webp"
export default defineComponent({
  setup(){
    return{bg}
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
  .title h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    margin: 32px 0;
    color: #ffffff;
  }

  .title h2 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #e25c67;
    line-height: 1;
  }


  .title h3 {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 16px;
    color: #ff8207;
    margin-top: 5px;
  }

  .title p {
    color: #0ec2c2;
    margin: 30px 0 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 16px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .title h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    margin: 32px 0;
    color: #ffffff;
  }

  .title h2 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #e25c67;
    line-height: 1;
  }



  .title h3 {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 16px;
    color: #d7740e;
    margin-top: 5px;
  }

  .title p {
    color: #0ec2c2;
    margin: 30px 0 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 16px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .title h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    margin: 32px 0;
    color: #ffffff;
  }

  .title h2 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #e25c67;
    line-height: 1;
  }



  .title h3 {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 16px;
    color: #d7740e;
    margin-top: 5px;
  }

  .title p {
    color: #0ec2c2;
    margin: 30px 0 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 16px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .title h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    margin: 32px 0;
    color: #ffffff;
  }

  .title h2 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #e25c67;
    line-height: 1;
  }

  .title h3 {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 16px;
    color: #d7740e;
    margin-top: 5px;
  }

  .title p {
    color: #564861;
    margin: 30px 0 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 16px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .title h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    margin: 32px 0;
    color: #ffffff;
  }

  .title h2 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #e25c67;
    line-height: 1;
  }


  .title h3 {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 16px;
    color: #d7740e;
    margin-top: 5px;
  }

  .title p {
    color: #0ec2c2;
    margin: 30px 0 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 16px;
  }
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


.venue a {
  text-decoration: none;
  color: #fff;
}



.date {
  color: #ffffff;
  font-weight: 900;

}

a {
  text-decoration: none;
}


.music {
  display: none;
}

.actions {
  display: flex;
  font-size: 12px;
  letter-spacing: 0pt;
}
</style>