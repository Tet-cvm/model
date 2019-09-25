<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
*{margin:0px;padding:0px;font-size:0.32rem;border:0px;margin:0px;padding:0px;outline: 0;-webkit-text-size-adjust: none;-webkit-tap-highlight-color: transparent;-webkit-box-sizing: border-box;box-sizing: border-box;}
html,body{margin:0px;padding:0px;width:100%;font-family: 'Avenir', Helvetica, Arial, sans-serif;font-size:0.32rem;background-color:#f4f4f4;}
img{display:block;}
a, u{text-decoration:none;}
b, em, i{font-weight:normal;font-style:normal;}
ul li{list-style-type:none;}
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}
div {cursor: pointer;}
</style>