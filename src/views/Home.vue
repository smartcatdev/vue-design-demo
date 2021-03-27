<template>
    <div>
      <Card class="animate__animated animate__fadeInUp"
            header="Header"
            title="Navigation Title"
            count="4"
      />
      <Customizer/>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Card from '@/components/Card.vue';
import Customizer from '@/components/Customizer.vue';

export default {
  name: 'Home',
  components: {
    Card,
    Customizer,
  },
  data() {
    return {
      boxes: '',
    };
  },
  async mounted() {
    this.$store.dispatch('fetchBoxes');
  },
};
</script>
