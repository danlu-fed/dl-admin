<template>
  <div class="dl-admin">
    
    <dl-header></dl-header>
    
    <el-row class="dl-wraper">
      <el-col :span="3">
        <div class="dl-menu">
          <dl-menu><dl-menu>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="dl-content">
          <transition>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
      </el-col>
    </el-row>

    <dl-footer></dl-footer>
  </div>
</template>

<script>
  import "./components/style/theme";
  import {dlHeader, dlMenu, dlFooter} from "./views/common";
  export default {
    components: {dlHeader, dlMenu, dlFooter}
  }
</script>

<style lang="less">
  .dl-admin {
    .dl-wraper {
      min-height: 720px;
      .dl-menu {
        background: #fff;
        border-right: 1px solid #e9e9e9;
        min-height: 720px;
      }
      .dl-content {
        position: relative;
        background: #fff;
        min-height: 720px;
        .dl-breadcrumb {
          font-size: 12px;
          height: 40px;
          line-height: 40px;
          padding-left: 20px; 
        }
        .dl-business {
          background: #e3e3e3;
          min-height: 680px;
          padding: 10px 20px;
        }
      }
    }
  }
</style>