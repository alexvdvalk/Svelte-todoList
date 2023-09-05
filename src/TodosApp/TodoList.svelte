<script>
  import { flip } from "svelte/animate";
  import { todoStore } from "./todoList";
  import Todo from "./Todo.svelte";
</script>

<ul class="list-group pt-2">
  <!-- <div class="row-12"> -->
  {#each $todoStore as todo, i (todo.id)}
    <li animate:flip>
      <Todo bind:todo />
    </li>
  {/each}
  <!-- </div> -->
</ul>
<!-- <p>{JSON.stringify($todoStore)}</p> -->
