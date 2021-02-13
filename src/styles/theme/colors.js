export const COLORS = {
  primary: '#087392',
  primaryDark: '#05566e',
  background: { dark: '#1B1B1B', light: '#EEE' },
  box: { dark: '#333', light: '#FFF' },
  border: { dark: '#2b2b2b', light: '#dfdfdf' },
  textPrimary: { dark: '#FFF', light: '#4F4F4F' }
};

// for typescript projects, use this to get theme typing
// export const THEME = Object.keys(COLORS).reduce((prev, curr) => {
//   prev[curr] = `var(--${curr})`
//   return prev
// }, {}) as {
//   [key in keyof typeof COLORS]: string
// }

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
