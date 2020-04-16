<template>
  <section>
    <div>
      <MenuDesktop/>
      <ImgEffect/>
      <PartOne/>
      <Cards/>
      <PartThree/>
      <Hero/>
      <Todo/>      
    </div>
  </section>
</template>





<script>
import Vue from 'vue'
import TweenMax from 'gsap'
import TimelineMax from 'gsap'
import PartOne from '~/components/PartOne.vue'
import PartThree from '~/components/PartThree.vue'
import ImgEffect from "~/components/subComponents/ImgEffect";
import MenuDesktop from "~/components/MenuDesktop";
import Todo from "~/components/subComponents/Todo";
import Cards from "~/components/Cards";
import Hero from "~/components/Hero";
import checkView from "vue-check-view";


Vue.use(checkView);

export default {
  data  () {
    return {
    }
  },  
  components: {
    PartOne,
    PartThree,    
    ImgEffect,
    MenuDesktop,
    Cards,
    Todo,
    Hero
  }
}
</script>

<style scoped>

</style>

