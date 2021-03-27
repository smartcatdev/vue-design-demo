<template>
    <b-container id="card-boxes">
        <h5 id="card-header" v-if="header">{{ header }}</h5>
        <h2 id="card-title" v-if="title">{{ title }}</h2>
        <b-row v-if="this.$store.getters.boxes">
            <b-col v-for="box in this.$store.getters.boxes.box" :key="box.id">
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
};
</script>

<style scoped>
    #card-boxes {
        padding: 30px;
        box-shadow: 0 0px 40px rgb(51 73 90 / 20%);
        margin-bottom: 100px;
    }

    #card-header {
        font-weight: 900;
        color: #979797;
        margin-bottom: 15px;
    }

    #card-title {
        font-weight: 600;
        margin-bottom: 15px;
        line-height: 100%;
    }

    @media(min-width: 1140px) {

        #card-boxes {
            padding: 75px 30px 48px 30px;
        }

        #card-header {
            margin-bottom: 20px;
        }

        #card-title {
            margin-bottom: 45px;
        }
    }
</style>
