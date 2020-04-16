<template>
  <div data-aos="fade-in"  data-aos-once="true">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

    <!-- <img :src="require(`@/assets/images/homePage/${images[0].imgSrc}`)" alt=""> -->
      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        :img-src="require(`@/assets/images/homePage/${images[1].imgSrc}`)"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
                        :img-src="require(`@/assets/images/homePage/${images[2].imgSrc}`)"
      >
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide 
                        :img-src="require(`@/assets/images/homePage/${images[3].imgSrc}`)"
      >
      </b-carousel-slide>


      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
            :img-src="require(`@/assets/images/homePage/${images[0].imgSrc}`)" 
             alt="image slot">
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->

    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->

  </div>
</template>

<script>
export default {
  name : 'Hero',
  data () {
    return {
      slide: 0,
      sliding: null,
      images : [
        {id:1, imgSrc :'EJ-450_delphi_daybed_Home-Collection_16.jpg'},
        {id:2, imgSrc :'EJ-450_Delphi_Low-res-72-dpi_The-Danish-Home-Stockholm_Photo_Evan-Pantiel-David-Thunander_05-1920x1279.jpg'},
        {id:3, imgSrc :'ej_450_delphi_lowres_96dpi_24.jpg'},
        {id:4, imgSrc :'ej_450_delphi_lowres_96dpi_15.jpg'}
        ]
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>