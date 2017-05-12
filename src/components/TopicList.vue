<template>
  <div v-if="!this.$store.state.apiState.val" class="loading">
    loading...(no more than 120 times request per hour)
  </div>
  <div v-else class="nodes">
    <ul class="nodes-cut">
      <li class="node" v-for="item in this.$store.state.apiState.val">
        <a target="_self" :href="'/#/topic/' + item.name">
          <ul>
            <li class="node-name">{{item.name}}</li>
            <li class="node-info" v-html="item.header !== null ? item.header : '介绍为空'"></li>
          </ul>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'topic-list',
    data () {
      return {}
    },
    created () {
      this.$store.dispatch('getTopic', 'nodeAll')
      this.val = this.$store.getters.getApiVal
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
