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
            <v-list class="d-flex justify-center bg-grey-darken-4 flex-wrap">
              <v-list-item
                v-for="n in service"
                :key="n"
                class="mt-3 border border-double border-lg border-success ms-5"
                height="200"
                width="400"
                :title="n.title"
                :subtitle="n.text"
              >
                <template v-slot:append>
                  <v-icon size="48" class="text-white">{{ n.icon }}</v-icon>
                </template>
              </v-list-item>
            </v-list>
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
  name: "HomeView",
  components: { NavBar, FooterB },
  data() {
    return {
      tab: null,
      service: [
        {
          title: "Free Shipping",
          text: "lorem lorem",
          icon: "mdi-truck",
        },
        {
          title: "Secure Payment",
          text: "lorem lorem",
          icon: "mdi-handshake-outline",
        },
        {
          title: "100% Money Back",
          text: "lorem lorem",
          icon: "mdi-hand-heart-outline",
        },
        {
          title: "Online Support",
          text: "lorem lorem",
          icon: "mdi-chat-outline",
        },
      ],
      search: "",
      panel: [],
    };
  },
  computed: {
    ...mapState(["itemsPerPage"]),
    ...mapGetters(["homeItemsPage"]),
  },
  methods: {
    ...mapMutations(["setShowFavorites"]),
  },
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
