<template>
  <div>
    <h1>{{title}}</h1>
    <hr>
    <div>
      <div class="todo-left">todoItem: {{todoItem}}</div>
      <div class="todo-middle">asyncData: {{asyncData}}</div>
      <div class="todo-right">data: {{data}}</div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
}
.todo-left {
  float: left;
  max-width: 20%;
}
.todo-middle {
  float: left;
  max-width: 39%;
}
.todo-right {
  float: left;
  max-width: 39%;
}
</style>

<script>
export default {
  name: "todosList",
  data() {
    return {
      title: "Todos List",
      data: [],
      asyncData: [],
      todoItem: {},
      errorMessage: ''
    };
  },
  async created() {
    const response = await this.$todoService.findAll();
    this.asyncData = response.data;
  },
  mounted() {
    this.errorMessage = ''
    this.$todoService
      .findAll()
      .then(resp => (this.data = resp.data))
      .catch(error => {
        this.errorMessage = error
      });

    this.$todoService
      .get({ resource: "todos", id: 12 })
      .then(resp => (this.todoItem = resp.data))
      .catch(error => {
        this.errorMessage = this.errorMessage + ' ' + error
      });
  }
};
</script>