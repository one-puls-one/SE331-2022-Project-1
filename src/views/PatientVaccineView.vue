<template>
  <h1>Vaccination of {{ patient.person_name }}</h1>
  <h3>{{ patient.state }}</h3>
  <center>
    <div class="dose1">
      <b>First dose: </b>
      <br />
      <span> vaccine name: {{ patient.Vaccine_name }} </span>
      <br />
      <span> time: {{ patient.time_2 }}</span>
      <br />
      <span>date: {{ patient.date_2 }}</span>
      <br />
    </div>
    <br />
    <div class="dose2">
      <b>Second dose: </b>
      <br />
      <span> vaccine name:{{ patient.Vaccine_name }} </span>
      <br />
      <span> time:{{ patient.time_2 }}</span>
      <br />
      <span>date:{{ patient.date_2 }}</span>
      <br />
    </div>
    <br />
    <div class="dose3">
      <b>third dose: </b>
      <br />
      <span> vaccine name:{{ patient.Vaccine_name }} </span>
      <br />
      <span> time:{{ patient.time_3 }}</span>
      <br />
      <span>date:{{ patient.date_3 }}</span>
      <br />
    </div>
  </center>
</template>

<script>
export default {
  props: ['id', 'patient'],
  inject: ['GStore']
}
</script>

<style>
.dose1 {
  height: 100px;
  width: 300px;
  border: red 3px dashed;
  line-height: 25px;
  background-color: moccasin;
}
.dose2 {
  height: 100px;
  width: 300px;
  border: red 3px dashed;
  line-height: 25px;
  background-color: antiquewhite;
}
.dose3 {
  height: 100px;
  width: 300px;
  border: red 3px dashed;
  line-height: 25px;
  background-color: lightyellow;
}
</style>
