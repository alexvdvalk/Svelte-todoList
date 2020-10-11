<script>
  import { performLogin, userSub, logout } from "./auth0.config";
</script>

{#if !$userSub}
  <button
    type="button"
    class="btn btn-primary"
    on:click={performLogin}>Login</button>
{/if}
{#if $userSub}
  <button type="button" class="btn btn-primary" on:click={logout}>
    Log out
  </button>
{/if}
