<template>
  <v-card class="mx-auto pa-4 bg-Color3" flat>
    <v-list
      class="d-flex justify-space-evenly justify-md-center bg-Color3 flex-wrap"
    >
      <v-list-item
        v-for="n in service"
        :key="n"
        class="mt-3 text-Color2"
        :title="n.title"
        :subtitle="n.text"
      >
        <template v-slot:prepend>
          <span class="bg-Color4 pa-5 rounded-circle me-2">
            <v-icon size="48" class="text-Color5">{{ n.icon }}</v-icon>
          </span>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "FeatureComp",
  data() {
    return {
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
    };
  },
};
</script>

<style></style>
