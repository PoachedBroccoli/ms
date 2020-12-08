<template>
  <div class="home">
    <Header />
    <Banner v-if="standBy" />
    <Content v-if="standBy" />
  </div>
</template>

<script>
import { Header, Banner, Content } from '@/components'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Content
  },
  created () {
    this.a_carousel()
  },
  computed: {
    ...mapState('music', {
      standBy: 'standBy'
    })
  },
  methods: {
    ...mapActions('music', { a_carousel: 'a_carousel' }),
  }
}
</script>

<style >
</style>
