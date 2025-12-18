import Blits from '@lightningjs/blits'

import Loader from '../../components/Loader.js'
import { format } from 'date-fns'
import Grid from '../../components/Grid/Grid.js'

const schedules = [
  { id: 1, sport: 'Fudbal', time: '02:15', homeTeam: 'VOJVODINA', awayTeam: 'TSC BACKA TOPOLA' },
  { id: 2, sport: 'Fudbal', time: '03:05', homeTeam: 'MACARTHUR FC', awayTeam: 'WELLINGTON' },
  { id: 3, sport: 'Kosarka', time: '03:40', homeTeam: 'PARTIZAN', awayTeam: 'CRVENA ZVEZDA' },
  { id: 4, sport: 'Hokej', time: '04:10', homeTeam: 'DINAMO MINSK', awayTeam: 'SKA PETERSBURG' },
  { id: 5, sport: 'Tenis', time: '04:30', homeTeam: 'DJOKOVIC', awayTeam: 'ALCARAZ' },
  { id: 6, sport: 'Fudbal', time: '05:00', homeTeam: 'MAZATLAN FC', awayTeam: 'PACHUCA' },
  { id: 7, sport: 'Ragbi', time: '05:20', homeTeam: 'BLUES', awayTeam: 'HURRICANES' },
  { id: 8, sport: 'Fudbal', time: '06:00', homeTeam: 'NITA FA W', awayTeam: 'EAST BENGAL WW' },
  { id: 9, sport: 'Odbojka', time: '06:45', homeTeam: 'LUBE CIVITANOVA', awayTeam: 'ZENIT KAZAN' },
  {
    id: 10,
    sport: 'Fudbal',
    time: '07:15',
    homeTeam: 'NUSANTARA',
    awayTeam: 'PERSIKOTA TANGERANG',
  },
  { id: 11, sport: 'Fudbal', time: '07:55', homeTeam: 'FERENCVAROS', awayTeam: 'RAPID WIEN' },
  { id: 12, sport: 'Fudbal', time: '08:20', homeTeam: 'AL AHLI', awayTeam: 'AL ITTIHAD' },
  { id: 13, sport: 'Kosarka', time: '08:50', homeTeam: 'LAKERS', awayTeam: 'CELTICS' },
  { id: 14, sport: 'Fudbal', time: '09:05', homeTeam: 'REAL SOCIEDAD', awayTeam: 'OSASUNA' },
  { id: 15, sport: 'Fudbal', time: '09:30', homeTeam: 'SEATTLE SOUNDERS', awayTeam: 'AUSTIN FC' },
  { id: 16, sport: 'Fudbal', time: '10:00', homeTeam: 'CRYSTAL PALACE', awayTeam: 'FULHAM' },
  { id: 17, sport: 'Fudbal', time: '10:20', homeTeam: 'OLYMPIQUE LYON', awayTeam: 'LILLE OSC' },
  { id: 18, sport: 'Fudbal', time: '10:45', homeTeam: 'RIVER PLATE', awayTeam: 'BOCA JUNIORS' },
  { id: 19, sport: 'Fudbal', time: '11:05', homeTeam: 'ATLAS FC', awayTeam: 'CLUB AMERICA' },
  { id: 20, sport: 'Fudbal', time: '11:30', homeTeam: 'AL HILAL', awayTeam: 'AL NASSR' },
  { id: 21, sport: 'Fudbal', time: '12:05', homeTeam: 'INTER MIAMI', awayTeam: 'NYC FC' },
  {
    id: 22,
    sport: 'Fudbal',
    time: '12:30',
    homeTeam: 'ATLETICO NACIONAL',
    awayTeam: 'DEPORTIVO CALI',
  },
  { id: 23, sport: 'Fudbal', time: '13:00', homeTeam: 'GALATASARAY', awayTeam: 'BESIKTAS' },
  { id: 24, sport: 'Fudbal', time: '13:25', homeTeam: 'PSV EINDHOVEN', awayTeam: 'FEYENOORD' },
  { id: 25, sport: 'Fudbal', time: '13:50', homeTeam: 'AC MILAN', awayTeam: 'LAZIO' },
]

export default Blits.Component('Schedules', {
  components: {
    Loader,
    Grid,
  },
  template: `
  
    <Element color="#1b1b1b" w="1920" h="1080">
      <Element src="./assets/logo.png" w="217.7" h="45" x="28" y="5" />
      <Text x="280" content="1/5" y="15" size="24" />
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
      <Text content="KLADJENJE UZIVO" size="45" :x="1920/2" y="30" mount="0.5" />
      <Text content="PROF-TV-3" size="28" x="1681" y="12" />
      <Text :content="$formattedTime" size="28" x="1832" y="12" />

        <Grid
          x="38"
          y="101"
          :items="$schedules"
        itemWidth="300"
        itemHeight="240"
          columnOffset="86"
          rowOffset="0"
          columns="5"
          ref="grid"
        />

    </Element>
    
    
    
  `,
  state() {
    // const red = #070707
    const now = new Date()
    return {
      formattedTime: format(now, 'HH:mm'),
      schedules: schedules,
    }
  },
  hooks: {
    ready() {
      const grid = this.$select('grid')
      if (grid && grid.$focus) {
        grid.$focus()
      }
      this._interval = setInterval(() => {
        const now = new Date()
        this.formattedTime = format(now, 'HH:mm')
      }, 1000)
    },
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
