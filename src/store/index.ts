import { createStore } from "vuex";
import { PriceRanges, Items, Color, Size } from "./types";

export default createStore({
  state: {
    search: "",
    selectedCategory: null,
    selectedGender: "",
    selected: [] as string[],
    selectedSize: [] as string[],
    selectedType: [] as string[],
    selectedPriceRanges: [] as PriceRanges[],
    items: [] as Items[],

    priceRanges: [
      { label:"5000 to 8000",min: 5000, max: 8000 },
      { label:"9000 to 15000", min: 9000, max: 15000 },
      { label:"16000 to 20000", min: 16000, max: 20000 },
      { label:"21000 and over", min:21000, max: Infinity },
    ] ,

    //login Data 
    userData:[],
    token:'',

    showFavourites: false,
    currentPage: 1,
    itemsPerPage: 2,
    homeItems: 8,
    cartItems: 20,
    cartCount:0,
    noti:0,
  },
  getters: {
    filterItems(state) {
      return state.items.filter((item) => {
        const matchesSearch = item.name
          .toLowerCase()
          .includes(state.search.toLowerCase());
        const matchesCategory = state.selectedCategory
          ? item.category_name === state.selectedCategory
          : true;
            const matchesGender = state.selectedGender
              ? item.gender === state.selectedGender
              : true;
        const matchesType = state.selectedType.length
          ? state.selectedType.includes(item.type)
          : true;
            const matchesPrice = state.selectedPriceRanges.length
              ? state.selectedPriceRanges.some(
                  (range) => item.price >= range.min && item.price <= range.max
                )
              : true;
            // const matchesFavorite = state.showFavourites ? item.favourite : true;

        // this method is important

        // Filter items based on selected colors

        //   if (state.selected.length === 0) {
        //   return state.items;
        // }
        // return item.colors.some(color => state.selected.includes(color.color));
        // // Filter items based on selected sizes

        // if (state.selectedSize.length === 0) {
        //   return state.items;
        // }
        // return item.sizes.some(size => state.selectedSize.includes(size.size));
        // return
        return (
          matchesSearch &&
          matchesCategory &&
          matchesType &&
          (state.selected.length === 0 ||
            item.colors.some((color) =>
              state.selected.includes(color.color)
            )) &&
          (state.selectedSize.length === 0 ||
            item.sizes.some((size) => state.selectedSize.includes(size.size))) &&
          matchesGender &&
          matchesPrice
          // matchesFavorite
        );
      });
    },
    allColors(state): Color[] {
      const allColors: Color[] = [];
      state.items.forEach((item) => {
        item.colors.forEach((color) => {
          if (!allColors.some((c) => c.color === color.color)) {
            allColors.push({ ...color }); // Push a copy of color object
          }
        });
      });
      return allColors;
    },
    allSizes(state): Size[] {
      const allSizes: Size[] = [];
      state.items.forEach((item) => {
        item.sizes.forEach((size) => {
          if (!allSizes.some((s) => s.size === size.size)) {
            allSizes.push({ ...size }); // Push a copy of size object
          }
        });
      });
      return allSizes;
    },
    paginatedItems(state, getters) {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return getters.filterItems.slice(start, end);
    },
    pageCount(state, getters) {
      return Math.ceil(getters.filterItems.length / state.itemsPerPage);
    },
    // homeItemsPage(state) {
    //   const start = (state.currentPage - 1) * state.homeItems;
    //   const end = start + state.homeItems;
    //   return state.items.slice(start, end);
    // },
    // homeCount(state) {
    //   return Math.ceil(state.items.length / state.homeItems);
    // },
    cartItemsPage(state) {
      const start = (state.currentPage - 1) * state.cartItems;
      const end = start + state.cartItems;
      return state.items.slice(start, end);
    },
    cartShowCount(state) {
      return Math.ceil(state.items.length / state.cartItems);
    },
    categories(state) {
      return new Set(state.items.map((item) => item.category_name));
    },
    gender(state) {
      return new Set(state.items.map((item) => item.gender));
    },
    types(state) {
      return new Set(state.items.map((item) => item.type));
    },
    // favouriteItems(state) {
    //   return state.items.filter((item) => item.favourite);
    // },
    getToken:state=>state.token,
    getUserData:state=>state.userData,
    getCartCount:state=>state.cartCount,
    getNoti:state=>state.noti,
  },
  mutations: {
    // setShowFavorites(state, showFavorites) {
    //   state.showFavourites = showFavorites;
    // },
    // toggleFavourite(state, id) {
    //   const item = state.items.find((item) => item.id === id);
    //   if (item) {
    //     item.favourite = !item.favourite;
    //   }
    // },
    setSearch(state, search) {
      state.search = search;
    },
    setSelectCategory(state, category) {
      state.selectedCategory = category;
    },
    setSelectGender(state, gender) {
      state.selectedGender = gender;
    },
    setSelectType(state, type) {
      state.selectedType = type;
    },
    setSelectColor(state, colors: string[]) {
      state.selected = colors;
    },
    setSelectSize(state, sizes: string[]) {
      state.selectedSize = sizes;
    },
    setSelectPriceRanges(state, priceRanges) {
      state.selectedPriceRanges = priceRanges;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setItemsPerPage(state, itemsPerPage) {
      state.itemsPerPage = itemsPerPage;
    },

    setItems(state, items) {
      state.items = items;
    },
  },
  actions: {
    setToken:({state},value) => state.token=value,
    setUserData:({state},value) => state.userData=value,
    setCartCount:({state},value) =>state.cartCount=value,
    setNoti:({state},value) =>state.noti=value,

  },
  modules: {},
});
