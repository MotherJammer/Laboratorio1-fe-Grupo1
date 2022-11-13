<template>
    <div class="get_finished_emergencys">
      <h2 class="p-2 text-center">Listado Emergencias terminadas</h2>
      <div><b-table striped hover :items="emergencias"></b-table></div>
      
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "getFinishedEmergencys",
    components: {},
    data: function () {
      return {
        id: null,
        emergencias: [],
      };
  
    },
    mounted(){
      const urlEF = "http://localhost:8081/emergencias/terminadas";
      axios
      .get(urlEF)
      .then((response) => {
        console.log(response.data);
        this.emergencias = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };
  </script>
  