<script lang="ts">
  import { onMount } from "svelte";

  import TodoList from "./TodosApp/TodoList.svelte";
  import { checkLogin, userSub } from "./auth0.config";
  import TodoForm from "./TodosApp/TodoForm.svelte";
  import NavigationBar from "./Nav/NavigationBar.svelte";

  import { page } from "./routes";
  import router from "page";

  onMount(async () => {
    await checkLogin();
  });
</script>

<style>
</style>

<main>
  <NavigationBar />
  <div class="container">
    <!-- {#if $userSub} -->
    <TodoForm />
    <!-- {/if} -->

    <TodoList />
    <!-- <h1>Router</h1>
    {router}
    <svelte:component this={page} /> -->
  </div>
</main>
