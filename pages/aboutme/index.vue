<template>
    <b-container fluid class="d-flex flex-column p-0">
        <b-row>
            <b-col class="p-0">
                <div class="bg-light btext text-center">
                    <h1>About me</h1>
                </div>
            </b-col>
        </b-row>
        <b-row class="mt-4 w-75 align-self-center">
            <b-col class="ml-5 p-5" v-for="(items, index) in aboutmeData" :key="index">
                <h4 class="mb-4">Personal detail:</h4>
                <p> {{items.info}} </p>
                <b-col cols='12' class="p-0">
                    <b-list-group>
                        <b-list-group-item><li><b>Name</b>: {{items.name}}</li></b-list-group-item>
                        <b-list-group-item><li><b>Job</b>: {{items.job}}</li></b-list-group-item>
                        <b-list-group-item><li><b>Phone</b>: {{items.phone}}</li></b-list-group-item>
                        <b-list-group-item><li><b>Birthday</b>: {{items.birthday}}</li></b-list-group-item>
                        <b-list-group-item><li><b>Email</b>: {{items.email}}</li></b-list-group-item>
                        <b-list-group-item><li><b>Location</b>: {{items.location}}</li></b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-col>
            <b-col class="mr-5 ml-3 p-5">
                <h4 class="mb-4">My skills:</h4>

                <h6 class="">Javascript</h6>
                <b-progress class="mb-4" :max="max">
                    <b-progress-bar :value="skills.valuejs" :label="`${((skills.valuejs / max) * 100)}%`"></b-progress-bar>
                </b-progress>

                <h6 class="">PHP</h6>
                <b-progress class="mb-4" :max="max">
                    <b-progress-bar :value="skills.valuephp" :label="`${((skills.valuephp / max) * 100)}%`"></b-progress-bar>
                </b-progress>

                <h6 class="">Vue.js</h6>
                <b-progress class="mb-4" :max="max">
                    <b-progress-bar :value="skills.valuevjs" :label="`${((skills.valuevjs / max) * 100)}%`"></b-progress-bar>
                </b-progress>

                <h6 class="">CSS</h6>
                <b-progress class="mb-4" :max="max">
                    <b-progress-bar :value="skills.valuecss" :label="`${((skills.valuecss / max) * 100)}%`"></b-progress-bar>
                </b-progress>
            </b-col>
        </b-row>
        <b-row class="mt-4 w-75 align-self-center">
            <b-col class="ml-5">
                <b-list-group>
                    <b-list-group-item>
                        <img class="w-25 float-left" src="~/assets/img/cameraicon.png"/>
                        <h5 class="">{{work.development[0]}}</h5>
                        <p class="ml-4">{{work.development[1]}}</p>
                    </b-list-group-item>
                    <b-list-group-item>
                        <img class="w-25 float-left" src="~/assets/img/cameraicon.png"/>
                        <h5 class="">{{work.design[0]}}</h5>
                        <p class="ml-4">{{work.design[1]}}</p>
                    </b-list-group-item>
                    <b-list-group-item>
                        <img class="w-25 float-left" src="~/assets/img/cameraicon.png"/>
                        <h5 class="">{{work.webdevelopment[0]}}</h5>
                        <p class="ml-4">{{work.webdevelopment[1]}}</p>
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
import axios from 'axios';

export default {
    components:{
        Nav,
    },
    asyncData({ params }) {
        return axios.get('http://localhost:3000/api/aboutme')
        .then((res) => {
            return { 
                aboutmeData: res.data.aboutme
            }
        })
    },
    data() {
      return {
        aboutmeData: [],
        skills: {
            valuejs: 75,
            valuevjs: 50,
            valuephp: 65,
            valuecss: 90,
        },
        max: 100,
        work: {
            development: [
                'Development',
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humoure'
            ],
            design: [
                'Design',
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humoure'
            ],
            webdevelopment: [
                'Webdevelopment',
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humoure'
            ],
        }
      }
    },
}
</script>

<style lang="scss">
.list-group-item{
    border: none;
}
</style>