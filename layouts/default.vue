<template>
  <div class="wrapper">
    <header>
      <nav>
        <!-- Enlaces de navegación-->
        <ul>
          <li>
            <a href="/Emergency/addEmergency">Agregar</a>
          </li>
          <li>
            <a href="/Emergency/modifyEmergency">Modificar</a>
          </li>
          <li>
            <a href="/Emergency/getEmergency">Consultar</a>
          </li>
          <li>
            <a href="/Emergency/deleteEmergency">Borrar</a>
          </li>
        </ul>
      </nav>
    </header>
    <Nuxt /><!-- Contenidos de las páginas-->
    <footer><!-- contenido del footer --></footer>
  </div>
</template>
