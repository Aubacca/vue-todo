<template>
  <div>
    <h1>{{title}}</h1>
    <hr>
  </div>
</template>

<style scoped>
h1 {
  color: darkmagenta;
}
</style>

<script>
export default {
  name: "usersList",
  data() {
    return {
      title: "Users List"
    };
  },
  created() {},
  mounted() {}
};
</script>