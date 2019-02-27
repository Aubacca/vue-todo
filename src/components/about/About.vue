<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
  name: 'about',
  props: {
    state: {
      type: String,
      default: 'INIT'
    },
    showFadeIn: {
      type: Boolean,
      default: false
    },
    loadedGame: {
      type: Boolean,
      default: false
    },
    gameMode: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      title: 'This is an linked about page'
    }
  },
  watch: {
    
  },
  computed: {
  },
  beforeCreate() {
    console.log('about>beforeCreate')
  },
  created() {
    console.log('about>created')
  },
  beforeMount() {
    console.log('about>beforeMount')
  },
  mounted() {
    console.log('about>mounted')
  },
  beforeUpdate() {
    console.log('about>beforeUpdate')
  },
  updated() {
    console.log('about>updated')
  },
  beforeDestroy() {
    console.log('about>beforeDestroy')
  },
  destroyed() {
    console.log('about>destroyed')
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>