<template>
    <div>
      <Card class="animate__animated animate__fadeIn"
            :header="this.header"
            :title="this.title"
      />
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Card,
  },
  computed: {
    ...mapState(['header', 'title']),
  },
  async mounted() {
    this.$store.dispatch('fetchBoxes');
  },
};
</script>
