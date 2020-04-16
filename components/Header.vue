<template>
  <div class="header">
      <div class="backgroundImg" :style="{backgroundImage :'url(' + img + ')'}"></div>
      <div class="effect"></div>
      <div class="contain">
          <h1>{{title}}</h1>
      </div>
  </div>
</template>

<script>
export default {
  name : 'Header',
  data () { 
    return {
      img : require('@/assets/images/homePage/ej_450_delphi_lowres_96dpi_24.jpg'),
      title : 'café minimal'
}
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
