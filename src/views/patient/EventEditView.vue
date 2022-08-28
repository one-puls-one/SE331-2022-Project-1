<template>
  <h3>Doctor Evaluation</h3>
  <div id="app">
    <p style="white-space: pre">{{ message2 }}</p>
    <textarea v-model="message2" placeholder="Enter here... ..."></textarea>
  </div>
  <button>Submit</button>
</template>

<script>
export default {
  props: ['id', 'event'],
  inject: ['GStore']
}
</script>
