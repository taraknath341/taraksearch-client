let _results = $state.raw([]);

let _query = $state("");
let _page = $state(1);

function fetchData() {
   _results = [];
   // localstorage check
   if (!localStorage.getItem("Json-Web-Token") || !localStorage.getItem("Captcha")) location.href = "/#/captcha";
   // request server
   fetch(`${import.meta.env.VITE_BACKEND_URL}/search?q=${_query}&page=${_page}`, {
      headers: {
         "Json-Web-Token": localStorage.getItem("Json-Web-Token"),
         Captcha: localStorage.getItem("Captcha"),
      },
   })
      .then((res) => {
         if (res.status == 400) {
            location.href = "/#/captcha";
            throw new Error("State Code 400");
         }
         return res;
      })
      .then((res) => res.json())
      .then((res) => (_results = res))
      .catch((err) => console.log("-api-error", err.message));
}

export default {
   get results() {
      return _results;
   },

   set query(v) {
      _query = v;
      fetchData();
   },
   get query() {
      return _query;
   },

   set page(v) {
      _page = v;
      fetchData();
   },
   get page() {
      return _page;
   },
};
