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
                  v-bind:value="item.id"
                  v-model="id_com"
                />
                <label>{{ item.nombre }}</label>
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
      id_com: 0,
      averageHabilities: 0,
    };
  },
  created() {
    this.retrieveComunas();
  },
  methods: {
    retrieveComunas() {
      //Petición por axios, donde la respuesta se asigna
      //a la variable comunas
      //.then((response) => {this.comunas = response.data})
    },
    get_AverageHabilities() {
      //Por hacer. Una idea sería:
      //Armar el data format con el id_com para realizar una petición
      //post con axios. Esa petición es la que obtendría la cantidad
      //promedio de habilidades de los voluntarios de la comuna determinada
      //por id_com.
      //La respuesta debe ser asignada a la variable averageHabilities
      //.then((response) => {this.averageHabilities = response.data})
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
