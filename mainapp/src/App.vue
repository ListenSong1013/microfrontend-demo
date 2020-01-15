<template>
  <section >
    <header class="header">
      this is header
    </header>
    <div class="main-content">
      <ol>
        <router-link v-for="i in config" :key="i.path" :to="i.path" tag="li" active-class="active">
          {{ i.name }}
        </router-link>
      </ol>
      <div v-if="loading" class="loading">Loading..., Waiting sub app mount</div>
      <div class="app-container" v-else v-html="content" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'framework',
  props: {
    loading: Boolean,
    content: String,
    config: Array
  },
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  color: #fff;
  background-color: #409EFF;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
}
section {
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1;
  background-color: #fff;
  display: flex;
}
.app-container {
  flex: 1;
  padding:  30px;
}
.loading {
  flex: 1;
  text-align: center;
  padding-top: 160px;
}
ol {
  width: 160px;
  height: 100%;
  background-color: rgb(48, 65, 86);
  padding: 0;
  margin: 0;
}
li {
  cursor: pointer;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  &:hover {
    background-color: #263445!important;
  }
  &.active {
    color: rgb(64, 158, 255);
  }
}
li > a {
  display: block;
  height: 100%;
}
</style>
