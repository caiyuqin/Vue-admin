<template>
   <div class="app-wrapper">
       <Loading v-if="loadingshow"></Loading>
       <left-nav></left-nav>
       <right-content></right-content>
   </div>
</template>

<script>
import { LeftNav, RightContent } from "./component";
import Loading from "../../components/Loading/Loading.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    LeftNav,
    RightContent,
    Loading
  },
  computed: mapGetters(["loadingshow"])
};
</script>
<style lang="scss">
@import "../../assets/css/index.scss";
</style>

