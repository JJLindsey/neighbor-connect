<script setup lang="ts">

interface StarRatingProps {
  rating: number
  size?: number
  showValue?: boolean
  reviewCount?: number
}

// Vue equivalent of React props
const props = withDefaults(defineProps<StarRatingProps>(), {
  size: 16,
  showValue: true
})
</script>

<template>
  <div class="flex items-center gap-1">
    <Icon
      name="lucide:star"
      v-for="star in 5"
      :key="star"
      :size="props.size"
      :class="
        star <= Math.round(props.rating)
          ? 'fill-amber-400 text-amber-400'
          : 'text-muted-foreground/30'
      "
    />

    <span
      v-if="props.showValue"
      class="text-sm font-semibold ml-1"
    >
      {{ props.rating.toFixed(1) }}
    </span>

    <span
      v-if="props.reviewCount !== undefined"
      class="text-sm text-muted-foreground"
    >
      ({{ props.reviewCount }})
    </span>
  </div>
</template>