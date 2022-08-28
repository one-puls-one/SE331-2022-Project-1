<template>
  <h1>Vaccination of some students</h1>
  <h3>Data from one plus one group</h3>
  <div class="patients">
    <PatientCard
      v-for="patient in patients"
      :key="patient.id"
      :patient="patient"
    ></PatientCard>

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'Home', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page
      </router-link>

      <router-link
        id="page-next"
        :to="{ name: 'Home', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PatientCard from '@/components/PatientCard.vue'
import PersonService from '@/services/PatientService.js'
export default {
  name: 'HomeView',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    PatientCard
  },
  data() {
    return {
      patients: null,
      totalpatients: 0
    }
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalpatients / 4)
      return this.page < totalPages
    }
  },
  // eslint-disable-next-line
  beforeRouteEnter(routeTo, routeFrom, next) {
    PersonService.getPatients(4, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.patients = response.data
          comp.totalpatients = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    PersonService.getPatients(4, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.patients = response.data
        this.totalPatients = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  }
}
</script>
<style scoped>
.patients {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
