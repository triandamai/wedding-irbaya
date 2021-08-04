import {reactive, ref} from "vue";
import {notify} from "@kyvg/vue3-notification";
import firebase from "firebase";
const db = firebase.firestore()
export interface Wish{
    uid?:String,
    name:String,
    wish:String
}
interface State{
    currentWish:Wish
    wish:Array<Wish>
}

const state = reactive<State>({
    currentWish:{
        uid:"sasa",
        name:"Trian Damai",
        wish:"Selamat Merit mba ku yang canti' manis tidak sombong dan baik hati sekali😊❤️"
    },
    wish:[{
        uid:"sasa",
        name:"Trian Damai",
        wish:"Selamat Merit mba ku yang canti' manis tidak sombong dan baik hati sekali😊❤️"
    }]
})
const currentIndex = ref(0)
const useStore=()=>{
    const getAll =()=>{
        state.wish = []
        currentIndex.value=0
        db.collection("wish").get().then(doc=>{

          doc.forEach((doc)=>{

              if(doc.exists){
                  const data = doc.data()
                  state.wish.push({name:data.name,wish:data.wish})
              }
          })
        })
    }
    const sendWish=(data:Wish)=>{
        db.collection("wish").doc().set({name:data.name,wish:data.wish}).then(()=>{

            notify({
                title:"Success",
                text:"Mengirimkan Do'a"
            })
        }).catch(()=>{
            notify({
                title:"Success",
                text:"Mengirimkan Do'a"
            })
        })
    }
    const realtime = () => {
      db.collection("wish").doc()
          .onSnapshot((doc)=>{
              if(doc.exists){
                  const data = doc.data()
                  // @ts-ignore
                  state.wish.push({name:data.name,wish:data.wish})
              }
          })
    }
    const nextIndex=()=>{
        if(state.wish.length > 0){
            if(currentIndex.value <= state.wish.length){

                if(currentIndex.value == state.wish.length){
                    currentIndex.value =0
                }else {
                    state.currentWish= state.wish[currentIndex.value]
                    currentIndex.value = currentIndex.value+1
                }

            }else {
                state.currentWish= state.wish[currentIndex.value]
                currentIndex.value =0
            }
        }


    }
    const prevIndex=()=>{
        if(state.wish.length > 0){
            if(currentIndex.value >= state.wish.length){

                if(currentIndex.value == 0){
                    currentIndex.value = state.wish.length-1
                }else {
                    state.currentWish = state.wish[currentIndex.value]
                    currentIndex.value = currentIndex.value - 1
                }
            }else {

                state.currentWish= state.wish[currentIndex.value]
                currentIndex.value =currentIndex.value - 1
            }
        }
        console.log(currentIndex.value)
        console.log(state.wish.length)
    }
    return{
        sendWish,
        state,
        nextIndex,
        prevIndex,
        getAll
    }
}
export {useStore}