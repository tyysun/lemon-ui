import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"
import { createWebHashHistory, createRouter } from "vue-router"
// import HelloWorld from "./HelloWorld.vue"
import Tyy from "./components/Tyy.vue"


const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/', component: Tyy
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount("#app")
