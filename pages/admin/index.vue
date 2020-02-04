<template>
  <v-app id="inspire">
    <v-navigation-drawer app clipped>
      <v-list dense>
        <v-list-item @click="show = null" link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="show = 1" link>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="show = 2" link>
          <v-list-item-action>
            <v-icon>mdi-briefcase</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>portfolio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <v-row class="">
          <v-col>
            <b-container fluid v-if="show === null">
              <Dashboard></Dashboard>
            </b-container>
            <b-container fluid v-if="show === 1">
              <Aboutme></Aboutme>
            </b-container>
            <b-container fluid v-if="show === 2">
              <Portfolio></Portfolio>
            </b-container>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Dashboard from "~/components/admin/dashboard"
  import Aboutme from "~/components/admin/aboutme"
  import Portfolio from "~/components/admin/portfolio"

  export default {
    components: {
      Dashboard,
      Aboutme,
      Portfolio,
    },
    props: {
      source: String,
    },
    methods: {
      showt() {
        console.log(this.show)
      }
    },
    data() {
      return{
        show: null
      }
    },
    created () {
      this.$vuetify.theme.dark = false
    },
    middleware: 'auth'
  }
</script>