<template>
    <v-card variant="flat">
            <v-card-title class="text-center bg-Color3">Feature Product</v-card-title>
            <v-tabs v-model="tab" class="bg-Color3" align-tabs="center">
              <v-tab value="new">New Arrive</v-tab>
              <v-tab value="best-selling">Best Selling</v-tab>
              <v-tab value="top-related">Top Related</v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab" class="bg-Color4">
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
</template>


<script>
import { mapGetters, mapState } from "vuex";

    export default {
        name:'RecommComp',

        data () {
            return {
                tab: null,
            }
        },
          computed: {
        ...mapState(["itemsPerPage"]),
        ...mapGetters(["homeItemsPage"]),
    },
    }

    
</script>

<style lang="stylus" scoped>

</style>
