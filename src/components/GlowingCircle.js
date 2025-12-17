import Blits from '@lightningjs/blits'

export default Blits.Component('GlowingCircle', {
  template: `
    <Element>
      <Element
        :w="$size * 1.5"
        :h="$size * 1.5"
        color="$color"
        :scale.transition="$circleAlpha * 2"
        :alpha.transition="$circleAlpha"
        mount="0.5"
        :effects="[{ type: 'radius', props: { radius: $size } }]"
      />
      <Element
        :w="$size * 1.5"
        :h="$size * 1.5"
        color="$color"
        :scale.transition="$circleAlpha * 1.75"
        :alpha.transition="$circleAlpha"
        mount="0.5"
        :effects="[{ type: 'radius', props: { radius: $size } }]"
      />
      <Element
        :w="$size * 1.5"
        :h="$size * 1.5"
        color="$color"
        :scale.transition="$circleAlpha * 1.5"
        :alpha.transition="$circleAlpha"
        mount="0.5"
        :effects="[{ type: 'radius', props: { radius: $size } }]"
      />
      <Element
        :w="$size"
        :h="$size"
        color="$color"
        mount="0.5"
        :effects="[{ type: 'radius', props: { radius: $size * 2 } }]"
      />
    </Element>
  `,

  props: ['size', 'color'],

  state() {
    return {
      circleAlpha: 0.5,
      alphaDirection: -1,
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        const step = 0.01

        this.circleAlpha += step * this.alphaDirection

        if (this.circleAlpha <= 0.1) {
          this.circleAlpha = 0.1
          this.alphaDirection = 1
        }

        if (this.circleAlpha >= 0.8) {
          this.circleAlpha = 0.8
          this.alphaDirection = -1
        }
      }, 10)
    },
  },
})
