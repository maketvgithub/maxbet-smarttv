import Blits from '@lightningjs/blits'

import Loader from '../components/Loader.js'

export default Blits.Component('Home', {
  components: {
    Loader,
  },
  template: `
    <Element src="./assets/6.png" w="1920" h="1080"> </Element>
  `,
  state() {
    return {}
  },
  hooks: {
    ready() {},
  },
  methods: {},
  input: {
    up() {
      this.$router.to('/')
    },
    down() {
      this.$router.to('/5')
    },
  },
})
