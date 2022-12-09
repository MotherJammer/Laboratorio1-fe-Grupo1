<template>
  <div class="container">
    <div class="row">
      <h2 class="p-2 text-center">Análisis de datos de voluntarios</h2>
    </div>
    <div class="row">
      <h3 class="p-2">Promedio cantidad de habilidades por comuna</h3>
    </div>
    <div class="row">
      <div class="col">
        <div class="selectComuna">
          <h4 class="p-2">Seleccione una comuna</h4>
          <form class="p-2" v-on:submit.prevent="get_AverageHabilities">
            <div class="containerComunas">
              <div v-for="item in comunas">
                <input
                  name="comuna"
                  type="radio"
                  v-bind:value="item.comuna"
                  v-model="id_com"
                />
                <label>{{ item.comuna }}</label>
              </div>
            </div>
            <div id="btn_upload">
              <b-button type="submit" class="fadeIn fourth"
                >Obtener promedio</b-button
              >
            </div>
          </form>
        </div>
      </div>
      <div class="col">
        <div class="averageResult">
          <h4 class="subtituloPromedio">Cantidad promedio</h4>
          <h1 class="text-center mt-5">{{ averageHabilities }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "averageHabilities",
  components: {},
  data: () => {
    return {
      comunas: [],
      id_com: "",
      averageHabilities: 0,
    };
  },
  created() {
    this.retrieveComunas();
  },
  methods: {
    retrieveComunas() {
      axios
        .get("http://localhost:8081/promedio")
        .then((response)=>{
          this.comunas = response.data;
        })
        .catch((error)=>{
          console.log(error);
        });
    },
    get_AverageHabilities() {
      this.comunas.forEach((posicion)=>{
        if(posicion.comuna==this.id_com){
          this.averageHabilities = posicion.promedio;
        }
      });
    }, 
  },
};
</script>

<style>
.containerComunas {
  border: 1px solid #000;
  width: 509px;
  height: 150px;
  margin-bottom: 25px;
  overflow-y: scroll;
}

.subtituloPromedio {
  margin-top: 10px;
}
</style>
