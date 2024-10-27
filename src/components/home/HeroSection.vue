<template>
  <v-card >
  <v-carousel :show-arrows="false" v-model="active" class="h-sm-100 h-50">
    <v-carousel-item
      v-for="(n, i) in carouselItem"
      :key="i"
      cover
      class="bg-Color3 "
    >
        <div class="content">
          <div class="text">
            <h1>
              {{n.discounts[0].percentage}}% Discount
            </h1>
            <p>{{n.description}}</p>
            <Button
              action="buy"
              :itemId="n.id"
              variant="outlined"
              class="pre-order"
            />
          </div>
          <div class="image">
            <img
              alt="Electric Scooter"
              :src="n.images[0].path"
            />
          </div>
        </div>
    </v-carousel-item>
  </v-carousel>
  </v-card>
</template>

<script>
import Button from "../assential/ButtonComp.vue";
export default {
  name: "HeroSection",
  components: {
    Button,
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
.main{
  height:200px;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
}

.text h1 {
  font-size: 48px;
  margin: 0;
  color: #333;
}
.text h1 span {
  font-weight: 700;
}
.text p {
  margin: 20px 0;
  color: #666;
}
.text .pre-order {
  background: #00796b;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  display: inline-block;
}
.image {
  position: relative;
}
.image img {
  max-width: 100%;
  height: auto;
}

@media screen and (max-width:1024px) {
  .content {
  padding: 50px;
}
.image img {
  max-width: 30vh;
  height: auto;
}
}

@media screen and (max-width:768px) {
.content {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 10px;
}
.text h1 {
  font-size: 30px;
}
.image img {
  max-width: 26vh;
  height: auto;
}
.text p {
  margin: 5px 0px 0px 0px;
  color: #666;
  font-size: 12px;
  
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
  font-size: 10px;
  
}
.text .pre-order {
  padding: 5px 10px;
  font-size: 10px;
}
.image {
  position: relative;
  z-index: -1;
  right: 0;
}
.image img {
  width: 20vh;
  height: auto;
}
}
@media screen and (max-width:375px) {
.content {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 10px;
}

.text h1 {
  font-size: 20px;
}
.text h1 span {
  font-weight: 700;
}
.text p {
  margin: 5px 0px 0px 0px;
  color: #666;
  font-size: 8px;
}
.text .pre-order {
  padding: 5px 10px;
  font-size: 10px;
}
.image {
  position: relative;
  z-index: -1;
  right: 0;
}
.image img {
  width: 15vh;
  height: auto;
}
}




</style>
