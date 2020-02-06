<template>
  <b-container fluid>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon />
      <v-toolbar-title>Portfolio</v-toolbar-title>
      <v-tabs class="w-75 d-flex justify-content-center">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/aboutme">About me</v-tab>
        <v-tab to="/portfolio">Portfolio</v-tab>
        <v-tab class="align-item-end" to="/admin">{{ this.$store.state.authenticated === true ? 'Admin' : 'Login' }}</v-tab>
      </v-tabs>
    </v-app-bar>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      userisActive: null
    }
  },
}
</script>

<style lang="scss">

</style>