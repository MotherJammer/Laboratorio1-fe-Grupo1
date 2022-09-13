<template>
  <div class="get_emergency">
    <h2 class="p-2 text-center">Obtener una emergencia</h2>
    <h5 class="p-2">Ingrese el ID de la emergencia a consultar</h5>
    <form class="p-2" v-on:submit.prevent="retrieveEmergencies">
      <ul>
        <input
          type="text"
          id="emergency-id"
          v-model="id"
          placeholder="Id de la emergencia"
        />
      </ul>
      <div id="btn_get">
        <b-button type="submit" class="fadeIn fourth"
          >Consultar emergencia</b-button
        >
      </div>
      <pre>{{ emergencias }}</pre>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "getEmergency",
  components: {},
  data: function () {
    return {
      id: null,
      emergencias: [],
    };
  },
  methods: {
    retrieveEmergencies() {
      axios
        .get("http://localhost:8081/emergencias/" + this.id)
        .then((response) => {
          console.log(response.data);
          this.emergencias = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
