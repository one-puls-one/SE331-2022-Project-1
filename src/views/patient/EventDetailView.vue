<template>
  <h1>{{ event.person_name }}</h1>
  <h3>surname:{{ event.surname }}</h3>
  <p>age:{{ event.person_age }}</p>
  <p>hometown:{{ event.person_hometown }}</p>
</template>

<script>
export default {
  props: ['id', 'event']
}
</script>
