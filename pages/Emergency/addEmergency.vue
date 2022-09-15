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
                list="estadoEmergencia"
                id="emergency_status-id"
                v-model="emergency_status"
                placeholder="Seleccione..."
              />
              <datalist id="estadoEmergencia">
                <option value="Reclutando"></option>
                <option value="En proceso"></option>
                <option value="Finalizada"></option>
              </datalist>
            </ul>
            <h5>Institución (ID)</h5>
            <ul>
              <input type="int" id="id_in" v-model="id_in" placeholder="1" />
            </ul>
            <!---------------- ACÁ ES DONDE SE CARGAN LAS HABILIDADES DE LA BASE --------------->
            <h5>Habilidades requeridas</h5>
            <div class="containerHabilidades">
              <input type="checkbox" name="habilidad" value="1" />
              Habilidad 1 <br />
              <input type="checkbox" name="habilidad" value="2" />
              Habilidad 2 <br />
              <input type="checkbox" name="habilidad" value="3" />
              Habilidad 3 <br />
              <input type="checkbox" name="habilidad" value="4" />
              Habilidad 4 <br />
              <input type="checkbox" name="habilidad" value="5" />
              Habilidad 5 <br />
              <input type="checkbox" name="habilidad" value="6" />
              Habilidad 6 <br />
              <input type="checkbox" name="habilidad" value="7" />
              Habilidad 7 <br />
              <input type="checkbox" name="habilidad" value="8" />
              Habilidad 8 <br />
              <input type="checkbox" name="habilidad" value="9" />
              Habilidad 9 <br />
              <input type="checkbox" name="habilidad" value="10" />
              Habilidad 10 <br />
            </div>
            <!----------------------------------------------------------------------------------->
            <h5>Detalles de la emergencia</h5>
            <textarea
              type="text"
              id="emergency_details-id"
              v-model="emergency_details"
              placeholder="Detalles"
              cols="50"
              rows="10"
            ></textarea>
            <div id="btn_upload">
              <b-button type="submit" class="fadeIn fourth"
                >Cargar emergencia</b-button
              >
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
  data: function () {
    return {
      emergency_name: "",
      emergency_status: "",
      id_in: null,
      emergency_habilities: [], //ACÁ ENTRARÍAN LAS HABILIDADES SELECCIONADAS
      emergency_details: "",
      voluntarios: 0,
      error: false,
      error_msg: "",
      instituciones: [
        { id: 1, nombre_institucion: "Fowler" },
        { id: 2, nombre_institucion: "Carter" },
        { id: 3, nombre_institucion: "Rose" },
        { id: 4, nombre_institucion: "Moore" },
        { id: 5, nombre_institucion: "Reeds" },
        { id: 6, nombre_institucion: "Jammer" },
        { id: 7, nombre_institucion: "Eidres" },
        { id: 8, nombre_institucion: "Leams" },
        { id: 9, nombre_institucion: "Pleto" },
        { id: 10, nombre_institucion: "Yiyi" },
      ],
    };
  },
  methods: {
    upload_Emergency() {
      const data = "http://localhost:8081/emergencias/";
      //--------------------------------------------------------------------------------
      //Mecanismo propuesto para recolectar las habilidades seleccionadas
      var habilidades = document.getElementsByName("habilidad");
      var habilidades_seleccionadas = [];
      for (var i = 0; i < habilidades.length; i++) {
        if (habilidades[i].checked) {
          habilidades_seleccionadas.push(habilidades[i].value);
        }
      }
      //--------------------------------------------------------------------------------
      axios
        .post(data, {
          nombre: this.emergency_name,
          estado_eme: this.emergency_status,
          detalles: this.emergency_details,
          voluntarios_reg: this.voluntarios,
          id_in: this.id_in,
          //emergency_habilities: habilidades_seleccionadas, //ACÁ ENTRARÍAN LAS HABILIDADES SELECCIONADAS PARA AXIOS
        })
        .then((response) => {
          //En esta alerta es donde se debe cargar el ID con que quedó la emergencia en la base
          //Una vez se haya obtenido el servicio, se debe cambiar el mensaje del alert a el formato:
          //alert("Emergencia cargada con éxito. El ID de la emergencia es: " + id_emergencia);
          alert("Emergencia cargada con éxito. El ID de la emergencia es: X");
          console.log("creacion de emergencia exitosa");
        });
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
