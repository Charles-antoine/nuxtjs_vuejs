<template>
  <div class="card-container">
    <div class="card" :id="'card-'+ id" v-on:mouseover='over' v-on:mouseleave='leave'>
      <div class="back" :style="{backgroundImage :'url(' +  img + ')'}"></div>
      <div class="front" ></div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Card',
  data () {
    return {
      idName: "card-",
      $back: null
      
      }
  },
  props :{
    img : {
      type : String,
      default: require('@/assets/images/homePage/ej_450_delphi_lowres_96dpi_24.jpg')
      },
      bootClass : {
        type : [String, Number],
        default : 'col-sm-12'
      },
      id : {
        type: [String, Number]
      }
  },
  computed : {
     imagepath : function () {
       return this.img;
     }
  },
  created () {
    if (process.browser) { 
      window.addEventListener('scroll', this.handleScroll);
    }
      this.idName = "card-" + this.id;
  },  
  mounted() {
        this.$back = document.getElementById(this.getTheId()).getElementsByClassName('back');
        this.handleScroll ();
   },
  methods: {
     getTheId() {
       return this.idName;
     },    
      animateIn() {
          let $card = document.getElementById(this.idName );
          let $front = document.getElementById(this.getTheId()).getElementsByClassName("front");
          let tl = new TimelineLite({delay:0});
          //
          tl.add(TweenLite.to($front ,0.8, {left:"100%", ease: Sine.easeOut, delay:0}));
          tl.add(TweenLite.to($card ,0.5, {opacity:"1", ease: Circ.easeIn, delay:0}));
      },
      handleScroll () {
        let $scrollY = window.scrollY;
        let $windowHeight = window.innerHeight;
        let $element = document.getElementById(this.getTheId()).getBoundingClientRect();
        let $compHeight = $element.top ;

        if ( $windowHeight - 400 >= $compHeight){this.animateIn()};
        
        },
        over (){
          TweenLite.to(this.$back ,0.8, {scale:1.2, ease: Sine.easeOut, delay:0})
        },
        leave (){
          TweenLite.to(this.$back ,0.8, {scale:1, ease: Sine.easeOut, delay:0})
        }  
  }
}
</script>
<style scoped>
.card-container {
  padding:15px 0px;
}
.card {
  position: relative;
  height: 600px;
  border:none;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
}

  .back {
    position: relative;
    z-index: 0;
    width:100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .front{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 1;

  }

</style>
