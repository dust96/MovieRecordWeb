import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Login";
import Main from "./components/Main";
import Calendar from "./components/Calendar/Calendar";
import AddLog from "./components/AddForm/AddLog";
import AddGoods from "./components/AddForm/AddGoods";
import AddMovie from "./components/AddForm/AddMovie";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes:[
        {path:"/", component: Login},
        {path:"/main", component: Main,
            children:[
                {path:"",component:Calendar}
            ]
        },
        {path:"/add/addlog",component:AddLog},
        {path:"/add/addgoods",component:AddGoods},
        {path:"/add/addmovie",component:AddMovie},
        {path:"*", component: Login}
    ]
});

export default router;