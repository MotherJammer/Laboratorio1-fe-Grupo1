<template>
    <div class="listar_emergencias">
        <h2>Listado de emergencias</h2>
        <div class="row">
        <div class="col mb-2">
          <button class="btn btn-secondary" @click="recuperarEmergencias">
            Refrescar
          </button>
        </div>
        <div class="row">
          <div class="col">
            <b-table striped bordered hover :items="emergencias" :fields="columns"></b-table>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            emergencias: [],
            columns: [
                {key: 'nombre', label: 'Nombe de emergencia'},
                {key: 'estado_eme', label: 'Estado de la emergencia'},
                {key: 'detalles', label: 'Detalles de la emergencia'},
                {key: 'voluntarios_reg', label: 'Cantidad de voluntarios'}
            ]
        }
    },
    methods: {
        recuperarEmergencias() {
            var params ={}
            axios.get('http://localhost:8081/emergencias', { params } )
                .then(response => {
                    confirm.log(response.data)
                    this.emergencias = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>