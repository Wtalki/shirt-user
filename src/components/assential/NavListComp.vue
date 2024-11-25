<template>
  <div class="menu mobile">
    <router-link
      v-for="link in links"
      :key="link.text"
      :to="link.href"
      @mouseover="active(link.text)"
      :class="{ active: isActive(link.text) }"
      class="span"
    >
      {{ link.text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavList",
  data() {
    return {
      links: [
        { text: "Product", href: "/productPage" },
        { text: "Services", href: "/servicePage" },
        { text: "Contact", href: "/contactPage" },
        { text: "Blog", href: "/blogPage" },
      ],
      activeLink: "",
    };
  },
  methods: {
    active(text) {
      this.activeLink = text;
    },
  },
  computed: {
    isActive() {
      return (text) => {
        return this.activeLink === text; 
      };
    },
  },
};
</script>

<style scoped>

.menu .span {
  color: #333333;
  cursor: pointer;
  text-decoration: none;
  margin: 0 15px;
  padding: 5px 10px;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 4px 4px 10px #bebebe, -4px -4px 10px #ffffff;
  font-size: 14px;
  transition: 0.3s;
}

.menu .span:hover {
  color: rgb(248, 50, 0);
  box-shadow: 0px 0px 3px #bebebe, -4px -4px 10px #ffffff;
}

.menu .span.active {
  color: rgb(248, 50, 0); /* Active link color */
  font-weight: bold; /* Optional: Bold active link */
  box-shadow: 0px 0px 10px #bebebe, -4px -4px 10px #ffffff; /* Optional: Add shadow to active link */
}
</style>
