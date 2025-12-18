export const PageTransitions = {
  slideInOutLeft: {
    before: [{ prop: 'x', value: -1920 }],
    in: [
      {
        prop: 'x',
        value: 0,
        duration: 500,
        easing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
      },
    ],
    out: [
      {
        prop: 'x',
        value: 1920,
        duration: 500,
        easing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
      },
    ],
  },
  slideInOutRight: {
    before: [{ prop: 'x', value: 1920 }],
    in: [
      {
        prop: 'x',
        value: 0,
        duration: 500,
        easing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
      },
    ],
    out: [
      {
        prop: 'x',
        value: -1920,
        duration: 500,
        easing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
      },
    ],
  },
}
