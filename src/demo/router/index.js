import Vue from 'vue'
import VueRouter from 'vue-router'

import myProjectFakeBlockTest from "@/demo/modules/myproject-fake-block-test/myproject-fake-block-test.vue";

Vue.use(VueRouter)

const routes = [{
    path: "/myproject-fake-block",
    component: myProjectFakeBlockTest,
}];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router