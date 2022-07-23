<template>
  <q-page>
    <div class="row">
      <q-parallax src="/icons/building.jpg">
        <Typewriter title="We help makers " :words="adjs"> </Typewriter>
        <q-icon color="white" name="fas fa-chevron-down"></q-icon>
        <q-icon color="white" name="fas fa-chevron-down"></q-icon>
        <q-btn to="#news" class="q-mt-md" color="primary">Sign Up Now</q-btn>
      </q-parallax>
    </div>
    <Section img="/icons/code.jpg" />
    <Features :data="features" />
    <a id="news" />
    <Newsletter />
  </q-page>
</template>

<script>
import Typewriter from "../components/landing/Typewriter";
import Section from "../components/landing/Section";
import Features from "../components/landing/Features";
import Newsletter from "../components/landing/Newsletter";

export default {
  data() {
    return {
      adjs: ["create", "develop", "design"],
      features: [
        {
          title: "Fast",
          icon: "fas fa-rocket",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate ex earum soluta accusantium id corrupti sit deserunt dolorem ut, eius, numquam illo perferendis, reiciendis tempore quis at libero laudantium?"
        },
        {
          title: "Fast",
          icon: "fas fa-rocket",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate ex earum soluta accusantium id corrupti sit deserunt dolorem ut, eius, numquam illo perferendis, reiciendis tempore quis at libero laudantium?"
        },
        {
          title: "Fast",
          icon: "fas fa-rocket",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate ex earum soluta accusantium id corrupti sit deserunt dolorem ut, eius, numquam illo perferendis, reiciendis tempore quis at libero laudantium?"
        }
      ]
    };
  },
  components: {
    Typewriter,
    Section,
    Features,
    Newsletter
  }
};
</script>

<style scoped>
.q-icon {
  font-size: 3em;
}
</style>
