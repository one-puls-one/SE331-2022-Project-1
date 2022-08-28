<template>
  <h1>Vaccination of {{ patient.person_name }}</h1>
  <h3>{{ patient.state }}</h3>
  <b>First: </b>
  <span>
    {{ patient.Vaccine_name }}{{ patient.time_1 }} on {{ patient.date_1 }}
  </span>
  <br />
  <b>Second: </b>
  <span>
    {{ patient.Vaccine_name }} {{ patient.time_2 }} on {{ patient.date_2 }}
  </span>
  <br />
  <b>Third: </b>
  <span>
    {{ patient.Vaccine_name }} {{ patient.time_3 }} on {{ patient.date_3 }}
  </span>
</template>

<script>
export default {
  props: ['id', 'patient'],
  inject: ['GStore']
}
</script>
