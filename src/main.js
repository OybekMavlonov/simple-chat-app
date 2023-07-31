import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './assets/styles.scss';
import App from './App.vue'


const app = createApp(App);
const pinia = createPinia();
import components from './components.js';

app.use(components);
app.use(pinia);

app.mount('#app')
