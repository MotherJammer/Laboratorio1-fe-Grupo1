<template>
  <div class="get_emergency">
    <h2 class="p-2 text-center">Voluntarios afectados</h2>
    <h5 class="p-2">Ingrese el radio para encontrar los voluntarios afectados</h5>
    <form class="p-2" v-on:submit.prevent="getPoints">
      <ul>
        <input
          type="text"
          id="radio"
          v-model="radio"
          placeholder="Radio"
        />
      </ul>
      <div id="btn_get">
        <b-button type="submit" class="fadeIn fourth"
          >Consultar</b-button
        >
      </div>
      <div class="row">
        <div class = "col">
            <b-table striped hover :items="voluntarios" :fields="fields" ></b-table>
        </div>
        <div class = "col">
            <div id="mapid"></div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import "leaflet/dist/leaflet"; //librería leaflet
import "leaflet/dist/leaflet.css"; //css leaflet
var icon = require("leaflet/dist/images/marker-icon.png"); //ícono de marcadores
var icon2 = require("../../components/marker-icon-red.png");
//Se crea objeto ícono con el marcador
var LeafIcon = L.Icon.extend({
  options: { iconSize: [50, 50], iconAnchor: [50, 50], popupAnchor: [1, -34] },
});
var myIcon = new LeafIcon({ iconUrl: icon });
var myIcon2 = new LeafIcon({ iconUrl: icon2 });
export default {
  name: "getEmergency",
  components: {},
  data: function () {
    return {
      radio: null,
      voluntarios: [],
      fields: ['id','nombre', 'comuna', 'point.x', 'point.y'],
      mymap: null,
      points: [],
      emergencias: []
    };

  },
  methods: {
    async getPoints(){
        console.log(this.radio);
        /*
        this.emergencias.forEach(e => {
            L.circle([e.latitud, e.longitud], {radius: this.radio *}).addTo(this.mymap);
        });
        */
            
        axios
            .get("http://localhost:8081/voluntariosAfectados/" + this.radio)
            .then((response)=>{
                this.voluntarios = response.data;
                this.voluntarios.forEach(v => {
                    let p = [v.point.y, v.point.x];
                    let marker = L.marker(p, { icon: myIcon }) //se crea el marcador
                        .bindPopup(v.nombre); //se agrega el popup con el nombre de la emergencia
                        this.points.push(marker);
                });
                this.points.forEach(p => {
                    p.addTo(this.mymap)
                })
            })
            
    }
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
    //Se agregan los puntos de la base de datos al mapa
    axios.get("http://localhost:8081/emergencias").then((response) => {
        this.emergencias = response.data;
        this.emergencias.forEach(e => {
            let pEmergencia = [e.latitud, e.longitud];
            let markerEmergencia = L.marker(pEmergencia, {icon: myIcon2});
            markerEmergencia.addTo(this.mymap);
        })
    });
  },
  
};

</script>

<style>
#mapid {
  height: 600px;
  width: 600;
  width: 50%;
  margin-left: 100px
}
</style>
