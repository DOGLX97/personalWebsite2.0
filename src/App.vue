<template>
  <div id="app">
    <common-header></common-header>
    <ul class="header-sub-list">
      <li class="selected">
          <router-link to="">个人介绍</router-link>
      </li>
      <li>
          <router-link to="">个人技能</router-link>
      </li>
      <li>
          <router-link to="">项目经验</router-link>
      </li>
      <li>
          <router-link to="">个人生活</router-link>
      </li>
    </ul>
    <router-view/>   
  </div>
</template>

<script>
import commonHeader from './components/common/Header'
export default {
  name: 'app',
  components:{
    commonHeader
  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header-sub-list{
    height: 30px;
    background: #2c3e50;
}
.header-sub-list li{
   float: left;
   width: 25%;
   height: 30px;
   line-height: 30px;
}
.header-sub-list a{
    color: #fff;
}
.header-sub-list .selected{
    background: #e96f59;
}
</style>
