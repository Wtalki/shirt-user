<template>
  <NavBar></NavBar>
  <v-app class="bg-Color1">
    <v-main class="mt-4  ">
      <v-row no-gutters>
        <v-col cols="12">
            <HeroSection :data="carouselItem" />
        </v-col>
        <v-col cols="12">
          <Feature/>
        </v-col>
        <v-col cols="12" class="px-sm-10 px-md-16 px-2">
          <HomeCategory/>
        </v-col>
        <v-col cols="12" class="px-sm-10 px-md-16 px-2">
          <ProductComp type="shoe" title="Popular Shoes Product"/>
        </v-col>
            <v-parallax class=" d-flex align-center justify-space-between "
          height="400" src="data:image/jpeg;base64,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">
        <v-col cols="12" class=" mt-2  px-sm-4 px-md-16 ">
          <ExhanceComp/>
        </v-col>
        </v-parallax>
         <v-col cols="12" class="px-sm-10 px-md-16 px-2">
          <ShirtComp type="shirt" title="Popular Shirt Product"/>
        </v-col>
         <v-col cols="12" class="px-sm-10 px-md-16 px-2">
          <ShirtComp type="pant" title="Popular Pants Product"/>
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
import { HeroSection,Feature,Team , Recommand,HomeCategory,ExhanceComp,ProductComp,ShirtComp} from "@/components";
import {storagePath } from "../api.js";

export default defineComponent({
  name: "HomeView",
  components: { NavBar, FooterB, HeroSection, Feature,Team, Recommand,HomeCategory,ExhanceComp,ProductComp,ShirtComp },
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
.bgColor{
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  }
</style>
