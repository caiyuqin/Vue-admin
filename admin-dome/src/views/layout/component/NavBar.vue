<template>
    <div class="nav-bar">
      <el-row>
        <el-col :lg="1" :md="1" :xs="24" :sm="2">
          <Hamburger></Hamburger> 
        </el-col>
        <el-col :lg="18" :md="17" :xs="24" :sm="14">
          <Breadcrumb></Breadcrumb>
        </el-col>
        <el-col :lg="5" :md="6" :xs="24" :sm="8">
           <div class="rightMenu">
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6"><Magnify></Magnify></el-col>
              <el-col :span="6"><Language></Language></el-col>
              <el-col :span="6"><skin-peeler></skin-peeler></el-col>
              <el-col :span="6"><my-admin></my-admin></el-col>
            </el-row>          
           </div>
        </el-col>
      </el-row>   
    </div>        
</template>

<script>
import Hamburger from "@/components/layout/Hamburger"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Magnify from "@/components/layout/Magnify"
import Language from "@/components/layout/Language"
import SkinPeeler from "@/components/layout/SkinPeeler"
import MyAdmin from "@/components/layout/Myadmin"
export default {
  components:{
    Hamburger,
    Breadcrumb,
    Magnify,
    Language,
    SkinPeeler,
    MyAdmin
  }
}
</script>
