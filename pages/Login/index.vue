<template>
    <div>
        <v-app id="inspire">
            <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer/>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Login" name="username" id="username" v-model="username" type="text"/>
                            <v-text-field @keyup.enter.native="login" id="password" label="Password" name="password" v-model="password" type="password"/>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn @click="login" color="primary">Login</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            isAdmin: false,
            formError: null,
        }
    },
    methods: {
        async login () {
            try {
                await this.$store.dispatch('login', {
                    username: this.username,
                    password: this.password,
                })
            }catch (e) {
                throw error
            }
        },
    }
}
</script>

<style lang="scss">
</style>

<!-- <b-form @submit.prevent="login" class="p-5 d-flex justify-content-center">
            <b-form-group class="align-self-center align-middle">
                <p v-if="formError" class="error">
                    {{ formError }}
                </p>
                <b-form-group id="input-group-1" label="username" label-for="input-1">
                    <b-form-input id="username" v-model="username" type="text" required placeholder="Enter your email"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Your password" label-for="input-2">
                    <b-form-input id="password" type="password" v-model="password" required placeholder="Enter your password"></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Login</b-button>
            </b-form-group>
        </b-form> -->