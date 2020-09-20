<script lang="ts">
  import TodoList from "./TodosApp/TodoList.svelte";
  import { checkLogin, userSub } from "./auth0.config";
  import TodoForm from "./TodosApp/TodoForm.svelte";
  import { onMount } from "svelte";
  import NavigationBar from "./Nav/NavigationBar.svelte";

  onMount(async () => {
    await checkLogin();
  });
</script>

<style>
</style>

<main>
  <NavigationBar />
  <div class="container">
    {#if $userSub}
      <TodoForm />
    {/if}

    <TodoList />
  </div>
</main>
