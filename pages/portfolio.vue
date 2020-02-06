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
                </b-list-group>
            </b-col>
        </b-row>
        <b-row class="align-self-center w-75">
            <b-col class="col-4" v-for="(items, index) in activeGallery" :key="index">
                <a v-b-modal.modal-1><b-img class="w-100" :src="categorie === 0 ? items.image : items.categorieid == categorie ? items.image : ''"/></a>
            </b-col>
        </b-row>
        <b-modal id="modal-1">
            <img class="w-100" />
        </b-modal>
    </b-container>
</template>

<script>
import Nav from '~/components/nav';
import axios from 'axios';

export default {
    components: {
        Nav,
    },
    async asyncData({ params }) {
        const gallery =  await axios.get('http://localhost:3000/api/galerij');
        return {
            gallery: gallery.data.galerij
        }
    },
    mounted() {
        
    },
    data() {
        return {
            image: [],
            categorie: 0,
        }
    },
    computed: {
        activeGallery() {
            if(this.categorie === 0 ) {
                return this.gallery
            } else {
                return this.gallery.filter(el => el.categorieid === this.categorie);
            }
        }
    }
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