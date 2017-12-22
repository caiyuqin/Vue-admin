<template>
  <div class="skinpeeler">
    <el-tooltip class="item" effect="light" content="换肤" placement="top-start">
      <el-color-picker v-model="color" size="small"></el-color-picker>
    </el-tooltip>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        color: '#409EFF'
      }
    }
  };
</script>