<template>
  <div id="home">
    <CreateTodo @todo-created="onTodoCreated" />
    <div class="separator"><h1 /></div>
    <ul class="todo-list">
      <li class="todo-item" v-for="todoItem in todoList" :key="todoItem.id" :class="{done: todoItem.isCompleted}">
         <div class="title">
           {{todoItem.title}} 
         </div>
         <div class="actions">
           <input 
                  type="checkbox" 
                  class="checkbox"
                  :checked="todoItem.isCompleted" 
                  @input="onCheckBoxInput(todoItem.id, todoItem.isCompleted)"
            />
            <button @click="deleteClickedTodo(todoItem.id)">delete</button>
         </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateTodo from "@/components/CreateTodo";
import { fetchTodoList, patchTodo, deleteTodo } from '@/netClient/todoService'

export default {
  name: "HomePage",
  components: {
    CreateTodo,
  },
  data: () => ({
    todoList: [],
    
  }),
  created (){
    this.fetchTodoList()
  },
  methods: {
    onTodoCreated(){
      this.fetchTodoList();
    },

    async deleteClickedTodo(id){
      try{
        await deleteTodo({id})
        this.fetchTodoList();
      }
      catch(error){
        console.error({error});
      }
    },

    async fetchTodoList(){
      try{
        this.todoList = await fetchTodoList();
      }catch(error){
        console.warn({error});
      }
    },

    async onCheckBoxInput(id, isCompleted) {
      try{
        await patchTodo({id, isCompleted: !isCompleted});
        this.fetchTodoList();
      }
      catch(error){
        console.warn({error})
      }
    }
  }
};
</script>

 
