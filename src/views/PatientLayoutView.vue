<template>
  <div v-if="GStore.patient">
    <div id="nav">
      <router-link :to="{ name: 'PatientDetail' }">
        Patient Details
      </router-link>
      |
      <router-link :to="{ name: 'PatientVaccine' }">Vaccination</router-link>|
      <router-link :to="{ name: 'DoctorComment' }">
        Docrot Comments
      </router-link>
    </div>
    <router-view :patient="GStore.patient" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
