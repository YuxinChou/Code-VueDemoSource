<template>
  <div class="menu">
    <!-- 为了简单，这里的菜单不是从router读回来的 -->
    <!-- 若要读回来，带上管理权限，请参考文后推荐的demo -->
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router theme="dark">
      <el-menu-item index="/dashboard">工作台</el-menu-item>
      <!-- <el-menu-item index="/table">列表页面</el-menu-item> -->
      <el-menu-item index="/hello">Hello页面</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    computed: {
      onRoutes () {
        return this.$route.path;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .menu {
    overflow-y: auto;
    height: 100%;
    .el-menu {
      background-color: transparent;
    }
    .el-menu-item {
      background-color: transparent;
      &.is-active {
        background-color: #4e535f;
        color: #fff;
      }
    }
  }
</style>
