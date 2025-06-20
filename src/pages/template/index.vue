<script setup lang="tsx">
import type { CSSProperties } from 'vue'
/** @jsxImportSource vue */
import { motion } from 'motion-v'
import { defineComponent } from 'vue'

/**
 * ==============   Animation   ================
 */

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Data   ================
 */

const food: [string, number, number][] = [
  ['🍅', 340, 10],
  ['🍊', 20, 40],
  ['🍋', 60, 90],
  ['🍐', 80, 120],
  ['🍏', 100, 140],
  ['🫐', 205, 245],
  ['🍆', 260, 290],
  ['🍇', 290, 320],
]

/**
 * ==============   Styles   ================
 */

const container = {
  margin: '100px auto',
  maxWidth: '500px',
  paddingBottom: '100px',
  width: '100%',
}

const cardContainer = {
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  paddingTop: '20px',
  marginBottom: '-120px',
}

const splash: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card = {
  fontSize: '164px',
  width: '300px',
  height: '430px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
  background: '#f5f5f5',
  boxShadow:
        '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)',
  transformOrigin: '10% 60%',
}

/**
 * ==============   Components   ================
 */

const Card = defineComponent({
  props: {
    emoji: { type: String, required: true },
    hueA: { type: Number, required: true },
    hueB: { type: Number, required: true },
    i: { type: Number, required: true },
  },
  setup(props) {
    const background = `linear-gradient(306deg, ${hue(props.hueA)}, ${hue(props.hueB)})`

    return () => (
      <motion.div
        style={cardContainer}
        initial="offscreen"
        whileInView="onscreen"
        inViewOptions={{ amount: 0.8 }}
      >
        <div style={{ ...splash, background }} />
        <motion.div style={card} variants={cardVariants} class="card">
          {props.emoji}
        </motion.div>
      </motion.div>
    )
  },
})
</script>

<template>
  <div :style="container">
    <Card
      v-for="([emoji, hueA, hueB], i) in food"
      :key="emoji"
      :emoji="emoji"
      :hue-a="hueA"
      :hue-b="hueB"
      :i="i"
    />
  </div>
</template>

<style>
  #sandbox > div{
    width:100%;
  }
</style>
