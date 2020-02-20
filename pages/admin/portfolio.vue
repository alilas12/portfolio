<template>
    <b-card body-class="text-center" header-tag="nav">
    <template v-slot:header>
      <v-btn v-b-modal.modal-1 class="float-right">Toevoegen</v-btn>
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
                    <th class="text-left ">Acties</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(items, index) in activeGallery" :key="index">
                    <td class="text-left p-3"><b-img style="width: 100px;" :src="categorie === 0 ? items.image : items.categorieid == categorie ? items.image : ''"/></td>
                    <td class="text-left">{{ items.categorieid }}</td>
                    <td class="text-left"><v-btn>Delete</v-btn></td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </b-container>
    <b-modal hide-footer id="modal-1" title="Foto toevoegen">
        <v-col cols="5" sm="12">
            <v-text-field name="image" label="Url" clearable></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
            <v-combobox v-model="gallery.categorieid" :items="categoryphoto" label="Categorie"></v-combobox>
        </v-col>
        <b-button class="mt-3" bg="info" block @click="$bvModal.hide('modal-1')">Toevoegen</b-button>
    </b-modal>
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
            categorie: 0,
            categoryphoto: ['Webdevelopment', 'Design', 'Development'],
        }
    },
    methods: {
        async pushGallery() {
            try {
                this.$axios.$post('http://localhost:3000/api/galerij/insertingallery', this.gallery);
                this.$router.replace('/admin/portfolio');
            } catch(err) {
                console.log(err)
        }
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
</style>