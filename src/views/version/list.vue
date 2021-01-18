<template>
  <div>
    <el-card class="box-card">
      
    </el-card>
    <el-table :data="tabList" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tabList: []
    }
  },
  methods: {
    
  },
}
</script>