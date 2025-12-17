import Blits from '@lightningjs/blits'
import { format } from 'date-fns'

import GlowingCircle from '../components/GlowingCircle.js'

const markets = [
  {
    title: 'KONACAN ISHOD',
    items: [
      {},
      { label: '1', value: '1.37' },
      { label: 'X', value: '4.20' },
      { label: '2', value: '9.30' },
    ],
  },
  {
    title: 'HENDIKEP',
    items: [
      { label: 'GR', value: '-1' },
      { label: '1', value: '2.85' },
      { label: 'X', value: '2.60' },
      { label: '2', value: '2.85' },
    ],
  },
  {
    title: 'OSTATAK MECA',
    items: [
      { label: 'GR', value: '1-0' },
      { label: '1', value: '2.85' },
      { label: 'X', value: '2.60' },
      { label: '2', value: '2.85' },
    ],
  },
  {
    title: 'SLJEDECI GOL',
    items: [
      { label: 'GR', value: '2' },
      { label: '1', value: '2.25' },
      { label: 'X', value: '4.00' },
      { label: '2', value: '2.45' },
    ],
  },
  {
    title: 'UKUPNO GOLOVA',
    items: [
      {},
      { label: 'MANJE', value: '4.00' },
      { label: 'GR', value: '1.5' },
      { label: 'VISE', value: '1.20' },
    ],
  },
  {
    title: 'UKUPNO GOLOVA DOMACIN',
    items: [
      {},
      { label: 'MANJE', value: '2.03' },
      { label: 'GR', value: '1.5' },
      { label: 'VISE', value: '1.70' },
    ],
  },
]

const margetsRight = [
  {
    title: 'UKUPNO GOLOVA GOST',
    items: [
      {},
      { label: 'MANJE', value: '1.92' },
      { label: 'GR', value: '0.5' },
      { label: 'VISE', value: '1.80' },
    ],
  },
  {
    title: 'DUPLA SANSA',
    items: [
      {},
      { label: '1X', value: '1.04' },
      { label: '12', value: '1.20' },
      { label: 'X2', value: '2.85' },
    ],
  },
  {
    title: 'WINNER',
    items: [
      {},
      { label: '1', value: '1.06' },
      { label: '', value: '' },
      { label: '2', value: '6.80' },
    ],
  },
  {
    title: 'GG - NG',
    items: [
      {},
      { label: 'NG', value: '1.92' },
      { label: '', value: '' },
      { label: 'GG', value: '1.80' },
    ],
  },
  {
    title: 'GG3+ NE/DA',
    items: [
      {},
      { label: 'NE', value: '1.45' },
      { label: '', value: '' },
      { label: 'DA', value: '2.55' },
    ],
  },
  {
    title: 'UKUPNO KORNERA',
    items: [
      {},
      { label: 'MANJE', value: '1.82' },
      { label: 'GR', value: '10.5' },
      { label: 'VISE', value: '1.90' },
    ],
  },
]

// color=""
// color="#151515"
export default Blits.Component('Home', {
  components: {
    GlowingCircle,
  },
  template: `
    <Element color="#151515" w="1920" h="1080">
      <Text content="KLADJENJE UZIVO" size="45" :x="1920/2" y="30" mount="0.5" />
    
      <Text content="PROF-TV-3" size="28" x="1681" y="12" />
    
      <Text :content="$formattedTime" size="28" x="1832" y="12" />
    
      <Element src="./assets/logo.png" w="217.7" h="45" x="28" y="5" />
    
      <Text x="280" content="2/3" y="15" size="24" />
    
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
        color="#085F00"
        x="22"
        y="53"
        w="1885"
        h="348"
        :effects="[{type: 'border', props:{ width: 8, color: '#1C7700'}}]"
      >
        <Text content="RB:  5228" color="#FFF602" size="66" x="20" y="10" />
    
        <Element :x="1885/2 - 308" w="150" h="40" y="45" mount="0.5">
          <Element color="red" w="15" h="25" y="8" :effects="[{ type: 'radius', props: { radius: 5 } }]" />
          <Text content="0" size="22" x="25" y="10" />
          <Element color="yellow" w="15" h="25" y="8" x="46" :effects="[{ type: 'radius', props: { radius: 5 } }]" />
          <Text content="0" size="22" x="72" y="10" />
          <Text content="1" size="22" x="128" y="10" />
        </Element>
    
        <Text content="FUDBAL" size="45" :x="1885/2" y="50" mount="0.5" />
    
        <Element :x="1885/2 + 316" w="150" h="40" y="45" mount="0.5">
          <Element color="red" w="15" h="25" y="8" :effects="[{ type: 'radius', props: { radius: 5 } }]" />
          <Text content="0" size="22" x="25" y="10" />
          <Element color="yellow" w="15" h="25" y="8" x="46" :effects="[{ type: 'radius', props: { radius: 5 } }]" />
          <Text content="3" size="22" x="72" y="10" />
          <Text content="5" size="22" x="128" y="10" />
        </Element>
    
        <GlowingCircle x="1780" y="42" size="16" color="yellow" />
    
        <Text content="HT" size="66" x="1800" y="10" />
    
        <Text content="VOJVODINA" size="69" x="570" y="116" />
    
        <Element w="94" h="100" x="840" y="102" color="#3D3D3D">
          <Text content="1" color="#FFF602" size="80" :x="94/2" y="55" mount="0.5" />
        </Element>
    
        <Text content=":" size="65" x="935" y="116" />
    
        <Element w="94" h="100" x="951" y="102" color="#3D3D3D">
          <Text content="0" color="#FFF602" size="80" :x="94/2" y="55" mount="0.5" />
        </Element>
    
        <Text content="I" x="867" y="209" size="25" />
    
        <Element w="59" h="66" x="803" y="237" color="#3D3D3D">
          <Text content="1" color="#FFF602" size="66" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Text content=":" x="864" y="238" size="55" />
    
        <Element w="59" h="66" x="877" y="237" color="#3D3D3D">
          <Text content="0" color="#FFF602" size="66" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Element w="5" h="60" x="940" y="240" color="#1C7700" />
    
        <Text content="II" x="1011" y="209" size="25" />
    
        <Element w="59" h="66" x="949" y="237" color="#3D3D3D">
          <Text content="-" size="66" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Text content=":" x="1011" y="238" size="55" />
    
        <Element w="59" h="66" x="1023" y="237" color="#3D3D3D">
          <Text content="-" size="66" :x="59/2" y="40" mount="0.5" />
        </Element>
    
        <Text content="TSC" size="69" x="1090" y="116" />
      </Element>
    
      <Layout direction="vertical" y="402" x="22">
        <Element
          h="76"
          w="934"
          :effects="[{type: 'borderBottom', props: {width: 2, color: '#1C7700'}}]"
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
                  :color="$item.items[0].label === 'GR' ? 'yellow': 'white'"
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
                  :color="$item.items[1].label === 'GR' ? 'yellow': 'white'"
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
                  :color="$item.items[2].label === 'GR' ? 'yellow': 'white'"
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
                  :color="$item.items[3].label === 'GR' ? 'yellow': 'white'"
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
          :effects="[{type: 'borderBottom', props: {width: 2, color: '#1C7700'}}]"
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
                  :color="$item.items[0].label === 'GR' ? 'yellow': 'white'"
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
                  :color="$item.items[1].label === 'GR' ? 'yellow': 'white'"
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
                  :color="$item.items[2].label === 'GR' ? 'yellow': 'white'"
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
                  :color="$item.items[3].label === 'GR' ? 'yellow': 'white'"
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
            <Text content="32687" color="yellow" size="25" y="6" />
            <Text content="APR-MARINES" size="25" y="6" />
            <Text content="3:0" color="yellow" size="25" y="6" />
          </Layout>
          <Layout gap="10" direction="horiznotal">
            <Element w="0.5">
              <GlowingCircle size="10" color="#34d404" y="12" />
            </Element>
            <Text content="G002" color="yellow" size="25" y="6" />
            <Text content="DINAMO BATUMI - IBERIA 1999" size="25" y="6" />
            <Text content="1:1" color="yellow" size="25" y="6" />
          </Layout>
          <Layout gap="10" direction="horiznotal">
            <Element w="0.5">
              <GlowingCircle size="10" color="#34d404" y="12" />
            </Element>
            <Text content="G039" color="yellow" size="25" y="6" />
            <Text content="GILLA FC - KLUBI 04" size="25" y="6" />
            <Text content="0:2" color="yellow" size="25" y="6" />
          </Layout>
          <Layout gap="10" direction="horiznotal">
            <Element w="0.5">
              <GlowingCircle size="10" color="#34d404" y="12" />
            </Element>
            <Text content="G075" color="yellow" size="25" y="6" />
            <Text content="RANHEIM - EGERSUND" size="25" y="6" />
            <Text content="1:0" color="yellow" size="25" y="6" />
          </Layout>
          <Layout gap="10" direction="horiznotal">
            <Element w="0.5">
              <GlowingCircle size="10" color="#34d404" y="12" />
            </Element>
            <Text content="32753" color="yellow" size="25" y="6" />
            <Text content="TRIGLAV - TOLMIN" size="25" y="6" />
            <Text content="1:0" color="yellow" size="25" y="6" />
          </Layout>
          <Layout gap="10" direction="horiznotal">
            <Element w="0.5">
              <GlowingCircle size="10" color="#34d404" y="12" />
            </Element>
            <Text content="G091" color="yellow" size="25" y="6" />
            <Text content="SHAMAL - AL ARABI DOHA" size="25" y="6" />
            <Text content="0:1" color="yellow" size="25" y="6" />
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
      this.$router.to('/5')
    },
    down() {
      this.$router.to('/3')
    },
  },
})
