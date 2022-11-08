<template>
  <div class="container">
    <div class="row">
      <h2 class="p-2 text-center">Agregar a un voluntario</h2>
    </div>
    <div class="row">
      <div class="col">
        <div class="volunteer position-">
          <h3 class="p-2">Datos del voluntario</h3>
          <h5 class="p-2">Nombre</h5>
          <form class="p-2" v-on:submit.prevent="upload_Voluntario">
            <ul>
              <input
                type="text"
                id="volunteer_name-id"
                v-model="volunteer_name"
                placeholder="Juan Perez"
              />
            </ul>
            <h5>Habilidades que posees</h5>
            <div class="containerHabilidades">
              <li v-for="habilidad in emergency_habilities">
                <input
                  type="checkbox"
                  v-model="volunteer_sendHabilities"
                  :value="habilidad.id"
                />
                <label :for="habilidad.nombre"> {{ habilidad.nombre }} </label>
              </li>
            </div>
            <div id="btn_upload">
              <b-button type="submit" class="fadeIn fourth">
                Ingresar voluntario
              </b-button>
            </div>
          </form>
        </div>
      </div>
      <div class="col">
        <h3 class="p-2">Ubicación del voluntario</h3>
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
  name: "addVolunteer",
  components: {},
  data: () => {
    return {
      volunteer_name: "",
      emergency_habilities: [],
      volunteer_sendHabilities: [],
      latitud: null,
      longitud: null,
      mymap: null,
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
    upload_Voluntario() {
      //Función para subir voluntario --> Revisar que esté todo bien
      var dataFormat = new FormData();
      var dataVol = new FormData();
      dataFormat.append("idHabilidades", this.volunteer_sendHabilities);
      dataVol.append("nombre", this.volunteer_name);
      dataVol.append("longitud", this.longitud);
      dataVol.append("latitud", this.latitud);
      const data = "http://localhost:8081/voluntarios";
      const dataHabilidadades = "http://localhost:8081/vol_ha";
      axios.post(data, dataVol).then((response) => {
        this.id_voluntario = response.data;
        alert("Voluntario agregado con éxito");
        console.log("creacion de voluntario exitoso");
      });
      axios.post(dataHabilidadades, dataFormat);
    },
  },
  mounted: function () {
    let _this = this;
    //Se crea el mapa
    this.mymap = L.map("mapid").setView([-33.456, -70.648], 10);
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
