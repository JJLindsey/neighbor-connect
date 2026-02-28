<template>
  <section class="hero" :style="heroStyle">
    <div class="hero__overlay" />

    <div class="hero__body container">

      <div class="hero__avatar-wrap">
        <img
          :src="client.photo"
          :alt="client.name"
          class="hero__avatar"
        />
        <span v-if="client.verified" class="hero__verified">
          <Icon name="lucide:check" size="12" />
        </span>
      </div>

      <div class="hero__info">
        <!-- <div class="hero__badges">
          <span
            v-for="s in client.specialties?.slice(0, 3)"
            :key="s"
            class="badge badge--ghost"
          >
            {{ s }}
          </span>
        </div> -->

        <h1 class="hero__name">{{ client.name }}</h1>
        <p class="hero__tagline">{{ client.tagline }}</p>
        <div class="hero__badges">
          <span
            v-for="s in client.specialties?.slice(0, 3)"
            :key="s"
            class="badge badge--ghost"
          >
            {{ s }}
          </span>
        </div>
        <div class="hero__meta">
          <span class="hero__meta-item">
            <Icon name="lucide:map-pin" size="14" />
            {{ client.location }}
          </span>
          <span class="hero__meta-item">
            <Icon name="lucide:clock" size="14" />
            {{ client.yearsExp }} yrs experience
          </span>
          <span class="hero__meta-item">
            <Icon name="lucide:calendar" size="14" />
            {{ client.availability?.join(', ') }}
          </span>
        </div>

        <UiStarRating
          :rating="client.rating"
          :review-count="client.reviewCount"
          :size="18"
        />
      </div>

      <div class="hero__cta">
        <NuxtLink to="/book" class="btn btn-primary btn--lg">
          Book Now
        </NuxtLink>
        <NuxtLink to="/quote" class="btn btn-outline btn--lg">
          Request a Quote
        </NuxtLink>
        <a :href="`tel:${client.phone}`" class="btn btn-primary btn--lg hero__phone">
          <Icon name="lucide:phone" size="16" />
          {{ client.phone }}
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    const props = defineProps<{client: any }>()

    const heroStyle = computed(() => ({
        backgroundImage: props.client.heroImage ? `url(${props.client.heroImage})`
        : 
        `linear-gradient(135deg, var(--color-primary) 0%, #2d4a6e 100%)`
    }))
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 520px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 65, 194, 0.45) 0%,
    rgba(249, 248, 229, 0.78) 100%
  );
}

.hero__body {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2.5rem;
  padding: 3rem 0;
}

/* Avatar */
.hero__avatar-wrap {
  position: relative;
  flex-shrink: 0;
}
.hero__avatar {
  width: 150px;
  height: 150px;
  border-radius: var(--radius-lg);
  object-fit: cover;
  border: 3px solid rgba(255,255,255,0.25);
  box-shadow: var(--shadow-xl);
}
.hero__verified {
  position: absolute;
  bottom: -6px;
  right: -6px;
  width: 22px;
  height: 22px;
  background: #22c55e;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
}

/* Info */
.hero__info { flex: 1; min-width: 220px; }

.hero__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
}

.hero__name {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: var(--weight-black);
  color: var(--color-text);
  margin-bottom: var(--space-2);
  letter-spacing: -0.02em;
}

.hero__tagline {
  font-size: var(--text-md);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  line-height: var(--leading-snug);
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-6);
  margin-bottom: var(--space-4);
}
.hero__meta-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

/* CTA */
.hero__cta {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  align-self: center;
}
.hero__phone {
  color: rgba(255,255,255,0.85);
  justify-content: center;
}

@media (max-width: 640px) {
  .hero__body    { flex-direction: column; align-items: flex-start; }
  .hero__cta     { flex-direction: row; flex-wrap: wrap; width: 100%; }
  .hero__cta .btn{ flex: 1; min-width: 140px; }
}
</style>