<script setup lang="ts">
defineProps<{ client: any }>()
</script>

<template>
  <section class="section">
    <div class="container grid-2">
      <div>
        <h2>About {{ client.name }}</h2>
        <p class="mt-4">
          {{ client.about }}
        </p>

        <p class="mt-4 text-sm text-muted">
          Serving {{ client.serviceArea }}
        </p>
      </div>

      <!-- Trust badges -->
      <div class="grid-2">
        <div
          v-for="b in client.trustBadges"
          :key="b.label"
          class="card"
        >
          <div class="card__body flex gap-3">
            <Icon :name="b.icon" size="20" />
            <div>
              <strong>{{ b.label }}</strong>
              <p class="text-sm text-muted">{{ b.sub }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>