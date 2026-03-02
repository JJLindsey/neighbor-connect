<script setup lang="ts">
import UiStarRating from './ui/StarRating.vue'

interface Client {
  id: string
  name: string
  location: string
  yearsExp: number
  rating: number
  reviewCount: number
  photo: string
  specialties: string[]
  category: string
}

defineProps<{
  client: Client
}>()
</script>

<template>
  <div class="card card--hoverable overflow-hidden">
    <div class="flex flex-wrap sm:flex-nowrap">

      <!-- Image -->
      <div class="client-card__media">
        <img
          :src="client.photo"
          :alt="client.name"
          class="client-card__img"
        />
      </div>

      <!-- Content -->
      <div class="client-card__body">

        <!-- Header -->
        <div class="flex-between gap-3">
          <div>
            <NuxtLink
              :to="`/clients/${client.id}`"
              class="client-card__name"
            >
              {{ client.name }}
            </NuxtLink>

            <div class="client-card__meta">
              <span>
                <Icon name="lucide:map-pin" size="14" />
                {{ client.location }}
              </span>
              <span>
                <Icon name="lucide:clock" size="14" />
                {{ client.yearsExp }} yr exp
              </span>
            </div>
          </div>
        </div>

        <!-- Rating -->
        <UiStarRating
          :rating="client.rating"
          :review-count="client.reviewCount"
        />

        <!-- Specialties -->
        <div class="flex-wrap gap-2">
          <span
            v-for="s in client.specialties"
            :key="s"
            class="badge badge--neutral"
          >
            {{ s }}
          </span>
        </div>

        <!-- Actions -->
        <div class="flex gap-2 mt-3">
          <NuxtLink
            :to="`/clients/${client.id}`"
            class="btn btn-primary btn--sm"
          >
            View Profile
          </NuxtLink>

          <NuxtLink
            :to="`/request-quote?client=${client.id}`"
            class="btn btn-outline btn--sm"
          >
            Get Quote
          </NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.client-card__media {
  width: 160px;
  height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--color-surface-alt);
}

@media (max-width: 640px) {
  .client-card__media {
    width: 100%;
    height: 180px;
  }
}

.client-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.card:hover .client-card__img {
  transform: scale(1.05);
}

.client-card__body {
  padding: var(--space-5);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.client-card__name {
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-primary);
}

.client-card__name:hover {
  color: var(--color-accent);
}

.client-card__meta {
  display: flex;
  gap: var(--space-4);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}
.client-card__meta span {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}
</style>