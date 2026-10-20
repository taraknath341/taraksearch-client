<script>
   import Header from "../components/main/Header.svelte";
   import statE from "../state.svelte.js";
   statE.query = "";

   let captchaInput = $state("");
   let invalidCaptcha = $state(false);
   let imageUrl = $state("");

   fetch(`${import.meta.env.VITE_BACKEND_URL}/captcha`)
      .then((res) => {
         const jwtHeader = res.headers.get("Json-Web-Token");
         if (jwtHeader) localStorage.setItem("Json-Web-Token", jwtHeader);
         return res;
      })
      .then((res) => res.blob())
      .then((res) => URL.createObjectURL(res))
      .then((res) => (imageUrl = res))
      .catch((err) => alert(err));

   async function onsubmit(e) {
      e.preventDefault();
      invalidCaptcha = false;

      const verifyResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/captcha/verify`, {
         headers: {
            captcha: captchaInput,
            "Json-Web-Token": localStorage.getItem("Json-Web-Token"),
         },
      });
      if (verifyResponse.ok) {
         localStorage.setItem("Captcha", captchaInput);
         location.href = "/#/";
      } else {
         invalidCaptcha = true;
      }
   }
</script>

<Header />

<main class="home">
   <span class="logo"> Verify Captcha </span>
   <p class="tag">Are you a robot ?</p>
   <form class="box" {onsubmit}>
      <input type="text" bind:value={captchaInput} placeholder="Enter Your Captcha" autofocus required />
      {#if invalidCaptcha}
         <small style:color="orangered">Invalid <br /> Captcha</small>
      {/if}
      <button type="submit">Verify</button>
   </form>
   <hr />
   <img src={imageUrl} alt="captcha" />

   <p class="hint">© Tarak Program | Since 2025.</p>
</main>
