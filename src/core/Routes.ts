import Index from '../views/Index.svelte';
import NotFound from '../views/NotFound.svelte';

const routes = {
  '/': Index,
  '*': NotFound,
};

export default routes;
