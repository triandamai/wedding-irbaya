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
    color: #0a6fef;
    line-height: 1;
  }



  .title h3 {
    font-weight: 300;

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
    color: #0a6fef;
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
    color: #0a6fef;
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
    color: #0a6fef;
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
    color: #0a6fef;
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
    color: #0a6fef;
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




.venue a {
  text-decoration: none;
  color: #fff;
}


a {
  text-decoration: none;
}



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

  letter-spacing: 5px;
  font-size: 24px;
  color: #674ea7;
  margin-top: 5px;
}

.title h4 {


  letter-spacing: 5px;
  font-size: 16px;
  color: #674ea7;
  margin-top: 5px;
}

.title p {
  color: #564861;
  margin: 30px 0 20px;

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
