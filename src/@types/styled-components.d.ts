/* eslint-disable @typescript-eslint/no-empty-interface */
import { theme } from "../themes";

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
