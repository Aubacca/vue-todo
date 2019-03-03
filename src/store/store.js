import Vue from 'vue';
import Vuex from 'vuex';

import { COUNT_INCREMENT } from './mutation-types'
// import * as $todoService  from '../services/TodoService'
import TodoService from '../services/TodoService'

Vue.use(Vuex);



export default new Vuex.Store({
  strict: true,
  state: {
    loading: false,
    todos: [
      { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
      { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false },
      { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }
    ],
    pageText: {
      about: { title: 'This is an linked about page (text from store)' }
    },
    count: 0,
    errorMessage : ''
  },
  mutations: {
    // Mutations Must Be Synchronous
    incrementSimple(state) {
      state.count++;
    },
    increment(state, payload) {
      state.count += payload.amount;
    },
    incrementBy(state, payload) {
      state.count += payload.amount;
    },
    incrementTimes2(state, payload) {
      state.count += (payload.amount * 2);
    },
    [COUNT_INCREMENT](state) {
      state.count++;
    },
    addTodos(state, payload) {
      state.todos = payload.todos
    }
  },
  getters: {
    totalCount: state => {
      return state.count
    },
    getPageAboutText: state => {
      return state.pageText.about
    },
    isLoading: state => {
      return state.loading
    },
    todoCompleted: state => {
      return state.todos.filter(todo => todo.completed);
    },
    todoCompletedCount: (state, getters) => {
      return getters.todoCompleted.length;
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  actions: {
    // Instead of mutating the state, actions commit mutations.
    // Actions can contain arbitrary asynchronous operations.
    incrementSimpleAsync (context) {
      setTimeout(() => {
        context.commit('incrementSimple')
      }, 2000)
    },
    incrementSimpleDestructeredAsync ({ commit }, payload) {
      setTimeout(() => {
        commit('incrementBy', payload)
      }, 1500)
    },
    loadAllTodos ({commit}){
      TodoService.findAll()
      .then(resp => {
        commit('addTodos', {todos: resp.data})
      })
      // .catch(error => {
      //   this.state.errorMessage = error;
      //   this.state.loading = false
      // });
    },
    incrementAsync({commit}) {
      setTimeout(() => {
        commit('incrementSimple')
      }, 2400);
    },
    incrementByAsync({commit}, payload) {
      setTimeout(() => {
        commit('incrementBy', payload)
      }, 2600);
    }
  }
});
