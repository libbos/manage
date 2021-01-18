<template>
  <el-menu
    @select="handleOpen"
    background-color="#31353a"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu :index="item.path" v-for="item in routes" :key="item.path">
      <template #title>
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
      </template>
      <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">{{child.title}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import {routes} from '@/router/index';
export default {
  data() {
    return {
      routes: routes,
    }
  },
  methods: {
    handleOpen(key) {
      this.$router.push(key)
    },
  },
}
</script>