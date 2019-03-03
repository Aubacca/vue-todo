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
import RestResource from '@/services/RestResource.ts';
import restResource2 from '@/services/RestResource2'

export default {

  name: "usersList",
  data() {
    return {
      title: "Users List"
    };
  },
  created() {},
  mounted() {
    const restResourceService = new RestResource();
    restResourceService.sendRequest();

    restResource2.sendRequest();

  }
};
</script>