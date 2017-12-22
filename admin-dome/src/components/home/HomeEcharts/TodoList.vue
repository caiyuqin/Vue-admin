<template>
  <div class="todolist">
      <h1>Todo  List</h1>
      <ul class="todobox">
          <li>
              <el-checkbox>star this repository</el-checkbox>            
          </li>
          <li>
              <el-checkbox v-model="checked">star this repository</el-checkbox>            
          </li>
           <li>
              <el-checkbox>star this repository</el-checkbox>            
          </li>
          <li>
              <el-checkbox v-model="checked">star this repository</el-checkbox>            
          </li>
          <li>
              <el-checkbox>star this repository</el-checkbox>            
          </li>
          <li>
              <el-checkbox v-model="checked">star this repository</el-checkbox>            
          </li>
          <li>
              <el-checkbox v-model="checked">star this repository</el-checkbox>            
          </li>
           <li>
              <el-checkbox v-model="checked">star this repository</el-checkbox>            
          </li>
         
      </ul>
      <footer class="footer">
        <span class="todo-count">
          <strong>3</strong>
          items left
        </span>
        <ul class="filters">
          <li><a class="selected">All</a></li>
          <li><a class="">Active</a></li>
          <li><a class="">Completed</a></li>
        </ul>
      </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>

<style lang="scss" scoped>
.todolist {
  h1 {
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    font-weight: 500;
    font-size: 18px;
    line-height: 50px;
    color: #909399;
    padding: 0 10px;
  }
  .todobox {
    padding: 0 10px;
    li {
      line-height: 50px;
      border-bottom: 1px solid #ebeef5;
    }
  }
  .footer {
    color: #777;
    position: relative;
    padding: 10px 15px;
    height: 45px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    &::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
        0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
        0 17px 2px -6px rgba(0, 0, 0, 0.2);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
        0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
        0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
    .todo-count {
      float: left;
      text-align: left;
    }
    .filters {
      li {
        display: inline;
      }
    }
  }
}
</style>

