<template>
      <v-col cols="12" class="px-md-16 px-sm-4">
        <v-card
          class="bg-transparent d-flex align-center justify-space-between px-2 px-sm-12"
          height="400"
          flat
        >

          <div>
            <v-card-title class="py-4"
              ><v-chip class="bg-Color5 text-Color1" elevation="5"
                >Bes Selling</v-chip
              ></v-card-title
            >
            <v-card-title class="text-Color1 text-sm-h4 text-md-h3"
              >Best Selling Product</v-card-title
            >
            <v-card-text text="catption text-Color1"
              >Lorem, ipsum dolor sit amet</v-card-text
            >
            <v-card-text class="text-h6 text-Color1"
              >Up to
              <span class="text-orange-darken-2">70%</span> OFF</v-card-text
            >
            <v-card-text>
               <button  class="me-2 buy bg-red"> Buy Now </button>
            </v-card-text>
          </div>
        <v-hover v-slot="{ isHovering, props }" >
            <v-img
              src="2.png"
              :class="{ 'imageAni': isHovering }"
              v-bind="props"
              width="200"
            ></v-img>
        </v-hover>

        </v-card>
    </v-col>
</template>

<script>
export default {};
</script>

<style scoped>
.imageAni {
    transform: scale(1.2);
    transition:transform .5s  ease-in-out;
}
@media (max-width: 500px) {
 img{
    position: absolute;
    z-index: -1;
 }
}

  /* .buy{
    box-shadow: 7px 7px 15px #797979, -7px -7px 15px #dfdfdf, -2px -2px 5px #dddddd ,-1px -1px 3px #dbdbdb;
    transition: .3s;
  }

  .buy:hover {
    box-shadow: 0px 0px 3px #bebebe, -4px -4px 10px #dbdbdb;
  } */

</style>
