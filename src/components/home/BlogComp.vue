<template>
  <div class="text-center mb-2 text-md-h4 text-sm-h5 text-h6 "><h3 class="text-Color2">{{title}}</h3></div>
  <div class="parallax_container">
    <div class="parallax_layer_1 basic_setting"></div>
    <div class="parallax_layer_2 basic_setting"></div>
    <div class="parallax_layer_3 basic_setting"></div>
    <div class="parallax_layer_4 basic_setting"></div>
    <div class="parallax_layer_5 basic_setting"></div>
    <div class="parallax_layer_6 basic_setting"></div>
    <div class="parallax_layer_7 basic_setting"></div>
    <div class="parallax_layer_8 basic_setting"></div>
    <div class="parallax_layer_9 basic_setting"></div>
    <div class="parallax_layer_10 basic_setting"></div>
    <div class="parallax_layer_11 basic_setting"></div>
    <div class="parallax_layer_12 basic_setting"></div>
    <div class="parallax_layer_13 basic_setting"></div>
    <div class="parallax_layer_14 basic_setting"></div>
    <div class="parallax_layer_15 basic_setting"></div>
    <div class="parallax_layer_16 basic_setting"></div>
    <button class="parallax_layer_5 basic_setting pa-2 px-4">
      <h5 class="text-red text-h3">The Ultimate Fashion Starter Kit: T-Shirts, Shoes, Pants, and Watches</h5>
      <p class="text-caption text-grey-lighten-3">When building a timeless wardrobe, four essentials stand out: T-shirts, Shoes, Pants, and Watches. These staples provide endless versatility, allowing you to mix and match effortlessly for any occasion. Let’s explore how these items can elevate your style game.
      </p>
      <p class="text-caption text-grey-lighten-3">
        T-shirts are the cornerstone of casual and semi-formal outfits.
      </p>
      <p class="text-caption text-grey-lighten-3">
       Shoes are often the first thing people notice, so make them count.
      </p>
      <p class="text-caption text-grey-lighten-3">
        From jeans to chinos, pants define your outfit’s tone.
      </p>
      <p class="text-caption text-grey-lighten-3">
        A watch is more than a timepiece; it’s an extension of your personality.
      </p>
      <v-btn class="bg-red mt-3">See more blogs...</v-btn>
    </button>
  </div>
</template>

<script>
export default {
  props:['title']
};
</script>

<style scoped>
:root {
  --w: 100%;
  --h: 100vh;
}

.parallax_container {
  width:100%;
  height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
  perspective: 10px;
  background: black;
}

.basic_setting {
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 200%;
  position: absolute;
  top: 0;
  box-shadow: inset 0 0 300px black;
  filter: brightness(100%);
  transition: filter 0.5s;
}
.basic_setting:hover {
  filter: brightness(130%);
}

.parallax_layer_1 {
  transform: translateZ(-1px) rotateZ(3deg);
  background-image: url("../../../public/pant.jpg");
}

.parallax_layer_2 {
  top: -20%;
  left: 100%;
  width: 400px;
  height: 400px;
  transform: translateZ(-10px) rotateZ(-2deg);
  background-image: url("../../../public/watch.jpg");
}

.parallax_layer_3 {
  top: 10%;
  left: 20%;
  transform: translateZ(-30px) rotateZ(7deg);
  background-image: url("../../../public/shoe.jpg");
}

.parallax_layer_4 {
  top: 50%;
  left: -20%;
  width: 300px;
  height: 400px;
  transform: translateZ(-5px) rotateZ(15deg);
  background-image: url("../../../public/shirt.jpg");
}

.parallax_layer_5 {
  outline: none;
  border: none;
  top: 100%;
  left: 5%;
  height: calc(var(--h) * 0.3);
  width: calc(var(100%) * 0.3);
  background-size: cover;
  transform: rotateZ(-15deg);
  background-image: url("../../../public/men.png");
  transition: all 0.3s;
}
.parallax_layer_5:hover {
  cursor: pointer;
}

.parallax_layer_5:focus {
  cursor: pointer;
  transform: rotateZ(0deg);
  top: 130%;
  left: 10%;
  width: 80%;
  height: 80%;
}
.parallax_layer_6 {
  top: -100%;
  left: -100%;
  transform: translateZ(-30px) rotateZ(40deg);
  background-image: url("../../../public/shirt1.jpg");
}
.parallax_layer_7 {
  top: -120%;
  left: 20%;
  transform: translateZ(-60px) rotateZ(0deg);
  background-image: url("../../../public/shoe1.jpg");
}
.parallax_layer_8 {
  outline: none;
  border: none;
  top: -80%;
  left: 5%;
  height: 600px;
  width: 300px;
  transform: rotateZ(-15deg);
  background-image: url("../../../public/shoe2.jpg");
  transition: all 0.3s;
}
.parallax_layer_9 {
  top: 60%;
  left: 20%;
  
  height: 600px;
  width: 300px;
  transform: rotateZ(-15deg);
  background-image: url("../../../public/watch1.jpg");
  transition: all 0.3s;
}
.parallax_layer_9 {
  top: 60%;
  left: 100%;
  
  height: 600px;
  width: 600px;
  transform: translateZ(-20px) rotateZ(45deg);
  background-image: url("../../../public/shrit2.jpg");
  transition: all 0.3s;
}
.parallax_layer_10 {
  top: 100%;
  left: -40%;
  transform: translateZ(-30px) rotateZ(7deg);
  background-image: url("../../../public/pant1.jpg");
}
.parallax_layer_11 {
  top: -100%;
  right: -130%;
  transform: translateZ(-40px) rotateZ(70deg);
  background-image: url("../../../public/watch1.jpg");
}
.parallax_layer_12 {
  top: 60%;
  right: -130%;
  transform: translateZ(-20px) rotateZ(70deg);
  background-image: url("../../../public/shrit3.jpg");
}
.parallax_layer_3 {
  top: 10%;
  left: 20%;
  transform: translateZ(-30px) rotateZ(7deg);
  background-image: url("../../../public/shirt1.jpg");
}


::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background-color: #ececec;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(56, 89, 100, 0.4);
  border: 2px solid #e3e7f0;
}

::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-corner {
  background-color: #e3e7f1;
}
</style>
