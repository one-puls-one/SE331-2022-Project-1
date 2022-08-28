<template>
  <div v-if="GStore.patient">
    <h1>{{ GStore.patient.person_name }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'PatientDetails' }">Patient Detail</router-link>
      |
      <router-link :to="{ name: 'PatientDetails' }">Patient Detail</router-link>
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
