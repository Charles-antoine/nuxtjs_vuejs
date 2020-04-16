<template>
  <div class="partOne container">
    
    <div class="row">
      <div class="col-sm-8 offset-sm-2"  data-aos="fade-up"  data-aos-once="true">
        <h1 class="title">{{title}}</h1>
        <p class="center">{{subtitle}}</p>
      </div>
    </div>

    <div class="row desc">
        <div class="col-sm-12">
          <Card></Card>
        </div>
        <div class="col-sm-12">
          <div class="row">
            <h2 class="col-sm-12 col-md-6"  data-aos="fade-up"  data-aos-once="true">{{title2}}</h2>
            <p class='subtitle col-sm-12 col-md-6'  data-aos="fade-up"  data-aos-once="true">{{subtitle2}}</p>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import Card from './subComponents/Card.vue'
export default {
  name : 'PartOne',
  data () {
    return {
      img : './src/assets/images/homePage/ej_450_delphi_lowres_96dpi_24.jpg',
      title : 'CAFÉ ICÔNE',
      subtitle : 'A la croisée entre un club anglo-saxon, un café scandinave et une boutique hôtel, Icône a été créé pour casser les codes de la Défense et proposer une alternative à l’image « corporate » véhiculée par le quartier d’affaires.',
      title2 : 'Comment ça marche',
      subtitle2 : 'Chaque expérience Icône est singulière. A la carte, c’est vous qui décidez comment utiliser l’espace en fonction de vos besoins et de vos envies : passer une heure ou une journée, seul ou à plusieurs, isolé ou dans l’espace chill, café ou thé, en musique ou un casque sur les oreilles… Chez Icône, on aime avant tout la simplicité et la transparence, vous avez le choix entre deux options pour accéder à l’espace : Nomade : vous payez au temps passé, les consommations sont à discrétion, Premium : un abonnement mensuel créé pour les membres premium permet un accès exclusif à l’ensemble des services Icône.'
}
  },
  methods: {
    animateIn : () => {
      console.log('TITRE VISIBLE');
    }
  },
  mounted () {

  },
  components : {
    'Card': Card
  }
}
</script>
<style scoped>
.container {
  background-color: white;
}
.partOne {
  /* background-color: #2c3e50; */
  padding: 6rem 0 3rem;
}


.desc {
  padding: 50px 0 0;
}

.contact {
  padding-top: 100px;
}

h1, h2 {
  color: #333;
}
h1{
  text-align: center;
  padding-bottom: 40px;
}

h2 {
  text-align: center;
  text-transform: uppercase;
  padding: 50px 0 25px;  
}

@media (min-width: 768px) {
  h2{
    text-align: left;
  }
};

p {
  color: #333;
}
.title {
  font-weight:900;
  font-size:3rem;
  margin-bottom:0;
  padding-bottom:1rem;
}
.center {
  text-align:center;
  color:#3d1f19;
}
.subtitle {
  padding-top:50px;
}
</style>
