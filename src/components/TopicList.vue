<template>
  <transition name="fade" mode="in-out">
    <!-- 内容状态 加载中 -->
    <div v-if="!this.$store.state.latestJSON.article" class="article-loading" v-html="this.$store.state.articleLoadState.current">
    </div>
    <!-- 内容状态 加载完成 -->
    <div v-else class="nodes">
      <ul class="nodes-cut">
        <li class="node" v-for="item in this.$store.state.latestJSON.article">
          <a target="_self" :href="'/#/topic/' + item.name">
            <ul>
              <li class="node-name">{{item.name}}</li>
              <li class="node-info" v-html="item.header !== null ? item.header : '介绍为空'"></li>
            </ul>
          </a>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'topic-list',
    created () {
      this.$store.dispatch('getTopic', 'nodeAll')
    }
  }
</script>

<style>
  .nodes {
    margin: 20px 0 60px 20px;
  }
  .nodes-cut {
    overflow: hidden;
  }
  .node {
    border: 1px solid #2196f3;
    display: block;
    width: 130px;
    height: 100px;
    padding: 10px 20px;
    margin: 0 20px 20px 0;
    float: left;
    overflow: hidden;
  }
  .node-name {
    text-align: center;
    border-bottom: 1px solid #2196f3;
    padding-bottom: 5px;
  }
  .node-info {
    font-size: 14px;
    padding-top: 5px;
  }
</style>
