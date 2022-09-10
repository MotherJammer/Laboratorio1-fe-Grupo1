<template>
    <div class="get_emergency">
        <h2> Eliminar una emergencia de la base de datos</h2>
        <h4>Ingrese el ID de la emergencia a eliminar</h4>
        <form v-on:submit.prevent="delete_Emergency">
        <ul>
        <input type="text" id="emergency-id" v-model="emergency_id" placeholder="Id de la emergencia">
        </ul>
        <div id="btn_get">
        <input type="submit" class="fadeIn fourth" value="Eliminar Emergencia">
        </div>
        </form>
    </div>
  </template>

<script>
    import { axios } from 'axios'
    export default {
      name: 'deleteEmergency',
      components: {
      },
      data: function () {
        return {
          emergency_name: '',
          emergency_status: '',
          emergency_details: '',
          error: false,
          error_msg: ''
        }
      },
      methods: {
        delete_Emergency () {
          const data = 'http://localhost:8080/emergencia/'
          axios.delete(data, {
            nombre: this.emergency_name,
            estado_eme: this.emergency_status,
            detalles: this.emergency_details
          }).then(response => {
            console.log('eliminacion exitosa')
          })
        }
      }
    }
    </script>