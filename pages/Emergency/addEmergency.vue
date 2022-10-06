<template>
  <div class="container">
    <div class="row">
      <h2 class="p-2 text-center">Agregar una emergencia</h2>
    </div>
    <div class="row">
      <div class="col">
        <div class="emergency position-">
          <h3 class="p-2">Datos de la emergencia</h3>
          <h5 class="p-2">Nombre emergencia</h5>
          <form class="p-2" v-on:submit.prevent="upload_Emergency">
            <ul>
              <input type="text" id="emergency_name-id" v-model="emergency_name" placeholder="Terremoto en Talca" />
            </ul>
            <h5>Estado de la emergencia</h5>
            <ul>
              <input list="estadoEmergencia" id="emergency_status-id" v-model="emergency_status"
                placeholder="Seleccione..." />
              <datalist id="estadoEmergencia">
                <option value="Reclutando"></option>
                <option value="En proceso"></option>
                <option value="Finalizada"></option>
              </datalist>
            </ul>
            <h5>Institución</h5>
            <ul>
              <div v-for="item in instituciones">
                <input name="institucion" type="radio" v-bind:value="item.id" v-model="id_in">
                <label>{{item.nombre}}</label>
              </div>
            </ul>
            <!---------------- ACÁ ES DONDE SE CARGAN LAS HABILIDADES DE LA BASE --------------->
            <h5>Habilidades requeridas</h5>
            <div class="containerHabilidades">
              <li v-for="habilidad in emergency_habilities">
                <input type="checkbox" v-model="emergency_sendHabilities" :value="habilidad.id">
                <label :for="habilidad.nombre"> {{habilidad.nombre}} </label>
              </li>
            </div>
            <!----------------------------------------------------------------------------------->
            <h5>Detalles de la emergencia</h5>
            <textarea type="text" id="emergency_details-id" v-model="emergency_details" placeholder="Detalles" cols="50"
              rows="10"></textarea>
            <div id="btn_upload">
              <b-button type="submit" class="fadeIn fourth">Cargar emergencia</b-button>
            </div>
          </form>
        </div>
      </div>
      <div class="col">
        <h3>Instituciones registradas</h3>
        <div>
          <b-table striped hover :items="instituciones"></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addEmergency",
  components: {},
  data: () => {
    return {
      emergency_name: "",
      emergency_status: "",
      nombre_in: "",
      emergency_habilities: [],
      emergency_sendHabilities: [],
      emergency_details: "",
      id_in:0,
      voluntarios: 0,
      error: false,
      error_msg: "",
      instituciones: [],
    };
  },
  created() {
    this.retrieveHabilidades();
    this.retrieveInstituciones();
  },
  methods: {
    retrieveHabilidades() {
      axios
        .get("http://localhost:8081/habilidades")
        .then((response) => {
          console.log(response.data);
          this.emergency_habilities = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    retrieveInstituciones(){
	    axios
        .get("http://localhost:8081/instituciones")
        .then((response)=> {
          this.instituciones = response.data
        })
    },
    upload_Emergency() {
      var dataFormat = new FormData();
      var dataEm = new FormData();
      dataFormat.append("idHabilidades", this.emergency_sendHabilities);
      dataEm.append('nombre', this.emergency_name);
      dataEm.append('estado_eme', this.emergency_status);
      dataEm.append('detalles', this.emergency_details);
      dataEm.append('voluntarios_reg', this.voluntarios);
      dataEm.append('nombre_in', this.nombre_in);
      dataEm.append('id_in', this.id_in);
      const data = "http://localhost:8081/emergencias/";
      const dataHabilidadades = "http://localhost:8081/eme_habilidad";
      axios
        .post(data, dataEm)
        .then((response) => {
          this.id_emergency = response.data;
          alert(
            "Emergencia cargada con éxito. El ID de la emergencia es: " +
            response.data
          );
          console.log("creacion de emergencia exitosa");
        });
      axios.post(dataHabilidadades, dataFormat);
    },
  },
};
</script>

<style>
.containerHabilidades {
  border: 1px solid #000;
  width: 509px;
  height: 150px;
  overflow-y: scroll;
}
</style>
