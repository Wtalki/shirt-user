<template>
  <v-row>
    <v-col cols="12" md="7" lg="7" xl="7">
      <v-card
        class="bg-Color1 d-flex align-center justify-space-between rounded-xl"
        height="325"
      >
        <div>
          <v-card-title
            ><v-chip class="bg-Color5 text-Color1">New Arrive</v-chip></v-card-title
          >
          <v-card-title class="text-Color2">hello</v-card-title>
          <v-card-text text="catption text-Color2">Lorem, ipsum dolor sit amet</v-card-text>
          <v-card-text class="text-h6 text-Color2">Up to 70% OFF</v-card-text>
          <v-card-text><v-btn variant="outlined" class="bg-Color6 text-Color1">Buy Now</v-btn></v-card-text>
        </div>
        <v-img src="2.png" width="200"></v-img>
      </v-card>
    </v-col>
    <v-col cols="12" lg="5" xl="5" md="5">
      <v-row>
        <v-col cols="12" sm="4" md="6" lg="6">
          <v-card
            class="bg-Color1 d-flex align-center justify-space-between pa-2 rounded-xl"
            height="150"
          >
            <div class="ma-2 h-75">
              <v-chip class="bg-Color6">27% OFF</v-chip>
              <v-card-title class="bg-Color1">hello</v-card-title>
              <v-btn
                variant="plain"
                class="text-decoration-underline text-caption text-Color6"
                >Buy Now</v-btn
              >
            </div>
            <v-img src="3.png" width="100"></v-img>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" md="6" lg="6">
          <v-card
            class="bg-Color6 d-flex align-center justify-space-between pa-2 rounded-xl"
            height="150"
          >
            <div class="ma-2 h-75">
              <v-chip class="bg-Color1">27% OFF</v-chip>
              <v-card-title>hello</v-card-title>
              <v-btn
                variant="plain"
                class="text-decoration-underline text-caption"
                >Buy Now</v-btn
              >
            </div>
            <v-img src="7.png" width="100"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" lg="12" md="12">
          <v-card
            class="bg-Color1 d-flex align-center justify-space-between pa-2 rounded-xl"
            height="150"
          >
            <div class="ma-2 h-75">
              <v-chip class="bg-Color6">27% OFF</v-chip>
              <v-card-title>hello</v-card-title>
              <v-btn
                variant="plain"
                class="text-decoration-underline text-caption text-Color6"
                >Buy Now</v-btn
              >
            </div>
            <v-img src="7.png" width="100"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TeamComp",
};
</script>

<style  scoped></style>
