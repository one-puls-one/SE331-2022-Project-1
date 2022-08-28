<template>
  <h1>Vaccination of {{ event.person_name }}</h1>
  <h3>{{ event.state }}</h3>
  <b>First: </b>
  <span>
    {{ event.Vaccine_name }} @{{ event.time_1 }} on {{ event.date_1 }}
  </span>
  <br />
  <b>Second: </b>
  <span>
    {{ event.Vaccine_name }} @{{ event.time_2 }} on {{ event.date_2 }}
  </span>
  <br />
  <b>Third: </b>
  <span>
    {{ event.Vaccine_name }} @{{ event.time_3 }} on {{ event.date_3 }}
  </span>
</template>

<script>
export default {
  props: ['id', 'event'],
  inject: ['GStore']
}
</script>
