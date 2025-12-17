import Blits from '@lightningjs/blits'
import { format } from 'date-fns'

import GlowingCircle from '../components/GlowingCircle.js'

const markets = [
  {
    title: 'KONACAN ISHOD',
    items: [
      {},
      { label: '1', value: '1.35' },
      { label: 'X', value: '13.0' },
      { label: '2', value: '3.65' },
    ],
  },
  {
    title: 'UKUPNO POENA',
    items: [
      {},
      { label: 'MANJE', value: '1.87' },
      { label: 'GR', value: '226.5' },
      { label: 'VISE', value: '1.88' },
    ],
  },
  {
    title: 'HENDIKEP',
    items: [
      {},
      { label: '1', value: '1.90' },
      { label: 'GR', value: '-7.5' },
      { label: '2', value: '1.85' },
    ],
  },
  {
    title: 'ISHOD DRUGE CETVRTINE',
    items: [
      {},
      { label: '1', value: '1.60' },
      { label: 'X', value: '10.0' },
      { label: '2', value: '2.70' },
    ],
  },
  {
    title: 'UKUPNO POENA DRUGA CETVRTINA',
    items: [
      {},
      { label: 'MANJE', value: '1.93', color: '#e60011' },
      { label: 'GR', value: '62.5' },
      { label: 'VISE', value: '1.80', color: '#33d404' },
    ],
  },
]

const margetsRight = [
  {
    title: 'DRUGA CETVRTINA HENDIKEP',
    items: [
      {},
      { label: '1', value: '1.80' },
      { label: 'GR', value: '-1.5' },
      { label: '2', value: '1.92' },
    ],
  },
  {
    title: 'PRVO POLUVREME',
    items: [
      {},
      { label: '1', value: '1.10' },
      { label: 'X', value: '15.0' },
      { label: '2', value: '9.00' },
    ],
  },
  {
    title: 'UKUPNO POENA PRVO POLUVREME',
    items: [
      {},
      { label: 'MANJE', value: '1.72', color: '#e60011' },
      { label: 'GR', value: '121.5' },
      { label: 'VISE', value: '2.00', color: '#33d404' },
    ],
  },
  {
    title: 'PRVO POLUVREME HENDIKEP',
    items: [
      {},
      { label: '1', value: '1.80' },
      { label: 'GR', value: '-7.5' },
      { label: '2', value: '1.93' },
    ],
  },
  {
    title: 'KONACAN ISHOD SA PRODUZECIMA',
    items: [
      {},
      { label: '1', value: '1.30' },
      { label: '', value: '' },
      { label: '2', value: '3.55' },
    ],
  },
]

export default Blits.Component('Page5', {
  components: {
    GlowingCircle,
  },
  template: `
    <Element color="#151515" w="1920" h="1080">
      <Text content="KLADJENJE UZIVO" size="45" :x="1920/2" y="30" mount="0.5" />
    
      <Text content="PROF-TV-4" size="28" x="1681" y="12" />
    
      <Text :content="$formattedTime" size="28" x="1832" y="12" />
    
      <Element src="./assets/logo.png" w="217.7" h="45" x="28" y="5" />
    
      <Text x="280" content="1/3" y="15" size="24" />
    
      <Element w="218" h="21" x="320" y="16" color="#202F25">
        <Layout direction="horiznotal" y="5" x="9">
          <Element w="20" h="13" :effects="[{type: 'border', props: {width: 1, color: 'black'}}]">
            <Element w="18" x="1" h="6" y="1" color="{top: '#1C461C', bottom: '#31E331'}" />
            <Element w="18" x="1" h="6" y="6" color="{top: '#31E331', bottom: '#1C461C'}" />
          </Element>
          <Element w="20" h="13" :effects="[{type: 'border', props: {width: 1, color: 'black'}}]">
            <Element w="18" x="1" h="6" y="1" color="{top: '#1C461C', bottom: '#31E331'}" />
            <Element w="18" x="1" h="6" y="6" color="{top: '#31E331', bottom: '#1C461C'}" />
          </Element>
          <Element w="20" h="13" :effects="[{type: 'border', props: {width: 1, color: 'black'}}]">
            <Element w="18" x="1" h="6" y="1" color="{top: '#1C461C', bottom: '#31E331'}" />
            <Element w="18" x="1" h="6" y="6" color="{top: '#31E331', bottom: '#1C461C'}" />
          </Element>
          <Element w="20" h="13" :effects="[{type: 'border', props: {width: 1, color: 'black'}}]">
            <Element w="18" x="1" h="6" y="1" color="{top: '#1E2B1E', bottom: '#385538'}" />
            <Element w="18" x="1" h="6" y="6" color="{top: '#385538', bottom: '#1E2B1E'}" />
          </Element>
          <Element w="20" h="13" :effects="[{type: 'border', props: {width: 1, color: 'black'}}]">
            <Element w="18" x="1" h="6" y="1" color="{top: '#1E2B1E', bottom: '#385538'}" />
            <Element w="18" x="1" h="6" y="6" color="{top: '#385538', bottom: '#1E2B1E'}" />
          </Element>
          <Element w="20" h="13" :effects="[{type: 'border', props: {width: 1, color: 'black'}}]">
            <Element w="18" x="1" h="6" y="1" color="{top: '#1E2B1E', bottom: '#385538'}" />
            <Element w="18" x="1" h="6" y="6" color="{top: '#385538', bottom: '#1E2B1E'}" />
          </Element>
          <Element w="20" h="13" :effects="[{type: 'border', props: {width: 1, color: 'black'}}]">
            <Element w="18" x="1" h="6" y="1" color="{top: '#1E2B1E', bottom: '#385538'}" />
            <Element w="18" x="1" h="6" y="6" color="{top: '#385538', bottom: '#1E2B1E'}" />
          </Element>
          <Element w="20" h="13" :effects="[{type: 'border', props: {width: 1, color: 'black'}}]">
            <Element w="18" x="1" h="6" y="1" color="{top: '#1E2B1E', bottom: '#385538'}" />
            <Element w="18" x="1" h="6" y="6" color="{top: '#385538', bottom: '#1E2B1E'}" />
          </Element>
          <Element w="20" h="13" :effects="[{type: 'border', props: {width: 1, color: 'black'}}]">
            <Element w="18" x="1" h="6" y="1" color="{top: '#1E2B1E', bottom: '#385538'}" />
            <Element w="18" x="1" h="6" y="6" color="{top: '#385538', bottom: '#1E2B1E'}" />
          </Element>
          <Element w="20" h="13" :effects="[{type: 'border', props: {width: 1, color: 'black'}}]">
            <Element w="18" x="1" h="6" y="1" color="{top: '#1E2B1E', bottom: '#385538'}" />
            <Element w="18" x="1" h="6" y="6" color="{top: '#385538', bottom: '#1E2B1E'}" />
          </Element>
        </Layout>
      </Element>
    
      <Element
        color="#91301D"
        x="22"
        y="53"
        w="1885"
        h="348"
        :effects="[{type: 'border', props:{ width: 8, color: '#BC3B1E'}}]"
      >
        <Text content="RB:  3591" color="#FFF602" size="66" x="20" y="10" />
    
        <Text content="KOSARKA" size="45" :x="1885/2" y="50" mount="0.5" />
    
        <Layout y="10" x="1680" gap="15" direction="horiznotal">
          <Element w="0.5">
            <GlowingCircle y="35" size="16" color="#34d704" />
          </Element>
          <Text content="2Q 6:19" size="66" />
        </Layout>
    
        <Text content="LA CLIPPERS" size="69" x="540" y="116" />
    
        <Element w="94" h="100" x="840" y="102" color="#3D3D3D">
          <Text content="50" color="#FFF602" size="80" :x="94/2" y="55" mount="0.5" />
        </Element>
    
        <Text content=":" size="65" x="935" y="116" />
    
        <Element w="94" h="100" x="951" y="102" color="#3D3D3D">
          <Text content="41" color="#FFF602" size="80" :x="94/2" y="55" mount="0.5" />
        </Element>
    
        <Text content="I" x="717" y="209" size="25" />
    
        <Element w="59" h="66" x="653" y="237" color="#3D3D3D">
          <Text content="32" size="55" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Text content=":" x="714" y="238" size="55" />
    
        <Element w="59" h="66" x="727" y="237" color="#3D3D3D">
          <Text content="26" size="55" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Element w="5" h="60" x="792" y="240" color="#BC3B1E" />
    
        <Text content="II" x="867" y="209" size="25" />
    
        <Element w="59" h="66" x="803" y="237" color="#3D3D3D">
          <Text content="18" color="#FFF602" size="55" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Text content=":" x="864" y="238" size="55" />
    
        <Element w="59" h="66" x="877" y="237" color="#3D3D3D">
          <Text content="15" color="#FFF602" size="55" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Element w="5" h="60" x="940" y="240" color="#BC3B1E" />
    
        <Text content="III" x="1011" y="209" size="25" />
    
        <Element w="59" h="66" x="949" y="237" color="#3D3D3D">
          <Text content="-" size="55" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Text content=":" x="1011" y="238" size="55" />
    
        <Element w="59" h="66" x="1023" y="237" color="#3D3D3D">
          <Text content="-" size="55" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Element w="5" h="60" x="1088" y="240" color="#BC3B1E" />
    
        <Text content="IV" x="1161" y="209" size="25" />
    
        <Element w="59" h="66" x="1099" y="237" color="#3D3D3D">
          <Text content="-" size="55" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Text content=":" x="1161" y="238" size="55" />
    
        <Element w="59" h="66" x="1173" y="237" color="#3D3D3D">
          <Text content="-" size="55" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Text content="LOS ANGELES LAKERS" size="69" x="1090" y="116" />
      </Element>
    
      <Layout direction="vertical" y="402" x="22">
        <Element
          h="76"
          w="934"
          :effects="[{type: 'borderBottom', props: {width: 2, color: '#BC3B1E'}}]"
          :for="(item, index) in $markets"
        >
          <Layout direction="horizontal">
            <Text :content="$item.title" color="#BBB6AF" maxwidth="567" align="center" size="38" mount="{y: -0.4}" />
            <Element
              :effects="[{type: 'borderLeft', props: {width: $item.items[0].label ? 2 : 0, color: '#343434'}}]"
              w="78"
              h="74"
            >
              <Element :show="!!$item.items[0].label" color="#262626" h="28" w="78">
                <Text
                  :content="$item.items[0].label"
                  color="#B5B7B5"
                  maxwidth="78"
                  align="center"
                  size="18"
                  :y="28/2"
                  mount="{y: 0.5}"
                />
              </Element>
              <Element
                :show="!!$item.items[0].value"
                :effects="[{type: 'borderTop', props: {width: 1, color: 'black'}}]"
                x="1"
                y="29"
                w="78"
                h="46"
              >
                <Text
                  :content="$item.items[0].value"
                  size="40"
                  maxwidth="78"
                  align="center"
                  :color="$item.items[0].color ? $item.items[0].color : $item.items[0].label === 'GR' ? 'yellow': 'white'"
                />
              </Element>
            </Element>
            <Element :effects="[{type: 'borderLeft', props: {width: 2, color: '#343434'}}]" w="78" h="74">
              <Element color="#262626" h="28" w="78">
                <Text
                  :content="$item.items[1].label"
                  color="#B5B7B5"
                  maxwidth="78"
                  align="center"
                  size="18"
                  :y="28/2"
                  mount="{y: 0.5}"
                />
              </Element>
              <Element :effects="[{type: 'borderTop', props: {width: 1, color: 'black'}}]" x="1" y="29" w="78" h="46">
                <Text
                  :content="$item.items[1].value"
                  :color="$item.items[1].color ? $item.items[1].color : $item.items[1].label === 'GR' ? 'yellow': 'white'"
                  size="40"
                  maxwidth="78"
                  align="center"
                />
              </Element>
            </Element>
            <Element :effects="[{type: 'borderLeft', props: {width: 2, color: '#343434'}}]" w="78" h="74">
              <Element color="#262626" h="28" w="78">
                <Text
                  :content="$item.items[2].label"
                  color="#B5B7B5"
                  maxwidth="78"
                  align="center"
                  size="18"
                  :y="28/2"
                  mount="{y: 0.5}"
                />
              </Element>
              <Element :effects="[{type: 'borderTop', props: {width: 1, color: 'black'}}]" x="1" y="29" w="78" h="46">
                <Text
                  :content="$item.items[2].value"
                  :color="$item.items[2].color ? $item.items[2].color : $item.items[2].label === 'GR' ? 'yellow': 'white'"
                  size="40"
                  maxwidth="78"
                  align="center"
                />
              </Element>
            </Element>
            <Element :effects="[{type: 'borderLeft', props: {width: 2, color: '#343434'}}]" w="78" h="74">
              <Element color="#262626" h="28" w="78">
                <Text
                  :content="$item.items[3].label"
                  color="#B5B7B5"
                  maxwidth="78"
                  align="center"
                  size="18"
                  :y="28/2"
                  mount="{y: 0.5}"
                />
              </Element>
              <Element :effects="[{type: 'borderTop', props: {width: 1, color: 'black'}}]" x="1" y="29" w="78" h="46">
                <Text
                  :content="$item.items[3].value"
                  :color="$item.items[3].color ? $item.items[1].color : $item.items[3].label === 'GR' ? 'yellow': 'white'"
                  size="40"
                  maxwidth="78"
                  align="center"
                />
              </Element>
            </Element>
          </Layout>
        </Element>
      </Layout>
    
      <Layout direction="vertical" y="402" :x="1885/2 + 30">
        <Element
          h="76"
          w="934"
          :effects="[{type: 'borderBottom', props: {width: 2, color: '#BC3B1E'}}]"
          :for="(item, index) in $margetsRight"
        >
          <Layout direction="horizontal">
            <Text :content="$item.title" color="#BBB6AF" maxwidth="567" align="center" size="38" mount="{y: -0.4}" />
            <Element
              :effects="[{type: 'borderLeft', props: {width: $item.items[0].label ? 2 : 0, color: '#343434'}}]"
              w="78"
              h="74"
            >
              <Element :show="!!$item.items[0].label" color="#262626" h="28" w="78">
                <Text
                  :content="$item.items[0].label"
                  color="#B5B7B5"
                  maxwidth="78"
                  align="center"
                  size="18"
                  :y="28/2"
                  mount="{y: 0.5}"
                />
              </Element>
              <Element
                :show="!!$item.items[0].value"
                :effects="[{type: 'borderTop', props: {width: 1, color: 'black'}}]"
                x="1"
                y="29"
                w="78"
                h="46"
              >
                <Text
                  :content="$item.items[0].value"
                  size="40"
                  maxwidth="78"
                  align="center"
                  :color="$item.items[0].color ? $item.items[0].color : $item.items[0].label === 'GR' ? 'yellow': 'white'"
                />
              </Element>
            </Element>
            <Element :effects="[{type: 'borderLeft', props: {width: 2, color: '#343434'}}]" w="78" h="74">
              <Element color="#262626" h="28" w="78">
                <Text
                  :content="$item.items[1].label"
                  color="#B5B7B5"
                  maxwidth="78"
                  align="center"
                  size="18"
                  :y="28/2"
                  mount="{y: 0.5}"
                />
              </Element>
              <Element :effects="[{type: 'borderTop', props: {width: 1, color: 'black'}}]" x="1" y="29" w="78" h="46">
                <Text
                  :content="$item.items[1].value"
                  :color="$item.items[1].color ? $item.items[1].color : $item.items[1].label === 'GR' ? 'yellow': 'white'"
                  size="40"
                  maxwidth="78"
                  align="center"
                />
              </Element>
            </Element>
            <Element :effects="[{type: 'borderLeft', props: {width: 2, color: '#343434'}}]" w="78" h="74">
              <Element color="#262626" h="28" w="78">
                <Text
                  :content="$item.items[2].label"
                  color="#B5B7B5"
                  maxwidth="78"
                  align="center"
                  size="18"
                  :y="28/2"
                  mount="{y: 0.5}"
                />
              </Element>
              <Element :effects="[{type: 'borderTop', props: {width: 1, color: 'black'}}]" x="1" y="29" w="78" h="46">
                <Text
                  :content="$item.items[2].value"
                  :color="$item.items[2].color ? $item.items[2].color : $item.items[2].label === 'GR' ? 'yellow': 'white'"
                  size="40"
                  maxwidth="78"
                  align="center"
                />
              </Element>
            </Element>
            <Element :effects="[{type: 'borderLeft', props: {width: 2, color: '#343434'}}]" w="78" h="74">
              <Element color="#262626" h="28" w="78">
                <Text
                  :content="$item.items[3].label"
                  color="#B5B7B5"
                  maxwidth="78"
                  align="center"
                  size="18"
                  :y="28/2"
                  mount="{y: 0.5}"
                />
              </Element>
              <Element :effects="[{type: 'borderTop', props: {width: 1, color: 'black'}}]" x="1" y="29" w="78" h="46">
                <Text
                  :content="$item.items[3].value"
                  :color="$item.items[3].color ? $item.items[3].color : $item.items[3].label === 'GR' ? 'yellow': 'white'"
                  size="40"
                  maxwidth="78"
                  align="center"
                />
              </Element>
            </Element>
          </Layout>
        </Element>
      </Layout>
    
      <Element
        x="20"
        y="1030"
        :w="1920 - 15 * 2"
        h="35"
        color="{right: 'black', bottom: '#343434'}"
        :effects="[{type: 'borderTop', props: {width: 3, color: '#343434'}}]"
      >
        <Layout x="20" y="5" gap="25" direction="horiznotal">
          <Layout y="1029" gap="10" direction="horiznotal">
            <Element w="0.5">
              <GlowingCircle size="10" color="#34d404" y="12" />
            </Element>
            <Text content="26015" color="yellow" size="25" y="6" />
            <Text content="MONTERRY WOM. - PUEBLA WOM." size="25" y="6" />
            <Text content="5:1" color="yellow" size="25" y="6" />
          </Layout>
          <Layout y="1029" gap="10" direction="horiznotal">
            <Element w="0.5">
              <GlowingCircle size="10" color="#34d404" y="12" />
            </Element>
            <Text content="26015" color="yellow" size="25" y="6" />
            <Text content="MONTERRY WOM. - PUEBLA WOM." size="25" y="6" />
            <Text content="4:1" color="yellow" size="25" y="6" />
          </Layout>
          <Layout gap="10" direction="horiznotal">
            <Element w="0.5">
              <GlowingCircle size="10" color="#e60012" y="12" />
            </Element>
            <Text content="26143" color="yellow" size="25" y="6" />
            <Text content="PALMEIRAS U20 - GREMIO U20" size="25" y="6" />
            <Text content="2:3" color="yellow" size="25" y="6" />
          </Layout>
        </Layout>
      </Element>
    </Element>
  `,
  state() {
    const now = new Date()
    return {
      markets: markets,
      margetsRight: margetsRight,
      formattedTime: format(now, 'HH:mm'),
    }
  },
  hooks: {
    ready() {
      this._interval = setInterval(() => {
        const now = new Date()
        this.formattedTime = format(now, 'HH:mm')
      }, 1000)
    },
  },

  input: {
    up() {
      this.$router.to('/6')
    },
    down() {
      this.$router.to('/4')
    },
  },
})
