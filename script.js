const app = Vue.createApp({
    data(){
        return{
            message:'hola mundo'
        }
    },
    methods:{
        guardar(){
            console.log('guardando');
        }
    },
    mounted() {
    },
})

const vm = app.mount("#app")

// Aqui van las funciones