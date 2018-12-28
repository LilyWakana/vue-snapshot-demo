<template>
  <ul class="todo">
    <todo-item
      v-for="(item,index) in list"
      :key="item.content"
      :item="item"
      @delete="deleteTodo(index)"
    ></todo-item>
  </ul>
</template>
<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todo",
  data() {
    return {
      list: [
        { finished: true, content: "read a book" },
        { finished: false, content: "play football" }
      ]
    };
  },
  components: {
    TodoItem
  },
  methods: {
    addTodo: function(item) {
      this.list.push(item);
    },
    deleteTodo: function(index=0) {
      this.list.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
.todo {
  box-sizing: border-box;
  margin: 0 auto;
  width: 800px;
  padding: 0 100px;
  text-align: left;
}
</style>

