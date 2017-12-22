<template>
  <div class="Progress">
     <div class="pro-img">
       <img src="../../../images/bg.png" alt="">
     </div>
     <div class="pro-gif">
        <div class="gif"></div>
        <div class="gifplay"></div>
        <a data-v-aaa7c784="" href="#" class="link--mallki mallki-text">
             vue-element-admin        
        </a>
     </div>
     <div class="gif-footer">
        <span>Vue</span>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="20"></el-progress>
        <span>JavaScript</span>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
        <span>Css</span>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
     </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/css/basic.scss";
.Progress {
  .pro-img {
    overflow: hidden;
    height: 335px;
    img {
      width: 100%;
      height: 100%;
      -webkit-transition: all 0.2s linear;
      transition: all 0.2s linear;
      &:hover {
        @include prefix-key(transform,scale(1.1, 1.1));
        -webkit-filter: contrast(130%);
        filter: contrast(130%);
      }
    }
  }
  .pro-gif {
    position: relative;
    height: 45px;
    margin-right: 10px;
    .gif {
      position: absolute;
      height: 80px;
      width: 80px;
      border-radius: 50%;
      background: #fff;
      top: -40px;
      left: 45px;
    }
    .gifplay {
      position: absolute;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      top: -34px;
      left: 50px;
      background: url("../../../images/play.gif") no-repeat;
      -webkit-transition: all 0.5s linear;
      transition: all 0.5s linear;
      &:hover {
        @include prefix-key(transform,rotate(-170deg));
        @include prefix-key(transform-origin,right);
      }
    }
    .link--mallki {
      font-weight: 800;
      color: #4dd9d5;
      overflow: hidden;
      position: absolute;
      display: inline-block;
      font-size: 16px;
      right: 0;
      top: 10px;
      &:hover {
        color: transparent;
      }
      &::before {
        content: "";
        width: 100%;
        height: 6px;
        margin: -3px 0 0 0;
        background: #4dd9d5;
        position: absolute;
        left: 0;
        top: 50%;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        @include prefix-key(transition,transform 0.5s);
        -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
        transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
      }
      &:hover::before {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
    }
  }
  .gif-footer {
    background: #fff;
    padding: 0 10px 0 30px;
  }
}
</style>
