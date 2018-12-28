<template>
  <div id="app">
    <input type="text" v-model="newContent">
    <button @click="handleAddTodo">add</button>
    <todo ref="todo"></todo>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "app",
  components: {
    Todo
  },
  data() {
    return {
      newContent: ""
    };
  },
  methods: {
    handleAddTodo() {
      let content = this.newContent;
      if (!content) return;
      const { todo } = this.$refs;
      todo.addTodo({ content, finished: false });
      this.newContent = "";
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  width: 800px;
  margin: 60px auto 0;
}
</style>
