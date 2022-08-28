<template>
  <div v-if="GStore.event">
    <h1>{{ GStore.event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">PersonnalDetails</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Vaccination</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">DoctorEvaluation</router-link>
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
