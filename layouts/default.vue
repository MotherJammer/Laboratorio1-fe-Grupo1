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
            <b-navbar-nav>
              <b-nav-item href="/Emergency/addEmergency"
                >Agregar emergencia</b-nav-item
              >
              <b-nav-item href="/Emergency/modifyEmergency"
                >Modificar emergencia</b-nav-item
              >
              <b-nav-item href="/Emergency/getEmergency"
                >Consultar emergencia</b-nav-item
              >
              <b-nav-item href="/Emergency/deleteEmergency"
                >Borrar emergencia</b-nav-item
              >
              <b-nav-item href="/Volunteer/addVolunteer"
                >Agregar voluntario</b-nav-item
              >
              <b-nav-item href="/Volunteer/closeVolunteers"
                >Voluntarios cercanos</b-nav-item
              >
              <b-nav-item href="#">Emergencias finalizadas</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <Nuxt /><!-- Contenidos de las páginas-->
    <footer><!-- contenido del footer --></footer>
  </div>
</template>
