<template>
  <div class="get_emergency">
    <h2 class="p-2 text-center">Obtener una emergencia</h2>
    <h4>Ingrese el ID de la emergencia a consultar</h4>
    <form v-on:submit.prevent="retrieveEmergencies">
      <ul>
        <input
          type="text"
          id="emergency-id"
          v-model="id"
          placeholder="Id de la emergencia"
        />
      </ul>
      <div id="btn_get">
        <input
          type="submit"
          class="fadeIn fourth"
          value="Consultar Emergencia"
        />
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
