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
})
