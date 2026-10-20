<script>
   // components
   import Header from "../components/result/Header.svelte";
   // state
   import statE from "../state.svelte.js";

   if (!statE.query) {
      location.href = "/#/";
   }
</script>

<Header bind:searchQuery={statE.query} />

<main class="list" style:zoom="110%">
   <div class="meta">
      Approximately
      {#key statE.query}
         {Math.floor(Math.random() * 2000 + 999)}
      {/key}
      results for “{statE.query}”
   </div>

   {#each statE.results as { title, link, snippet, position } (position)}
      <article class="r">
         <div class="u">{link}</div>
         <a class="t" href={link} target="_blank">{title}</a>
         <p>{snippet}</p>
      </article>
   {:else}
      <h2>Loading...</h2>
   {/each}

   <nav class="pg" aria-label="page">
      <a class={statE.page === 1 ? "on" : null} onclick={() => (statE.page = 1)}>1</a>
      <a class={statE.page === 2 ? "on" : null} onclick={() => (statE.page = 2)}>2</a>
      <a class={statE.page === 3 ? "on" : null} onclick={() => (statE.page = 3)}>3</a>
      <a class={statE.page === 4 ? "on" : null} onclick={() => (statE.page = 4)}>4</a>
      <a class={statE.page === 5 ? "on" : null} onclick={() => (statE.page = 5)}>5</a>
   </nav>
</main>
