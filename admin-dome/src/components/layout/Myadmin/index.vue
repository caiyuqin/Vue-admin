<template>
  <div class="myadmin">
    <el-dropdown size="small">
        <div class="avatar-wrapper">
          <img src="../../../images/play.gif" alt="">
          <i class="el-icon-caret-bottom"></i>
        </div>      
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<style lang="scss" scoped>
.myadmin {
  img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    border-radius:5px;
  }
}
</style>


