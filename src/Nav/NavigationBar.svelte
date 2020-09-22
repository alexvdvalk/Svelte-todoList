<script>
  import { userSub } from "../auth0.config";
  import Login from "../Login.svelte";
</script>

<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  {#if $userSub}
    <span class="navbar-text d-none d-sm-block">{$userSub.name}</span>
    <img
      src={$userSub.picture}
      width="30"
      height="30"
      class="d-inline-block align-top"
      alt="" />
  {/if}
  <Login />
</nav>
