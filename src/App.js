import Blits from '@lightningjs/blits'

import Home from './pages/Home.js'
import Page1 from './pages/Page1.js'
import Page2 from './pages/Page2.js'
import Page3 from './pages/Page3.js'
import Page4 from './pages/Page4.js'
import Page5 from './pages/Page5.js'
import Schedules from './pages/Schedules/Schedules.js'

import LiveBetting from './pages/liveBetting/LiveBetting.js'
import { RouterHookRoutes } from './pages/liveBetting/routes.js'

export default Blits.Application({
  template: `
    <Element>
      <RouterView />
    </Element>
  `,
  routes: [
    { path: '/', component: Home, options: { keepAlive: true } },
    { path: '/1', component: LiveBetting },
    ...RouterHookRoutes,
    { path: '/2', component: LiveBetting },
    { path: '/3', component: Page3 },
    { path: '/4', component: Page4 },
    { path: '/5', component: Page5 },
    { path: '/6', component: Schedules },
  ],
})
