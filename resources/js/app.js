import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import Post from './componets/post/index.vue';

const app = createApp({});
app.component('post-index', Post);
app.mount('#app');
