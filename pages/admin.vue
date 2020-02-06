<template>
  <v-app id="inspire">
    <v-navigation-drawer app clipped>
      <v-list flat>
        <v-list-item to="/admin">
          <v-list-item-action>
            <v-icon  >mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/admin/aboutme">
          <v-list-item-action>
            <v-icon active>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/admin/portfolio">
          <v-list-item-action>
            <v-icon>mdi-briefcase</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >portfolio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <nuxt-child />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    mounted() {
    },
    data() {
      return{
        show: null,
      }
    },
    middleware: 'auth'
  }
</script>