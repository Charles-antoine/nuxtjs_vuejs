<template>
    <div class="container" >
        <div class="row">
            <div class="col-sm-8 offset-sm-2 text-center" >
                <b-form-input v-model="newList" :class="[newList.length < 2 ? '' : 'green']" @keyup.enter="addList" placeholder="ajouter quelque chose à faire"></b-form-input>
                <b-button @click="addList" variant="outline-primary" :disabled="newList.length < 2">Add</b-button>
            </div>
            <div class="col-sm-8 offset-sm-2 text-center">
                <ul>
                    <li v-for="list in lists" :key="list.id">{{list.name | capitalize}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Todo',
    data () {
        return {
            lists:[
                {name: 'events'},
                {name : 'click'},
                {name : 'hover'}
            ],
            newList : ""
        }


    },
    methods:{
        addList: function (event){
            if(this.newList.length>=2){
                this.lists.push({name:this.newList})
                this.newList ='';
            }

        }
    } ,
    filters:{
        capitalize:function(value){
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }   
}
</script>

<style scoped>
.container {
    padding:4rem 0;
}

.btn{
    margin-top:2rem;
}
ul {
    padding-top:2rem;
    padding-left:0;
}
li {
    list-style: none;
    padding:.5rem 0;
    background:#cc7a91;
}
li:nth-child(2n){
    background: white;
}
.red {
    border: 2px solid red;
}

.green {
      border: 2px solid green;
}
</style>


