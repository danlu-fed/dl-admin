<template>
  <div>
    <div class="dl-building">
      <h2>页面构建中...</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dl-building'
  }
</script>

<style lang="less">
  .dl-building {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #f0f5fa url(../assets/pagebuilding.png) no-repeat center center;
    h2 {
      margin-top: 60px;
      text-align: center;
      color: #aac6e3;
    }
  }
</style>