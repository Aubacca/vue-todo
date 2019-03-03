<template>
  <div>
    <h1>{{title}}</h1>
    <hr>
  </div>
</template>

<style scoped>
h1 {
  color: darkgreen;
}
</style>

<script>
export default {
  name: "photosList",
  data() {
    return {
      title: "Photos List"
    };
  },
  created() {},
  mounted() {}
};
</script>