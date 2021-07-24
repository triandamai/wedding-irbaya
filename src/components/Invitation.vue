<template>
  <div class="h-screen">
  <!-- partial:index.partial.html -->

  <img src="https://i.imgur.com/dGOOfnA.png" alt="image-top-right" class="top-right-decoration">
  <img src="https://i.imgur.com/t6ffnbn.png" alt="image-top-left" class="top-left-decoration">

    <div class="flex-col justify-center mt-16">
      <section id="media" class="w-full flex justify-center">
        <img src="../assets/img/invitation.jpg" class=" rounded-full h-56 w-56">
      </section>
      <p class="dance-med">
        Dear
      </p>
      <div class="wrap">
        <div class="title">
          <h4> Bpk/Ibu/Saudara/i</h4>
          <h1>Fanuruh Muhamad</h1>
        </div>
      </div>

      <div class="actions">
        <a class="container cursor-pointer flex flex-row" @click="$router.push({path:'we-are-merried'})">
          <div class="venue w-full">Buka Undangan</div>
        </a>
      </div>

      <div class="music">
        <audio :src="import('../assets/mp3/song.mp3')" id="my_audio" loop="loop"></audio>
      </div>
    </div>

  </div>
</template>

<script>
import {defineComponent} from "vue"
export default defineComponent({})
</script>

<style scoped>


/*******************************/


img {
  max-width: 100%;
  height: auto;
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
  margin-right: 8px;
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