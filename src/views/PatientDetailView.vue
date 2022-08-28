<template>
  <div v-if="patient">
    <br />
    <div class="patinfo">
      <h3>name: {{ patient.name }}</h3>
      <h3>surname: {{ patient.surname }}</h3>
      <p>age: {{ patient.person_age }}</p>
      <p>hometown: {{ patient.person_hometown }}</p>
    </div>
  </div>
</template>

<script>
import PatientService from '@/services/PatientService.js'

export default {
  props: ['id'],
  data() {
    return {
      patient: null
    }
  },
  created() {
    // fetch person (by id) and set local person data
    PatientService.getPatient(this.id)
      .then((response) => {
        this.patient = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style>
.patinfo {
  border: 5px burlywood dotted;
  background-color: lightskyblue;
}
</style>
