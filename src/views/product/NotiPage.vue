<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-3">
    <v-main class="mt-5">
      <v-container class="bg-grey-lighten-4">
        <h2>Notification</h2>

        <v-row>
          <v-col cols="12">
            <div class="bg-grey-darken-2 rounded pa-2 mt-2" v-for="(noti,i) in getNoti" :key="i">
              <div class="d-flex justify-space-between flex-wrap w-100">
                <span class="text-uppercase" width="200" v-for="(name,i) in noti.payments" :key="i">{{name.name}}</span>
                <v-btn variant="plain" class="text-blue-darken-1 text-decoration-underline" @click="hello(i)" width="200">{{noti.order_code}}</v-btn>
                <div width="200">
                  <span v-if="noti.status == 0" class="text-orange-darken-1">Pending...</span>
                  <span v-if="noti.status == 1" class="text-green-darken-1">Success...</span>
                  <span v-if="noti.status == 2" class="text-red-darken-1">Reject...</span>

                </div>
                
              </div>
              <div v-if="dialog" width="500" >
                <v-card max-width="400" class="pa-3">
                    <v-cart-item >
                      <span>{{noti.order_code}}</span>
                      <div class="d-flex">
                        <p ><img v-for="(img) in noti.order_lists" :key="img" :src="img.image" width="80" height="80" alt=""></p>
                      </div>
                    </v-cart-item>
                    <template v-slot:actions>
                      <v-btn class="" text="cancle" @click="dialog = false"></v-btn>
                    </template>
                  </v-card>
              </div>
            </div>
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
import axios from "axios";

export default defineComponent({
  name: "ProductPage",
  components: { NavBar, FooterB },
  data() {
    return {
      dialog:false,
      number: 1,
      getNoti:[],
    };
  },
  computed: {
    ...mapState([]),
    ...mapGetters([]),
    totalPrice() {
            return this.getNoti.reduce((total, item) => {
                // Ensure item.count and item.price are valid numbers
                return total + (item.qty * item.total_price);
            }, 0);
        }
  },
  methods: {
    ...mapMutations([]),
    increase() {
      this.number++;
    },
    decrease() {
      if (this.number > 1) {
        this.number--;
      }
    },
    hello(i){
      this.dialog=!this.dialog;
    }
  },
  created(){

    //get order code
    let id = JSON.parse(localStorage.getItem('userData'))
      let userId = { id: id.id }
      axios.post("http://127.0.0.1:8000/api/get/noti/list", userId).then((  response) => {
        console.log(response.data.notiList);
        let getNotiList = response.data.notiList;
        this.getNoti = getNotiList;
    })

      //noti cocunt
    this.$store.dispatch('setNoti', 0)

  }
});
</script>
<style></style>
