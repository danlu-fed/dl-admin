<template>
  <header>
    <el-row>
      <el-col :span="3">
        <a href="" class="logo">
          <img src="../assets/logo.png" alt="">
        </a>
      </el-col>
      <el-col :span="20">
        <span class="logo-font">&nbsp;运营平台</span>
        <div class="profile">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">jazzysnail<i class="el-icon-caret-bottom el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的资料</el-dropdown-item>
              <el-dropdown-item>安全退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
  export default {
    name: 'dl-header'
  }
</script>

<style lang="less">
  header {
    border-bottom: 1px solid #e9e9e9;
    background: #fff;
    line-height: 60px;
    .logo {
      float: right;
      padding-right: 8px;
      img {
        vertical-align:middle;
      }
    }
    .el-dropdown-link {
      cursor: pointer;
    }
    .profile {
      float: right;
    }
  }
</style>