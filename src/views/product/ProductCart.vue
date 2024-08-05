<template>
    <NavBar></NavBar>
    <v-app class="bg-grey-darken-3">
        <v-main class="mt-5">
            <v-container class="bg-grey-lighten-4">
                <h2>Product Cart</h2>
                <v-row>
                    <v-col cols="12" lg="8" md="8">
                      
                        <div v-if="!cartDelete">
                          <v-list lines="three" item-props v-for="(cart,i) in cartList"  :key="i">
                            <v-card-item>
                                <v-btn icon="mdi-close" @click="deleteItem(i)" flat class="float-end"></v-btn>
                            </v-card-item>
                            <v-list-item>
                                <v-list-item-title class="text-h6 d-flex justify-space-between mb-3">
                                    <h4>hello</h4>
                                    <v-chip>{{(cart.product_price * cart.qty)}}</v-chip>
                                </v-list-item-title>
                                <div class="d-flex justify-space-between flex-wrap">
                                    <v-list-item-title class="d-flex ga-3 pa-2">
                                        <v-card width="30" height="30" :color="cart.color"></v-card>
                                        <v-chip width="70" height="30" class="d-flex align-center justify-center">
                                            <v-card-title class="text-center">{{cart.size}}</v-card-title>
                                        </v-chip>
                                    </v-list-item-title>
                                    <v-list-item-title class="mb-3 d-flex align-center ga-1 pa-2">
                                        <v-btn variant="outlined" height="80" size="30" @click="decrease(i)">
                                            <v-icon>mdi-minus</v-icon>
                                        </v-btn>
                                        <div>
                                            <v-card variant="outlined" class="d-flex align-center justify-center" width="50" height="30">
                                                <v-card-title class="text-center">{{
                                                    cart.qty
                                                    }}</v-card-title>
                                            </v-card>
                                        </div>
                                        <v-btn variant="outlined" height="30" size="30" @click="increase(i)">
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                    </v-list-item-title>
                                </div>
                                <template v-slot:prepend>
                                    <v-img :src="cart.image" width="100"></v-img>
                                    <v-divider class="ma-2" vertical></v-divider>
                                </template>
                            </v-list-item>
                        </v-list>
                        </div>
                        <div v-else class="d-flex justify-center align-center text-green-darken-2">
                        <h1>Order Success</h1>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4">
                        <v-card flat class="pa-3">
                            <v-card-item>
                                <v-card-title class="d-flex justify-space-between mb-3">
                                    <span>Total</span>
                                    <span>
                                        <v-chip class="px-3">{{totalPrice}}$</v-chip>
                                    </span>
                                </v-card-title>
                                <v-card-title class="d-flex justify-space-between mb-3">
                                    <span>Delievery</span>
                                    <span>
                                        <v-chip class="px-3">3000$</v-chip>
                                    </span>
                                </v-card-title>
                                <v-card-title class="d-flex justify-space-between mb-3">
                                    <span>Total Price</span>
                                    <span>
                                        <v-chip class="px-3">{{totalPrice + 3000}}$</v-chip>
                                    </span>
                                </v-card-title>
                            </v-card-item>
                            <v-card-item class="text-center">
                                <v-btn flat @click="dialog = true" color="orange  rounded-pill" width="250">Checkout</v-btn>
                            </v-card-item>
                            <v-dialog v-model="dialog" width="500" >
                                <v-card max-width="400" class="pa-3">
                                  <v-card-title>Address</v-card-title>
                                    <v-text-field v-model="orderDetail.name"  :rules="nameRules" class="mb-2" label="Name" clearable></v-text-field>
                                    <v-text-field v-model="orderDetail.phone"  :rules="phoneRules" label="Phone" placeholder="Enter your Phone" type="number" clearable></v-text-field>
                                    <v-textarea v-model="orderDetail.address"  :rules="addressRules" label="Address" placeholder="Enter your address" type="text" clearable></v-textarea>
                                    <v-cart-item>
                                      <p>name-zawlay</p>
                                      <p>wave-93848484</p>
                                      <p>name-zawwinmyint</p>
                                      <p>kbzpay-9493849834</p>
                                    </v-cart-item>
                                    <v-card-text>your screenshot</v-card-text>
                                    <v-file-input label="image" v-model="orderDetail.image" @change="onFileChange" :rules="imageRules"></v-file-input>
                                    <v-text-field v-model="orderDetail.transId"  :rules="transRules" type="text" class="mb-2" label="transcation id" clearable></v-text-field>
                                    <br />
                                    <template v-slot:actions>
                                        <v-btn class="" text="cancle" @click="dialog = false"></v-btn>
                                        <v-btn class="bg-orange" v-if="orderDetail.name != '' && orderDetail.phone !='' &&orderDetail.address != '' && orderDetail.image != null ? 'disabled':''" text="Order Confirm" @click="orderConfirm"></v-btn>
                                    </template>
                                </v-card>
                            </v-dialog>
                        </v-card>
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
            number: 1,
            cartList: [],
            cartDelete:false,
            notiCount:0,

            dialog:false,
            orderDetail:{
              name:'',
              phone:'',
              address:'',
              image:null,
              transId:null,
            },
            transRules:[
               value => {
                    if (value) return true
                    return ' transcation id is Required'
                },
              ],
            imageRules:[
              value => {
                    if (value) return true
                    return ' Image is Required'
                },
              ],
            nameRules: [
                value => {
                    if (value) return true
                    return ' Name is Required'
                },
            ],
            phoneRules: [
                value => {
                    if (value) return true
                    return 'Phone Number is Required'
                },
            ],
            addressRules: [
                value => {
                    if (value) return true
                    return 'Address is Required'
                },
            ],
        };
    },
    computed: {
        ...mapState([]),
        ...mapGetters(["getUserData", "getCartCount"]),
        totalPrice() {
            return this.cartList.reduce((total, item) => {
                // Ensure item.count and item.price are valid numbers
                return total + (item.qty * item.product_price);
            }, 0);
        }
    },
    methods: {
        ...mapMutations([]),
        getCartList() {
            let id = JSON.parse(localStorage.getItem('userData'))
            let userId = { id: id.id }
            axios.post("http://127.0.0.1:8000/api/product/cart/list", userId).then((response) => {
                let cartListItem = response.data.cartList;
                this.cartList = cartListItem;
            })
        },
        increase(i) {
            this.cartList[i].qty++
        },
        decrease(i) {
            if (this.cartList[i].qty > 1) {
                this.cartList[i].qty--;
            }
        },
        deleteItem(i) {
            console.log(this.cartList[i].id);
            let singleDelete = {
                id: this.cartList[i].id
            }
            axios.post("http://127.0.0.1:8000/api/product/cart/item/delete", singleDelete)
            //delete
            this.cartList.splice(i, 1);
        },
        //payment image
        onFileChange(event){
          this.image=event.target.files[0];
        },
        orderConfirm(){
          let id = JSON.parse(localStorage.getItem('userData'))

          let orderList={
            name:this.orderDetail.name,
            phone:this.orderDetail.phone,
            address:this.orderDetail.address,
            userId:id.id,
            userName:id.name,
            orderCode:"Shirt" +Math.ceil(Math.random() * 10000000),
            image:this.orderDetail.image,
            transId:this.orderDetail.transId,
            order:this.cartList,

          }
          axios.post("http://127.0.0.1:8000/api/order/list", orderList,{
            headers:{
              'Content-Type':'multipart/form-data'
            }
          }).then((response) =>{
            if(response.data.status == "success"){
                this.notiCount++
                this.$store.dispatch('setNoti',this.notiCount)

            }
          })
          this.cartDelete=true;
          this.dialog=false;
        }
    },
    created() {
        this.getCartList();
        this.$store.dispatch('setCartCount', 0)
    }
});
</script>
<style></style>