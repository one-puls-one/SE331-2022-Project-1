<template>
  <div id="app">
    <textarea id="comment" v-model="comment"></textarea>
  </div>
  <button @click="onSubmit" onclick="fun()">Submit</button>
</template>
<script>
export default {
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.comment === '') {
        alert('Comment is incomplete. Please fill out the field.')
        return
      }
      let comments = {
        comment: this.comment
      }
      this.$emit('comment-submit', comments)
      this.comment = ''
    },
    fun() {
      document.getElementById('t1').value = ''
    }
  }
}
</script>
