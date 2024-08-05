<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-4">
    <v-main class="mt-5">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-carousel :show-arrows="false" v-model="active">
              <v-carousel-item
                v-for="(n,i) in carouselItem"
                :key="i"
                cover
                :src="n.images[0].path"
                class="bg-cyan-lighten-3"
              >
                <v-sheet
                  class="bg-transparent d-flex flex-column justify-end align-center pa-15"
                  height="500"
                >
                <h1 class="text-h3 text-orange-darken-2">{{n.discounts[0].percentage}}%</h1>
                  <p class="text-caption">
                   {{n.description}}
                  </p>
                  <v-btn variant="outlined" @click="addtocart(n.id)" width="100" class="mt-3">Buy</v-btn>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="mx-auto pa-4 bg-grey-darken-4" flat>
            <v-list
              class="d-flex justify-space-evenly justify-md-center bg-grey-darken-4 flex-wrap"
            >
              <v-list-item
                v-for="n in service"
                :key="n"
                class="mt-3"
                :title="n.title"
                :subtitle="n.text"
              >
                <template v-slot:prepend>
                  <v-icon size="48">{{ n.icon }}</v-icon>
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-container>
            <v-row>
              <v-col cols="12" md="7" lg="7" xl="7">
                <v-card
                  class="bg-amber-lighten-5 d-flex align-center justify-space-between"
                  height="325"
                >
                  <div>
                    <v-card-title
                      ><v-chip class="bg-black"
                        >New Arrive</v-chip
                      ></v-card-title
                    >
                    <v-card-title>hello</v-card-title>
                    <v-card-text text="catption"
                      >Lorem, ipsum dolor sit amet</v-card-text
                    >
                    <v-card-text class="text-h6">Up to 70% OFF</v-card-text>
                    <v-card-text
                      ><v-btn variant="outlined">Buy Now</v-btn></v-card-text
                    >
                  </div>
                  <v-img src="2.png" width="200"></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" lg="5" xl="5" md="5">
                <v-row>
                  <v-col cols="12" sm="4" md="6" lg="6">
                    <v-card
                      class="bg-amber-lighten-5 d-flex align-center justify-space-between pa-2"
                      height="150"
                    >
                      <div class="ma-2 h-75">
                        <v-chip class="bg-black">27% OFF</v-chip>
                        <v-card-title>hello</v-card-title>
                        <v-btn
                          variant="plain "
                          class="text-decoration-underline text-caption"
                          >Buy Now</v-btn
                        >
                      </div>
                      <v-img src="3.png" width="100"></v-img>
                    </v-card>
                  </v-col>

                  <v-col cols="12" sm="4" md="6" lg="6">
                    <v-card
                      class="bg-amber-lighten-5 d-flex align-center justify-space-between pa-2"
                      height="150"
                    >
                      <div class="ma-2 h-75">
                        <v-chip class="bg-black">27% OFF</v-chip>
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
                      class="bg-amber-lighten-5 d-flex align-center justify-space-between pa-2"
                      height="150"
                    >
                      <div class="ma-2 h-75">
                        <v-chip class="bg-black">27% OFF</v-chip>
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
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-title class="text-center">Feature Product</v-card-title>
            <v-tabs v-model="tab" class="bg-black" align-tabs="center">
              <v-tab value="new">New Arrive</v-tab>
              <v-tab value="best-selling">Best Selling</v-tab>
              <v-tab value="top-related">Top Related</v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="new">
                <v-container>
                  <v-row>
                    <v-col
                      v-for="product in homeItemsPage"
                      :key="product.id"
                      cols="6"
                      md="3"
                      sm="4"
                      xs="4"
                    >
                      <v-hover v-slot="{ isHovering, props }" open-delay="200">
                        <v-card color="#111111" v-bind="props">
                          <div>
                            <v-carousel :show-arrows="false" height="200">
                              <v-carousel-item
                                v-for="(img, index) in product.image"
                                :key="index"
                                height="200"
                                :src="img"
                                color="#111111"
                              >
                                <v-expand-transition>
                                  <div
                                    v-if="isHovering"
                                    class="d-flex transition-fast-in-fast-out bg-grey-darken-1 text-cyan-accent-1 v-card--reveal text-h4"
                                    style="height: 30%"
                                  >
                                    ${{ product.price }}
                                  </div>
                                </v-expand-transition>
                                <div>
                                  <v-chip
                                    varient="outlined"

                                    class="bg-transparent float-end text-cyan-accent-2"
                                  >
                                    New</v-chip
                                  >
                                </div>
                              </v-carousel-item>
                            </v-carousel>
                          </div>

                          <v-card-text class="pt-6 bg-black">
                            <h3
                              class="font-weight-light bg-black text-orange mb-2"
                            >
                              {{ product.name }}
                            </h3>
                            <span>
                              <v-icon size="18" color="cyan-accent-1"
                                >mdi-star</v-icon
                              >

                              ({{ product.rating }})
                            </span>
                            <v-btn
                              @click="addtocart(product.id)"
                              class="float-right text-orange"
                              icon="mdi-cart-plus"
                            ></v-btn>
                          </v-card-text>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tabs-window-item>
              <v-tabs-window-item value="best-selling">
                <v-container>
                  <v-row>
                    <v-col
                      v-for="product in homeItemsPage"
                      :key="product.id"
                      cols="6"
                      md="3"
                      sm="4"
                      xs="4"
                    >
                      <v-hover v-slot="{ isHovering, props }" open-delay="200">
                        <v-card color="#111111" v-bind="props">
                          <div>
                            <v-carousel :show-arrows="false" height="200">
                              <v-carousel-item
                                v-for="(img, index) in product.image"
                                :key="index"
                                height="200"
                                :src="img"
                                color="#111111"
                              >
                                <v-expand-transition>
                                  <div
                                    v-if="isHovering"
                                    class="d-flex transition-fast-in-fast-out bg-grey-darken-1 text-cyan-accent-1 v-card--reveal text-h4"
                                    style="height: 30%"
                                  >
                                    ${{ product.price }}
                                  </div>
                                </v-expand-transition>
                                <div>
                                  <v-chip
                                    varient="outlined"
                                    class="bg-transparent float-end text-cyan-accent-2"
                                  >
                                    Best Selling</v-chip
                                  >
                                </div>
                              </v-carousel-item>
                            </v-carousel>
                          </div>

                          <v-card-text class="pt-6 bg-black">
                            <h3
                              class="font-weight-light bg-black text-orange mb-2"
                            >
                              {{ product.name }}
                            </h3>
                            <span>
                              <v-icon size="18" color="cyan-accent-1"
                                >mdi-star</v-icon
                              >

                              ({{ product.rating }})
                            </span>
                            <v-btn
                              @click="addtocart(product.id)"
                              class="float-right text-orange"
                              icon="mdi-cart-plus"
                            ></v-btn>
                          </v-card-text>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tabs-window-item>
              <v-tabs-window-item value="top-related">
                <v-container>
                  <v-row>
                    <v-col
                      v-for="product in homeItemsPage"
                      :key="product.id"
                      cols="6"
                      md="3"
                      sm="4"
                      xs="4"
                    >
                      <v-hover v-slot="{ isHovering, props }" open-delay="200">
                        <v-card color="#111111" v-bind="props">
                          <div>
                            <v-carousel :show-arrows="false" height="200">
                              <v-carousel-item
                                v-for="(img, index) in product.image"
                                :key="index"
                                height="200"
                                :src="img"
                                color="#111111"
                              >
                                <v-expand-transition>
                                  <div
                                    v-if="isHovering"
                                    class="d-flex transition-fast-in-fast-out bg-grey-darken-1 text-cyan-accent-1 v-card--reveal text-h4"
                                    style="height: 30%"
                                  >
                                    ${{ product.price }}
                                  </div>
                                </v-expand-transition>
                                <div>
                                  <v-chip
                                    varient="outlined"
                                    class="bg-transparent float-end text-cyan-accent-2"
                                  >
                                    Top Related</v-chip
                                  >
                                </div>
                              </v-carousel-item>
                            </v-carousel>
                          </div>

                          <v-card-text class="pt-6 bg-black">
                            <h3
                              class="font-weight-light bg-black text-orange mb-2"
                            >
                              {{ product.name }}
                            </h3>
                            <span>
                              <v-icon size="18" color="cyan-accent-1"
                                >mdi-star</v-icon
                              >

                              ({{ product.rating }})
                            </span>
                            <v-btn
                              @click="addtocart(product.id)"
                              class="float-right text-orange"
                              icon="mdi-cart-plus"
                            ></v-btn>
                          </v-card-text>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-card
                  class="bg-amber-lighten-5 d-flex align-center justify-space-between"
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
                      ><v-btn variant="outlined">Buy Now</v-btn></v-card-text
                    >
                  </div>
                  <v-img src="men.png" width="200"></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card
                  class="bg-amber-lighten-5 d-flex align-center justify-space-between"
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
                      ><v-btn variant="outlined">Buy Now</v-btn></v-card-text
                    >
                  </div>
                  <v-img src="women.png" width="200"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12">
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
import { mapGetters, mapMutations, mapState } from "vuex";
  import axios from "axios";


export default defineComponent({
  name: "HomeView",
  components: { NavBar, FooterB },
  data() {
    return {
      tab: null,
      active:0,
      service: [
        {
          title: "Free Shipping",
          text: "lorem lorem",
          icon: "mdi-truck",
        },
        {
          title: "Secure Payment",
          text: "lorem lorem",
          icon: "mdi-handshake-outline",
        },
        {
          title: "100% Money Back",
          text: "lorem lorem",
          icon: "mdi-hand-heart-outline",
        },
        {
          title: "Online Support",
          text: "lorem lorem",
          icon: "mdi-chat-outline",
        },
      ],
      search: "",
      panel: [],
      carouselItem:[],
    };
  },
  computed: {
    ...mapState(["itemsPerPage"]),
    ...mapGetters(["homeItemsPage"]),
  },
  methods: {
    ...mapMutations(["setShowFavorites"]),
    addtocart(id) {
      this.$router.push({ name: "addToCart", query: { details:id } });
    },
  },
  created(){
    axios.get('http://127.0.0.1:8000/api/product/discount').then((response)=>{
      let discount = response.data.discounts.data
      discount.forEach((image) =>{
        image.images.forEach((img) =>{
          img.path = "http://127.0.0.1:8000/storage/" + img.path;
        })
      })
      console.log(discount);
      this.carouselItem = discount;
      // if(discounts.discounts != null)
    })
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
