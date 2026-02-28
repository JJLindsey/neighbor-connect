<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { clients, getCategories } from '@/data/clients'

const router = useRouter()
const search = ref('')

const featured = computed(() =>
  clients.filter(p => p.rating >= 4.8).slice(0, 3)
)

const categories = computed<{
  id: string
  name: string
  count: number
  icon: CategoryIcon
}[]>(() => {
    const map = new Map<string, number>()
    clients.forEach(c => {
        map.set(c.category, (map.get(c.category) || 0) +1)
    })
    return Array.from(map.entries()).map(([name, count]) => ({
        id: name,
        name,
        count,
        icon: name === 'Electricians' ? 'Zap' : 'Wrench'
    }))
})

const handleSearch = () => {
  if (!search.value.trim()) return
  router.push({
    path: '/browse',
    query: { q: search.value.trim() }
  })
}
type CategoryIcon =
  | 'Wrench'
  | 'Sparkles'
  | 'TreePine'
  | 'Zap'
  | 'GraduationCap'
  | 'Paintbrush'
  | 'Truck'
  | 'Hammer'

const iconMap: Record<CategoryIcon, string> = {
  Wrench: 'lucide:wrench',
  Sparkles: 'lucide:sparkles',
  TreePine: 'lucide:tree-pine',
  Zap: 'lucide:zap',
  GraduationCap: 'lucide:graduation-cap',
  Paintbrush: 'lucide:paintbrush',
  Truck: 'lucide:truck',
  Hammer: 'lucide:hammer'
}

const steps = [
  {
    icon: 'lucide:search',
    title: 'Search',
    desc: "Tell us what service you need and we'll match you with local pros."
  },
  {
    icon: 'lucide:star',
    title: 'Get Quotes',
    desc: 'Compare profiles, reviews, and pricing from top-rated professionals.'
  },
  {
    icon: 'lucide:check-circle',
    title: 'Book & Relax',
    desc: 'Choose the best fit, book a time, and get the job done.'
  }
]
</script>

<template>
  <!-- Hero -->
  <section class="section section--alt text-center">
    <div class="container" style="max-width: 720px">
      <h1>Find Trusted Pros in Your Neighborhood</h1>
      <p class="mt-4">
        Get matched with top-rated local professionals for any home service —
        from plumbing to tutoring.
      </p>

      <form class="flex gap-2 mt-6" @submit.prevent="handleSearch">
        <input
          v-model="search"
          class="form-input"
          placeholder="What service do you need?"
        />
        <button class="btn btn-primary btn--lg">Search</button>
      </form>
    </div>
  </section>

  <!-- Categories -->
  <section class="section">
    <div class="container">
      <div class="flex-between mb-6">
        <div>
          <h2>Popular Services</h2>
          <p>Browse by category to find the right professional</p>
        </div>

        <NuxtLink to="/browse" class="btn btn-ghost">
          View All <Icon name="lucide:arrow-right" size="16" />
        </NuxtLink>
      </div>

      <div class="grid-4">
        <NuxtLink
          v-for="cat in categories"
          :key="cat.id"
          :to="{ path: '/browse', query: { cat: cat.id } }"
          class="card card--hoverable"
        >
          <div class="card__body text-center">
            <div class="mb-3">
              <Icon :name="iconMap[cat.icon]" size="28" />
            </div>
            <p class="font-semibold">{{ cat.name }}</p>
            <p class="text-sm text-muted">{{ cat.count }} pros</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Featured Providers/Clients -->
  <section class="section section--alt">
    <div class="container">
      <div class="flex-between mb-6">
        <div>
          <h2>Top-Rated Professionals</h2>
          <p>Highest rated pros in your area</p>
        </div>

        <NuxtLink to="/browse" class="btn btn-ghost">
          See All <Icon name="lucide:arrow-right" size="16" />
        </NuxtLink>
      </div>

      <div class="grid-2">
        <ClientCard
          v-for="p in featured"
          :key="p.id"
          :provider="p"
        />
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section class="section">
    <div class="container text-center">
      <h2>How It Works</h2>
      <p class="mt-2 mb-8">Get your job done in three simple steps</p>

      <div class="grid-3">
        <div v-for="(s, i) in steps" :key="i">
          <Icon :name="s.icon" size="32" />
          <h3 class="mt-3">{{ s.title }}</h3>
          <p class="mt-2">{{ s.desc }}</p>
        </div>
      </div>

      <NuxtLink to="/request-quote" class="btn btn-primary btn--lg mt-10">
        Get Started <Icon name="lucide:arrow-right" size="16" />
      </NuxtLink>
    </div>
  </section>
</template>