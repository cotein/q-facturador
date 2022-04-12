<template>
    <!-- <q-item
        clickable
        tag="a"
        @click="navigateTo"
    > -->
        <!-- <q-item-section
            v-if="icon"
            avatar
        >
            <q-icon :name="icon" />
        </q-item-section>

        <q-item-section>
            <q-item-label>title</q-item-label>
            <q-item-label caption>caption</q-item-label>
        </q-item-section> -->
        <q-list  >
            <q-item  v-for="(link, index) in Links" :key="index" clickable v-ripple tag="a" @click="navigateTo(link.link)">
                    <q-item-section avatar>
                        <q-icon name="send" />
                    </q-item-section>

                    <q-item-section>
                        {{link.title}}
                    </q-item-section>
            </q-item>
        </q-list>
  <!-- </q-item> -->
</template>

<script>
const essentialLinks = [
    {
        title : 'Title',
        caption : 'Caption',
        icon : 'icon',
        link : 'login',
    }
]
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },

    methods : {

        navigateTo(link){
             console.log('this.link')
              console.log(link)
               console.log('this.link')
            this.$router.push({path : link})
        }
    },

    computed : {

        Links(){
            return essentialLinks;
        }
    },


    mounted(){
        console.log('this.link')

    }

}
</script>
