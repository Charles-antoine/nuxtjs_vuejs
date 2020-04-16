<template>
    <div id="menu" class='menu-container'>
        <b-navbar toggleable="md" type="dark" variant="faded">


        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
            <b-nav-item to="/">Accueil</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content">
                <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name:'MenuDesktop',
        methods : {
            animeIn : function () {
            let tl = new TimelineMax({delay:3, immediateRender:false});
            // tl.set( '.menu-container', {top:'-50px'} )
            tl.add(TweenMax.to( '.menu-container', 1, {top:'0px'}, 2 ));
            // console.log('ANIME IN');
            }
        },
        mounted : function (a) {
            let $page = $nuxt.$route.path;
            if( $page =='/'){
                this.animeIn();
                }else{
                    var element = document.getElementById("menu");
                    element.classList.add("mystyle");
                }
        }          
    }
</script>
<style scoped>
.menu-container {
    background-color: transparent;
    width: 100vw;
    position: fixed;
    top: -50px;
    z-index: 10;
}
.mystyle {
      top: 0px;
}
a {
    color:#333333;
    font-weight: 200;
    text-transform: uppercase;
    font-size: 0.85rem;
}
.navbar-nav .nav-link,.navbar .nav-link.active, .navbar a, 
.navbar-dark .navbar-nav .nav-link {
        color : #3d1f19;
        transition:all .25s ease-in-out;

}
.navbar .nav-link.active{
    font-weight:900;
    opacity:0.5;
}
.navbar-nav .nav-link:hover{
    color:green;
}
</style>
