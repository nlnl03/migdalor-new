import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Quasar } from 'quasar'
// import quasarUserOptions from './quasar-user-options'
const app = createApp(App)
app.config.globalProperties.$devUrl = "http://localhost:3000"

 app.use(Quasar).mount('#app')
