<template>
    <div class="container content">
        <div class='row texteeffect'>
            <div class="col-sm-10" id="insideText">
                <h4 class="effect">UP CLOSE AND PERSONAL WITH SHUFFL</h4>
                <h1 class="effect">BY ANNE BOYSEN</h1>
                <p class="effect">WITH A PASSION<br/> FOR DESIGN</p>
                <router-link class="button effect" v-bind:to="'home'">read more</router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name : 'TxtEffect',
    data () {
        return {

        }
    },
    methods : {
        animeIn : function () {
            let tl = new TimelineMax({delay:2});
            tl.add(TweenMax.staggerTo('.effect', 1, {
              opacity: '1',
              y: -50,
              ease: Power4.easeOut
        }, 0.2));
            {/* console.log('ANIME IN'); */}
        },
        animeOut : function () {
            let tlOut = new TimelineMax({delay:0});
             tlOut.add(TweenMax.staggerTo('.effect', 1, {
               opacity: '0',
               y: -20,
               ease: Power4.easeOut
             }, 0.1));
            {/* console.log('ANIME OUT'); */}
        }
    },
    mounted : function (a) {
            this.animeIn();
    }    
}
</script>


<style scoped>
.content {
    position: absolute;
    z-index: 4;
    top:0;
    left: 0;
    height: 100vh;
}
.texteeffect {
        position: absolute;
        /* transform: translate(50%,-50%); */
        bottom:4rem;
        left: 5%;
        text-align: left;
    }

    h1, h4, p, #insideText .button {
        font-weight: 900;
        color: #333;
        /* opacity:1; */
    }
    .effect{
        opacity:0;
    }
    a {
        transition: all .3s ease-in-out;
    }
    .button {
        display: inline-block;
        margin-top: 20px;
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-size: 0.85rem;;
    }
    .button::after {
        content :"";
        display:block;
        width:100%;
        height:1px;
        background: #333;
        transform: scaleX(0);
        transition: all .3s ease-in-out;
    }
    .button:hover, a:hover{
        text-decoration:none;
        color:green!important;
    }
    .button:hover::after{
        transform: scaleX(1);
        background: green;
    }
</style>
