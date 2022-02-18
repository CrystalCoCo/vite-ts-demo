<script setup lang="ts">
  import { useStore } from 'vuex'
  import { computed } from 'vue';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  const locale = zhCN
  const store = useStore()
  let spinning = computed(() => store.state.spinning)
</script>

<template>
  <a-config-provider :locale="locale">
    <a-spin :spinning="spinning">
      <router-view />
    </a-spin>    
  </a-config-provider>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
