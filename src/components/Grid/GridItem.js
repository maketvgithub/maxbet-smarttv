import Blits from '@lightningjs/blits'

export default Blits.Component('GridItem', {
  template: `

  <Element :scale.transition="$scaleValue"> 
    <Element  w="300" h="2" x="0" y="1" color="#434343" />
    <Element  w="300" h="14" x="0" y="4" color="#070707" />
    <Element  w="320" h="45" x="-10" y="16" :color.transition="$color" />
    <Text x="32" :content="$item.sport" y="25" size="26" />
    <Text x="232" :content="$item.time" y="25" size="26" />
    <Layout direction="horiznotal" x="0" y="62" z="1">
      <Element w="150" h="3" color="{left: 'black', right: 'white'}" />
      <Element w="150" x="150" h="3"  color="{left: 'white', right: 'black'}" />
    </Layout>
    <Element w="300" h="120" x="0" y="62" color="#1b1b1b" z="0"/>
    <Text x="26" :content="$item.homeTeam" y="80" size="32" />
    <Text x="26" :content="$item.awayTeam" y="125" size="32" />
    <Element w="2" h="120" x="0" y="61" :color.transition="$color" z="3" />
    <Element w="2" h="120" x="298" y="61" :color.transition="$color" z="3" />
    <Element w="300" h="2" x="0" y="179" :color.transition="$color" z="3" /> 
  </Element> 

  `,
  props: ['item', 'selected', 'focused'],
  state() {
    return {
      scale: 1,
      truncate: (team) => this.truncatedTeam(team),
      color: '#1c7700',
    }
  },
  hooks: {
    ready() {
      this.color = this.focused ? '#ed1c24' : '#1c7700'
    },
  },
  computed: {
    scaleValue() {
      return this.focused ? 1.06 : this.selected ? 1.08 : 1
    },
  },
  watch: {
    focused(value) {
      console.log(value)

      if (value) {
        this.color = '#ed1c24'
      } else {
        this.color = '#1c7700'
      }
    },
  },
})
