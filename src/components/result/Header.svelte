<script>
   import Menu from "../common/Menu.svelte";
   let { searchQuery = $bindable() } = $props();

   let searchInput = $state(searchQuery);

   function onsubmit(e) {
      e.preventDefault();
      searchQuery = searchInput;
   }
</script>

<header class="bar">
   <img src="https://taraknath341.codeberg.page/client_storage/logo.svg" alt="logo" height="45px" />
   <a class="logo" href="/#/"> Tarak Search </a>
   <form class="box" {onsubmit}>
      <input type="search" name="q" bind:value={searchInput} required />
      <button type="submit">Search</button>
   </form>
   <Menu />
</header>
