<template>
  <div class="container partTwo">
    <div class="row">
      <div v-for="(number,index) in numbers" :key="index" class="col-sm-6">
      <Card
      :img="number.url"
      :bootClass="number.class"
      :id="index"
      ></Card>
      </div>

      <!-- <Card
      v-for="number in numbers"
      v-bind:img="number.url"
      v-bind:key="number.id"
      v-bind:bootClass="number.class"
      ></Card> -->
    </div>
  </div>
</template>

<script>
import Card from './subComponents/Card.vue'
export default {
  name : 'PartOne',
  data () {
    return {
      numbers: [
         {url : require('@/assets/images/homePage/EJ-450-E15_Delphi_Stine-Goya_lowres_72dpi_03.jpg'), class :
         "col-sm-4"},
         {url :
         require('@/assets/images/homePage/EJ-450_Delphi_Low-res-72-dpi_The-Danish-Home-Stockholm_Photo_Evan-Pantiel-David-Thunander_05-1920x1279.jpg'),
         class : "col-sm-4"},
         {url : require('@/assets/images/homePage/ej_450_delphi_lowres_96dpi_19.jpg'), class : "col-sm-4"},
         {url : require('@/assets/images/homePage/index.jpg'), class : "col-sm-6"}
        ]
    }
  },
  methods: {
  },
  components : {
    'Card': Card
  }
}
</script>
<style scoped>

.partTwo{
  padding-bottom: 3rem;
}
</style>
