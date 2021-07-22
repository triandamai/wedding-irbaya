<template>
  <div class="px-6 py-8 w-screen">
    <!-- partial:index.partial.html -->

    <section id="media"></section>
    <div class="wrap">
      <div class="title mt-10 mx-6">
        <h1>Assalamualaikum.wr.wb </h1>
        <h3>Sabtu, 03 Oktober 2020</h3>
        <p>Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah
          tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
          keberkahan.</p>
      </div>
    </div>
    <!--      -->
    <div class="flex flex-row justify-between px-6">
        <!--          perempuan-->
        <div class="title-couple">
          <h1>Dewi Irbaya MH</h1>
          <h2>Putri Bapak Suminto & Ibu Tarmini</h2>

        </div>

      <div>
        <!--          foto-->
      </div>

        <!--          laki-->
        <div class="title-couple">
          <h1>Dewi Irbaya MH</h1>
          <h2>Putri Bapak Suminto & Ibu Tarmini</h2>


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

@media (max-width: 900px) {
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
.title-couple h1 {
  font-family: 'Dancing Script', cursive;
  font-weight: bold;
  font-style: normal;
  font-size: 30px;
  margin: 32px 0;
  color: #3a1a95;
}

.title-couple h2 {

  font-weight: bold;
  font-style: normal;
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #e25c67;
  line-height: 1;
}
.title h1 {
  font-family: 'Dancing Script', cursive;
  font-weight: bold;
  font-style: normal;
  font-size: 60px;
  margin: 32px 0;
  color: #3a1a95;
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
  font-size: 12px;
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

