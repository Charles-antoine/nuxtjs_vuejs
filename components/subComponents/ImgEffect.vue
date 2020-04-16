<template>
    <div class='imgeffect'>
        <div class="hello" :style="{backgroundImage :'url(' + img + ')'}"></div>
        <div class="colorEffect"></div>
        <svg width="100%" height="100%" min-height="100vh" class='mask'>
            <rect  class='rect'  width="100%" height="100%" x="0" y="0" style="fill:#cc7a91;" />
        </svg> 
    <TxtEffect/>

    </div>
</template>


<script>
import TxtEffect from '~/components/subComponents/TxtEffect'

export default {
    name : 'ImgEffect',
    data () {
        return {
            img : require('@/assets/images/homePage/index-2.jpg')
        }
    },
    components : {
        TxtEffect
    },
    methods : {
        animeIn : function () {
            var $front = document.getElementsByClassName('rect');
            var $back = document.getElementsByClassName('hello');
            TweenLite.to($front, 1, {attr:{x:'100vw'}, ease:Power4.easeOut, delay:.5, onComplete:function(){
                TweenMax.set('.mask', {display:'none'});                
            }});
            TweenLite.to($back, 1.5, {opacity:'1',scale:'1', ease:Circ.easeOut, delay:.6});
        }
    },
    mounted : function () {
            this.animeIn();
    }    
}
</script>


<style scoped>


.imgeffect {
    position: relative;
    height: 100vh;
    background:#e9e5e4;
}

.hello {
  position: absolute;
  z-index:0;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center center;
  opacity:0.4;
  transform:scale(.95);
  /* transform:scale(1.1); */
}

.colorEffect {
    width: 100vw;
    min-width: 100vw;;
    height: 100vh;
    /* background-color: rgba(255,255,255,0.15); */
    position: absolute;
    z-index:1;
}
.mask{
    position: absolute;
    z-index: 2;
    left: 0;
}
</style>
