<template>
    <div id="app">
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>

export default {
  computed:{
  },
  components: {
  },
};
</script>
<style>

/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
body{
  height: 100%;
  padding: 0;
  margin: auto 0;
  
}
</style>