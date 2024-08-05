<template>
  <v-footer class="d-flex justify-center bg-grey-darken-3">
    <v-card class="d-flex flex-column w-100" flat image="ads1.jpg">
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(255,2255,255,.2), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <div class="d-flex justify-space-evenly flex-wrap">
        <v-list class="bg-transparent">
          <v-list-subheader class="text-white text-h5"
            >Contact Us</v-list-subheader
          >
          <v-list-item>YANGON,HTANTABIN</v-list-item>
          <v-list-item>0984837483</v-list-item>
          <v-list-item>hello@gmail.com</v-list-item>
          <v-list-item>hello.com</v-list-item>
        </v-list>
        <v-list class="bg-transparent">
          <v-list-subheader class="text-white text-h5"
            >Information</v-list-subheader
          >
          <v-list-item>New Products</v-list-item>
          <v-list-item>Best Selller</v-list-item>
          <v-list-item>Feature Product</v-list-item>
          <v-list-item>Deal of Day</v-list-item>
          <v-list-item>Handcrafted Artisan Jwely</v-list-item>
          <v-list-item>Orginizers</v-list-item>
        </v-list>
        <v-list class="bg-transparent">
          <v-list-subheader class="text-white text-h5"
            >My Account</v-list-subheader
          >
          <v-list-item>My account</v-list-item>
          <v-list-item>Personal information</v-list-item>
          <v-list-item>Addresses</v-list-item>
          <v-list-item>Discount</v-list-item>
          <v-list-item>Order History</v-list-item>
          <v-list-item>Other</v-list-item>
        </v-list>
        <v-list class="bg-transparent">
          <v-list-subheader class="text-white text-h5">Map</v-list-subheader>
          <v-list-item>Order History</v-list-item>
        </v-list>
      </div>

      <div class="mt-2 d-block">
        <v-btn icon="mdi-facebook" class="ms-2" variant="outlined"></v-btn>
        <v-btn icon="mdi-instagram" class="ms-2" variant="outlined"></v-btn>
        <v-btn icon="mdi-twitter" class="ms-2" variant="outlined"></v-btn>
        <v-btn icon="mdi-linkedin" class="ms-2" variant="outlined"></v-btn>
        <v-btn icon="mdi-telegram" class="ms-2" variant="outlined"></v-btn>
      </div>
      <v-divider class="mt-3"></v-divider>
      <div>
        Design by <a href="">Zaw Win Myint</a> Copyright@ 2024 All Rights
        Reserved
      </div>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
