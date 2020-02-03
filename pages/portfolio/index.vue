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
                    <b-list-group-item>All</b-list-group-item>
                    <b-list-group-item>Development</b-list-group-item>
                    <b-list-group-item>Design</b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>
        <b-row class="align-self-center w-75">
            <b-col class="mb-4">
                <img style="width: 150px;" src="~/assets/img/dark_background15.jpg"/>
            </b-col>
            <b-col class="mb-4">
                <img class="w-100" src="~/assets/img/dark_background15.jpg"/>
            </b-col>
            <b-col class="mb-4">
                <img class="w-100" src="~/assets/img/dark_background15.jpg"/>
            </b-col>
            <b-col class="mb-4">
                <img class="w-100" src="~/assets/img/dark_background15.jpg"/>
            </b-col>
            <b-col class="mb-4">
                <img class="w-100" src="~/assets/img/dark_background15.jpg"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Nav from '~/components/nav'
export default {
  components: {
    Nav,
  }
}
</script>

<style lang="scss">

</style>