<template>
    <b-container fluid id="customizer">
        <b-row>
            <b-col cols="2">Customizer</b-col>
            <b-col>
                <a href="#" v-on:click="updateTheme('dark')">Dark</a>
                |
                <a href="#" v-on:click="updateTheme('light')">Light</a>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'Customizer',
  methods: {
    updateTheme(newTheme) {
      return this.$store.dispatch('changeTheme', newTheme);
    },
  },
};
</script>

<style scoped lang="scss">
    #customizer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
        background: #fff;
        line-height: 50px;
    }
</style>
