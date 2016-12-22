<template>
  <div>
    <div class="dl-notfound">
      <h2>迷路了？</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dl-notfound'
  }
</script>

<style lang="less">
  .dl-notfound {
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