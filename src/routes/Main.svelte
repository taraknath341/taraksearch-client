<script>
   import Header from "../components/main/Header.svelte";
   import statE from "../state.svelte.js";

   let searchInput = $state("");

   function onsubmit(e) {
      e.preventDefault();
      statE.query = searchInput;
      location.href = "/#/result";
   }
</script>

<Header />

<main class="home">
   <span class="logo"> Tarak Search </span>
   <p class="tag">Search for whatever you like on the web.</p>
   <form class="box" {onsubmit}>
      <input type="search" bind:value={searchInput} placeholder="Type here to search" autofocus required />
      <button type="submit">Search</button>
   </form>
   <p class="hint">© Tarak Program | Since 2025.</p>
</main>
