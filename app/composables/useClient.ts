import clientData from '~/clientContent/client.json'

export const useClient = () => {
  // ── LATER: swap this for Supabase ──────────────────────────
  // const { data } = await useAsyncData('tenant', () =>
  //   useSupabaseClient().from('tenants')
  //     .select('*, services(*), reviews(*), gallery_images(*)')
  //     .eq('slug', useRoute().params.slug).single()
  //     .then(r => r.data)
  // )
  // return { client: data }
  // ───────────────────────────────────────────────────────────

  return { client: clientData }
}