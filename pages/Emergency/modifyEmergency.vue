<template>
  <div class="modify_emergency">
    <h2 class="p-2 text-center">Modificar una emergencia</h2>
    <h3 class="p-2">Datos de la emergencia</h3>
    <form class="p-2" v-on:submit.prevent="modify_Emergency">
      <h5>ID emergencia a modificar</h5>
      <ul>
        <input
          type="text"
          id="emergency-id"
          v-model="emergency_id"
          placeholder="Id de la emergencia"
        />
      </ul>
      <h5>Nombre emergencia</h5>
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
          >Modificar emergencia</b-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "modifyEmergency",
  components: {},
  data: function () {
    return {
      emergency_id: null,
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
    modify_Emergency() {
      const id_emer = this.emergency_id;
      const data = "http://localhost:8081/emergencias/" + id_emer;
      axios
        .put(data, {
          nombre: this.emergency_name,
          estado_eme: this.emergency_status,
          detalles: this.emergency_details,
          voluntarios_reg: this.voluntarios,
          id_in: this.id_in,
        })
        .then((response) => {
          console.log("modificacion de emergencia exitosa");
        });
    },
  },
};
</script>
