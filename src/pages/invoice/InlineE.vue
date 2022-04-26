<template>
    <div id="inline-editor"></div>
</template>

<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

export default {
    name : 'InlineE',

    data(){
        return {
            editor: InlineEditor,
            editorData: '<p>iiiiiiii.</p>',
        }
    },

    mounted(){
        InlineEditor
            .create( document.querySelector( '#inline-editor' ) )
            .then( editor => {
                window.editor = editor;
            } )
            .catch( error => {
                console.error( 'There was a problem initializing the editor.', error );
            } );
    }
}
</script>

<style>

</style>