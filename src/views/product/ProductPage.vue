<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-2">
    <v-main>
      <div>
        <v-navigation-drawer
          v-model="drawer"
          class="[border bg-grey-darken-4 position-fixed d-md-block]"
          style="overflow-y: hidden"
        >
          <v-list-item
            prepend-avatar=""
            height="60"
            nav
            class="text-h4 font-weight-bold text-center"
          >
          </v-list-item>
          <v-divider></v-divider>
          <h3 class="mt-3">Categories</h3>
          <v-list density="compact" class="ml-5" nav>
            <v-list-item @click="setSelectCategory('')">All</v-list-item>
            <v-list-item
              v-for="(category, index) in categories"
              :key="index"
              :title="category"
              :value="category"
              @click="setSelectCategory(category)"
            >
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <h3 class="mt-3">Filter</h3>
          <v-expansion-panels v-model="panel" multiple flat>
            <v-expansion-panel class="bg-grey-darken-4">
              <v-expansion-panel-title>Tipe</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox
                  v-for="(type, index) in types"
                  :key="index"
                  v-model="selectedType"
                  @change="setSelectType(selectedType)"
                  :label="type"
                  :value="type"
                ></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="bg-grey-darken-4">
              <v-expansion-panel-title>Colors</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox
                  v-for="(color, index) in allColors"
                  :key="index"
                  v-model="selectedColors"
                  :label="color.color"
                  :value="color.color"
                ></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="bg-grey-darken-4">
              <v-expansion-panel-title>Size</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox
                  v-for="(size, index) in allSizes"
                  :key="index"
                  v-model="selectedSizes"
                  :label="size.size"
                  :value="size.size"
                ></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="bg-grey-darken-4">
              <v-expansion-panel-title>Price</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox
                  v-for="(price, index) in priceRanges"
                  :key="index"
                  @change="setSelectPriceRanges(selectedPriceRanges)"
                  v-model="selectedPriceRanges"
                  :label="price.min  +' to '+  price.max "
                  :value="price"
                ></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-navigation-drawer>
        <v-btn
          variant="outlined"
          class="text-white d-sm-block d-md-block d-lg-block"
          size="50"
          @click.stop="drawer = !drawer"
          style="position: fixed; bottom: 150px; z-index: 30; right: 50px"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <div></div>
      </div>
      <div>
        <v-row class="mt-3">
          <v-col cols="12">
            <div>
              <v-toolbar class="bg-grey-darken-4">
                <v-toolbar-title>T-Shirt</v-toolbar-title>
                <v-text-field
                  variant="underlined"
                  hide-details="auto"
                  v-model="search"
                  @input="setSearch($event.target.value)"
                  clearable
                  placeholder="Search here..."
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-text-field>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-toolbar class="bg-grey-darken-4">
                <v-spacer></v-spacer>
                <v-btn @click="setSelectGender('')" variant="outlined"
                  >All</v-btn
                >
                <v-btn
                  variant="outlined"
                  v-for="(gen, index) in gender"
                  :key="index"
                  :color="selectedGender === gen ? 'orange' : 'default'"
                  class="ms-3"
                  :value="gen"
                  @click="setSelectGender(gen)"
                  >{{ gen }}</v-btn
                >
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-toolbar class="bg-grey-darken-4">
                <div class="d-flex flex-wrap">
                  <v-chip v-for="sel in selected" :key="sel">{{ sel }}</v-chip>
                  <v-chip v-for="sel in selectedSize" :key="sel">{{
                    sel
                  }}</v-chip>
                  <v-chip v-for="sel in selectedType" :key="sel">{{
                    sel
                  }}</v-chip>
                  <v-chip v-for="sel in selectedPriceRanges" :key="sel">{{
                    sel.label
                  }}</v-chip>
                </div>
              </v-toolbar>
            </div>
          </v-col>
          <v-col cols="12" style="min-height: 90vh">
            <v-row>
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="product in filterItems"
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
                              v-for="(img, index) in product.images"
                              :key="index"
                              height="200"
                              :src="img.path"
                              color="#111111"
                            >
                              <v-expand-transition>
                                <div
                                  v-if="isHovering"
                                  class="d-flex transition-fast-in-fast-out bg-grey-darken-1 text-cyan-accent-1 v-card--reveal text-h4"
                                  style="height: 30%"
                                >
                                  {{ product.price }}KS
                                </div>
                              </v-expand-transition>
                              <div>
                                <v-btn
                                  @click="toggleItemFavourite(product.id)"
                                  :icon="
                                    product.favourite
                                      ? 'mdi-heart'
                                      : 'mdi-heart-outline'
                                  "
                                  varient="outlined"
                                  class="bg-transparent float-end text-cyan-accent-2"
                                ></v-btn>
                              </div>
                            </v-carousel-item>
                          </v-carousel>
                        </div>
                        <v-card-text class="pt-6 bg-black">
                          <h3
                            class="font-weight-light bg-black text-orange mb-2"
                          >
                            {{ product.name }} <v-chip prepend-icon="mdi-eye-circle" class="ms-1">{{product.view_count}}</v-chip>
                            <v-chip v-for="(discount,index) in product.discounts" class="bg-red ms-1" :class="discount.percentage == null || discount.percentage === 0 ? 'd-none':''"  :key="index">{{discount.percentage}}% OFF</v-chip>
                          </h3>
                          <span v-if="isNaN(product.reviews_avg_rating)">
                            <v-icon size="18" color="cyan-accent-1"
                              >mdi-star</v-icon
                            >
                            0
                          </span>
                          <span v-else>
                            <v-icon size="18" color="cyan-accent-1"
                              >mdi-star</v-icon
                            >
                            {{ product.reviews_avg_rating.toFixed(1) }}
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
            </v-row>
          </v-col>

          <v-col cols="12">
            <div class="text-center d-flex justify-center align-center">
              <h2>show</h2>
              <select
                class="border-lg pa-2 text-center"
                v-model="itemsPerPage"
                @change="updateItemsPerPage"
              >
                <option v-for="n in [10,20]" :key="n" class="text-black">
                  {{ n }}
                </option>
              </select>
              <v-btn class="bg-orange me-3" flat @click="prevPage" :disabled="currentPage === 1">Previoux</v-btn>
              <span>{{currentPage}}/{{totalPages}}</span>
              <v-btn class="bg-orange ms-3 " flat @click="nextPage" :disabled="currentPage === totalPages">Next</v-btn>

            </div>
          </v-col>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import { mapGetters, mapMutations, mapState,mapActions } from "vuex";
import api from "../../api.js";
import {storagePath } from "../../api.js";



export default defineComponent({
  name: "ProductPage",
  components: { NavBar },
  data() {
    return {
      value: [10, 20, 30, 40, Infinity],
      drawer: false,
      search: "",
      panel: [],
      currentPage: 1,
      itemsPerPage:12,
      page: 1,
      selectedType: [],
      selectedPriceRanges: [],
      selectedCategory: "",
    };
  },
  computed: {
    ...mapState([
      "items",
      "search",
      "showFavourites",
      "priceRanges",
      "selectedCategory",
      "selectedGender",
      "selectedType",
      "selected",
      "selectedSize",
      "selectedPriceRanges",
      // "currentPage",
      // "itemsPerPage",
    ]),
    ...mapGetters([
      "allColors",
      "allSizes",
      "getTypes",
      "getPrices",
      "gender",
      "filterItems",
      "categories",
      "types",
      "colors",
      "paginatedItems",
      "pageCount",

    ]),
    ...mapActions(['setPage']),
    selectedColors: {
      get() {
        return this.$store.state.selected;
      },
      set(value) {
        this.filterShirtItems(value);
      },
    },
    selectedSizes: {
      get() {
        return this.$store.state.selectedSize;
      },
      set(value) {
        this.setFilterSizes(value);
      },
    },
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    // Filtering items to display based on currentPage
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filterItems.slice(start, end);
    },
  },
  methods: {
    ...mapMutations([
      "setSearch",
      "setSelectCategory",
      "setSelectGender",
      "setSelectType",
      "setSelectColor",
      "setSelectSize",
      "setSelectPriceRanges",
      "toggleFavourite",
      "setShowFavorites",
      "setCurrentPage",
      "setItemsPerPage",
    ]),
    addtocart(id) {
      this.$nextTick(() => {
        window.scrollTo({
          top: 0,
        });
      });
      this.$router.push({ name: "addToCart", query: { details:id } });

    },

    toggleItemFavourite(id) {
      this.toggleFavourite(id);
    },
    // color filter
    filterShirtItems(selected) {
      this.setSelectColor(selected);
    },
    setFilterSizes(selectedSize) {
      this.setSelectSize(selectedSize);
    },
    //pagination
     prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
        this.currentPage++;
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
    async fetchItems() {
  try {
    const response = await api.get("/product/list");
    
    // Process the data
    const items = response.data.data.map(product => {
      product.reviews_avg_rating = parseFloat(product.reviews_avg_rating);
      
      // Update image paths
      product.images = product.images.map(ite => ({
        ...ite,
        path: `${storagePath}${ite.path}`
      }));
      
      return product;
    });
    
    // Commit the processed items to the store
    this.$store.commit("setItems", items);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
}

  },
  created() {
    this.fetchItems();
  },
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
</style>
