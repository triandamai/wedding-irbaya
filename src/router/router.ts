import {createRouter,createWebHistory} from "vue-router"
export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            component:()=> import("../components/body.vue"),
            children:[
                {
                    path:"",
                    redirect:"invitation"
                },
                {
                    path:"invitation",
                    name:"invitation",
                    component:()=> import("../pages/Invitation.vue")
                },
                {
                    path:"we-are-merried",
                    name:"wemerried",
                    component:()=> import("../pages/DetailInvitation.vue")
                }
            ]
        }
    ]
})