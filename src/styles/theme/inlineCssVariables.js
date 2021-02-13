import { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from './colors';

export function setColorsByTheme() {
  const colors = '🌈';
  const colorModeKey = '🔑';
  const colorModeCssProp = '⚡️';

  const persistedPreference = localStorage.getItem(colorModeKey);
  const colorMode = persistedPreference || 'light';

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, value]) => {
    const cssVarName = `--${name}`;

    const color = typeof value === 'object' ? value[colorMode] : value;

    root.style.setProperty(cssVarName, color);
  });
}

export function MagicScriptTag() {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
}

// if user doesn't have JavaScript enabled, set variables properly in a
// head style tag anyways (light mode)
export function FallbackStyles() {
  const cssVariableString = Object.entries(COLORS)
    .map(([name, value]) => {
      const color = typeof value === 'object' ? value.light : value;
      return `--${name}: ${color};`;
    })
    .join('\n');

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
}
