<template>
  <router-link
    class="patient-link"
    :to="{ name: 'PatientLayout', params: { id: patient.id } }"
  >
    <div class="patient-card">
      <span>{{ patient.Vaccine_name }}</span>
      <h4>{{ patient.person_name }}</h4>
      <span>{{ patient.state }}</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'PatientCard',
  props: {
    patient: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.patient-card {
  border-radius: 5px;
  padding: 20px;
  width: 450px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  background-color: lightcyan;
}

.patient-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.patient-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
