<template>
    <b-container fluid class="d-flex flex-column">
        <b-row>
            <b-col class="p-0">
                <div class="bg-light btext text-center">
                    <h1>About me</h1>
                </div>
            </b-col>
        </b-row>
        <b-row class="mt-4 w-75 align-self-center">
            <b-col class="ml-5 p-5">
                <h4 class="mb-4">Personal detail:</h4>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum sed tellus quis fringilla.
                    Curabitur mattis lobortis arcu ut euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                    himenaeos. Maecenas tempus
                </p>

                <b-col cols='6' class="float-left p-0">
                    <b-list-group>
                        <b-list-group-item><li><b>Name</b>: Laser Yesil</li></b-list-group-item>
                        <b-list-group-item><li><b>Job</b>: Webdeveloper</li></b-list-group-item>
                        <b-list-group-item><li><b>Phone</b>: +31 648652286</li></b-list-group-item>
                    </b-list-group>
                </b-col>
                <b-col cols='6' class="float-left">
                    <b-list-group>
                        <b-list-group-item><li><b>Birthday</b>: 06-12-1995</li></b-list-group-item>
                        <b-list-group-item><li><b>Email</b>: l-yesil@hotmail.com</li></b-list-group-item>
                        <b-list-group-item><li><b>Location</b>: Eindhoven</li></b-list-group-item>
                    </b-list-group>
                </b-col>

                
            </b-col>
            <b-col class="mr-5 ml-3 p-5">
                <h4 class="mb-4">My skills:</h4>

                <h6 class="">Javascript</h6>
                <b-progress class="mb-4" :max="max">
                    <b-progress-bar :value="valuejs" :label="`${((valuejs / max) * 100)}%`"></b-progress-bar>
                </b-progress>

                <h6 class="">PHP</h6>
                <b-progress class="mb-4" :max="max">
                    <b-progress-bar :value="valuephp" :label="`${((valuephp / max) * 100)}%`"></b-progress-bar>
                </b-progress>

                <h6 class="">Vue.js</h6>
                <b-progress class="mb-4" :max="max">
                    <b-progress-bar :value="valuevjs" :label="`${((valuevjs / max) * 100)}%`"></b-progress-bar>
                </b-progress>

                <h6 class="">CSS</h6>
                <b-progress class="mb-4" :max="max">
                    <b-progress-bar :value="valuecss" :label="`${((valuecss / max) * 100)}%`"></b-progress-bar>
                </b-progress>
            </b-col>
        </b-row>
        <b-row class="mt-4 w-75 align-self-center">
            <b-col class="ml-5">
                <b-list-group>
                    <b-list-group-item>
                        <img class="w-25 float-left" src="~/assets/img/cameraicon.png"/>
                        <h5 class="">Webdevelopment</h5>
                        <p class="ml-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humoure</p>
                    </b-list-group-item>
                    <b-list-group-item>
                        <img class="w-25 float-left" src="~/assets/img/cameraicon.png"/>
                        <h5 class="">Design</h5>
                        <p class="ml-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humoure</p>
                    </b-list-group-item>
                    <b-list-group-item>
                        <img class="w-25 float-left" src="~/assets/img/cameraicon.png"/>
                        <h5 class="">Webdevelopment</h5>
                        <p class="ml-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humoure</p>
                    </b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col class="mr-5 ml-3 p-5">

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Nav from '~/components/nav';

export default {
    components:{
        Nav,
    },
    data() {
      return {
        valuejs: 75,
        valuevjs: 50,
        valuephp: 65,
        valuecss: 90,
        max: 100
      }
    }
}
</script>

<style lang="scss">
.list-group-item{
    border: none;
}
</style>