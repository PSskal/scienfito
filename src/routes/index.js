import Header from '../template/Headers';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  console.log(content);

  header.innerHTML = await Header();
  let hash = getHash();
  console.log(hash);
  let route = await resolveRoutes(hash);
  console.log(route);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;