<template>
  <div class="app-wrapper">
    <div class="navigator-wrapper">
      <div class="navigator-container">
        <div class="logo"></div>
        <Sidebar />
      </div>
    </div>
    <div class="main-container">
      <Navbar />
      <App-main />
    </div>
  </div>
</template>

<script>
  // 引入组件文件
  import { Navbar, Sidebar, AppMain } from '@/views/layout'; //也就是指向./layout/index.js
  export default {
    // 名称（可不写）
    name: 'layout',
    // 使用组件
    components: {
      Navbar,
      Sidebar,
      AppMain
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    padding-left: 190px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    &:after {
      content: "";
      display: table;
      clear: both;
    }
    .navigator-wrapper {
      display: block;
      position: absolute;
      z-index: 1000;
      width: 190px;
      left: 0;
      top: 0;
      bottom: 0;
      overflow: hidden;
      background: #2F323A;
      transition: all .28s ease-out;
      &::-webkit-scrollbar-track-piece {
        background: #d3dce6;
      }
      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background: #99a9bf;
        border-radius: 20px;
      }
    }
    .navigator-wrapper a:focus, 
    .navigator-wrapper a:active {
      outline: none;
    }
    .navigator-container {
      transition: all .28s ease-out;
    }
    .logo {
      box-shadow: -1px 0 0 1px #000;
      width: 190px;
      height: 70px;
      display: block;
      background-color: #111111;
      background-image: url(../../assets/logo.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50%;
      overflow: hidden;
    }
    .main-container {
      width: 100%;
      height: 100%;
      overflow-y: hidden;
      transition: all .28s ease-out;
    }
  }
</style>