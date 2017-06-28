<template>
  <transition name="fade" mode="in-out">
    <!-- 内容状态 加载中 -->
    <div v-if="!this.$store.state.latestJSON.article" class="article-loading" v-html="this.$store.state.articleLoadState.current">
    </div>
    <!-- 内容状态 加载完成 -->
    <div v-else class="nodes">
      <input class="filterSearch" v-model="filterSearchVal" placeholder="分类搜索">
      <p>{{ this.filtedArr }}</p>
      <ul class="nodes-cut">
        <li class="node" v-for="item in getNodeList" :key="item.id">
          <a target="_self" :href="'/#/topic/' + item.name">
            <ul>
              <li class="node-name">{{item.title}}</li>
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
    data () {
      return {
        filterSearchVal: '',
        filtedArr: []
      }
    },
    created () {
      this.$store.dispatch('getTopic', 'nodeAll')
      this.flushNodeList()
    },
    methods: {
      // 查询指定名称的节点
      // 并且刷新节点列表
      flushNodeList () {
        this.filtedArr = this.$store.commit('flushNodeList', {
          query: this.filterSearchVal
        })
      }
    },
    computed: {
      // 获取节点列表
      getNodeList () {
        // 搜索内容为空直接返回全部节点
        if (this.filterSearchVal === '') {
          return this.$store.state.latestJSON.article
        } else {
          // 否则返回包含指定名称的节点
          // 刷新列表
          this.flushNodeList()
          return this.$store.state.latestJSON.filterArticle
        }
      }
    }
  }
</script>

<style>
  .filterSearch {
    margin: 0 0 10px 0;
    padding: 10px;
    width: 100%;
  }
  .nodes {
    margin: 20px 20px 60px 20px;
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
