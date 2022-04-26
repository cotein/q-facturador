export default {

    methods : {

        zeroLeft (str, max) {

            if (str == null) {
                str = 0;
            }
            
            str = str.toString();
            return str.length < max ? this.zeroLeft("0" + str, max) : str;
        }
    }
}