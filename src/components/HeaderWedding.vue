<template>
  <div class="h-screen">
    <!-- partial:index.partial.html -->
    <section id="media" :style="{backgroundImage:`url(${bg})`,height:`100%`,backgroundPposition: `center`,backgroundRepeat: `no-repeat`,backgroundSize: `cover`}">
      <div class="wrap bg-black h-full bg-opacity-50">
        <div class="title mt-10">
          <h1>Dewi Irbaya MH </h1>
          <h2>&</h2>
          <h1>Fanuruh Muhamad</h1>
          <h3>Are getting married</h3>
          <p>
            on <span class="date">8 August 2021</span>
          </p>
        </div>
      </div>

      <div class="music">
        <audio src="../assets/mp3/song.mp3" id="my_audio" loop="loop"></audio>
      </div>

    </section>

  </div>
</template>

<script>
import {defineComponent} from "vue"
import bg from "../assets/img/bg_event.jpg"
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

@media (max-width:900px) {
  img {
    max-width: 30%;
  }
}

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

.title h1 {
  font-family: 'Dancing Script', cursive;
  font-weight: bold;
  font-style: normal;
  font-size: 60px;
  margin: 32px 0;
  color: #ffffff;
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

.block {
  width: 180px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}

.days {
  background: linear-gradient(90deg, #b33a46, #9b313c);
}

.hours {
  background: linear-gradient(90deg, #a7c3cd, #90a9b2);
}

.minutes {
  background-color: #874562;
}

.seconds {
  background-color: #145689;
}

.date {
  color: #874562;
  font-weight: 900;
}

.place {
  color: #874562;
  font-weight: 900;
}

.footer {
  color: #564861;
  text-align: center;
  font-size: 16px;
  margin: 24px;
}

.phone {
  color: #874562
}

.end-msg {
  width: auto;
  height: auto;
  padding: 12px;
  background: linear-gradient(90deg, #b33a46, #9b313c);
  border-radius: 20px;
  font-size: 14px;
  color: #fff;
  font-size: 24px;
}

a {
  text-decoration: none;
}

.happiness {
  color: #874562;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
}

.twitter {
  color: #874562;
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