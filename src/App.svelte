<script>
  import { Styles } from '@sveltestrap/sveltestrap';
  import Router from 'svelte-spa-router';
  import routes from './core/Routes';
  import Mainmenu from './components/Mainmenu.svelte';
  import Footer from './components/Footer.svelte';
</script>

<div class="container-fluid p-0 m-0"><Mainmenu /></div>
<div class="container mx-auto p-0 m-0">
  <div class="px-2 mt-3">
    <Router {routes} />
  </div>
</div>

<Footer />

<Styles />
