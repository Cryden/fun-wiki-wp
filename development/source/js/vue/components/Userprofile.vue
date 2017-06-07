<template>
  <div>
    Hello
  </div>
</template>

<script>

export default {
  name: 'userprofile',
  data: function() {
    return {
      user_auth: ''
    }
  },

  props: ['auth']

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>