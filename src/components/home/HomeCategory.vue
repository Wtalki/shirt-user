<template>
  <v-row class="px-2 px-md-16" justify="center">
    <!-- <v-col cols=12>
        <div class="d-flex align-center justify-space-between ">
                <h3 class="text-Color5">Browse by Categories</h3>
            <div class="d-none d-sm-flex">
                <v-icon size="40">mdi-arrow-left-bold-circle</v-icon>
                <v-icon size="40">mdi-arrow-right-bold-circle</v-icon>
            </div>
        </div>
    </v-col>
    <v-col cols="3" md="2" v-for="n in 6" :key="n">
      <v-hover v-slot={isHovering,props} open-delay="30">
        <v-card
            :class="{'bg-Color3 borderC':isHovering }"
            class=" pa-2 cursor-pointer rounded-lg bg-Color1 borderColor"
            :elevation="isHovering ? 5 : 0"
            v-bind="props"
            min-width="70"
            height="100"
            mx-auto
        >
          <v-img
            height="50px"
            class="mt-2"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          ></v-img>
          <p class="text-center text-caption mt-2">western</p>
        </v-card>
      </v-hover>
    </v-col> -->
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.borderC{
    border: 1px solid peru;
}
.bg-Color1{
    transition: .5s;
  
}
.borderColor{
  border: 1px solid rgb(201, 201, 201);
}

.hoverColor{
  background-image: linear-gradient(to right top, rgb(0, 77, 122), rgb(0, 135, 147), rgb(0, 191, 114), rgb(168, 235, 18));
}
</style>
