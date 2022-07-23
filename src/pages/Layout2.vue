<template>
  <q-page>
    <div class="row">
      <q-parallax :height="850" src="/icons/building.jpg">
        <p class="text-h4 text-white q-pb-xl">Launching soon...</p>
        <Timer deadline="06/05/2021"> </Timer>
        <div class="row justify-center full-width q-pa-md q-my-lg">
          <div class="col-12 col-md-4 bg-white faded">
            <q-input color="black" dense label="Email" filled>
              <template v-slot:after>
                <q-btn
                  @click="subscribe"
                  color="positive"
                  dense
                  flat
                  icon="fas fa-check"
                />
              </template>
            </q-input>
          </div>
        </div>
      </q-parallax>
    </div>
  </q-page>
</template>

<script>
import Timer from "../components/landing/Timer";

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
    Timer
  },
  methods: {
    subscribe() {
      //do something;
    }
  }
};
</script>

<style scoped>
.faded {
  opacity: 0.75;
}
</style>
