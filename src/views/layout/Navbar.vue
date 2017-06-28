<template>
  <div class="navbar">
    <div class="info-container">
      <a href="javascript:;" @click="logout"><i class="el-icon-upload2"></i>&nbsp;退出</a>
    </div>
  </div>
</template>

<script>
  // import { logout } from '@/api/login';
  export default {
    methods: {
      logout() {

        // 使用状态管理
        this.$store.dispatch('LogOut').then(() => {
          this.$router.push({ path: '/login' });
        }).catch(err => {
          this.$message.error(err);
        });

        // 使用mockjs或真实接口
        // logout().then(response => {
        //   console.log(response);  // 这里输出一下，看看是不是我们mock定义的返回
        //   this.$router.push({ path: '/login' });
        // }).catch(err => {
        //   console.error(err);
        // });
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    transition: height 0.28s;
    position: relative;
    height: 70px;
    line-height: 70px;
    color: #717171;
    background-color: #fff;
    padding: 0 20px 0 30px;
    border-radius: 0px !important;
    box-shadow: 0 0 0 1px #f6f6f6;
    .info-container {
      height: 70px;
      display: inline-block;
      position: absolute;
      right: 32px;
      >a {
        color: #999;
        text-decoration: none;
        &:hover {
          color: #11a0e0;
        }
      }
    }
  }
</style>



