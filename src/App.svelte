<script lang="ts">
  import { onMount } from "svelte";
  import { checkLogin } from "./auth0.config";
  import NavigationBar from "./Nav/NavigationBar.svelte";

  import { page } from "./routes";
  import router from "page";
  import TodoOverview from "./TodosApp/TodoOverview.svelte";

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
    <TodoOverview />
    <!-- <h1>Router</h1>
    {router}
    <svelte:component this={page} /> -->
  </div>
</main>
