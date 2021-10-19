<template>
    <div id="app">
        <h3>{{title}}</h3>
        <!-- <Character v-bind:id="3"/> -->
        <div class="col-md-12">
            <Character v-for="(id, index) in init_ids" :id="id" key="index"/>
        <!-- <Character /> -->
        </div>
  
        <!-- <button class="btn btn-primary" @click="checkResponse">Test response</button> -->
        <!-- <button class="btn btn-danger" @click="fetchCharacter">Test Fetch Character</button> -->

    </div>
</template>

<script>
import Character from './components/Character.vue'

export default 
{
    name: 'app',

    data(){
        return {
            title: "Starbase",
            init_ids: [1,2,3]

        }
    },

    components: {
        Character
    }

}
</script>
