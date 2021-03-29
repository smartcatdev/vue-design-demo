<template>
    <b-container id="card-boxes">
        <h5 id="card-header" v-if="header">{{ header }}</h5>
        <h2 id="card-title" v-if="title">{{ title }}</h2>
        <b-row v-if="this.$store.getters.boxes">
            <b-col class="box-wrapper"
                    :class="countClass"
                    sm="12"
                    :md="calcMediumGrid"
                    :lg="calcLargeGrid"
                    v-for="box in boxes.slice(0, numberBoxes)"
                    :key="box.id"
            >
                <Box :title="box.title"
                    :desc="box.desc"
                    :imageUrl="box.imageUrl"
                    :icon="box.icon"
                    :links="box.link"
                    :button="box.button"
                />
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import Box from '@/components/Box.vue';

export default {
  name: 'Card',
  components: { Box },
  props: {
    msg: String,
    header: String,
    title: String,
  },
  data() {
    return {

    };
  },
  computed: {
    numberBoxes() {
      return this.$store.getters.numberBoxes;
    },
    boxes() {
      return this.$store.getters.boxes.box;
    },
    calcLargeGrid() {
      let cols = 12;
      if (this.numberBoxes === 4) {
        cols = 3;
      } else if (this.numberBoxes === 3) {
        cols = 4;
      } else if (this.numberBoxes === 2) {
        cols = 6;
      }
      return cols;
    },
    calcMediumGrid() {
      let cols = 12;
      if (this.numberBoxes === 4 || this.numberBoxes === 2) {
        cols = 6;
      } else if (this.numberBoxes === 3) {
        cols = 12;
      }
      return cols;
    },
    countClass() {
      return `count-${this.numberBoxes}`;
    },
  },
};
</script>

<style scoped>
    #card-boxes {
        padding: 30px 30px 0 30px;
        box-shadow: 0 0px 40px rgb(51 73 90 / 20%);
        margin-bottom: 50px;
    }

    #card-header {
        font-weight: 900;
        color: #979797;
        margin-bottom: 15px;
        text-align: center;
    }

    #card-title {
        font-weight: 600;
        margin-bottom: 15px;
        line-height: 100%;
        text-align: center;
    }

    .box-wrapper {
        margin-bottom: 30px;
    }

    .col-lg-12.count-1 {
        max-width: 600px;
        margin: 0 auto;
    }

    @media(min-width: 1140px) {

        #card-boxes {
            padding: 75px 30px 30px 30px;
        }

        #card-header {
            margin-bottom: 20px;
        }

        #card-title {
            margin-bottom: 45px;
        }
    }
</style>
