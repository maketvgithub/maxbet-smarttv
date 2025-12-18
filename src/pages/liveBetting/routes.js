import LiveBetting from './LiveBetting'
import LiveBetting2 from './LiveBetting2'
import LiveBetting3 from './LiveBetting3'
import { PageTransitions } from './transitions'

export const RouterHookRoutes = [
  {
    path: '/live-betting',
    component: LiveBetting,
    hooks: {
      async before(to, from) {
        if (from && (from.path === '/live-betting/2' || from.path === '/live-betting/3')) {
          to.transition = PageTransitions.slideInOutLeft
        }
        return to
      },
    },
  },
  {
    path: '/live-betting/2',
    component: LiveBetting2,
    hooks: {
      before(to, from) {
        if (from && (from.path === '/live-betting' || from.path === '/')) {
          to.transition = PageTransitions.slideInOutRight
        }
        if (from && from.path === '/live-betting/3') {
          to.transition = PageTransitions.slideInOutLeft
        }
        return to
      },
    },
  },
  {
    path: '/live-betting/3',
    component: LiveBetting3,
    hooks: {
      before(to, from) {
        if (from && from.path === '/live-betting/2') {
          to.transition = PageTransitions.slideInOutRight
        }
        if (from && (from.path === '/live-betting' || from.path === '/')) {
          to.transition = PageTransitions.slideInOutLeft
        }
        return to
      },
    },
  },
]
