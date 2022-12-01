<template>
  <div class="wrapper">
    <link rel="stylesheet" type="text/css" href="css/main.min.css" />

    <header>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
          <b-navbar-brand href="/" class="p-2">
            Voluntariados TBD</b-navbar-brand
          >

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-nav-item-dropdown class="text-light mx-auto" text="Emergencias">
              <b-dropdown-item href="/Emergency/addEmergency"
                >Agregar emergencia</b-dropdown-item
              >
              <b-dropdown-item href="/Emergency/modifyEmergency"
                >Modificar emergencia</b-dropdown-item
              >
              <b-dropdown-item href="/Emergency/getEmergency"
                >Consultar emergencia</b-dropdown-item
              >
              <b-dropdown-item href="/Emergency/deleteEmergency"
                >Borrar emergencia</b-dropdown-item
              >
              <b-dropdown-item href="/Emergency/finishedEmergency"
                >Emergencias finalizadas</b-dropdown-item
              >
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="text-light mx-auto" text="Voluntarios">
              <b-dropdown-item href="/Volunteer/addVolunteer"
                >Agregar voluntario</b-dropdown-item
              >
              <b-dropdown-item href="/Volunteer/closeVolunteers"
                >Voluntarios cercanos</b-dropdown-item
              >
              <b-dropdown-item href="/Volunteer/affectedVolunteers">
                Voluntarios afectados
              </b-dropdown-item>
              <b-dropdown-item href="/Volunteer/analysis"
                >Análisis de datos
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <Nuxt /><!-- Contenidos de las páginas-->
    <footer><!-- contenido del footer --></footer>
  </div>
</template>
