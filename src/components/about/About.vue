<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <h2>{{ getPageAboutText.title }}</h2>
    <div>
      <div>
        <span>Is page loading:</span>
        <span>{{ isPageLoading }}</span>
      </div>
      <span>Count:</span>
      <span>{{ totalCount }}</span>
      <div>
        <span>Count * 10:</span>
        <span>{{ countTimesTen }}</span>
      </div>
      <div>
        <span>countAlias:</span>
        <span>{{ countAlias }}</span>
      </div>
      <div>
        <span>Count with Text:</span>
        <span>{{ countPercent }}</span>
      </div>
      <div>
        <button @click="incrementByOne">Increment by 1</button>
        <button @click="increment(5)">Increment by 5</button>
        <button @click="increment(10)">Increment by 10</button>
      </div>
      <div>
        <h4>via mapMutations</h4>
        <button @click="incrementTimes2({amount: 3})">IncrementTimes2 by 3</button>
        <button @click="incrementSimple">Increment Simple</button>
      </div>
      <div>
        <h4>via mutation type definition</h4>
        <button @click="incrementByConstant">Increment 1 (constant)</button>
      </div>
      <div>
        <h4>via actions</h4>
        <button @click="actionIncrementAsync()">Increment by 1 (async)</button>
        <button @click="actionIncrementSimpleDestructeredAsync({amount: 9})">Increment by 9 (async)</button>
      </div>
      <div>
        <h4>via mapActions</h4>
        <button @click="incrementAsync()">Increment by 1 (async)</button>
        <button @click="incrementByAsync({amount: 11})">Increment by 11 (async)</button>
      </div>
    </div>
    <hr>
    <div>
      <div>{{ todoSelected }}</div>
      <div>
        <button @click="getTodoById(1)">Get Todo 1</button>
      </div>
      <div>
        <button @click="getTodoById(2)">Get Todo 2</button>
      </div>
      <div>
        <button @click="getTodoById(3)">Get Todo 3</button>
      </div>
      <div>
        <button @click="actionLoadTodos()">Load Todos</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { COUNT_INCREMENT } from "@/store/mutation-types";

export default {
  name: "about",
  props: {
    status: {
      type: String,
      default: "INIT"
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
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      title: "This is an linked about page",
      todoSelected: {},
      percentText: " %"
    };
  },
  watch: {},
  computed: {
    countTripple() {
      return this.$store.state.count * 3;
    },
    ...mapState({
      countTimesTen: state => state.count * 10,
      countAlias: "count",
      countPercent(state) {
        return `${state.count}  ${this.percentText}`;
      }
    }),
    ...mapState(["count", "loading"]),
    ...mapGetters(["totalCount", "getPageAboutText"]),
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      isPageLoading: "isLoading"
    })
  },
  beforeCreate() {
    /* eslint-disable no-console */
    console.log("about>beforeCreate");
    /* eslint-enable no-console */
  },
  created() {
    /* eslint-disable no-console */
    console.log("about>created");
    console.log("about>", this.$store);
    /* eslint-enable no-console */
  },
  beforeMount() {
    /* eslint-disable no-console */
    console.log("about>beforeMount");
    /* eslint-enable no-console */
  },
  mounted() {
    /* eslint-disable no-console */
    console.log("about>mounted");
    /* eslint-enable no-console */
  },
  beforeUpdate() {
    /* eslint-disable no-console */
    console.log("about>beforeUpdate");
    /* eslint-enable no-console */
  },
  updated() {
    /* eslint-disable no-console */
    console.log("about>updated");
    /* eslint-enable no-console */
  },
  beforeDestroy() {
    /* eslint-disable no-console */
    console.log("about>beforeDestroy");
    /* eslint-enable no-console */
  },
  destroyed() {
    /* eslint-disable no-console */
    console.log("about>destroyed");
    /* eslint-enable no-console */
  },
  methods: {
    ...mapMutations([
      "incrementSimple", // map `this.increment()` to `this.$store.commit('increment')`

      // `mapMutations` also supports payloads:
      "incrementTimes2" // map `this.incrementTimes2({amount: 3})` to `this.$store.commit('incrementTimes2', {amount: 3})`
    ]),
    incrementByOne() {
      /* eslint-disable no-console */
      console.log("about>increment");
      this.$store.commit("incrementSimple");
      /* eslint-enable no-console */
    },
    increment(byAmount) {
      /* eslint-disable no-console */
      console.log("about>increment: byAmount=", byAmount);
      console.log(this.$store.state.count);
      // this.$store.commit('increment', {amount: byAmount})
      this.$store.commit({
        type: "increment",
        amount: byAmount
      });
      console.log(this.$store.state.count);
      console.log("about>Hallo");
      /* eslint-enable no-console */
    },
    incrementByConstant() {
      /* eslint-disable no-console */
      console.log("about>incrementByConstant");
      console.log(this.$store);
      this.$store.commit(COUNT_INCREMENT);
      /* eslint-enable no-console */
    },
    getTodoById(todoId) {
      this.todoSelected = this.$store.getters.getTodoById(todoId);
    },
    actionIncrementAsync() {
      this.$store.dispatch("incrementSimpleAsync");
    },
    actionIncrementSimpleDestructeredAsync(payload) {
      this.$store.dispatch("incrementSimpleDestructeredAsync", payload);
    },
    actionLoadTodos(){
      this.$store.dispatch('loadAllTodos')
    },
    ...mapActions([
      'incrementAsync', // map `this.increment()` to `this.$store.dispatch('increment')`

      // `mapActions` also supports payloads:
      'incrementByAsync' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'incrementByAsync' // map `this.add()` to `this.$store.dispatch('increment')`
    })
  }
};
</script>

<style scoped>
h1 {
  color: red;
}

h1 {
  color: darkblue;
}
</style>