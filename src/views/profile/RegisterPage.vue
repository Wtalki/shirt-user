<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-3">
    <v-main class="mt-5">
      <v-container class="">
        <v-row>
          <v-col cols="12">
            <div>
              <v-card
                class="mx-auto px-6 py-8 bg-grey-darken-4"
                max-width="600"
              >
                <v-card-title class="text-center font-weight-bold"
                  >Register</v-card-title
                >
                <v-form v-model="form" @submit.prevent="onSubmit">
                  <v-text-field
                    v-model="userRegister.userName"
                    :rules="[required]"
                    class="mb-2"
                    type="text"
                    label="Name"
                    clearable
                  ></v-text-field>

                  <v-text-field
                    v-model="userRegister.userEmail"
                    :rules="emailRules"
                    type="email"
                    class="mb-2"
                    label="Email"
                    clearable
                  ></v-text-field>

                  <v-text-field
                    v-model="userRegister.userPassword"
                    type="password"
                    :rules="passwordRules"
                    label="Password"
                    placeholder="Enter your password"
                    clearable
                  ></v-text-field>

                  <br />

                  <v-btn
                    :disabled="!form"
                    color="success"
                    size="large"
                    type="submit"
                    variant="elevated"
                    block
                  >
                    Sign Up
                  </v-btn>
                </v-form>
                <v-card-title class="text-center"
                  >Do you alerady account?
                  <v-btn
                    variant="plain"
                    class="text-blue text-decoration-underline cursor-pointer"
                    :to="{ name: 'loginPage' }"
                    >Login</v-btn
                  ></v-card-title
                >
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
      emailRules:[
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
      passwordRules:[
        value => {
          if (value) return true
          return 'Password is requred.'
        },
        value => {
          if (value?.length > 8) return true

          return 'Password must be at least 8 character.'
        },
        ],
      userRegister:{
        userName:'',
        userEmail:'',
        userPassword:'',
      }
    };
  },
  computed: {
    ...mapState([]),
    ...mapGetters(['getToken','getUserData']),
  },
  methods: {
    ...mapMutations([]),
    onSubmit() {
      if (!this.form) return;

      axios.post("http://127.0.0.1:8000/api/user/register",this.userRegister).then(response=>{
        localStorage.setItem("userData",JSON.stringify(response.data.user));
        localStorage.setItem("token",JSON.stringify(response.data.token));
        this.$router.push('/')
      });
      this.clear()
    },
    clear(){
      this.userRegister.userName="";
      this.userRegister.userEmail="";
      this.userRegister.userPassword="";
    },
    required(v) {
      return !!v || "Field is required";
    },
  },

});
</script>
<style></style>
