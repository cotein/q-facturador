<template>
    <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered class="rounded-borders">
            <q-expansion-item  v-for="(link, index) in Links" :key="index"
                expand-separator
                icon="mail"
                :label="link.label"
                default-opened
            >
                <q-list  >
                    <q-item class="q-ml-lg" v-for="(url) in link.links" :key="url.title" clickable v-ripple tag="a" @click="navigateTo(url.link)">
                            <q-item-section avatar>
                                <q-icon :name="url.icon" />
                            </q-item-section>

                            <q-item-section>{{url.title}}</q-item-section>
                    </q-item>
                </q-list>
            </q-expansion-item>
        </q-list>
    </div>
</template>

<script>
const essentialLinks = [
    {
        label : 'Clientes',
        links : 
            [
                {
                    title : 'Listado',
                    caption : 'Caption',
                    icon : 'group',
                    link : 'customer',
                },
                {
                    title : 'Nuevo',
                    caption : 'Caption',
                    icon : 'person_add',
                    link : 'new-user',
                },
                {
                    title : 'Generar comprobante de venta',
                    caption : 'Caption',
                    icon : 'feed',
                    link : 'comprobantes/nuevo',
                }
            ]
        
    },
    {
        label : 'provee',
        links : 
            [
                {
                    title : 'provee',
                    caption : 'Caption',
                    icon : 'group',
                    link : 'customer',
                },
                {
                    title : 'Nuevo Cliente',
                    caption : 'Caption',
                    icon : 'person',
                    link : 'new-user',
                }
            ]
        
    },
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
