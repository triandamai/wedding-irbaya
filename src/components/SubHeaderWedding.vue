<template>
  <div class="px-4 pt-2 pb-6 mb-10 w-screen">
    <!-- partial:index.partial.html -->

    <section id="media"></section>
    <div >
      <div class="title mt-4 mx-6 flex flex-col justify-between">
        <h1 class="text-center" >Assalamualaikum.wr.wb </h1>
        <p class="text-center">Mahasuci Allah telah menciptakan manusia dengan berpasang-pasangan. Sungguh besar rahmat dan karunia yang diberikan-Nya kepada keluarga Kami. Maka izinkan kami mengundang secara virtual dan mengharapkan doa restu dari bapak/ibu dalam acara pernikahan putra & putri kami.</p>
      </div>
    </div>
    <!--      -->
    <div class="justify-center w-full px-2 ">
        <!--          perempuan-->
        <div class="title-couple mb-2">
          <div class="flex w-full justify-center">
            <img src="../assets/img/invitation.jpg" class="rounded-full  object-center  w-1/3 sm:w-full md:w-1/4"/>
          </div>
          <h1 class="text-center">Dewi Irbaya MH</h1>
          <h2 class="text-center">Putri Bapak Suminto & Ibu Tarmini</h2>
        </div>



        <!--          laki-->
        <div class="title-couple">
          <div class="flex w-full justify-center">
            <img src="../assets/img/invitation.jpg" class="rounded-full  object-center  w-1/3 sm:w-full md:w-1/4"/>
          </div>
          <h1 class="text-center">Fanuruh Muhamad</h1>
          <h2 class="text-center">Putra dari Bapak Muhamad Maulud dan Ibu Endang Murtiasih</h2>
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


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .title h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    margin: 20px 0;
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



  .title h3 {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 24px;
    color: #d7740e;
    margin-top: 5px;
  }
  .title-couple h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
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


  .title p {
    color: #564861;
    margin: 30px 0 20px;

    letter-spacing: 3px;
    font-size: 10px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .title-couple h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    margin: 32px 0;
    color: #3a1a95;
  }

  .title-couple h2 {

    font-weight: bold;
    font-style: normal;
    margin: 0;
    padding: 0;
    font-size: 10px;
    color: #e25c67;
    line-height: 1;
  }
  .title h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
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



  .title h3 {
    font-weight: 300;

    letter-spacing: 5px;
    font-size: 24px;
    color: #d7740e;
    margin-top: 5px;
  }

  .title p {
    color: #564861;
    margin: 30px 0 20px;

    letter-spacing: 3px;
    font-size: 12px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
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
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
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



  .title h3 {
    font-weight: 300;

    letter-spacing: 5px;
    font-size: 24px;
    color: #d7740e;
    margin-top: 5px;
  }

  .title p {
    color: #564861;
    margin: 30px 0 20px;

    letter-spacing: 3px;
    font-size: 12px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
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



  .title h3 {
    font-weight: 300;

    letter-spacing: 5px;
    font-size: 24px;
    color: #d7740e;
    margin-top: 5px;
  }

  .title p {
    color: #564861;
    margin: 30px 0 20px;
    letter-spacing: 3px;
    font-size: 12px;
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

