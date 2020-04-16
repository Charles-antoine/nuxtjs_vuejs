<template>
    <section>
        <MenuDesktop/>
        <div class="container">
            <div class="row">
                <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
                <template slot="header">
                    Bootstrap Vue
                </template>
                <template slot="lead">
                    This is a simple hero unit, a simple jumbotron-style component for
                    calling extra attention to featured content or information.
                </template>
                <hr class="my-4">
                <p>
                    It uses utility classes for typography and spacing to space content
                    out within the larger container.
                </p>
                </b-jumbotron>

                <b-container class="bv-example-row">
                    <b-row>
                        <b-col>1 of 3</b-col>
                        <b-col>2 of 3</b-col>
                        <b-col>3 of 3</b-col>
                    </b-row>
                </b-container>
                <div>
                <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Something else here...</b-dropdown-item>
                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                </b-dropdown>
                </div>
                <b-card title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>                
            </div>
        </div>
    </section>
</template>

<script>
import MenuDesktop from "~/components/MenuDesktop";
import TweenMax from 'gsap'
import TimelineMax from 'gsap'

export default {
    components: {
            MenuDesktop
        }
    }
</script>

<style scoped>
.container {
    background-color: pink;
}
</style>
