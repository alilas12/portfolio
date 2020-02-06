<template>
    <div>
  <b-card body-class="text-center" header-tag="nav">
    <template v-slot:header>
      <b-nav class="text-dark" v-if="showtitle === 0 ? 'show' : null" card-header tabs>
        <b-nav-item @click="showtitle = 0" active>Personal Details</b-nav-item>
        <b-nav-item @click="showtitle = 1">Skills</b-nav-item>
        <b-nav-item @click="showtitle = 2">Work</b-nav-item>
      </b-nav>
      <b-nav v-if="showtitle === 1 ? 'show' : null" card-header tabs>
        <b-nav-item @click="showtitle = 0">Personal Details</b-nav-item>
        <b-nav-item @click="showtitle = 1" active>Skills</b-nav-item>
        <b-nav-item @click="showtitle = 2">Work</b-nav-item>
      </b-nav>
      <b-nav v-if="showtitle === 2 ? 'show' : null" card-header tabs>
        <b-nav-item @click="showtitle = 0">Personal Details</b-nav-item>
        <b-nav-item @click="showtitle = 1">Skills</b-nav-item>
        <b-nav-item @click="showtitle = 2" active>Work</b-nav-item>
      </b-nav>
    </template>

    <!-- Personal Details -->
    <b-container v-if="showtitle === 0">
      
        <b-form>
          <v-row>
            <!-- Personal info -->
            <v-col cols="12">
              <v-textarea name="info" v-model="aboutme[0].info" color="teal">
                <template v-slot:label>
                  <div>
                    Intro
                  </div>
                </template>
              </v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <!-- List name -->
            <v-col cols="5" sm="6">
              <v-text-field name="name" v-model="aboutme[0].name" label="Name" clearable></v-text-field>
            </v-col>

            <!-- List birthday -->
            <v-col cols="5" sm="6">
              <v-text-field name="birthday" v-model="aboutme[0].birthday" label="Birthday" hint="(dd-mm-yyyy)" clearable></v-text-field>
            </v-col>

            <!-- List job -->
            <v-col cols="5" sm="6">
              <v-text-field name="job" v-model="aboutme[0].job" label="Job" clearable></v-text-field>
            </v-col>

            <!-- List email -->
            <v-col cols="5" sm="6">
              <v-text-field name="email" v-model="aboutme[0].email" label="Email" clearable></v-text-field>
            </v-col>

            <!-- List phonenumber -->
            <v-col cols="5" sm="6">
              <v-text-field name="phone" v-model="aboutme[0].phone" label="Phone" clearable></v-text-field>
            </v-col>

            <!-- List location -->
            <v-col cols="5" sm="6">
              <v-text-field name="location" v-model="aboutme[0].location" label="Location" clearable></v-text-field>
            </v-col>
            <b-form-input hidden name="id" v-model="aboutme[0].id" label="Name"></b-form-input>
          </v-row>
          <b-button @click="editAboutMe" class="float-right" variant="primary">Save</b-button>
        </b-form>
    </b-container>

    <!-- Skills -->
    <b-container>
      
    </b-container>

    <!-- Work -->
    <b-container v-if="showtitle === 2">
      <v-row class="mb-2">
        <v-col cols="5" sm="6">
          <v-text-field label="Development" clearable></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea  color="teal">
            <template v-slot:label>
              <div>
                Info development
              </div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
      <v-row class="mb-2">
        <v-col cols="5" sm="6">
          <v-text-field label="Design" clearable></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea  color="teal">
            <template v-slot:label>
              <div>
                Info design
              </div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
      <v-row class="mb-2">
        <v-col cols="5" sm="6">
          <v-text-field label="Webdevelopment" clearable></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea  color="teal">
            <template v-slot:label>
              <div>
                info webdevelopment
              </div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
      <b-button class="float-right" variant="primary">Save</b-button>
    </b-container>
  	
  </b-card>
</div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ params }) {
    try {
      	const res =  await axios.get('http://localhost:3000/api/aboutme');
        return {
            aboutme: res.data.aboutme
        }
    } catch(err) {
      console.log(err)
    }
  },
  data() {
    return {
      showtitle: 0,
    }
  },
  methods: {
    async editAboutMe() {
      try {
        this.$axios.$post('http://localhost:3000/api/aboutme/updatepersonal', this.aboutme[0]);
        this.$router.replace('/admin/aboutme');
        this.$toasted.success('Successfully Updated!').goAway(2000);
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>