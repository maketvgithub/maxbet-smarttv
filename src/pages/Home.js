import Blits from '@lightningjs/blits'

import Loader from '../components/Loader.js'

export default Blits.Component('Home', {
  components: {
    Loader,
  },
  template: `
    <Element w="1920" h="1080" color="#151515">
      <Element src="./assets/logo.png" :x="(1920 - 653) / 2" y="20" />
      <Layout direction="vertical" y="225" x="25" gap="100">
        <Layout direction="horiznotal" y="25" x="25" gap="100">
          <Element :scale.transition="$focused === 1 ? 1.025 : 1" color="white" :w="1920 / 3.5" :h="1080 / 3.5" />
          <Element :scale.transition="$focused === 2 ? 1.025 : 1" color="white" :w="1920 / 3.5" :h="1080 / 3.5" />
          <Element :scale.transition="$focused === 3 ? 1.025 : 1" color="white" :w="1920 / 3.5" :h="1080 / 3.5" />
        </Layout>
        <Layout direction="horiznotal" y="25" x="25" gap="100">
          <Element :scale.transition="$focused === 4 ? 1.025 : 1" color="white" :w="1920 / 3.5" :h="1080 / 3.5" />
          <Element :scale.transition="$focused === 5 ? 1.025 : 1" color="white" :w="1920 / 3.5" :h="1080 / 3.5" />
          <Element :scale.transition="$focused === 6 ? 1.025 : 1" color="white" :w="1920 / 3.5" :h="1080 / 3.5" />
        </Layout>
      </Layout>
      <Layout direction="vertical" y="225" x="25" gap="100">
        <Layout direction="horiznotal" y="25" x="25" gap="100">
          <Element src="./assets/1.png" ref="1" :w="1920 / 3.5" :h="1080 / 3.5" />
          <Element src="./assets/2.png" ref="2" :w="1920 / 3.5" :h="1080 / 3.5" />
          <Element src="./assets/3.png" ref="3" :w="1920 / 3.5" :h="1080 / 3.5" />
        </Layout>
        <Layout direction="horiznotal" y="25" x="25" gap="100">
          <Element src="./assets/4.png" ref="4" :w="1920 / 3.5" :h="1080 / 3.5" />
          <Element src="./assets/5.png" ref="5" :w="1920 / 3.5" :h="1080 / 3.5" />
          <Element src="./assets/6.png" ref="6" :w="1920 / 3.5" :h="1080 / 3.5" />
        </Layout>
      </Layout>
    </Element>
  `,
  state() {
    return {
      focused: 1,
    }
  },
  hooks: {
    focus() {
      this.$trigger('focused')
    },
  },
  watch: {
    focused(value) {
      const focused = this.$select(value)
      if (focused && focused.$focus) focused.$focus()
    },
  },
  input: {
    right() {
      this.focused = Math.min(this.focused + 1, 6)
    },
    left() {
      const v = this.focused - 1
      if (v === 0) {
        const menu = this.$select('menu')
        if (menu && menu.$focus) menu.$focus()
      } else {
        this.focused = Math.max(v, 1)
      }
    },
    up() {
      if (this.focused > 3) {
        this.focused = this.focused - 3
      }
    },
    down() {
      if (this.focused <= 3) {
        this.focused = this.focused + 3
      }
    },
    enter() {
      this.$router.to(`/${this.focused}`)
    },
  },
})
