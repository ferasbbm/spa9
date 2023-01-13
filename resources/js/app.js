import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import Post from './componets/post/index.vue';
import {TailwindPagination} from "laravel-vue-pagination";

const app = createApp({});
app.component('post-index', Post);
app.component('TailwindPagination', TailwindPagination);
app.mount('#app');
