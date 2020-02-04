<template>
  <div>
    <Nav></Nav>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '~/components/nav'
import Footer from '~/components/footer'

export default {
  components: {
    Nav,
    Footer,
  }
}
</script>

<style>
html,body {
  height: 100vh;
}
</style>
