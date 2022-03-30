import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Login";
import Main from "./components/Main";
import Calendar from "./components/Calendar/Calendar";
import AddLog from "./components/Calendar/AddLog";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes:[
        {path:"/", component: Login},
        {path:"/main", component: Main,
            children:[
                {path:"",component:Calendar},
                {path:"calendar",component:Calendar},
                {path:"addlog",component:AddLog}
            ]
        },
        {path:"*", component: Login},
    ]
});

export default router;