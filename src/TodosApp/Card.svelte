<script>
  export let bg = "bg-slate-100";
</script>

<div
  class="block p-4 {bg} border duration-300 border-gray-200 rounded-xl my-2 shadow hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
  <slot />
</div>
