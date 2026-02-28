<template>
  <div class="star-rating">

    <span
      v-for="star in 5"
      :key="star"
      class="star"
      :class="getStarClass(star)"
    >
      <!-- Using inline SVG gives us full CSS control over fill + stroke -->
      <!-- Nuxt Icon's SVG output does not expose fill reliably via class -->
      <svg
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02
                  12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </svg>
    </span>

    <span v-if="showValue" class="star-rating__value">
      {{ rating.toFixed(1) }}
    </span>

    <span v-if="reviewCount !== undefined" class="star-rating__count">
      ({{ reviewCount }})
    </span>

  </div>
</template>

<script setup lang="ts">
interface Props {
  rating:       number
  size?:        number
  showValue?:   boolean
  reviewCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  size:      16,
  showValue: true,
})

// Supports full, half, and empty stars
const getStarClass = (star: number): string => {
  if (star <= Math.floor(props.rating))   return 'star--filled'
  if (star <= Math.ceil(props.rating))    return 'star--half'
  return 'star--empty'
}
</script>

<style scoped>
.star-rating {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}
/* Full star — amber fill + stroke */
.star--filled polygon {
  fill:   #f59e0b;
  stroke: #f59e0b;
}

/* Half star — gradient trick via clip, fallback to 60% amber */
.star--half polygon {
  fill:   #fcd34d;
  stroke: #f59e0b;
}

/* Empty star — no fill, muted stroke */
.star--empty polygon {
  fill:   none;
  stroke: #d1d5db;
}

/* ── Labels ──────────────────────────────────────────────── */

.star-rating__value {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);
  margin-left: 4px;
  line-height: 1;
}

.star-rating__count {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-left: 2px;
  line-height: 1;
}
</style>