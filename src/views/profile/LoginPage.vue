<template>
    <NavBar></NavBar>
    <v-app class="bg-grey-darken-3">
        <v-main class="mt-5">
            <v-container class="">
                <v-row>
                    <v-col cols="12">
                        <div>
                            <v-card class="mx-auto px-6 py-8 bg-grey-darken-4" max-width="600">
                                <v-card-title class="text-center font-weight-bold">Login</v-card-title>
                                <v-alert class="text-red font-weight-bold mb-3" v-if="validate" type="warning" closable>Creation do no match</v-alert>
                                <v-form v-model="form" @submit.prevent="onSubmit">
                                    <v-text-field v-model="userLogin.userEmail"  :rules="emailRules" class="mb-2" label="Email" clearable></v-text-field>
                                    <v-text-field v-model="userLogin.userPassword"  :rules="passwordRules" label="Password" placeholder="Enter your password" type="password" clearable></v-text-field>
                                    <br />
                                    <v-btn :disabled="!form"  color="success" size="large" type="submit" variant="elevated" block>
                                        Sign In
                                    </v-btn>
                                </v-form>
                                <v-card-title class="text-center mt-3">Do you alerady account?
                                    <v-btn variant="plain" class="text-blue text-decoration-underline cursor-pointer" :to="{ name: 'register' }">Register</v-btn>
                                </v-card-title>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <FooterB></FooterB>
    </v-app>
</template>
<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import FooterB from "@/components/FooterB.vue";
import { mapGetters, mapMutations, mapState } from "vuex";
import axios from "axios";

export default defineComponent({
    name: "ProductPage",
    components: { NavBar, FooterB },
    data() {
        return {
            form: false,
            email: null,
            validate:false,
            emailRules: [
                value => {
                    if (value) return true
                    return 'E-mail is requred.'
                },
                value => {
                    if (/.+@.+\..+/.test(value)) return true

                    return 'E-mail must be valid.'
                },
            ],
            password: null,
            passwordRules: [
                value => {
                    if (value) return true
                    return 'Password is requred.'
                },
                value => {
                    if (value ?.length > 8) return true

                    return 'Password must be at least 8 character.'
                },
            ],
            userLogin: {
                userEmail: '',
                userPassword: '',
            }
        };
    },
    computed: {
        ...mapState([]),
        ...mapGetters([]),
    },
    methods: {
        ...mapMutations([]),
        onSubmit() {
            if (!this.form) return;

            axios.post("http://127.0.0.1:8000/api/user/login", this.userLogin)
            .then(response => {
                if(response.data.token != null){
                  localStorage.setItem("userData", JSON.stringify(response.data.user));
                localStorage.setItem("token", JSON.stringify(response.data.token));
                this.$router.push('/')
              }else{
                this.validate=true;
              }
            });
            this.clear()
        },
        clear(){
          this.userLogin.userEmail = '';
          this.userLogin.userPassword ='';
        },
        required(v) {
            return !!v || "Field is required";
        },
    },
});
</script>
<style></style>