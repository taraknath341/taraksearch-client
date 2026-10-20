<script>
   import Router from "svelte-spa-router";
   import Main from "./routes/Main.svelte";
   import Result from "./routes/Result.svelte";
   import Captcha from "./routes/Captcha.svelte";
</script>

<Router
   routes={{
      "/": Main,
      "/result": Result,
      "/captcha": Captcha,
   }}
/>
