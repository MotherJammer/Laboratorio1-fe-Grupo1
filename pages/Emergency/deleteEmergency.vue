<template>
  <div class="get_emergency">
    <h2 class="p-2 text-center">Eliminar una emergencia</h2>
    <h5 class="p-2">Ingrese el ID de la emergencia a eliminar</h5>
    <form class="p-2" v-on:submit.prevent="delete_Emergency">
      <ul>
        <input
          type="text"
          id="emergency-id"
          v-model="id"
          placeholder="Id de la emergencia"
        />
      </ul>
      <div id="btn_get">
        <b-button
          type="submit"
          class="fadeIn fourth"
          value="Eliminar Emergencia"
          >Eliminar emergencia</b-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "deleteEmergency",
  components: {},
  data: function () {
    return {
      id: null,
    };
  },
  methods: {
    delete_Emergency() {
      const id = this.id;
      const data = "http://localhost:8081/emergencias/" + id;
      axios.delete(data).then((response) => {
        alert(
          "Emergencia eliminada con éxito"
        );
        console.log("eliminacion exitosa");
      });
    },
  },
};
</script>
