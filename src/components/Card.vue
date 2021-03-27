<template>
    <b-container id="card-boxes">
        <h5 id="card-header" v-if="header">{{ header }}</h5>
        <h3 id="card-title" v-if="title">{{ title }}</h3>
    </b-container>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Card',
  props: {
    msg: String,
    header: String,
    title: String,
  },
  mounted() {
    axios
      .get('data.json')
      .then('');
  },
};
</script>

<style scoped>
    #card-boxes {
        padding: 24px 0 24px 0;
        box-shadow: 0 0px 40px rgb(51 73 90 / 20%);
    }

    #card-header {
        font-weight: 900;
        font-size: 16px;
        line-height: 16px;
        color: #979797;
        margin-bottom: 36px;
    }

    #card-title {
        font-weight: 600;
        line-height: 100%;
    }

    @media(min-width: 1140px) {

        #card-boxes {
            padding: 75px 0 48px 0;
        }

        #card-title {
            font-size: 80px;
        }
    }
</style>
