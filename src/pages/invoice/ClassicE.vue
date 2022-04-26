<template>
    <ckeditor v-model="editorData" :editor="editor" ></ckeditor>
</template>

<script>
import {mapGetters} from 'vuex'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es.js';
export default {
    name : 'ClassicE',

    data(){
        return {
            editor: ClassicEditor,
            editorData : ''
        }
    },

    mounted(){
        ClassicEditor
            .create( document.querySelector( '#classic-editor' ),
            {
                toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
                language: 'es',
            } )
            .then( editor => {
                window.editor = editor;
            } )
            .catch( error => {
                console.error( 'There was a problem initializing the editor.', error );
            } );
    },

    computed : {

        ...mapGetters([
            'InvoiceGetDescription'
        ]),

        
    },
    watch : {
        editorData(n) {
            this.$store.dispatch('invoiceSetDescription', n);
        }
    }


}
</script>

<style>
.ck-editor__editable {
    min-height: 200px;
   }
</style>