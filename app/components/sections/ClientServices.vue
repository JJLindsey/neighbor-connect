<script setup lang="ts">
defineProps<{ client: any }>()
</script>

<template>
  <section class="section section--alt">
    <div class="container">
      <h2 class="mb-6">Services & Pricing</h2>

      <div class="grid-3">
        <div
          v-for="s in client.services"
          :key="s.title"
          class="card card--hoverable"
        >
          <div class="card__body">
            <Icon :name="s.icon" size="28" />
            <h3 class="mt-3">{{ s.title }}</h3>
            <p class="mt-2">{{ s.description }}</p>
            <p class="mt-3 font-semibold text-accent">
              {{ s.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>