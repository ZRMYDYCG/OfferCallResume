<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { computed, ref } from 'vue'
import { type ThemeKey, themeList } from './config/naive-ui-theme-config'

const currentTheme = ref<ThemeKey>('tangDynasty')

const themeOverrides = computed<GlobalThemeOverrides>(() => {
  return themeList[currentTheme.value].theme
})
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <router-view />
  </NConfigProvider>
</template>
