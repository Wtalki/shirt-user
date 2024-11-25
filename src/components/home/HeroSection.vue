<template>
  <v-card flat>
  <v-carousel hide-delimiters progress="red" v-model="active" class="heroSection" height="400" show-arrows="hover">
    <v-carousel-item
      v-for="(n, i) in carouselItem"
      :key="i"
      cover
      class="bg-Color1"
    >
        <div class="content mx-2 px-2 mx-sm-4 px-sm-4 px-md-16 my-3 my-md-16 ms-md-16">
          <div class="text">
            <h4 class="text-red text-sm-h3 text-h4">
              <span class="text-red text-">{{n.discounts[0].percentage}}</span>% Discount
            </h4>
            <h4 class=" text-sm-h3 text-h4">
              <span class="text-black">{{n.type}}</span>
            </h4>
            <p class="w-100 text-black">{{n.description}}</p>
            <ButtonComp
              action="buy"
              title="Buy Now"
              class=" bg-red"
            />
            <button append-icon="mdi-play" class="watch text-red">Watch Blog <v-icon>mdi-play-circle</v-icon></button>
          </div>
          <div class="image">

            <img
              alt="Electric Scooter"
              :src="n.images[0].path"
            >
          </div>
          </div>
    </v-carousel-item>
  </v-carousel>
  </v-card>
</template>

<script>
import ButtonComp from "../assential/ButtonComp.vue";
export default {
  name: "HeroSection",
  components: {
    ButtonComp,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      active: 0,
      carouselItem: this.data,
    };
  },
  watch: {
    data(newData) {
      console.log(newData);
      this.carouselItem = newData;
    },
  },
};
</script>

<style>

.content {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 40px;
  padding-left: 200px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
}

.text h1 {
  font-size: 48px;
  color: #fff;
}
.text h1 span {
  font-weight: 700;
}
.text p {
  margin: 20px 0;
  color: #666;
}

.image {
  position: absolute;
  right:20%;
  top: -40px;
  background:#f2f2f2;
  display: flex;
  z-index: -11;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 4px 20px rgb(206, 204, 204);
}
.image img{
  width: 50vh;
  height: auto;
  filter: drop-shadow(1px 5px 10px rgb(7, 7, 7));
}

@media screen and (max-width:1024px) {
  .content {
  padding: 50px;
}
.image {
  right:0;
  top: 10px;
  width: 300px;
  height: 300px;
}
.image img{
  width: 40vh;
}
}

@media screen and (max-width:768px) {
  .text h1 {
    font-size: 40px;
  }
 
  .text p {
    margin: 5px 5px 5px 5px;
    color: #666;
    font-size: 12px;
  }

.image {
  position: relative;
  right:0;
  top: 10px;
  width: 250px;
  height: 250px;
}
.image img{
  width: 30vh;
}
}

@media screen and (max-width:425px) {

.content {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 10px;
}

.text h1 {
  font-size: 25px;
}
.text h1 span {
  font-weight: 700;
}
.text p {
  margin: 5px 0px 0px 0px;
  color: #666;
  width: 100% !important;
  font-size: 12px;
  margin-bottom: 20px;
}

.image {
  position: relative;
    width: 200px;
    height: 200px;
  z-index: -1;
  right: 0;
}
.image img {
  width: 30vh;
  height: auto;
}
}
@media screen and (max-width:375px) {
  .content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding-left: 200px;
    border-radius: 20px;
    backdrop-filter: blur(20px);
  }


  .text h1 {
    font-size: 20px;
  }
  .text h1 span {
    font-weight: 700;
  }
.text p {
  margin: 5px 0px 0px 0px;
  color: #5e5c5c;
  width: 100% !important;
  font-size: 12px;
  margin-bottom: 20px;
}

  .image {
    position: absolute;
    top: 110%;
    left: 35%;
    width: 100px;
    height: 100px;
    z-index: -1;
    right: 0;
  }
  .image img {
    width: 30vh;
    height: auto;
  }
}
    .watch{
      border-radius: 10px;
      transition: .5s;
  }
  .watch:hover{
    box-shadow: 4px 7px 10px black;
  }
  .buy{
    background: rgb(235, 36, 36);
  }
</style>
