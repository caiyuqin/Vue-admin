<template>
  <div class="navleft">
    <el-menu>
        <router-link  to="/home" active-class="active">        
              <el-menu-item index="1">
                <icon name="home"></icon>
                <span slot="title">首页</span>
              </el-menu-item>         
        </router-link>
      <a href="#">
        <el-menu-item index="2">
        <icon name="doc"></icon>
        <span slot="title">文档</span>
      </el-menu-item>
      </a>
      <a href="#">
        <el-menu-item index="3">
        <icon name="limits" scale="2"></icon>
        <span slot="title">权限测试页</span>
      </el-menu-item>
      </a>
      <a href="#">
        <el-menu-item index="4">
        <icon name="icon"></icon>
        <span slot="title">图标</span>
      </el-menu-item>
      </a>
      <el-submenu index="5">
        <template slot="title">
          <icon name="module" scale="2"></icon>
          <span slot="title">组件</span>
        </template>
        <el-menu-item-group>
        <a href="#">
            <el-menu-item index="5-1">富文本编辑</el-menu-item>
        </a>
          <a href="#">
            <el-menu-item index="5-2">Markdown</el-menu-item>
        </a>
         <a href="#">
            <el-menu-item index="5-3">JSON编辑器</el-menu-item>
        </a>
         <a href="#">
            <el-menu-item index="5-4">列表拖拽</el-menu-item>
        </a>
         <a href="#">
            <el-menu-item index="5-5">Splitpane</el-menu-item>
        </a>    
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
