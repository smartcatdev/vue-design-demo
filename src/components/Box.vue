<template>
    <div class="box">
        <img v-if="imageUrl" :src="imageUrl" />

        <div v-if="icon && !imageUrl" class="icon-wrap">
            <b-icon :icon="icon" class="icon"></b-icon>
        </div>

        <h3 v-if="title" class="title">{{ title }}</h3>
        <p v-if="desc" class="desc">{{ desc }}</p>
        <ul v-if="links">
            <li v-for="link in links" :key="link.title">
                <a :href="link.link">
                    {{link.title}}
                </a>
            </li>
        </ul>
        <div v-if="button.url && button.text" class="button">
            <a :href="button.url">
                <b-icon class="arrow" icon="arrow-right-short"></b-icon>
                {{ button.text }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    title: String,
    desc: String,
    imageUrl: String,
    icon: String,
    links: Array,
    button: {},
  },
};
</script>

<style scoped lang="scss">
    .box {
        padding: 15px;
        background: #f8f8f8;
        height: 100%;
        border-radius: 4px;
        img {
            width: 100%;
            margin-bottom: 15px;
        }
        .icon-wrap {
            height: 100px;
            border-radius: 100%;
            text-align: center;
            line-height: 120px;
            margin: 0 auto;
        }
        .title {
            font-size: 1.25em;
            margin-bottom: 15px;
            text-align: center;
        }
        .desc {}
        .icon {
            font-size: 44px;
        }
        .button {
            display: block;
            border: 2px solid #000;
            transition: 0.12s all ease-in-out;
            border-radius: 4px;
            text-align: center;
            a {
                text-decoration: none;
                display: block;
                padding: 9px 0;
                font-weight: 700;
                font-size: 14px;
                color: #000;
            }
            a:hover .arrow {
                left: 0px;
            }
            .arrow {
                position: relative;
                left: -3px;
                transition: 0.12s all ease-in-out;
            }
        }
        .button:hover {
            background: #0077FF;
            border-color: #0077FF;
            a {
                color: #fff;
            }
        }

    }

    ul {
        list-style-type: none;
        padding: 0;
        li {
        }
    }
</style>
