<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { computed, ref } from 'vue'
import { type ThemeKey, themeList } from './config/naive-ui-theme-config'

const themeMode = ref(null)
const currentTheme = ref<ThemeKey>('tangDynasty')

const themeOverrides = computed<GlobalThemeOverrides>(() => {
  if (!themeMode.value)
    return themeList[`${currentTheme.value}Dark`].theme
  return themeList[currentTheme.value].theme
})
</script>

<template>
  <NConfigProvider :theme="themeMode" :theme-overrides="themeOverrides">
    <router-view />
  </NConfigProvider>
</template>
