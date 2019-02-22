<template>
    <div>
        <todoList></todoList>
    </div>
</template>

<style>
    
</style>

<script>
// @ is an alias to /src
import TodoList from '@/components/todos/TodoList'

export default {
    name: 'todoPage',
  components: {
    TodoList
  }
}
</script>