<template>
  <v-app-bar class="pa-sm-2 px-sm-16  navbar" height="70" flat>
    <v-app-bar-title :to="{name:'/'}"><img
          alt="Carbon Health Logo"
          height="30"
          src="https://storage.googleapis.com/a1aa/image/heT96CeWqhpVoEAvbcu30rZwmhJnGDWVoV24l2W9xhRRGQuTA.jpg"
          width="30"
        /></v-app-bar-title>
    <div class="menu">
      <NavListComp />
    </div>
    <v-spacer></v-spacer>
    <ButtonComp action="favouriate"/>
    <!-- <v-btn
      icon="mdi-heart-outline"
      class="bg-Color5 me-3"
      variant="outlined"
      :to="{ name: 'favourite' }"
    ></v-btn> -->
    <!-- <div class="position-relative">
      <v-btn
        icon="mdi-shopping-outline"
        :to="{ name: 'cartPage' }"
        variant="outlined"
        class="bg-Color5 me-3"
      >
      </v-btn>
      <span class="pos bg-orange rounded-circle w-50 text-center" v-if="getCartCount == 0"></span>
      <span class="pos bg-orange rounded-circle w-50 text-center" v-else>{{getCartCount}}</span>
    </div> -->
    <ButtonComp action="shopping" :count="getCartCount"/>

    <!-- <div class="position-relative">
      <v-btn
        icon="mdi-bell-outline"
        variant="outlined"
        :to="{ name: 'notiPage' }"
        class="bg-Color5"
      ></v-btn>
      <span class="pos bg-orange rounded-circle w-50 text-center" v-if="getNoti == 0"></span>
      <span class="pos bg-orange rounded-circle w-50 text-center" v-else>{{getNoti}}</span>
    </div> --> 

    <ButtonComp action = 'notification'/>

    <!-- <v-menu min-width="200px" rounded v-if="tokenStatus">
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" class="ms-2">
          <v-avatar color="brown" size="large">
            <span class="text-h5">zl</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar color="brown">
              <span class="text-h5">zl</span>
            </v-avatar>
            <h3>zaw win myint</h3>
            <p class="text-caption mt-1">zaw@gmail.com</p>
            <v-divider class="my-3"></v-divider>
            <v-btn variant="text" rounded :to="{ name: 'accountDetail' }">
              Edit Account
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn variant="text" rounded @click ="logout"> Logout </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu> -->
    <ButtonComp action="account"/>

    <!-- <v-btn class="bg-Color5 ms-2"  :to="{ name: 'loginPage' }" v-if="!tokenStatus">Login</v-btn> -->
    <ButtonComp action="Login" />
      <!-- <div class="logo">
        <img
          alt="Carbon Health Logo"
          height="30"
          src="https://storage.googleapis.com/a1aa/image/heT96CeWqhpVoEAvbcu30rZwmhJnGDWVoV24l2W9xhRRGQuTA.jpg"
          width="30"
        />
        <span> Carbon Health </span>
     </div> -->
      <!-- <div class="menu">
        <a href="#"> Locations </a>
        <a href="#"> Primary Care </a>
        <a href="#"> Urgent Care </a>
        <a class="new" href="#">
          Wellness 360
          <span class="new"> NEW </span>
        </a>
        <a href="#"> Pricing </a>
        <a href="#"> Log In </a>
        <div class="dropdown">
          <a class="menu-icon" href="#">
            <i class="fas fa-bars"> </i>
          </a>
          <div class="dropdown-content">
            <a href="#"> Locations </a>
            <a href="#"> Primary Care </a>
            <a href="#"> Urgent Care </a>
            <a class="new" href="#">
              Wellness 360
              <span class="new"> NEW </span>
            </a>
            <a href="#"> Pricing </a>
            <a href="#"> Log In </a>
          </div>
        </div>
        <a class="book-appointment" href="#"> Book appointment </a>
      </div> --> 
   </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary class="bg-grey-darken-4">
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        :to="link.href"
        @click="drawer = false"
      >
        <v-list-item-title>{{ link.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ButtonComp from "./assential/ButtonComp.vue"
import NavListComp from "./assential/NavListComp.vue"
import { mapGetters } from "vuex";
import "../../css/styles.css";

export default {
  name: "NavBar",
  components:{NavListComp,ButtonComp},
  data() {
    return {
      drawer: false,
      
      tokenStatus: false,
      action: false,
    };
  },
  computed: {
    ...mapGetters([
      "getShirtCategories",
      "getColors",
      "getTypes",
      "getSizes",
      "getPrices",
      "getSelected",
      "getToken",
      "getUserData",
      "getCartCount",
      "getNoti",
    ]),
  },
  methods: {
    checkToken() {
      const user = JSON.parse(localStorage.getItem("userData"));
      const token = localStorage.getItem("token");
      this.$store.dispatch("setToken", token);
      this.$store.dispatch("setUserData", user);
      console.log(this.getToken);
      console.log(this.getUserData);

      if (
        this.getToken != null &&
        this.getToken != undefined &&
        this.getToken != ""
      ) {
        this.tokenStatus = true;
      } else {
        this.tokenStatus = false;
      }
    },
    logout() {
      this.$router.push("/loginPage");
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
    },
    scrollToPage() {
      this.$nextTick(() => {
        window.scrollTo({
          top: 0,
        });
      });
    },
  },
  created() {
    this.checkToken();
  },
};
</script>

<style lang="scss" scoped>
.pos {
  position: absolute;
  z-index: 3;
  right: 5px;
}
.po {
  position: absolute;
  z-index: 3;
  right: -5px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e5e7eb;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.navbar .logo {
  display: flex;
  align-items: center;
}
.navbar .logo img {
  height: 30px;
  margin-right: 10px;
}
.navbar .menu {
  display: flex;
  align-items: center;
}

.navbar .menu .menu-icon {
  display: none;
}
@media (max-width: 900px) {
  .navbar .menu {
    display: none;
  }
  .navbar .menu .menu-icon {
    display: block;
    font-size: 20px;
    cursor: pointer;
  }
}

</style>
