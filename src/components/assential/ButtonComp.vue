<template>
  <v-btn @click="handleClick">
    {{ buttonLabel }}
  </v-btn>
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
      required: true, // Ensure itemId is passed as a prop
    },
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
          this.addtocart(this.itemId); // Pass itemId to addtocart
          break;
        case 'login':
          this.login();
          break;
        case 'logout':
          this.logout();
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

<style >
</style>
