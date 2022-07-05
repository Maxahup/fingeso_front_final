<template>
  <div class="complaint">
    <h2> Sección carga de denuncia </h2>
    <p>Porfavor ingrese los datos solicitados a continuación:</p>
    <h2>Datos del denunciante</h2>
    <h4>Nombre </h4>
    <form v-on:submit.prevent="upload_Complaint">
    <ul>
      <input type="text" id="denouncer_name-id" v-model="denouncer_name" placeholder="Juan Esteban Soto Villanueva">
    </ul>
    <h4>Correo</h4>
    <ul>
      <input type="text" id="denouncer_mail-id" v-model="denouncer_mail" placeholder="person@usach.cl">
      <p>Nota: el correo debe ser institucional</p>
    </ul>
    <h4>Teléfono</h4>
    <ul>
      <input type="text" id="denouncer_phone-id" v-model="denouncer_phone" placeholder="+569xxxxxxxx">
    </ul>
    <h4>Estamento </h4>
      <input type="text" id="denouncer_faculty" v-model="denouncer_faculty" placeholder="facultad de ...">
    <h2>Datos del denunciado</h2>
    <h4>Nombre </h4>
    <ul>
      <input type="text" id="denounced_name-id" v-model="denounced_name" placeholder="Juan Esteban Soto Villanueva">
    </ul>
    <h4>Correo</h4>
    <ul>
      <input type="text" id="denounced_mail-id" v-model="denounced_mail" placeholder="person@usach.cl">
      <p>Nota: el correo debe ser institucional</p>
    </ul>
    <h4>Teléfono</h4>
    <ul>
      <input type="text" id="denounced_phone-id" v-model="denounced_phone" placeholder="+569xxxxxxxx">
    </ul>
    <h4>Estamento</h4>
      <input type="text" id="denounced_faculty" v-model="denounced_faculty" placeholder="facultad de ...">
    <p>A continuación ingrese el relato de los hechos narrado por el denunciante </p>
    <textarea type="text" id="denouncer_story-id" v-model="denouncer_story" placeholder="Relato" cols="100" rows="20"></textarea>
    <div id="btn_upload">
  <input type="submit" class="fadeIn fourth" value="Cargar Denuncia">
  </div>
    </form>
  </div>
</template>

<script>
import { axios } from 'axios'

export default {
  name: 'UploadComplaintView',
  components: {
  },
  data: function () {
    return {
      denouncer_name: '',
      denouncer_mail: '',
      denouncer_phone: '',
      denouncer_story: '',
      denouncer_faculty: '',
      denounced_name: '',
      denounced_mail: '',
      denounced_phone: '',
      error: false,
      error_msg: '',
      denounced_faculty: ''
    }
  },
  methods: {
    upload_Complaint () {
      const data = 'http://localhost:8080/denuncia/'
      axios.post(data, {
        rutDenunciante: this.denouncer_name,
        rutDenuciado: this.denounced_name,
        correoDenunciante: this.denouncer_mail,
        correoDenunciado: this.denounced_mail,
        estado: 'en espera de revision',
        fecha: '2022-06-05',
        fiscal: 'sin asignar',
        actuario: 'sin asignar',
        medidasProteccion: 'sin asignar',
        resolucion: 'sin resolucion',
        fechas: [{
          idDenuncia: 'idTest123',
          estadoDenuncia: 'en espera de revision',
          fechaActualEstadoDenuncia: '2022-06-05'
        }]
      }).then(response => {
        console.log('exitoso')
      })
    }
  }
}

</script>
