import type { GlobalThemeOverrides } from 'naive-ui'

// 中国传统色系主题 - 唐风华韵（盛唐风格）
export const tangDynastyTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#9E2A2B', // 朱红（传统中国红）
    primaryColorHover: '#B8405E',
    primaryColorPressed: '#822020',
    primaryColorSuppl: '#D05A6E',
    successColor: '#3A5F56', // 石绿
    warningColor: '#C16E4E', // 赭石
    errorColor: '#9E2A2B', // 朱红
    infoColor: '#4A6FA5', // 天青
    textColorBase: '#2D2926', // 墨黑
    textColor1: '#413B36',
    textColor2: '#5C5550',
    textColor3: '#8A827A',
    borderColor: '#C9BEAF',
  },
  Button: {
    textColor: '#F5F1E6',
    borderRadius: '4px',
  },
  Card: {
    borderRadius: '8px',
    border: '1px solid #C9BEAF',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
}

// 中国传统色系主题 - 宋瓷雅韵（宋代青瓷风格）
export const songDynastyTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#5E7F74', // 青瓷色
    primaryColorHover: '#7A9E92',
    primaryColorPressed: '#4A6A5F',
    primaryColorSuppl: '#94B0A6',
    successColor: '#5E7F74', // 青瓷色
    warningColor: '#D4B59E', // 米色
    errorColor: '#A62F26', // 祭红
    infoColor: '#8A9A5B', // 茶叶末
    textColorBase: '#3A3A3A', // 墨色
    textColor1: '#4D4D4D',
    textColor2: '#666666',
    textColor3: '#8C8C8C',
    borderColor: '#D0C8B8',
  },
  Button: {
    textColor: '#F7F5F0',
    borderRadius: '2px',
  },
  Card: {
    borderRadius: '4px',
    border: '1px solid #D0C8B8',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
  },
}

// 中国传统色系主题 - 青花古韵（青花瓷风格）
export const blueAndWhiteTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#3B5F8F', // 青花蓝
    primaryColorHover: '#5A7FBF',
    primaryColorPressed: '#2A4A7F',
    primaryColorSuppl: '#7A9FCE',
    successColor: '#2E7D32', // 青花绿
    warningColor: '#FFA000', // 琥珀黄
    errorColor: '#C62828', // 祭红
    infoColor: '#3B5F8F', // 青花蓝
    textColorBase: '#212121', // 墨色
    textColor1: '#424242',
    textColor2: '#616161',
    textColor3: '#9E9E9E',
    borderColor: '#E0E0E0',
  },
  Button: {
    textColor: '#FAFAFA',
    borderRadius: '4px',
  },
  Card: {
    borderRadius: '6px',
    border: '1px solid #E0E0E0',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)',
  },
}

// 中国传统色系主题 - 水墨丹青（水墨画风格）
export const inkPaintingTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#2D3B45', // 墨黑
    primaryColorHover: '#4A5A66',
    primaryColorPressed: '#1A2630',
    primaryColorSuppl: '#6A7A86',
    successColor: '#4A6A5F', // 石绿
    warningColor: '#A67C52', // 赭石
    errorColor: '#8C2318', // 朱砂
    infoColor: '#3A5F56', // 青绿
    textColorBase: '#2D2D2D', // 墨色
    textColor1: '#4A4A4A',
    textColor2: '#666666',
    textColor3: '#999999',
    borderColor: '#D9D3C0',
  },
  Button: {
    textColor: '#F9F7F1',
    borderRadius: '2px',
  },
  Card: {
    borderRadius: '4px',
    border: '1px solid #D9D3C0',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  },
}

// 中国传统色系主题 - 唐风华韵（盛唐风格）黑夜模式
export const tangDynastyThemeDark: GlobalThemeOverrides = {
  common: {
    primaryColor: '#C44A4B', // 亮朱红
    primaryColorHover: '#D96A7E',
    primaryColorPressed: '#A83A3A',
    primaryColorSuppl: '#E07A8E',
    successColor: '#5A7F76', // 亮石绿
    warningColor: '#D98E6E', // 亮赭石
    errorColor: '#C44A4B', // 亮朱红
    infoColor: '#6A8FA5', // 亮天青
    textColorBase: '#F5F1E6', // 米白
    textColor1: '#E5E1D6',
    textColor2: '#D5D1C6',
    textColor3: '#C5C1B6',
    borderColor: '#897E6F',
  },
  Button: {
    textColor: '#F5F1E6',
    borderRadius: '4px',
  },
  Card: {
    borderRadius: '8px',
    border: '1px solid #897E6F',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  },
}

// 中国传统色系主题 - 宋瓷雅韵（宋代青瓷风格）黑夜模式
export const songDynastyThemeDark: GlobalThemeOverrides = {
  common: {
    primaryColor: '#7E9F94', // 亮青瓷色
    primaryColorHover: '#9ABEB2',
    primaryColorPressed: '#5E7F74',
    primaryColorSuppl: '#B4D0C6',
    successColor: '#7E9F94', // 亮青瓷色
    warningColor: '#E4C5AE', // 亮米色
    errorColor: '#C64E46', // 亮祭红
    infoColor: '#AABE7B', // 亮茶叶末
    textColorBase: '#E7E5E0', // 浅灰白
    textColor1: '#D7D5D0',
    textColor2: '#C7C5C0',
    textColor3: '#A7A5A0',
    borderColor: '#908878',
  },
  Button: {
    textColor: '#F7F5F0',
    borderRadius: '2px',
  },
  Card: {
    borderRadius: '4px',
    border: '1px solid #908878',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
  },
}

// 中国传统色系主题 - 青花古韵（青花瓷风格）黑夜模式
export const blueAndWhiteThemeDark: GlobalThemeOverrides = {
  common: {
    primaryColor: '#5B7FBF', // 亮青花蓝
    primaryColorHover: '#7A9FCF',
    primaryColorPressed: '#3B5F8F',
    primaryColorSuppl: '#9ABFDF',
    successColor: '#4E9D52', // 亮青花绿
    warningColor: '#FFC020', // 亮琥珀黄
    errorColor: '#E64848', // 亮祭红
    infoColor: '#5B7FBF', // 亮青花蓝
    textColorBase: '#EAEAEA', // 瓷白
    textColor1: '#DADADA',
    textColor2: '#CACACA',
    textColor3: '#AAAAAA',
    borderColor: '#808080',
  },
  Button: {
    textColor: '#FAFAFA',
    borderRadius: '4px',
  },
  Card: {
    borderRadius: '6px',
    border: '1px solid #808080',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  },
}

// 中国传统色系主题 - 水墨丹青（水墨画风格）黑夜模式
export const inkPaintingThemeDark: GlobalThemeOverrides = {
  common: {
    primaryColor: '#4D5B65', // 亮墨黑
    primaryColorHover: '#6A7A86',
    primaryColorPressed: '#2D3B45',
    primaryColorSuppl: '#8A9AA6',
    successColor: '#6A8A7F', // 亮石绿
    warningColor: '#C69C72', // 亮赭石
    errorColor: '#AA4338', // 亮朱砂
    infoColor: '#5A7F76', // 亮青绿
    textColorBase: '#F9F7F1', // 宣纸白
    textColor1: '#E9E7D1',
    textColor2: '#D9D7C1',
    textColor3: '#B9B7A1',
    borderColor: '#999380',
  },
  Button: {
    textColor: '#F9F7F1',
    borderRadius: '2px',
  },
  Card: {
    borderRadius: '4px',
    border: '1px solid #999380',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
  },
}

// 主题列表
export const themeList = {
  tangDynasty: { name: '唐风华韵', theme: tangDynastyTheme },
  tangDynastyDark: { name: '唐风华韵(黑夜)', theme: tangDynastyThemeDark },
  songDynasty: { name: '宋瓷雅韵', theme: songDynastyTheme },
  songDynastyDark: { name: '宋瓷雅韵(黑夜)', theme: songDynastyThemeDark },
  blueAndWhite: { name: '青花古韵', theme: blueAndWhiteTheme },
  blueAndWhiteDark: { name: '青花古韵(黑夜)', theme: blueAndWhiteThemeDark },
  inkPainting: { name: '水墨丹青', theme: inkPaintingTheme },
  inkPaintingDark: { name: '水墨丹青(黑夜)', theme: inkPaintingThemeDark },
}

export type ThemeKey = keyof typeof themeList
