import ClickerHeroes2Layout from '@/layouts/clicker-heroes-2-layout';
import ClickerHeroes2Page from '@/pages/clicker-heroes-2-page';
import ClickerHeroes2ModsPage from '@/pages/clicker-heroes-2-mods-page';
import ClickerHeroes2FrequentRubyShopModPage from '@/pages/clicker-heroes-2-frequent-ruby-shop-mod-page';

export default [
  {
    path: 'clicker-heroes-2',
    component: ClickerHeroes2Layout,
    children: [
      {
        path: '',
        component: ClickerHeroes2Page
      },
      {
        path: 'mods',
        component: ClickerHeroes2ModsPage
      },
      {
        path: 'mods/frequent-ruby-shop',
        component: ClickerHeroes2FrequentRubyShopModPage
      }
    ]
  }
];
