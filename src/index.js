import Blits from '@lightningjs/blits'
import App from './App.js'

Blits.Launch(App, 'app', {
  w: 1920,
  h: 1080,
  debugLevel: 1,
  defaultFont: 'bebas',
  fonts: [
    {
      family: 'bebas',
      type: 'msdf',
      file: 'fonts/BebasNeue-Regular.ttf',
    },
    { family: 'opensans', type: 'web', file: 'fonts/OpenSans-Medium.ttf' },
    {
      family: 'mediaFontMain',
      type: 'web',
      file: 'fonts/Lato-Regular.ttf',
    },
    {
      family: 'Helvetica Neue Condensed',
      type: 'web',
      file: 'fonts/Lato-Regular.ttf',
    },
    {
      family: 'Arial Narrow',
      type: 'web',
      file: 'fonts/Lato-Regular.ttf',
    },
    {
      family: 'raleway-bold',
      type: 'web',
      file: 'fonts/Raleway-ExtraBold.ttf',
    },
  ],
  keymap: {
    461: 'back',
    10009: 'back',
    427: 'up',
    428: 'down',
    33: 'up',
    34: 'down',
    48: 0,
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9,
  },
})
