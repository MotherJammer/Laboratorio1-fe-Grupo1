<template>
  <div class="emergency">
    <h2 class="p-2 text-center">Agregar una emergencia</h2>
    <h3 class="p-2">Datos de la emergencia</h3>
    <h5 class="p-2">Nombre emergencia</h5>
    <form class="p-2" v-on:submit.prevent="upload_Emergency">
      <ul>
        <input
          type="text"
          id="emergency_name-id"
          v-model="emergency_name"
          placeholder="Terremoto en Talca"
        />
      </ul>
      <h5>Estado de la emergencia</h5>
      <ul>
        <input
          type="text"
          id="emergency_status-id"
          v-model="emergency_status"
          placeholder="Reclutando"
        />
      </ul>
      <h5>Institución</h5>
      <ul>
        <input type="int" id="id_in" v-model="id_in" placeholder="1" />
      </ul>
      <h5>Detalles de la emergencia y requisitos para los voluntarios</h5>
      <textarea
        type="text"
        id="emergency_details-id"
        v-model="emergency_details"
        placeholder="Detalles"
        cols="100"
        rows="20"
      ></textarea>
      <div id="btn_upload">
        <b-button type="submit" class="fadeIn fourth"
          >Cargar emergencia</b-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addEmergency",
  components: {},
  data: function () {
    return {
      emergency_name: "",
      emergency_status: "",
      id_in: null,
      emergency_details: "",
      voluntarios: 0,
      error: false,
      error_msg: "",
    };
  },
  methods: {
    upload_Emergency() {
      const data = "http://localhost:8081/emergencias/";
      axios
        .post(data, {
          nombre: this.emergency_name,
          estado_eme: this.emergency_status,
          detalles: this.emergency_details,
          voluntarios_reg: this.voluntarios,
          id_in: this.id_in,
        })
        .then((response) => {
          console.log("creacion de emergencia exitosa");
        });
    },
  },
};
</script>
