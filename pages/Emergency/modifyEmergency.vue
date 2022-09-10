<template>
    <div class="modify_emergency">
        <h2> Modificar una emergencia de la base de datos</h2>
        <h2>Datos de la emergencia</h2>
        <form v-on:submit.prevent="modify_Emergency">
        <h4>ID Emergencia a modificar</h4> 
        <ul>
        <input type="text" id="emergency-id" v-model="emergency_id" placeholder="Id de la emergencia">
        </ul>
        <h4>Nombre Emergencia </h4> 
        <ul>
            <input type="text" id="emergency_name-id" v-model="emergency_name" placeholder="Terremoto en Talca">
        </ul>
        <h4>Estado de la emergencia</h4>
        <ul>
            <input type="text" id="emergency_status-id" v-model="emergency_status" placeholder="Reclutando">
        </ul>
        <h4>Institucion</h4>
        <ul>
          <input type="int" id="id_in" v-model="id_in" placeholder="1">
        </ul>
        <p>Detalles de la emergencia y requisitos para los voluntarios</p>
        <textarea type="text" id="emergency_details-id" v-model="emergency_details" placeholder="Detalles" cols="100" rows="20"></textarea>
        <div id="btn_upload">
        <input type="submit" class="fadeIn fourth" value="Modificar Emergencia">
        </div>
        </form>
    </div>
  </template>

<script>

  import axios from 'axios'
  export default {
    name: 'modifyEmergency',
    components: {
    },
    data: function () {
      return {
        emergency_name: '',
        emergency_status: '',
        emergency_details: '',
        voluntarios: 0,
        error: false,
        error_msg: ''
      }
    },
    methods: {
      modify_Emergency () {
        const id_emer = this.emergency_id
        const data = 'http://localhost:8081/emergencias/' + id_emer
        axios.put(data, {
          nombre: this.emergency_name,
          estado_eme: this.emergency_status,
          detalles: this.emergency_details,
          voluntarios_reg: this.voluntarios,
          id_in: this.id_in

        }).then(response => {
          console.log('modificacion de emergencia exitosa')
        })
      }
    }
  }
  </script>