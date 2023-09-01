<script lang="ts">
  import "./app.css";
  import NavigationBar from "./Nav/NavigationBar.svelte";
  import TodoForm from "./TodosApp/TodoForm.svelte";
  import TodoList from "./TodosApp/TodoList.svelte";
</script>

<main>
  <NavigationBar />

  <div class="container mx-auto">
    <TodoForm />
    <TodoList />
  </div>
</main>

<style>
</style>
