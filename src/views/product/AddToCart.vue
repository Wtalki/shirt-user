<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-3">
    <v-main class="mt-5">
      <v-container class="bg-grey-lighten-4">

        <v-row>
          <v-col cols="12" md="5" lg="5">
            <v-card>
              <div class="d-flex justify-center overflow-x-scroll flex-wrap mt-1 ">
              <img v-for = "(pro, i) in product.images" width="90" class="rounded me-1" :key="i" :src="pro.path" alt="">
            </div>
              <v-carousel color="transparent" height="400" hide-delimiter cycle v-model="active">
                <v-carousel-item
                  height="400"
                  color="#111111"
                  v-for="(img, i) in product.images"
                  :key="i"
                  :src="img.path"
                >
                <h3>{{i+1}}</h3>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
          <v-col cols="12" md="7" lg="7">
            <v-card class="bg-transpaent pa-3" flat>
              <v-divider
                color="warning"
                :thickness="2"
                opacity="100"
              ></v-divider>
              <v-card-item>
                <v-card-title class="text-body-2 d-flex align-center">
                  <span class="text-lg-emphasis text-h5 font-weight-bold">{{
                    product.name
                  }}</span><v-chip prepend-icon="mdi-eye-circle" class="ms-2">{{product.view_count}}</v-chip>
                  <v-spacer></v-spacer>
                  <v-chip
                    class="ms-2 text-h6 font-weight-bold"
                    color="grey-darken-4"
                    prepend-icon="mdi-currency-usd"
                    size="small"
                    :text="product.price * number"
                    variant="flat"
                  ></v-chip>
                </v-card-title>
              </v-card-item>
              <v-card-subtitle v-if="product.rating == 1">
                <v-icon color="orange">mdi-star</v-icon>
                (5)
              </v-card-subtitle>
              <v-card-subtitle v-if="product.rating == 2">
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                (5)
              </v-card-subtitle>
              <v-card-subtitle v-if="product.rating == 3">
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                (5)
              </v-card-subtitle>
              <v-card-subtitle v-if="product.rating == 4">
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                (5)
              </v-card-subtitle>
              <v-card-subtitle v-if="product.rating == 5">
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                (5)
              </v-card-subtitle>
              <v-divider class="mb-2 mt-3"></v-divider>
              <v-card-item>
                <v-list >
                  <v-list-item >
                    <v-radio-group  inline mandatory v-model="selectedImage">
                      <v-radio
                      v-for="(image,i) in product.images"
                      :key="i"
                        color="black"
                        :label="i+1"
                        :value="image.path"

                      ></v-radio>
                      <template v-slot:prepend>
                        <span>Image</span>
                        <v-divider
                          class="ms-3 me-3"
                          vertical
                          :thickness="1"
                          opacity="100"
                        ></v-divider>
                      </template>
                    </v-radio-group>
                  </v-list-item>
                </v-list>
                <v-list >
                  <v-list-item >
                    <v-radio-group  inline mandatory v-model="selectedColor">
                      <v-radio
                      v-for="(color,i) in product.colors"
                      :key="i"
                        :color="color.color"
                        :label="color.color"
                        :value="color.color"

                      ></v-radio>
                      <template v-slot:prepend>
                        <span>color</span>
                        <v-divider
                          class="ms-3 me-3"
                          vertical
                          :thickness="1"
                          opacity="100"
                        ></v-divider>
                      </template>
                    </v-radio-group>
                  </v-list-item>
                </v-list>
                <v-list>
                  <v-list-item>
                    <v-radio-group inline v-model="product.type">
                      <v-radio 
                        color="black"
                        :label="product.type"
                        :value="product.type"
                      ></v-radio>
                      <template v-slot:prepend>
                        <span>Type</span>
                        <v-divider
                          class="ms-3 me-3"
                          vertical
                          :thickness="1"
                          opacity="100"
                        ></v-divider>
                      </template>
                    </v-radio-group>
                  </v-list-item>
                </v-list>
                <v-list>
                  <v-list-item>
                    <v-radio-group inline v-model="selectedSize">
                      <v-radio
                      v-for="(size,i) in product.sizes"
                      :key="i"
                        :color="size.size"
                        :label="size.size"
                        :value="size.size"
                      ></v-radio>

                      <template v-slot:prepend>
                        <span>size</span>
                        <v-divider
                          class="ms-5 me-2"
                          vertical
                          :thickness="1"
                          opacity="100"
                        ></v-divider>
                      </template>
                    </v-radio-group>
                  </v-list-item>
                </v-list>
                <div class="ms-15 mb-3 d-flex ga-5">
                  <v-btn
                    variant="outlined"
                    icon="mdi-minus"
                    @click="decrease"
                  ></v-btn>
                  <div>
                    <v-text-field
                      width="50"
                      v-model="number"
                      class="text-center"
                      variant="outlined"
                      readonly
                    ></v-text-field>
                  </div>
                  <v-btn
                    variant="outlined"
                    icon="mdi-plus"
                    @click="increase"
                  ></v-btn>
                </div>
                <v-btn
                  v-if="number == 0"
                  flat
                  disabled
                  color="orange rounded-pill"
                  class="ms-15"
                  width="250"
                  >Add To Bag</v-btn
                >
                <v-btn
                  v-if="number > 0"
                  flat
                  color="orange rounded-pill"
                  class="ms-15"
                  width="250"
                  @click="addToBag()"
                  >Add To Bag</v-btn
                >
                <v-btn
                  flat
                  color="orange rounded-pill mt-3"
                  class="ms-15"
                  @click="toggleItemFavourite(product.id)"
                  width="250"
                  :prepend-icon="
                    product.favourite ? 'mdi-heart' : 'mdi-heart-outline'
                  "
                  variant="outlined"
                  >Add To Favourite</v-btn
                >
                <v-divider class="mt-3"></v-divider>
                <v-card-text>{{ product.description }}</v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="12" lg="5">
                <v-card>
                  <v-card-item class="text-center">
                    <v-card-title>Review</v-card-title>
                  </v-card-item>
                  <v-card-item class="text-center">
                    <v-rating v-model="rating"></v-rating>
                    <v-textarea label="text..." v-model="review" clearable></v-textarea>
                    <v-card-text class="text-red" v-if="error">Description is requeired</v-card-text>
                  </v-card-item>
                  <v-card-item>
                    <v-btn color="orange" class="mb-2 float-end" @click="submit">Submit</v-btn>
                  </v-card-item>
                </v-card>
              </v-col>

              <v-col cols="12" lg="7">
                <v-card class="bg-transparent" flat>
              <v-card-title>Reviews</v-card-title>
              <v-card-item>
                <v-list lines="three" item-props>
                  <v-list-item v-for="(r, i) in sortReview" :key="i">
                    <v-btn icon="mdi-delete" v-if="getUserData.id == r.user_id" @click="reviewDelete(i)" flat class="float-end"></v-btn>
                    <v-list-item-title>{{ r.user_name }} <span class="text-caption">{{r.created_at}}</span></v-list-item-title>
                    <v-list-item-subtitle v-if="r.rating == 1">
                      <v-icon color="orange">mdi-star</v-icon>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-if="r.rating == 2">
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-if="r.rating == 3">
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-if="r.rating == 4">
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-if="r.rating == 5">
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>{{
                      r.text
                    }}</v-list-item-subtitle>
                    <template v-slot:prepend>
                      <v-avatar v-if="r.img == nul" image="1.png"></v-avatar>
                      <v-avatar v-else :image="r.img"></v-avatar>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-item>
            </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  <FooterB></FooterB>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import FooterB from "@/components/FooterB.vue";
import { mapGetters, mapMutations, mapState } from "vuex";
import axios from "axios"

export default defineComponent({
  name: "ProductPage",
  components: { NavBar, FooterB },
  data() {
    return {
      selectedColor:'',
      selectedSize:'',
      selectedImage:'',
      reviews: [
      ],
      product: [],
      number: 1,
      rating:1,
      review:'',
      error:false,
      cart:0,
      active:0,
      
    };
  },
  computed: {
    ...mapState(["cartItems"]),
    ...mapGetters(["favouriteItems", "cartItemsPage", "cartShowCount","getUserData","getToken","getCartCount"]),
    sortReview(){
      return [...this.reviews].sort((a,b) => b.rating - a.rating);
    },
  },
  methods: {
    ...mapMutations(["toggleFavourite", "setShowFavorites", "setCurrentPage","setCartCount"]),
    submit(){
      const userReview={
        userId:this.getUserData.id,
        user_name:this.getUserData.name,
        rating:this.rating,
        productId:this.$route.query.details,
        text:this.review,
        img:this.getUserData.image,

      }

      if(this.review == ""){
        this.error = true;
      }else{
        axios.post('http://127.0.0.1:8000/api/customer/review', userReview)
        this.reviews.push(userReview)
        console.log(userReview);
        this.error = false;
        this.review="";
      }
    },

    toggleItemFavourite(id) {
      this.toggleFavourite(id);
    },
    onPageChange(page) {
      if (page >= 1 && page <= this.pageCount) {
        this.setCurrentPage(page);
      }
    },
    updateItemsPerPage(event) {
      this.setItemsPerPage(parseInt(event.target.value));
      this.setCurrentPage(1);
    },
    increase() {
      this.number++;
    },
    decrease() {
      if (this.number > 1) {
        this.number--;
      }
    },
    productDetail(id){
      let product = {
        productId:id
      };
      axios.post('http://127.0.0.1:8000/api/product/detail', product).then((response) => {
        response.data.product.images.forEach((item) => {
              item.path = "http://127.0.0.1:8000/storage/" + item.path;
          });
        let data = response.data.product;
        this.product = data
        this.selectedColor = this.product.colors[0].color;
        this.selectedSize=this.product.sizes[0].size;
        this.selectedImage=this.product.images[0].path;
      })
    },
    addToBag(){
      if(
        this.getToken != null &&
        this.getToken != undefined &&
        this.getToken != "")
      {
        const productCart={
        productId:this.product.id,
        userId:this.getUserData.id,
        size:this.selectedSize,
        color:this.selectedColor,
        image:this.selectedImage,
        qty:this.number,
      }
      axios.post('http://127.0.0.1:8000/api/product/cart', productCart).then((response) =>{
        if(response.data.status == "success"){
          alert("Order Success")
          this.cart++
          this.$store.dispatch('setCartCount',this.cart)
        }
      })

      this.number=1

      }else{
        this.$router.push({name:'loginPage'})
      }
    },
    reviewDelete(i){
      console.log(this.reviews[i].id)
      let id= this.reviews[i].id;
      axios.get(`http://127.0.0.1:8000/api/review/delete/${id}`)
      this.reviews.splice(i,1)
    }
  },
  created() {
    let id = this.$route.query.details
    this.productDetail(id);
    // get reviews
    axios.get(`http://127.0.0.1:8000/api/show/review/${this.$route.query.details}`).then((response) => {
        this.reviews=response.data.reviews
    })
    //view count
    axios.get(`http://127.0.0.1:8000/api/product/view/${this.$route.query.details}`)

  },
});
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
