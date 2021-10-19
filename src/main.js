import Vue from 'vue'
import App from './app.vue'

new Vue({
    el:"#app",
    render: h => h(App) //refrences to App.vue .. the App.vue file has an template we use it here 
                        // and that's how components work...
                        
            
})