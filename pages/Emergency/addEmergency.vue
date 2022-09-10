<template>
    <div class="emergency">
      <h2> Agregar una emergencia a la base de datos</h2>
      <h2>Datos de la emergencia</h2>
      <h4>Nombre Emergencia </h4>
      <form v-on:submit.prevent="upload_Emergency">
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
    <input type="submit" class="fadeIn fourth" value="Cargar Emergencia">
    </div>
      </form>
    </div>



  </template>

<script>

    import axios from 'axios'
    export default {
      name: 'addEmergency',
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
        upload_Emergency () {
          const data = 'http://localhost:8081/emergencias/'
          axios.post(data, {
            nombre: this.emergency_name,
            estado_eme: this.emergency_status,
            detalles: this.emergency_details,
            voluntarios_reg: this.voluntarios,
            id_in: this.id_in

          }).then(response => {
            console.log('creacion de emergencia exitosa')
          })
        }
      }
    }
    </script>
