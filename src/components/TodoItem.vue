<template>
  <li
    :class="['todo-item', item.finished?'todo-finished':'']"
    @mouseover="handleItemMouseIn"
    @mouseleave="handleItemMouseLeave"
  >
    <input type="checkbox" v-model="item.finished">
    <span class="content">{{item.content}}</span>
    <button class="del-btn" v-show="!item.finished&&hover" @click="emitDelete">delete</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: Object
  },
  data() {
    return {
      hover: false
    };
  },
  methods: {
    handleItemMouseIn() {
      this.hover = true;
    },
    handleItemMouseLeave() {
      // mouseleave 不冒泡
      // mouseout 冒泡，所以在子元素上也会触发
      this.hover = false;
    },
    emitDelete() {
      this.$emit("delete");
    }
  }
};
</script>

<style lang="scss">
.todo-item {
  list-style: none;
  padding: 4px 16px;
  height: 22px;
  line-height: 22px;
  .content {
    margin-left: 16px;
  }
  .del-btn {
    margin-left: 16px;
  }
  &.todo-finished {
    text-decoration: line-through;
  }
}
</style>
