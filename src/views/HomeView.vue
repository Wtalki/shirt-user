<template>
  <NavBar></NavBar>
  <v-app class="bg-Color3">
    <v-main class="mt-4">
      <v-row no-gutters>
        <v-col cols="12">
            <HeroSection :data="carouselItem" />
        </v-col>
        <v-col cols="12">
              <Feature/>
        </v-col>
        <v-col cols="12" class="bg-Color3">
          <v-container >
            <Team/>
          </v-container>
        </v-col>
        
        <v-col cols="12">
          <Recommand/>
        </v-col>
        <v-col cols="12" >
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-card
                  class="bg-Color1 rounded-xl d-flex align-center justify-space-between"
                  height="325"
                >
                  <div>
                    <v-card-title
                      ><v-chip class="bg-black"
                        >Weekend Sale</v-chip
                      ></v-card-title
                    >
                    <v-card-title class="text-cyan-accent-4 font-weight-bold"
                      >Men's Fashion</v-card-title
                    >
                    <v-card-text class="text-h6">Up to 70% OFF</v-card-text>
                    <v-card-text
                      ><v-btn variant="outlined" class="bg-Color6">Buy Now</v-btn></v-card-text
                    >
                  </div>
                  <v-img src="men.png" width="200"></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card
                  class="bg-Color6 rounded-xl d-flex align-center justify-space-between"
                  height="325"
                >
                  <div>
                    <v-card-title
                      ><v-chip class="bg-black"
                        >Fashion Style</v-chip
                      ></v-card-title
                    >
                    <v-card-title class="text-cyan-accent-4 font-weight-bold"
                      >Women's Wear</v-card-title
                    >

                    <v-card-text class="text-h6">Up to 70% OFF</v-card-text>
                    <v-card-text
                      ><v-btn variant="outlined" class="bg-Color2">Buy Now</v-btn></v-card-text
                    >
                  </div>
                  <v-img src="women.png" width="200"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" class="bg-Color4">
          <v-container>
            <v-card class="bg-transparent">
              <v-card-title class="text-center">About Us</v-card-title>
              <div
                class="d-flex flex-md-row flex-column align-center justify-center"
              >
                <v-img src="ads2.jpg" width="500" height="500"></v-img>
                <v-divider class="ms-3" inset vertical></v-divider>
                <v-card-text class="font-italic"
                  ><p class="line text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem quisquam, eos magni ullam recusandae optio facilis
                    illum corrupti porro, dolores delectus ducimus dicta ea
                    nostrum exercitationem qui, maiores tenetur.sum dolor sit
                    amet consectetur adipisicing elit. Quidem quisquam, eos
                    magni ullam recusandae optio facilis illum corrupti porro,
                    dolores delectus ducimus dicta ea nostrum exercitationem
                    qui, maiores tenetur.sum dolor sit amet consectetur
                    adipisicing elit. Quidem quisquam, eos magni ullam
                    recusandae optio facilis illum corrupti porro, dolores
                    delectus ducimus dicta ea nostrum exercitationem qui,
                    maiores tenetur.sum dolor sit amet consectetur adipisicing
                    elit. Quidem quisquam, eos magni ullam recusandae optio
                    facilis illum corrupti porro, dolores delectus ducimus dicta
                    ea nostrum exercitationem qui, maiores tenetur. Esse?
                  </p></v-card-text
                >
              </div>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
  <FooterB></FooterB>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import FooterB from "@/components/FooterB.vue";
import api from "../api.js";
import { HeroSection,Feature,Team , Recommand} from "@/components";
import {storagePath } from "../api.js";

export default defineComponent({
  name: "HomeView",
  components: { NavBar, FooterB, HeroSection, Feature,Team, Recommand },
  data() {
    return {
      active:0,
      search: "",
      panel: [],
      carouselItem:[],
    };
  },
  methods: {
    addtocart(id) {
      this.$router.push({ name: "addToCart", query: { details:id } });
    },
  },

  async created() {
  try {
    const response = await api.get(`/product/discount`);
    console.log(response)
    const discounts = response.data.discounts.data;

    discounts.forEach((item) => {
      item.images.forEach((img) => {
        img.path = `${storagePath}${img.path}`;
        console.log(img.path)
      });
    });

    this.carouselItem = discounts;
    console.log(this.carouselItem);

  } catch (error) {
    console.error("Error fetching discounts:", error);
  }
}
});
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 25%;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
.line {
  line-height: 40px;
}
</style>
