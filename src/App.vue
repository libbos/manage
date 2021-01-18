<template>
  <el-container>
    <el-aside width="200px">
      <Menu style="overflow: hidden;" />
    </el-aside>
    <el-container>
      <el-header>
        <Head />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from '@/views/menu.vue';
import Head from '@/views/head.vue';
export default {
  name: 'App',
  components: {
    Menu,
    Head
  },
}
</script>
<style>
body{margin: 0;padding: 0;}
.el-menu{border-right: none !important;}
/* 自定义滚动条 */
::-webkit-scrollbar{width:0;height:0;}
::-webkit-scrollbar-button{width:0;height:0}

.el-header, .el-footer {
  background-color: #B3C0D1;
  line-height: 60px;
}

.el-aside {
  background-color: #31353a;
  color: #333;
  line-height: 200px;
  height: 100vh;
}

.el-main {
  background: white;
  padding: 0px !important;
  margin: 0;
}
</style>