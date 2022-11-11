<template>
  <div class="container">
    <div class="row">
      <h2 class="p-2 text-center">Voluntarios cercanos</h2>
    </div>
    <div class="row">
      <div class="col">
        <div class="selectEmergency">
          <h3 class="p-2">Seleccione una emergencia</h3>
          <form class="p-2" v-on:submit.prevent="get_closeVolunteers">
            <div class="containerEmergencias">
              <div v-for="item in emergencias">
                <input
                  name="emergencia"
                  type="radio"
                  v-bind:value="item.id"
                  v-model="id_eme"
                />
                <label>{{ item.nombre }}</label>
              </div>
            </div>
            <h3 class="p-2">Cantidad de voluntarios</h3>
            <ul>
              <input
                type="number"
                id="numberOf_volunteer"
                v-model="nVolunteers"
                placeholder="3"
              />
            </ul>
            <div id="btn_upload">
              <b-button type="submit" class="fadeIn fourth"
                >Solicitar voluntarios</b-button
              >
            </div>
          </form>
        </div>
      </div>
      <div class="col">
        <div class="rankingList">
          <h3 class="p-2">Voluntarios más cercanos</h3>
          <b-table stripped hover :items="volunteers"></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "closeVolunteers",
  components: {},
  data: () => {
    return {
      emergencias: [],
      id_eme: 0,
      nVolunteers: 0,
      volunteers: [{ nombre: "Juan", distancia: 100 }], //---DEJAR VACÍO CUANDO get_closeVolunteers ESTÉ LISTO
    };
  },
  created() {
    this.retrieveEmergencias();
  },
  methods: {
    retrieveEmergencias() {
      axios
        .get("http://localhost:8081/emergencias")
        .then((response) => {
          this.emergencias = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    get_closeVolunteers(){
      var dataFormat = new FormData();
      dataFormat.append("id_eme", this.id_eme);
      dataFormat.append("cantidad", this.nVolunteers);
      const url = "http://localhost:8081/voluntarios/closer";
      axios
      .post(url,dataFormat)
      .then((response)=>{
        console.log(response);
      });
    }
  },
};
</script>

<style>
.containerEmergencias {
  border: 1px solid #000;
  width: 509px;
  height: 150px;
  overflow-y: scroll;
}
</style>
