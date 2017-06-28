<template>
  <section class="app-main" ref="wrap">
    <transition name="fade" mode="out-in">
      <router-view :key="key">
      </router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      key() {
        return this.$route.name !== undefined
          ? this.$route.name + +new Date()
          : this.$route + +new Date()
      }
    },
    methods:{
      scrollBottom() {
        var foot = this.$refs['wrap'].getElementsByClassName('container-footer')[0];
        foot?foot.style.bottom = -this.$refs.wrap.scrollTop + 'px':null;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-main {
    position: relative;
    height: 100%;
    overflow-y: auto;
    background-color: #f5f5f5;
    text-align: left;
    padding: 20px;
  }
</style>