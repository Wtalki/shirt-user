<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-3">
    <v-main class="mt-5">
      <v-container class="bg-grey-lighten-4">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="400">
              <v-img
                color="surface-variant"
                height="200"
                src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                cover
              >
              </v-img>

              <v-card-text>
                <div class="mb-4 text-center">
                  <div class="font-weight-normal">
                    <h3 class="mt-3">{{ account.userName }}</h3>
                    <v-divider class="mt-3"></v-divider>
                    <h3 class="mt-3">{{ account.email }}</h3>
                    <v-divider class="mt-3"></v-divider>
                    <h3 class="mt-3">{{ account.phone }}</h3>
                    <v-divider class="mt-3"></v-divider>
                    <h3 class="mt-3">{{ account.address }}</h3>
                    <v-divider class="mt-3"></v-divider>
                  </div>
                </div>
              </v-card-text>
              <v-dialog max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn
                    v-bind="activatorProps"
                    color="surface-variant"
                    text="Edit"
                    class="float-end me-2 mb-2"
                    variant="flat"
                  ></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card title="Edit">
                    <v-card-item>
                      <v-form v-model="form" @submit.prevent="onSubmit">
                        <v-text-field
                          v-model="name"
                          :readonly="loading"
                          :rules="[required]"
                          class="mb-2"
                          label="Name"
                          prepend-icon="mdi-account"
                          clearable
                        ></v-text-field>

                        <v-text-field
                          v-model="email"
                          :readonly="loading"
                          :rules="[required]"
                          class="mb-2"
                          prepend-icon="mdi-email"
                          label="Email"
                          clearable
                        ></v-text-field>

                        <v-text-field
                          v-model="password"
                          :readonly="loading"
                          :rules="[required]"
                          label="Password"
                          prepend-icon="mdi-key"
                          placeholder="Enter your password"
                          clearable
                        ></v-text-field>
                        <v-file-input
                          label="File input"
                          prepend-icon="mdi-camera"
                          variant="filled"
                        ></v-file-input>

                        <br />

                        <v-btn
                          :disabled="!form"
                          :loading="loading"
                          color="success"
                          size="large"
                          type="submit"
                          variant="elevated"
                          block
                        >
                          Edit
                        </v-btn>
                      </v-form>
                    </v-card-item>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="Close Dialog"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <FooterB></FooterB>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import FooterB from "@/components/FooterB.vue";
import { mapGetters, mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "ProductPage",
  components: { NavBar, FooterB },
  data() {
    return {
      account: {
        userName: "Zaw lay",
        email: "zaw@gmail.com",
        phone: "123-456-939",
        address: "yangone",
      },
    };
  },
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  methods: {
    ...mapMutations([]),
    onSubmit() {
      if (!this.form) return;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
});
</script>
<style></style>
