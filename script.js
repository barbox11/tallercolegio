const app = Vue.createApp({
    data(){
        return{
            message:'hola mundo',
            registro:{
                numeroEstudiantes:null,
                nota1:null,
                nota2:null,
                nota3:null
            },
            rgTabla:[]
        }
    },
    methods:{
        guardar(){       
            const { numeroEstudiantes, ...notas } = this.registro;

            if(Object.values(notas)) {
                alert('Ingrese notas válidas');
                return;
            }

            const ARR = Object.values(this.registro).splice(1);
            const SUM = ARR.reduce((a,e)=>a+=e);
            const PROMEDIO = SUM / ARR.length;  
            this.registro['promedio'] = PROMEDIO.toFixed(1);
            this.rgTabla.push(this.registro);
            this.registro = {};
        }
    },
    computed:{
        notaAlta(){
            return this.rgTabla.map(r=>r.promedio).sort().at(-1);
        },
        notaBaja(){
            return this.rgTabla.map(r=>r.promedio).sort().at(0);
        }
    }  
})

const vm = app.mount("#app")