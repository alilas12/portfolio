<template>
  <b-navbar class="navbar bg-white">
    <b-navbar-brand class="ml-5"><nuxt-link class="text-dark none" to="/">Portfolio</nuxt-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-navbar-nav class="w-100 d-flex justify-content-center">
        <b-nav-item class="text-dark"><nuxt-link class="text-dark" to="/">Home</nuxt-link></b-nav-item>
        <b-nav-item href="#"><nuxt-link class="text-dark" to="/aboutme">About me</nuxt-link></b-nav-item>
        <b-nav-item href="#"><nuxt-link class="text-dark" to="/portfolio">Portfolio</nuxt-link></b-nav-item>
    </b-navbar-nav>
    <b-nav href="#"><nuxt-link class="text-dark align-self-end" to="/admin">Admin</nuxt-link></b-nav>
  </b-navbar>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.none{
    text-decoration: none !important
}
</style>