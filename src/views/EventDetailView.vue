<template>
  <div v-if="person">
    <h1>{{ person.title }}</h1>
    <p>{{ person.time }} on {{ person.date }} @ {{ person.location }}</p>
    <p>{{ person.description }}</p>
  </div>
</template>

<script>
import PersonService from '@/services/PersonService.js'

export default {
  props: ['id'],
  data() {
    return {
      person: null
    }
  },
  created() {
    // fetch person (by id) and set local person data
    PersonService.getperson(this.id)
      .then((response) => {
        this.person = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
