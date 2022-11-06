<template>
  <div class="container">
    <div class="row">
      <h2 class="p-2 text-center">Agregar una emergencia</h2>
      <div>{{ message }}</div>
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
            <h5>Institución</h5>
            <div class="containerHabilidades">
              <div v-for="item in instituciones">
                <input
                  name="institucion"
                  type="radio"
                  v-bind:value="item.id"
                  v-model="id_in"
                />
                <label>{{ item.nombre }}</label>
              </div>
            </div>
            <!---------------- ACÁ ES DONDE SE CARGAN LAS HABILIDADES DE LA BASE --------------->
            <h5>Habilidades requeridas</h5>
            <div class="containerHabilidades">
              <li v-for="habilidad in emergency_habilities">
                <input
                  type="checkbox"
                  v-model="emergency_sendHabilities"
                  :value="habilidad.id"
                />
                <label :for="habilidad.nombre"> {{ habilidad.nombre }} </label>
              </li>
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
        <h3 class="p-2">Ubicación de la emergencia</h3>
        <div>Coordenadas seleccionadas: {{ point }}</div>
        <div>{{ message }}</div>
        <div id="mapid"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "leaflet/dist/leaflet"; //librería leaflet
import "leaflet/dist/leaflet.css"; //css leaflet
var icon = require("leaflet/dist/images/marker-icon.png"); //ícono de marcadores

//Se crea objeto ícono con el marcador
var LeafIcon = L.Icon.extend({
  options: { iconSize: [50, 50], iconAnchor: [50, 50], popupAnchor: [1, -34] },
});
var myIcon = new LeafIcon({ iconUrl: icon });

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
      id_in: 0,
      voluntarios: 0,
      error: false,
      error_msg: "",
      instituciones: [],
      //datos agregados para la ubicación
      latitud: null,
      longitud: null,
      name: "",
      points: [], //colección de puntos cargados de la base de datos
      mymap: null, //objeto a usar para cargar el mapa en el formulario
      message: "",
    };
  },
  computed: {
    point() {
      //Representación del punto seleccionado
      if (this.latitud && this.longitud) {
        let lat = this.latitud.toFixed(3);
        let lon = this.longitud.toFixed(3);
        return `(${lat}, ${lon})`;
      } else {
        return "";
      }
    },
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
    retrieveInstituciones() {
      axios.get("http://localhost:8081/instituciones").then((response) => {
        this.instituciones = response.data;
      });
    },
    upload_Emergency() {
      var dataFormat = new FormData();
      var dataEm = new FormData();
      dataFormat.append("idHabilidades", this.emergency_sendHabilities);
      dataEm.append("nombre", this.emergency_name);
      dataEm.append("estado_eme", this.emergency_status);
      dataEm.append("detalles", this.emergency_details);
      dataEm.append("voluntarios_reg", this.voluntarios);
      dataEm.append("nombre_in", this.nombre_in);
      dataEm.append("id_in", this.id_in);
      const data = "http://localhost:8081/emergencias/";
      const dataHabilidadades = "http://localhost:8081/eme_habilidad";
      axios.post(data, dataEm).then((response) => {
        this.id_emergency = response.data;
        alert(
          "Emergencia cargada con éxito. El ID de la emergencia es: " +
            response.data
        );
        console.log("creacion de emergencia exitosa");
      });
      axios.post(dataHabilidadades, dataFormat);
    },
    //-----Métodos relacionados con la ubicación y el mapa-----
    clearMarkers: function () {
      this.points.forEach((p) => {
        this.mymap.removeLayer(p);
      });
      this.points = [];
    },

    async getPoints(map) {
      try {
        //Se llama al servicio para obtener los puntos de la base de datos
        let response = await axios.get("http://localhost:8081/emergencias");
        console.log(response);
        let dataPoints = response.data;
        console.log(dataPoints);
        //Se recorren los puntos y se agregan al mapa
        dataPoints.forEach((point) => {
          let p = [point.latitud, point.longitud];
          let marker = L.marker(p, { icon: myIcon }) //se crea el marcador
            .bindPopup(point.nombre); //se agrega el popup con el nombre de la emergencia

          //Se agrega a la lista
          this.points.push(marker);
        });
        //Se agregan los puntos de la lista al mapa
        this.points.forEach((p) => {
          p.addTo(map);
        });
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  mounted: function () {
    let _this = this;
    //Se crea el mapa
    this.mymap = L.map("mapid").setView([-33.456, -70.648], 13);
    //Se agrega el tile layer de OSM
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 100,
    }).addTo(this.mymap);
    //Evento para obtener la latitud y longitud al hacer click en el mapa
    this.mymap.on("click", function (e) {
      _this.latitud = e.latlng.lat;
      _this.longitud = e.latlng.lng;
    });
    //Se agregan los puntos de la base de datos al mapa
    this.getPoints(this.mymap);
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

#mapid {
  height: 400px;
  width: 100%;
}
</style>
