<template>
  <button @click="handleClick" class="me-2" :class="{favouriate: action == 'favouriate' || action == 'shopping' || action == 'notification' , login: action == 'Login', buy: action == 'buy'}">
    <v-icon v-if="action == 'favouriate'">mdi-heart</v-icon>
    <v-icon v-if="action == 'shopping'">mdi-shopping-outline</v-icon>
    <v-icon v-if="action == 'notification'">mdi-bell-outline</v-icon>
    <span v-if="action == 'Login'">{{action}}</span>
    <span v-if="action == 'buy'">{{title}}</span>
  </button>

  <v-menu min-width="200px" rounded class="me-2" v-if="action == 'account'" >
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
</template>

<script>
export default {
  name: 'ButtonComp',
  props: {
    action: {
      type: String,
      required: true,
    },
    itemId: {
      type: [String, Number],
      required: true, 
    },
    token:{
      type: String,
      required: true,
    },
    title:{
      type: String,
      required: true,
    }
  },
  computed: {
    buttonLabel() {
      switch (this.action) {
        case 'buy':
          return 'Buy Now';
        case 'login':
          return 'Login';
        case 'logout':
          return 'Logout';
        default:
          return 'Action';
      }
    },
  },
  methods: {
    handleClick() {
      switch (this.action) {
        case 'buy':
          this.$router.push('/productPage') 
          break;
        case 'Login':
          this.$router.push('/loginPage');
          break;
        case 'logout':
          this.logout();
          break;
        case 'favouriate':
          this.$router.push('/favourite')
          this.routeLinks(); 
          break;
        case 'notification':
          this.$router.push('/notiPage');
          break;
        case'shopping':
          this.$router.push('/cartPage');
          break;
        default:
          console.log('No action defined');
      }
    },
    routeLinks(){
      switch (this.action){
        case'favouriate':
        this.$router.push('/favourite');
        break;
        case'shopping':
        this.$router.push('/cartPage');
        break;
        default:
          console.log('No action defined');
      }
    },
    addtocart(itemId) {
      console.log(`Adding item ${itemId} to cart...`);
      this.$router.push({ name: "addToCart", query: { details:itemId } });
      // Implement your logic for adding to cart
    },
    login() {
      console.log('Logging in...');
      // Implement your logic for login
    },
    logout() {
      console.log('Logging out...');
      // Implement your logic for logout
    },
  },
};
</script>

<style scope>
  button{
    padding:10px 10px;
    margin-right: 3px;
  }
  
  .favouriate{
    border-radius: 50%;
    box-shadow: 7px 7px 15px #bebebe, -7px -7px 15px #ffffff, -2px -2px 5px #bebebe ,-1px -1px 3px #bebebe;
    transition: .3s;
  }

  .favouriate:hover {
    color: rgb(248, 50, 0);
    box-shadow: 0px 0px 3px #bebebe, -4px -4px 10px #ffffff;
  }

  .login{
    border-radius: 10px;
    box-shadow: 7px 7px 15px #bebebe, -7px -7px 15px #ffffff, -2px -2px 5px #bebebe ,-1px -1px 3px #bebebe;
    transition: .3s ease-out;
    color: peru;
  }

  .login:hover {
    box-shadow: 0px 0px 3px #bebebe, -4px -4px 10px #ffffff;
  }

  .buy{
     border-radius: 10px;
    box-shadow: 7px 7px 15px rgba(32, 32, 23, 0.274), -7px -7px 15px rgba(0, 0, 0, 0.274), -2px -2px 5px rgba(36, 35, 22, 0.274) ,-1px -1px 3px rgba(112, 112, 70, 0.274);
    transition: .3s ease-out;
    color: peru;
    border: 1px solid transparent;
  }

  .buy:hover {
    box-shadow: 0px 0px 3px rgba(48, 47, 32, 0.274), -4px -4px 10px rgba(27, 27, 17, 0.274);
    border: 1px solid peru;
  }

  button.login{
    width: 100px;
  }

  button.buy{
    width:100px;
  }
</style>
