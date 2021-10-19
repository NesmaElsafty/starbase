<template>
    <div class="col-md-4" @click="switchChar">
    <div class="character-card"> 
    <div class="card-block"> 
        <h4 class="card-title">{{character.title}}</h4>
        <p class="card-text">Episode ID{{character.episode_id}} </p>
        <p class="card-text">Director {{character.director}}</p>
        <p class="card-text">Producer {{character.producer}}</p>
        <p class="card-text">Opening Crawl {{character.opening_crawl}}</p>
    </div>
    </div>
    </div>

</template>


<script>

export default ({
    props:['id'],
    data() {
        return {
            character: {}
        }
    },
    
    methods: {
        fetchCharacter(id){
            fetch(`https://swapi.dev/api/films/${id}`,{
                method:'GET'
            }).then(response => response.json())
              .then(json=>this.character = json)        //storing json object to variable or property
            //   .then(json=>console.log(respnose)) //fetch json request u have
            
        },
        switchChar(){
            let randomID = Math.floor(Math.random() * 5) + 1
            this.fetchCharacter(randomID)
            console.log(randomID)
        },
    },
    created(){
            this.fetchCharacter(this.id)
        },
})
</script>
