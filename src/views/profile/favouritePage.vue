<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-3">
    <v-main class="mt-5">
      <v-row>
        <v-col
          cols="4"
          sm="6"
          md="4"
          v-for="product in favouriteItems"
          :key="product.id"
        >
          <v-card>
            <v-img :src="product.image[0]" height="200" class="mt-6">
              <div
                class="d-flex bg-grey-darken-1 text-cyan-accent-1 v-card--reveal text-h4"
                style="height: 30%"
              >
                ${{ product.name }}
              </div>
              <div>
                <v-btn
                  @click="toggleItemFavourite(product.id)"
                  :icon="product.favourite ? 'mdi-heart' : 'mdi-heart-outline'"
                  varient="outlined"
                  class="bg-transparent float-end text-cyan-accent-2"
                ></v-btn>
              </div>
            </v-img>
          </v-card>
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

export default defineComponent({
  name: "ProductPage",
  components: { NavBar, FooterB },
  data() {
    return {
      drawer: false,
      search: "",
      panel: [],
      currentPage: 1,
      page: 1,
      selected: [],
      selectedSize: [],
      selectedType: [],
      selectedPriceRanges: [],
      selectedCategory: "",
    };
  },
  computed: {
    ...mapState([
      "search",
      "showFavourites",
      "priceRanges",
      "selectedCategory",
      "selectedGender",
      "selectedType",
      "selected",
      "selectedSize",
      "selectedPriceRanges",
      "currentPage",
      "itemsPerPage",
    ]),
    ...mapGetters([
      "getShirtCategories",
      "getColors",
      "getTypes",
      "getSizes",
      "getPrices",
      "gender",
      "filterItems",
      "categories",
      "types",
      "colors",
      "sizes",
      "paginatedItems",
      "pageCount",
      "favouriteItems",
    ]),
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
    toggleShowFavorites() {
      this.setShowFavorites(!this.showFavourites);
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
  },
});
</script>
<style>
.v-card--reveal {
  align-items: end;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
