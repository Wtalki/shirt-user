<template>
  <v-row class=" px-sm-4 px-lg-16  px-2 mt-2 mb-2">
    <v-col cols="12">
      <div class="d-flex align-center justify-space-between text-md-h4 text-sm-h5 text-h6">
                <h3 class="text-Color2">{{title}}</h3>
            <div class="d-none d-sm-flex">
                <v-btn flat class="bg-red">See more..</v-btn>
            </div>
        </div>
    </v-col>
    <v-col
      v-for="product in 4"
      :key="product.id"
      cols="6"
      md="3"
      sm="4"
      class=""
    >
      <v-hover v-slot="{isHovering,props}" open-delay="200">
        <v-card class="bg-Color4" v-bind="props" :elevation="isHovering ? 16 : 3">
          <div>
            <v-carousel height="200"  hide-delimiters show-arrows="hover" progress="red" >
               <!-- <template v-slot:prev="{ props }">
                <v-btn
                  color="red"
                  variant="elevated"
                  @click="props.onClick"
                  icon="mdi-arrow-left-bold-circle"
                ></v-btn>
              </template>
              <template v-slot:next="{ props }">
                <v-btn
                  color="red"
                  variant="elevated"
                  @click="props.onClick"
                  icon="mdi-arrow-right-bold-circle"
                ></v-btn>
              </template> -->
              <v-carousel-item
                v-for="n in 4"
                :key="n"
                class="bg-Color4 position-relative"
              >
              <!-- for shoes image  -->
              <v-img class="shoeImg" v-if="type == 'shoe'" src="shoe.png" ></v-img>

              <v-img v-if="type == 'shirt'" :src="n+'.png'" ></v-img>

              <span class="bubble " :class="'bg-orange-darken-'+n"></span>
              <span class="discount text-h6" >30% <br><span>OFF</span></span>

                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-grey-darken-1 text-red v-card--reveal text-h4"
                    style="height: 30%"
                  >
                    3000$
                  </div>
                </v-expand-transition>
                <div>
                  <!-- <v-btn
                    @click="toggleItemFavourite(product.id)"
                    :icon="
                      product.favourite ? 'mdi-heart' : 'mdi-heart-outline'
                    "
                    varient="outlined"
                    class="bg-transparent float-end text-cyan-accent-2"
                  ></v-btn> -->
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
          <v-card-text class="pt-6 bg-Color4 ">
            <h3 class=" mb-2 text-center text-red text-sm-h5 text-h6 font-weight-bold" >
              Lifestyle Shoes
              <!-- <v-chip
                v-for="(discount, index) in product.discounts"
                class="bg-red ms-1"
                :class="
                  discount.percentage == null || discount.percentage === 0
                    ? 'd-none'
                    : ''
                "
                :key="index"
                >{{ discount.percentage }}% OFF</v-chip
              > -->
            </h3>
            <div class="d-flex align-center justify-space-between">
              <v-chip prepend-icon="mdi-eye-circle" class="ms-1 text-black">11</v-chip>
              <span >
                <v-icon size="18" color="cyan-accent-1">mdi-star</v-icon>
                0
              </span>
            </div>
            <!-- <span v-else>
              <v-icon size="18" color="cyan-accent-1">mdi-star</v-icon>
              {{ product.reviews_avg_rating.toFixed(1) }}
            </span> -->
            <div class="d-flex justify-center align-items-center mt-2">
              <button class="buy  bg-red" >
              <span>Buy Now<v-icon>mdi-cart-plus</v-icon></span>
            </button>
            </div>
            <!-- <v-btn
              @click="addtocart()"
              class="float-right text-orange"
              icon="mdi-cart-plus"
            ></v-btn> -->
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props:['type','title'],
  data () {
    return {
    }
  },
};
</script>

<style scoped>
    .shoeImg{
        width:500px;
        transform: rotate(-30deg);
        transition: .5s ease-out;
    }
    .shoeImg:hover{
        transform: rotate(-35deg);
    }
    .bubble{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: absolute;
        z-index: -1;
        top: -30px;
        right: -60px;
        animation: bubbleAnimation 2s infinite;
    }
     .discount{
        position: absolute;
        z-index: -1;
        top: 20px;
        left: 20px;
        animation: bubbleAnimation 2s infinite;
    }
  .buy{
    box-shadow: 7px 7px 15px #797979, -7px -7px 15px #f0f0f0, -2px -2px 5px #dbdbdb ,-1px -1px 3px #f0f0f0;
    transition: .3s;
  }

  .buy:hover {
    box-shadow: 0px 0px 3px #bebebe, -4px -4px 10px #dbdbdb;
  }
  @media (max-width: 500px) {
      .shoeImg{
        margin-top: 40px;
      }
  }
</style>
