<template>
    <q-input filled v-model="date" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="DD/MM/YYYY">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
</template>

<script>
export default {

    data(){
        return {
            myLocale :  {
                days: 'Lunes_Martes_Miércoles_Jueves_Viernes_Sábado_Domingo'.split('_'),
                daysShort: 'Lun_Mar_Mié_Jue_Vie_Sáb_Dom'.split('_'),
                months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
                monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
                firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
                format24h: true,
                pluralDay: 'días'
            },
            date : null
        }
    },

    mounted(){
    }
}
</script>