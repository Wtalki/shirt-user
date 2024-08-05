<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-4">
    <v-main class="mt-5">
      <v-row>
        <v-col cols="12">
          <v-card
            class="mx-auto d-flex align-center justify-center pa-4 bg-grey-darken-4"
            flat
          >
            <div>
        <ul>
            <li v-for="message in messages" :key="message.id">{{ message.body }}</li>
        </ul>
        <input v-model="newMessage" @keyup.enter="sendMessage" />
    </div>
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
import axios from "axios";

export default defineComponent({
  name: "HomeView",
  components: { NavBar, FooterB },
  data() {
    return {
      tab: null,
      messages: [],
      newMessage: ''
    };
  },
  computed: {
    ...mapState(["itemsPerPage"]),
    ...mapGetters(["homeItemsPage"]),
  },
  methods: {
    ...mapMutations(["setShowFavorites"]),
    fetchMessages() {
            axios.get('http://127.0.0.1:8000/api/chat/messages').then((response)=>{
              console.log(response);
            // this.messages = response.data;
            })
            .catch(error => {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          })
        },
        // sendMessage() {
        //     const response = await axios.post('http://127.0.0.1:8000/api/chat/messages', {
        //         body: this.newMessage
        //     });
        //     this.messages.push(response.data);
        //     this.newMessage = '';
        // }
  },
  created(){
    this.fetchMessages()
  }
});
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
.line {
  line-height: 40px;
}
</style>
