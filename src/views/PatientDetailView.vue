<template>
  <div v-if="patient">
    <h1>{{ patient.person_name }}</h1>
    <h3>surname:{{ patient.surname }}</h3>
    <p>age:{{ patient.person_age }}</p>
    <p>hometown:{{ patient.person_hometown }}</p>
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
