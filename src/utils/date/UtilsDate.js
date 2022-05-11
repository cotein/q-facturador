class UtilsDate {

    static yearMonthDateWhithOutLine(date){

        let d = new Date(date);

        let month = Number(d.getMonth() + 1).toString();

        if (month.length == 1) {
            month = `0${month}`;
        }

        return `${d.getFullYear()}${month}${d.getDate()}`;

    }

    static toDay(){

        const today = new Date;

        let month = Number(today.getMonth() + 1).toString();

        if (month.length == 1) {
            month = `0${month}`;
        }

        return `${today.getDate()}/${month}/${today.getFullYear()}`;

    }
}

export default UtilsDate;