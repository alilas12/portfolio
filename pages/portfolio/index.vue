<template>
    <b-container fluid class="d-flex flex-column">
        <b-row>
            <b-col class="p-0">
                <div class="bg-light btext text-center">
                    <h1>Portfolio</h1>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="p-0 mb-4">
                <b-list-group class="mt-3 justify-content-center" horizontal>
                    <b-list-group-item class="border-0 p-0"><b-button @click="categorie = 0">All</b-button></b-list-group-item>
                    <b-list-group-item class="border-0 p-0 ml-2"><b-button @click="categorie = 1">Webdevelopment</b-button></b-list-group-item>
                    <b-list-group-item class="border-0 p-0 ml-2"><b-button @click="categorie = 2">Development</b-button></b-list-group-item>
                    <b-list-group-item class="border-0 p-0 ml-2"><b-button @click="categorie = 3">Design</b-button></b-list-group-item>
                    <b-button @click="test">test</b-button>
                </b-list-group>
            </b-col>
        </b-row>
        <b-row class="align-self-center w-75">
            <b-col class="col-4" v-for="(items, index) in datagalerij" :key="index">
                <b-img class="w-100" :src="categorie === 0 ? items.image : items.categorieid == categorie ? items.image[i] : ''"/>
            </b-col>
        </b-row>
        <b-modal id="modal-1">
            <img class="w-100" />
        </b-modal>
    </b-container>
</template>

<script>
import Nav from '~/components/nav'
import axios from 'axios'

export default {
    components: {
        Nav,
    },
    asyncData({ params }) {
        return axios.get('http://localhost:3000/api/galerij')
        .then((res) => {
            return {
                datagalerij: res.data.galerij
            }
        })
    },
    data() {
        return {
            image: [],
            categorie: 0,
        }
    },
    methods: {
        test() {
            console.log(this.web)
            console.log(this.design)
            console.log(this.dev)
        }
    },
    // mounted() {
    //   const axios = require("axios");
    //   const APIURL = `api/galerij`;

    //   axios
    //     .get(APIURL)
    //     .then(response => {
    //       const data = response.data.galerij;
          
    //       for(let i = 0; i < data.length; i++){ 
    //           this.datagalerij.push(response.data.galerij[i])
    //       }
    //       console.log(data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
}
</script>

<style lang="scss" scoped>
.modal-header{
    display: none;
}
.none{
    display: none
}
.modal-body{
    background-color: none !important;
}
</style>