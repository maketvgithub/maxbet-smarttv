import Blits from '@lightningjs/blits'

import GridItem from './GridItem'

export default Blits.Component('Grid', {
  components: {
    GridItem,
  },
  template: `
    <Element :x.transition="$x" :y.transition="$y">
      <GridItem
        :for="(item, index) in $items"
        :x="($index % ($columns || $baseColumns)) * $totalWidth"
        :y="Math.floor($index / ($columns || $baseColumns)) * $totalHeight"
        :ref="'grid-item-'+$item.id"
        :item="$item"
        :key="$item.id"
        :selected="($index === $selected)"
        :focused="($index === $focused)"
      />
    </Element>
  `,
  props: [
    'itemHeight',
    'itemWidth',
    'columnOffset',
    'rowOffset',
    'items',
    'columns',
    'looping',
    'leftCallback',
    'rightCallback',
  ],
  state() {
    return {
      focused: 0,
      x: 0,
      y: 0,
      baseColumns: 4,
      selected: null,
    }
  },
  computed: {
    totalWidth() {
      return (this.itemWidth || 300) + (this.columnOffset || 0)
    },
    totalHeight() {
      return (
        (this.itemHeight || 300) +
        (this.rowOffset != null ? this.rowOffset : this.columnOffset || 0)
      )
    },
  },
  hooks: {
    focus() {
      this.focused = this.selected || 0
      this.$trigger('focused')
    },
  },
  watch: {
    focused(value) {
      const focusItem = this.$select(`grid-item-${this.items[value].id}`)
      if (focusItem && focusItem.$focus) {
        focusItem.$focus()
      }
      const columns = this.columns || this.baseColumns
      const rowIndex = Math.floor(value / columns)
      const visibleRows = 3
      const maxVisibleIndex = visibleRows * columns

      if (value >= maxVisibleIndex) {
        const totalRows = Math.ceil(this.items.length / columns)
        let scrollRow = rowIndex - visibleRows + 1

        if (rowIndex === totalRows - 1 && totalRows > visibleRows) {
          scrollRow = Math.max(0, rowIndex - visibleRows)
        }
        this.y = -scrollRow * this.totalHeight
      } else {
        this.y = 0
      }
    },
  },
  input: {
    up() {
      const columns = this.columns || this.baseColumns
      const previousIndex = this.focused - columns

      if (previousIndex >= 0) {
        this.focused = previousIndex
      } else if (this.looping) {
        const lastRow = this.items.length - (this.items.length % columns)
        const lastRowColumn = lastRow + (this.focused % columns)
        this.focused = lastRowColumn < this.items.length ? lastRowColumn : lastRowColumn - columns
      }
    },
    down() {
      const columns = this.columns || this.baseColumns
      const nextIndex = this.focused + columns

      if (nextIndex < this.items.length) {
        this.focused = nextIndex
      } else if (this.looping) {
        this.focused = nextIndex % columns
      }
    },
    left() {
      const columns = this.columns || this.baseColumns
      const isNotFirstInRow = this.focused % columns > 0
      const isWithinBounds = this.focused + columns - 1 < this.items.length

      if (isNotFirstInRow) {
        this.focused -= 1
      } else if (this.looping) {
        this.focused = isWithinBounds ? this.focused + columns - 1 : this.items.length - 1
      }
    },
    right() {
      const columns = this.columns || this.baseColumns
      const isLastItem = this.focused === this.items.length - 1
      const isNotLastItem = this.focused < this.items.length - 1
      const isLastInRow = this.focused % columns === columns - 1 || isLastItem

      if (isLastItem) {
        this.rightCallback?.()
        if (this.looping) {
          this.focused = 0 // loop to first item
        }
        return
      }

      if (isLastInRow) {
        this.rightCallback?.()

        if (this.looping) {
          const nextIndex = this.focused + 1
          this.focused = nextIndex < this.items.length ? nextIndex : 0
        }
      } else if (isNotLastItem) {
        this.focused += 1
      }
    },
  },
})
