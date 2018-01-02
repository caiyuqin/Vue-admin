<template>
  <div class="home-tit">
    <el-row>
        <el-col :lg="6" :xs="12" :sm="12">
            <div class="home-tit-box" @click="lineData('newVisitis')">
                <div class="icon">
                   <div class="icon-box">
                        <icon name="home_person" class="home_person_icon"></icon>
                   </div>
                </div>
                <div class="content hidden-xs-only">
                    <p>New Visits</p>
                    <p>1021,34</p>
                </div>
            </div>
        </el-col>
        <el-col :lg="6" :xs="12" :sm="12">
            <div class="home-tit-box" @click="lineData('messages')">
                <div class="icon">
                   <div class="icon-box">
                        <icon name="home_message" class="home_person_icon"></icon>
                   </div>
                </div>
                <div class="content hidden-xs-only">
                    <p>New Message</p>
                    <p>2431,4</p>
                </div>
            </div>
        </el-col>
        <el-col :lg="6" :xs="12" :sm="12">
            <div class="home-tit-box" @click="lineData('purchases')">
                <div class="icon">
                   <div class="icon-box">
                        <icon name="home_rmb" class="home_person_icon"></icon>
                   </div>
                </div>
                <div class="content hidden-xs-only">
                    <p>New Person</p>
                    <p>1021,334</p>
                </div>
            </div>
        </el-col>
        <el-col :lg="6" :xs="12" :sm="12">
            <div class="home-tit-box" @click="lineData('shoppings')">
                <div class="icon">
                   <div class="icon-box">
                        <icon name="home_cart" class="home_person_icon"></icon>
                   </div>
                </div>
                <div class="content hidden-xs-only">
                    <p>New Cart</p>
                    <p>1041,34</p>
                </div>
            </div>
        </el-col>     
    </el-row>
  </div>
</template>
<script>

export default {
  methods:{
      lineData(type){
         this.$emit("echartChage",type)
      }
  }
  
}
</script>


<style lang="scss" scoped>
@import "../../../assets/css/basic.scss";
.home-tit {
    padding:10px;
    background:#f0f2f5;
  .home-tit-box {
    height: 120px;
    background: #fff;
    margin:10px;
    @include prefix-val(display, flex);
    .icon {
      width: 30%;
      height: 100%;
      @include prefix-val(display, box);
      @include prefix-key(box-pack, center);
      @include prefix-key(box-align, center);
    }
    .icon-box {
      width: 80px;
      height: 80px;
      @include prefix-val(display, box);
      @include prefix-key(box-pack, center);
      @include prefix-key(box-align, center);
      &:hover {
        background: #40c9c6;      
        border-radius:5px;
      }
    }
    .home_person_icon {
      width: 40px;
      height: 40px;
    }
    .content {
      width: 70%;
      text-align: center;
      height: 100%;
      
      p {
        width: 70%;
        font-size: 20px;
        padding-top:20px;
      }
    }
  }
}
@media only screen and (max-width:767px){
   .home-tit .home-tit-box .icon{
        width:100%;
    }
}
</style>
