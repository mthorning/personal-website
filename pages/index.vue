<template>
<div id="enter" class="container">
  <h1>Enter</h1> 
</div>
</template>

<script>
export default {
  layout: 'home'
}
</script>

<style lang="scss" scoped>
#enter {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-style: italic;
    font-size: 48px;
    color: $highlight;
  }
  h1:before {
    content: '//';
    font-style: normal;
  }
}
</style>


