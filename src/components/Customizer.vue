<template>
    <b-container id="customizer" class="animate__animated animate__fadeIn">
        <b-row>
            <b-col>
                <b-form-group>
                    Theme:
                    <a href="#" v-on:click="updateTheme('dark')">Dark</a>
                    |
                    <a href="#" v-on:click="updateTheme('light')">Light</a>
                </b-form-group>

                <b-form-group id="input-group-header" label="Header: " label-for="input-header">
                    <b-form-input
                    id="input-header"
                    :value="header"
                    placeholder="Enter header"
                    @input="updateHeader"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-title" label="Title: " label-for="input-title">
                    <b-form-input
                        id="input-title"
                        :value="title"
                        placeholder="Enter title"
                        @input="updateTitle"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-number"
                    label="Number of boxes: "
                    label-for="input-number"
                >
                    <b-form-input
                        type="number"
                        id="input-number"
                        :value="numberBoxes"
                        @input="updateNumberBoxes"
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Customizer',
  computed: {
    ...mapState(['theme', 'title', 'header', 'numberBoxes']),
  },
  methods: {
    updateTheme(newTheme) {
      return this.$store.dispatch('changeTheme', newTheme);
    },
    updateHeader(newHeader) {
      return this.$store.dispatch('changeHeader', newHeader);
    },
    updateTitle(newTitle) {
      return this.$store.dispatch('changeTitle', newTitle);
    },
    updateNumberBoxes(num) {
      return this.$store.dispatch('changeNumberBoxes', num);
    },
  },
};
</script>

<style scoped lang="scss">
    #customizer {
        box-shadow: 0 0px 40px rgba(0,0,0,0.2);
        padding: 30px;
        text-align: left;
    }
</style>
