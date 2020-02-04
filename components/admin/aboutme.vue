<template>
    <div>
  <b-card body-class="text-center" header-tag="nav">
    <template v-slot:header>
      <b-nav v-if="showtitle === 0 ? 'show' : null" card-header tabs>
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
      <v-row>
        <v-col cols="12">
          <v-textarea  color="teal">
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
          <v-text-field
            label="Name"
            clearable
          ></v-text-field>
        </v-col>

        <!-- List birthday -->
        <v-col cols="5" sm="6">
          <v-text-field
            label="Birthday"
            clearable
          ></v-text-field>
        </v-col>

        <!-- List job -->
        <v-col cols="5" sm="6">
          <v-text-field
            label="Job"
            clearable
          ></v-text-field>
        </v-col>

        <!-- List email -->
        <v-col cols="5" sm="6">
          <v-text-field
            label="Email"
            clearable
          ></v-text-field>
        </v-col>

        <!-- List phonenumber -->
        <v-col cols="5" sm="6">
          <v-text-field
            label="Phone"
            clearable
          ></v-text-field>
        </v-col>

        <!-- List location -->
        <v-col cols="5" sm="6">
          <v-text-field
            label="Location"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
      <b-button class="float-right" variant="primary">Save</b-button>
    </b-container>

    <!-- Skills -->
    <b-container>

    </b-container>

    <!-- Work -->
    <b-container v-if="showtitle === 2">
      <v-row class="border mb-2">
        <v-col cols="5" sm="6">
          <v-text-field
            label="Tekst 1"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea  color="teal">
            <template v-slot:label>
              <div>
                Subtekst1
              </div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
      <v-row class="border mb-2">
        <v-col cols="5" sm="6">
          <v-text-field
            label="Tekst 1"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea  color="teal">
            <template v-slot:label>
              <div>
                Subtekst1
              </div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
      <v-row class="border mb-2">
        <v-col cols="5" sm="6">
          <v-text-field
            label="Tekst 1"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea  color="teal">
            <template v-slot:label>
              <div>
                Subtekst1
              </div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
    </b-container>
  	
  </b-card>
</div>
</template>

<script>
export default {
    data() {
      return {
        showtitle: 0
      }
    }
}
</script>