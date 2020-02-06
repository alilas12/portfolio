<template>
    <b-card body-class="text-center" header-tag="nav">
    <template v-slot:header>
      <v-btn class="float-right">Toevoegen</v-btn>
      <b-nav class="text-dark" v-if="categorie === 0 ? 'show' : null" card-header tabs>
        <b-nav-item @click="categorie = 0" active>All</b-nav-item>
        <b-nav-item @click="categorie = 1">Webdevelopment</b-nav-item>
        <b-nav-item @click="categorie = 2">Design</b-nav-item>
        <b-nav-item @click="categorie = 3">Development</b-nav-item>
      </b-nav>
      <b-nav v-if="categorie === 1 ? 'show' : null" card-header tabs>
        <b-nav-item @click="categorie = 0">All</b-nav-item>
        <b-nav-item @click="categorie = 1" active>Webdevelopment</b-nav-item>
        <b-nav-item @click="categorie = 2">Design</b-nav-item>
        <b-nav-item @click="categorie = 3">Development</b-nav-item>
      </b-nav>
      <b-nav v-if="categorie === 2 ? 'show' : null" card-header tabs>
        <b-nav-item @click="categorie = 0">All</b-nav-item>
        <b-nav-item @click="categorie = 1">Webdevelopment</b-nav-item>
        <b-nav-item @click="categorie = 2" active>Design</b-nav-item>
        <b-nav-item @click="categorie = 3">Development</b-nav-item>
      </b-nav>
      <b-nav v-if="categorie === 3 ? 'show' : null" card-header tabs>
        <b-nav-item @click="categorie = 0">All</b-nav-item>
        <b-nav-item @click="categorie = 1">Webdevelopment</b-nav-item>
        <b-nav-item @click="categorie = 2">Design</b-nav-item>
        <b-nav-item @click="categorie = 3" active>Development</b-nav-item>
      </b-nav>
    </template>
    <b-container fluid class="d-flex flex-column" v-if="categorie === 0">
        <v-simple-table height="500">
            <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">Image</th>
                    <th class="text-left">Categorie</th>
                    <th class="text-left">Acties</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(items, index) in activeGallery" :key="index">
                    <td class="text-left"><b-img style="width: 100px;" :src="categorie === 0 ? items.image : items.categorieid == categorie ? items.image : ''"/></td>
                    <td class="text-left">{{ items.categorieid }}</td>
                    <td class="text-left"><v-btn>Delete</v-btn></td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </b-container>
  </b-card>
</template>

<script>
import axios from 'axios';

export default {
    async asyncData({ params }) {
        const gallery =  await axios.get('http://localhost:3000/api/galerij');
        return {
            gallery: gallery.data.galerij
        }
    },
    mounted() {
        console.log(this.gallery)
    },
    data() {
        return {
            categorie: 0
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