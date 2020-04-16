<template>
  <div class="partThree ">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <h1 class="title"  data-aos="fade-up" data-aos-once="true">{{title2}}</h1>
          <p class="center"  data-aos="fade-up" data-aos-once="true">{{subtitle2}}</p>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import Card from './subComponents/Card.vue'
export default {
  name : 'PartTwo',
  data () {
    return {
      title2 : 'Comment ça marche',
      subtitle2 : 'Chaque expérience Icône est singulière. A la carte, c’est vous qui décidez comment utiliser l’espace en fonction de vos besoins et de vos envies : passer une heure ou une journée, seul ou à plusieurs, isolé ou dans l’espace chill, café ou thé, en musique ou un casque sur les oreilles… Chez Icône, on aime avant tout la simplicité et la transparence, vous avez le choix entre deux options pour accéder à l’espace : Nomade : vous payez au temps passé, les consommations sont à discrétion, Premium : un abonnement mensuel créé pour les membres premium permet un accès exclusif à l’ensemble des services Icône.'
}
  },
  methods: {
    animateIn : () => {

    }
  },
  mounted () {
    // console.log('FUCK');
  },
  components : {
  }
}
</script>
<style scoped>

.partThree {
  padding: 12rem 0 12rem!important;
  background-color: #cc7a91;
}

@media (min-width: 768px) {

};

p {
  color: white;
  font-weight:200;
}

.title {
  font-weight:900;
  font-size:3rem;
  margin-bottom:0;
  padding-bottom:2rem;
  text-align: center;
  color: white;  
}
.center {
  text-align:center;
}
.subtitle {
  padding-top:50px;
}
</style>
