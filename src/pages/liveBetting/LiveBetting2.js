import Blits from '@lightningjs/blits'

export default Blits.Component('LiveBetting2', {
  state() {
    return {
      progressWidth: 0,
      headerText: '2/3',
      title: 'KLADJENJE UZIVO',
      mainTitle: 'KOSARKA',
      mainTitle2: 'TENIS',
      topRight1: '1.23',
      topRight2: 'T: 14306',
      currentTime: '',
    }
  },
  template: `
    <Element w="1920" h="1080" color="#0a1a0a" size="16">
      <!-- Header -->
      <!-- Logo -->
      <Element x="50" y="20" w="200" h="50">
        <Element src="https://media2.maxbet.rs/ibet/getImageFromResource.json?resourceId=1793" w="200" h="50" />
      </Element>
      <!-- 1/2 Text -->
      <Text x="260" y="30" :content="$headerText" size="32" color="#ffffff" />
      <!-- Progress Bar Background -->
      <Element
        x="320"
        y="40"
        w="100"
        h="15"
        color="#1a3a1a"
        alpha="0.8"
        clipping="true"
        :effects="[{ type: 'radius', props: { radius: 5 } }]"
      >
        <!-- Progress Bar Fill -->
        <Element
          h="15"
          w="100"
          color="#00ff00"
          :w.transition="{ value: $progressWidth, duration: 38000, timing: 'linear', delay: 0  }"
          :effects="[{ type: 'radius', props: { radius: 5 } }]"
        />
      </Element>
      <!-- KLAĐENJE UŽIVO Title -->
      <Text x="960" y="40" :content="$title" size="35" color="#ffffff" mount="0.5" fontFamily="raleway-bold" />
      <!-- Current Time in top right corner -->
      <Text x="1800" y="40" :content="$currentTime" size="35" color="#ffffff" mount="0.5" />
    
      <!-- Left Table: Background Image with KOSARKA header -->
      <Element x="30" y="100" w="960" h="900">
        <!-- Background Image -->
        <Element src="https://media2.maxbet.rs/media/assets/img/sport-toolbar/sport-toolbar-EB.jpg" w="700" h="70" x="50" />
        <!-- FUDBAL Title -->
        <Text x="480" y="30" :content="$mainTitle" size="35" color="#ffffff" mount="0.5" fontFamily="raleway-bold" />
        <!-- ŠIFRA and MINUT labels in bottom left corner of background -->
        <Text x="60" y="47" content="ŠIFRA" size="16" color="#ffffff" />
        <Text x="150" y="47" content="MINUT" size="16" color="#ffffff" />
        <!-- Left Table Rows -->
        <Element x="50" y="70" w="700" h="750">
          <!-- Match 1 -->
          <Element w="700" h="48" y="0" color="#8b3525">
            <Text x="20" y="12" content="8060" size="16" color="#ffffff" />
            <Circle x="120" y="24" size="6" color="#00ff00" />
            <Text x="135" y="12" content="88'" size="16" color="#ffffff" />
            <Text x="220" y="12" content="S. ATLETICO TV W - SAN LORENZO W" size="18" color="#ffffff" />
          </Element>
          <!-- Match 2 -->
          <Element w="700" h="48" y="48" color="#ab4630">
            <Text x="20" y="12" content="7480" size="16" color="#ffffff" />
            <Text x="135" y="12" content="93'" size="16" color="#ffffff" />
            <Text x="220" y="12" content="ETAR - SPARTAK PLEVEN" size="18" color="#ffffff" />
          </Element>
          <!-- Match 3 -->
          <Element w="700" h="48" y="96" color="#8b3525">
            <Text x="20" y="12" content="7314" size="16" color="#ffffff" />
            <Text x="135" y="12" content="92'" size="16" color="#ffffff" />
            <Text x="220" y="12" content="LEVADIA U21 - FLORA T. U21" size="18" color="#ffffff" />
          </Element>
          <!-- Match 4 -->
          <Element w="700" h="48" y="144" color="#ab4630">
            <Text x="20" y="12" content="36736" size="16" color="#ffffff" />
            <Circle x="120" y="24" size="6" color="#00ff00" />
            <Text x="135" y="12" content="91'" size="16" color="#ffffff" />
            <Text x="220" y="12" content="FC YLIVIESKA - SIF" size="18" color="#ffffff" />
          </Element>
          <!-- Match 5 -->
          <Element w="700" h="48" y="192" color="#8b3525">
            <Text x="20" y="12" content="7990" size="16" color="#ffffff" />
            <Circle x="120" y="24" size="6" color="#00ff00" />
            <Text x="135" y="12" content="84'" size="16" color="#ffffff" />
            <Text x="220" y="12" content="BOMBADA - MARIMOO" size="18" color="#ffffff" />
          </Element>
          <!-- Match 6 -->
          <Element w="700" h="48" y="240" color="#ab4630">
            <Text x="20" y="12" content="7991" size="16" color="#ffffff" />
            <Circle x="120" y="24" size="6" color="#00ff00" />
            <Text x="135" y="12" content="86'" size="16" color="#ffffff" />
            <Text x="220" y="12" content="DUTCH LIONS - HAWKS FC" size="18" color="#ffffff" />
          </Element>
          <!-- Match 7 -->
          <Element w="700" h="48" y="288" color="#8b3525">
            <Text x="20" y="12" content="7992" size="16" color="#ffffff" />
            <Circle x="120" y="24" size="6" color="#00ff00" />
            <Text x="135" y="12" content="90'" size="16" color="#ffffff" />
            <Text x="220" y="12" content="REAL BANJUL - BST GALAXY" size="18" color="#ffffff" />
          </Element>
          <!-- Match 8 -->
          <Element w="700" h="48" y="336" color="#ab4630">
            <Text x="20" y="12" content="37454" size="16" color="#ffffff" />
            <Circle x="120" y="24" size="6" color="#00ff00" />
            <Text x="135" y="12" content="87'" size="16" color="#ffffff" />
            <Text x="220" y="12" content="CSD MUNICIPAL RES. - CSD COMUNICACIONES RE" size="18" color="#ffffff" />
          </Element>
        </Element>
      </Element>
    
      <!-- Right Table: Results and Odds -->
      <Element x="780" y="50" w="960" h="900">
        <!-- Right Table Header -->
        <!-- Right Table Header (2 rows) -->
        <Element x="0" y="50" w="960" h="70" color="#ab4630">
          <!-- vertical separators -->
          <Element x="0" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
    
          <Element x="200" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
          <Element x="400" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
          <Element x="600" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
          <Element x="800" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
          <Element x="958" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
    
          <!-- middle horizontal separator -->
          <Element x="0" y="35" w="960" h="2" color="#ffffff" alpha="0.3" />
    
          <!-- TOP ROW -->
          <!-- REZ. POL. (spojeno polje) -->
          <Text x="80" y="55" content="REZ.                 POL." size="18" color="#ffffff" mount="0.5" />
          <!-- REZULTAT -->
          <Text x="150" y="15" content="REZULTAT" size="18" color="#ffffff" mount="0.5" />
          <!-- KONAČAN ISHOD -->
          <Text x="300" y="15" content="KONAČAN ISHOD" size="18" color="#ffffff" mount="0.5" />
          <!-- SLEDEĆI GOL -->
          <Text x="500" y="15" content="UK.POENA ČETVTINA" size="18" color="#ffffff" mount="0.5" />
          <!-- OSTATAK MEČA -->
          <Text x="700" y="15" content="HENDIKEP" size="18" color="#ffffff" mount="0.5" />
          <!-- UKUPNO GOLOVA -->
          <Text x="880" y="15" content="UKUPNO POENA" size="18" color="#ffffff" mount="0.5" />
    
          <!-- BOTTOM ROW -->
          <!-- 1 X 2 ispod KONAČAN ISHOD -->
          <Text x="300" y="55" content="1               X               2" size="16" color="#ffffff" mount="0.5" />
          <!-- GR. 1 X 2 ispod SLEDEĆI GOL -->
          <Text x="500" y="55" content="MANJE             GR.             VIŠE" size="16" color="#ffffff" mount="0.5" />
          <!-- 1 X 2 ispod OSTATAK MEČA -->
          <Text x="700" y="55" content="1               GR.               2" size="16" color="#ffffff" mount="0.5" />
          <!-- MANJE GR. VIŠE ispod UKUPNO GOLOVA -->
          <Text x="880" y="55" content="MANJE   GR.   VIŠE" size="16" color="#ffffff" mount="0.5" />
        </Element>
    
        <!-- Right Table Rows -->
        <Element x="0" y="120" w="960" h="750">
          <!-- Match 1 -->
          <Element w="960" h="48" y="0" color="#8b3525">
            <Element x="0" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="20" y="12" content="0:1" size="20" color="#ffffff" />
            <Element x="100" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="120" y="12" content="1:1" size="20" color="#ffffff" />
            <Element x="200" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="220" y="12" content="14.0        1.12        8.50" size="18" color="#ffffff" />
            <Element x="400" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="420" y="12" content="3.        14.0        1.14        8.50" size="18" color="#ffffff" />
            <Element x="600" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="620" y="12" content="-" size="18" color="#ffffff" />
            <Element x="800" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="820" y="12" content="1.13        2.50        5.60" size="18" color="#ffff00" />
          </Element>
          <!-- Match 2 -->
          <Element w="960" h="48" y="48" color="#ab4630">
            <Element x="0" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="20" y="12" content="0:0" size="20" color="#ffffff" />
            <Element x="100" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="120" y="12" content="0:0" size="20" color="#ffffff" />
            <Element x="200" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="400" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="420" y="12" content="1.        19.0        1.01        34.0" size="18" color="#ffffff" />
            <Element x="600" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="800" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
          </Element>
          <!-- Match 3 -->
          <Element w="960" h="48" y="96" color="#8b3525">
            <Element x="0" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="20" y="12" content="0:1" size="20" color="#ffffff" />
            <Element x="100" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="120" y="12" content="1:2" size="20" color="#ffffff" />
            <Element x="200" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="400" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="600" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="800" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
          </Element>
          <!-- Match 4 -->
          <Element w="960" h="48" y="144" color="#ab4630">
            <Element x="0" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="20" y="12" content="1:3" size="20" color="#ffffff" />
            <Element x="100" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="120" y="12" content="2:3" size="20" color="#ffffff" />
            <Element x="200" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="220" y="12" content="94.0        8.00        1.07" size="18" color="#ffffff" />
            <Element x="400" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="420" y="12" content=" 6        6.40        1.25        6.40" size="18" color="#ffffff" />
            <Element x="600" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="620" y="12" content="6.60        1.25        6.60" size="18" color="#ffffff" />
            <Element x="800" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="820" y="12" content="1.25        5.5        3.40" size="18" color="#ffff00" />
          </Element>
          <!-- Match 5 -->
          <Element w="960" h="48" y="192" color="#8b3525">
            <Element x="0" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="20" y="12" content="0:0" size="20" color="#ffffff" />
            <Element x="100" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="120" y="12" content="1:1" size="20" color="#ffffff" />
            <Element x="200" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="220" y="12" content="7.10        1.20        9.10" size="18" color="#ffffff" />
            <Element x="400" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="420" y="12" content="3        6.80        1.20        8.40" size="18" color="#ffffff" />
            <Element x="600" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="800" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="820" y="12" content="1.20        2.5        4.00" size="18" color="#ffff00" />
          </Element>
          <!-- Match 6 -->
          <Element w="960" h="48" y="240" color="#ab4630">
            <Element x="0" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="20" y="12" content="1:0" size="20" color="#ffffff" />
            <Element x="100" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="120" y="12" content="1:1" size="20" color="#ffffff" />
            <Element x="200" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="220" y="12" content="15.0        1.20        5.30" size="18" color="#ffffff" />
            <Element x="400" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="420" y="12" content="3        12.5        1.20        5.30" size="18" color="#ffffff" />
            <Element x="600" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="800" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="820" y="12" content="1.20        2.5        4.00" size="18" color="#ffff00" />
          </Element>
          <!-- Match 7 -->
          <Element w="960" h="48" y="288" color="#8b3525">
            <Element x="0" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="20" y="12" content="1:0" size="20" color="#ffffff" />
            <Element x="100" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="120" y="12" content="2:1" size="20" color="#ffffff" />
            <Element x="200" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="220" y="12" content="1.05        10.0        86.0" size="18" color="#ffffff" />
            <Element x="400" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="420" y="12" content="4        4.15        1.35        8.50" size="18" color="#ffffff" />
            <Element x="600" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="620" y="12" content="4.90        1.35        7.70" size="18" color="#ffffff" />
            <Element x="800" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="820" y="12" content="1.35        3.5        2.90" size="18" color="#ffff00" />
          </Element>
          <!-- Match 8 -->
          <Element w="960" h="48" y="336" color="#ab4630">
            <Element x="0" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="20" y="12" content="2:0" size="20" color="#ffffff" />
            <Element x="100" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="120" y="12" content="2:1" size="20" color="#ffffff" />
            <Element x="200" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="220" y="12" content="1.11        6.30        46.0" size="18" color="#ffffff" />
            <Element x="400" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="420" y="12" content="4        7.10        1.30        5.40" size="18" color="#ffffff" />
            <Element x="600" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="620" y="12" content="7.70        1.28        5.50" size="18" color="#ffffff" />
            <Element x="800" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="820" y="12" content="1.30        3.5        3.20" size="18" color="#ffff00" />
          </Element>
        </Element>
      </Element>
    
      <!-- TENIS -->
      <Element x="30" y="560" w="960" h="900">
        <!-- Background Image -->
        <Element src="https://media2.maxbet.rs/media/assets/img/sport-toolbar/sport-toolbar-T.jpg" w="700" h="70" x="50" />
        <!-- FUDBAL Title -->
        <Text x="480" y="30" :content="$mainTitle2" size="35" color="#ffffff" mount="0.5" fontFamily="raleway-bold" />
        <!-- ŠIFRA and MINUT labels in bottom left corner of background -->
        <Text x="60" y="47" content="ŠIFRA" size="16" color="#ffffff" />
        <Text x="150" y="47" content="BR. GEM" size="16" color="#ffffff" />
        <!-- Left Table Rows -->
        <Element x="50" y="70" w="700" h="750">
          <!-- Match 1 -->
          <Element w="700" h="48" y="0" color="#9d7a12">
            <Text x="20" y="12" content="8060" size="16" color="#ffffff" />
            <Circle x="120" y="24" size="6" color="#00ff00" />
            <Text x="135" y="12" content="88'" size="16" color="#ffffff" />
            <Text x="220" y="12" content="S. ATLETICO TV W - SAN LORENZO W" size="18" color="#ffffff" />
          </Element>
          <!-- Match 2 -->
          <Element w="700" h="48" y="48" color="#bf9a16">
            <Text x="20" y="12" content="7480" size="16" color="#ffffff" />
            <Text x="135" y="12" content="93'" size="16" color="#ffffff" />
            <Text x="220" y="12" content="ETAR - SPARTAK PLEVEN" size="18" color="#ffffff" />
          </Element>
          <!-- Match 3 -->
          <Element w="700" h="48" y="96" color="#9d7a12">
            <Text x="20" y="12" content="7314" size="16" color="#ffffff" />
            <Text x="135" y="12" content="92'" size="16" color="#ffffff" />
            <Text x="220" y="12" content="LEVADIA U21 - FLORA T. U21" size="18" color="#ffffff" />
          </Element>
        </Element>
      </Element>
    
      <!-- Right Table: Results and Odds -->
      <Element x="780" y="510" w="960" h="900">
        <!-- Right Table Header -->
        <!-- Right Table Header (2 rows) -->
        <Element x="0" y="50" w="960" h="70" color="#bf9a16">
          <!-- vertical separators -->
          <Element x="0" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
    
          <Element x="200" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
          <Element x="400" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
          <Element x="600" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
          <Element x="800" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
          <Element x="958" y="0" w="2" h="70" color="#ffffff" alpha="0.3" />
    
          <!-- middle horizontal separator -->
          <Element x="0" y="35" w="960" h="2" color="#ffffff" alpha="0.3" />
    
          <!-- TOP ROW -->
          <!-- REZ. POL. (spojeno polje) -->
          <Text x="80" y="55" content="SET                 GEM" size="18" color="#ffffff" mount="0.5" />
          <!-- REZULTAT -->
          <Text x="150" y="15" content="REZULTAT" size="18" color="#ffffff" mount="0.5" />
          <!-- KONAČAN ISHOD -->
          <Text x="300" y="15" content="KON. ISHOD" size="18" color="#ffffff" mount="0.5" />
          <!-- SLEDEĆI GOL -->
          <Text x="500" y="15" content="POBEDNIK SETA" size="18" color="#ffffff" mount="0.5" />
          <!-- OSTATAK MEČA -->
          <Text x="700" y="15" content="UK.GEM U SETU" size="18" color="#ffffff" mount="0.5" />
          <!-- UKUPNO GOLOVA -->
          <Text x="880" y="15" content="UKUPNO GEMOVA" size="18" color="#ffffff" mount="0.5" />
    
          <!-- BOTTOM ROW -->
          <!-- 1 X 2 ispod KONAČAN ISHOD -->
          <Text x="300" y="55" content="1                           2" size="16" color="#ffffff" mount="0.5" />
          <!-- GR. 1 X 2 ispod SLEDEĆI GOL -->
          <Text
            x="500"
            y="55"
            content="              1              SET               2"
            size="16"
            color="#ffffff"
            mount="0.5"
          />
          <!-- 1 X 2 ispod OSTATAK MEČA -->
          <Text x="700" y="55" content="MANJE   GR.   VIŠE" size="16" color="#ffffff" mount="0.5" />
          <!-- MANJE GR. VIŠE ispod UKUPNO GOLOVA -->
          <Text x="880" y="55" content="MANJE   GR.   VIŠE" size="16" color="#ffffff" mount="0.5" />
        </Element>
    
        <!-- Right Table Rows -->
        <Element x="0" y="120" w="960" h="750">
          <!-- Match 1 -->
          <Element w="960" h="48" y="0" color="#9d7a12">
            <Element x="0" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="20" y="12" content="0:1" size="20" color="#ffffff" />
            <Element x="100" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="120" y="12" content="1:1" size="20" color="#ffffff" />
            <Element x="200" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="220" y="12" content="14.0        1.12        8.50" size="18" color="#ffffff" />
            <Element x="400" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="420" y="12" content="3.        14.0        1.14        8.50" size="18" color="#ffffff" />
            <Element x="600" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="620" y="12" content="-" size="18" color="#ffffff" />
            <Element x="800" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="820" y="12" content="1.13        2.50        5.60" size="18" color="#ffff00" />
          </Element>
          <!-- Match 2 -->
          <Element w="960" h="48" y="48" color="#bf9a16">
            <Element x="0" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="20" y="12" content="0:0" size="20" color="#ffffff" />
            <Element x="100" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="120" y="12" content="0:0" size="20" color="#ffffff" />
            <Element x="200" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="400" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="420" y="12" content="1.        19.0        1.01        34.0" size="18" color="#ffffff" />
            <Element x="600" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="800" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
          </Element>
          <!-- Match 3 -->
          <Element w="960" h="48" y="96" color="#9d7a12">
            <Element x="0" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="20" y="12" content="0:1" size="20" color="#ffffff" />
            <Element x="100" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Text x="120" y="12" content="1:2" size="20" color="#ffffff" />
            <Element x="200" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="400" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="600" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
            <Element x="800" y="0" w="2" h="48" color="#ffffff" alpha="0.3" />
          </Element>
        </Element>
      </Element>
      <!-- Footer -->
      <Element x="50" y="1020" w="1820" h="40" color="#1a3a1a">
        <Circle x="80" y="20" size="4" color="#00ff00" />
        <Text x="95" y="10" content="R FK 0:1" size="18" color="#ffffff" />
        <Circle x="170" y="20" size="4" color="#00ff00" />
        <Text x="185" y="10" content="36710 NOPS-SAAKSJAERVEN LOISKE 2:1" size="18" color="#ffffff" />
        <Circle x="530" y="20" size="4" color="#00ff00" />
        <Text x="545" y="10" content="7250 GAREJI SAGAREJO-KOLKHETI 1913 2:0" size="18" color="#ffffff" />
        <Circle x="920" y="20" size="4" color="#00ff00" />
        <Text x="935" y="10" content="8052 DUNAV RUSE-DOBRUDZHA 1:1" size="18" color="#ffffff" />
        <Circle x="1250" y="20" size="4" color="#00ff00" />
        <Text x="1265" y="10" content="7314 LEVADIA U21-FLORA T. U21 1:2" size="18" color="#ffffff" />
      </Element>
    </Element>
  `,
  methods: {},
  hooks: {
    ready() {
      // Start progress bar animation - 30 seconds
      setTimeout(() => {
        this.progressWidth = 100
      }, 100)

      // Navigate to next route after 30 seconds
      setTimeout(() => {
        if (this.$router) {
          this.$router.to('/live-betting/3')
          console.log('prebacio')
        }
      }, 30000)

      // Update current time
      const updateTime = () => {
        const now = new Date()
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        this.currentTime = `${hours}:${minutes}`
      }

      updateTime()
      this.$setInterval(updateTime, 60000)
    },
  },
  input: {
    up() {
      // Navigation can be added here
    },
    down() {
      // Navigation can be added here
    },
  },
})
