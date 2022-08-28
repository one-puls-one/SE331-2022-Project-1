<template>
  <h3>Doctor Comment</h3>
  <CommentList v-if="comments.length" :comments="comments"></CommentList>
  <CommentForm @comment-submit="addComment"></CommentForm>
</template>
<script>
import CommentForm from '@/components/CommentForm.vue'
import CommentList from '@/components/CommentList.vue'
export default {
  inject: ['GStore'],
  components: {
    CommentForm,
    CommentList
  },
  data() {
    return {
      comments: []
    }
  },
  methods: {
    addComment(comment) {
      this.comments.push(comment)
      this.GStore.flashMessage = 'Your comment has been added'
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'DoctorComment'
      })
    }
  }
}
</script>
