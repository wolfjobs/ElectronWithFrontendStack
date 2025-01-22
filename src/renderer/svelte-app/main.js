import { mount } from 'svelte';
import App from './App.svelte';
var app = mount(App, {
    target: document.querySelector('#app'),
    props: {},
});
export default app;
