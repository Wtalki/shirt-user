<template>
  <v-app-bar class="pa-2 bg-Color3" height="70" flat >
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="d-lg-none d-md-none d-sm-block"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>Logo</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      varient="plain"
      v-for="link in links"
      :key="link.text"
      :to="link.href"
      @click="scrollToPage"
      color="Color2"
      class="d-none d-md-flex me-2 "
      >{{ link.text }}</v-btn
    >
    <v-spacer></v-spacer>
    <v-menu offset-y v-if="!drawer" class="d-none">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on" class="d-none">
          <v-icon>mdi-menu</v-icon></v-btn
        >
      </template>
      <v-list class="bg-grey-darken-4">
        <v-list-item
          v-for="link in links"
          :key="link.text"
          :to="link.href"
          @click="drawer = false"
        >
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      icon="mdi-heart-outline"
      class="bg-Color5 me-3"
      variant="outlined"
      :to="{ name: 'favourite' }"
    ></v-btn>
    <div class="position-relative">
      <v-btn
        icon="mdi-shopping-outline"
        :to="{ name: 'cartPage' }"
        variant="outlined"
        class="bg-Color5 me-3"
      >
      </v-btn>
      <span class="pos bg-orange rounded-circle w-50 text-center" v-if="getCartCount == 0"></span>
      <span class="pos bg-orange rounded-circle w-50 text-center" v-else>{{getCartCount}}</span>

    </div>
    <div class="position-relative">
      <v-btn
        icon="mdi-bell-outline"
        variant="outlined"
        :to="{ name: 'notiPage' }"
        class="bg-Color5"
      ></v-btn>
      <span class="pos bg-orange rounded-circle w-50 text-center" v-if="getNoti == 0"></span>
      <span class="pos bg-orange rounded-circle w-50 text-center" v-else>{{getNoti}}</span>

    </div>

    <v-menu min-width="200px" rounded v-if="tokenStatus">
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
    </v-menu>
    <v-btn class="bg-Color5 ms-2"  :to="{ name: 'loginPage' }" v-if="!tokenStatus">Login</v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary class="bg-grey-darken-4">
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        :to="link.href"
        @click="drawer = false "
      >
        <v-list-item-title>{{ link.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import "../../css/styles.css";

export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      links: [
        { text: "Home", href: "/" },
        { text: "Product", href: "/productPage" },
        { text: "Services", href: "/servicePage" },
        { text: "Contact", href: "/contactPage" },
      ],
      tokenStatus:false,
      action:false,
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
  methods:{
    checkToken(){
      const user = JSON.parse(localStorage.getItem('userData'))
      const token = localStorage.getItem('token')
      this.$store.dispatch('setToken',token)
      this.$store.dispatch('setUserData',user)
      console.log(this.getToken);
      console.log(this.getUserData);

      if(
        this.getToken != null &&
        this.getToken != undefined &&
        this.getToken != "")
      {
        this.tokenStatus=true;
      }else{
        this.tokenStatus=false;
      }
    },
    logout(){
      this.$router.push('/loginPage')
      localStorage.removeItem('token')
      localStorage.removeItem('userData')
    },
    scrollToPage() {
      // Wait for the DOM to update
      this.$nextTick(() => {
        // Scroll to the top of the About page
        window.scrollTo({
          top: 0,
        });
      });
    },
  },
  created(){
    this.checkToken();
    
  }
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
</style>
