<template>
  <div>
    <h1>{{title}}</h1>
    <hr>
    <div>todoItem: {{todoItem}}</div>
    <hr>
    <div>asyncData: {{asyncData}}</div>
    <hr>
    <div>data: {{data}}</div>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>

<script>
export default {
  name: 'todoList',
  data() {
    return {
      title: 'Todo List',
      data: [],
      asyncData: [],
      todoItem: {}
    }
  },
  async created () {
    const response = await this.$todoService.findAll()

    this.asyncData = response.data
  },
  mounted() {
    this.$todoService.findAll()
    .then(resp => this.data = resp.data)
    .catch(error => {console.log(error);});

    this.$todoService.get({resource: 'todos', id: 12})
    .then(resp => this.todoItem = resp.data)
    .catch(error => {console.log(error);})
  },
};
</script>