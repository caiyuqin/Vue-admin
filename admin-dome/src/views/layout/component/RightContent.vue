<template>
  <div class="rightContent">
    <nav-bar></nav-bar>
    <tags-view></tags-view>
    <content-box></content-box>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue"
import TagsView from "./TagsView.vue"
import ContentBox from "./ContentBox.vue"
export default {
  components:{
    NavBar,
    TagsView,
    ContentBox
  }
}
</script>
