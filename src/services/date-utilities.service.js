export class DateUtilitiesService {
    dateObject2String(date) {
        let dateString = date.getFullYear() + "-";
        dateString += date.getMonth()+1 + "-";
        dateString += date.getDate();
        console.log(dateString)
        return dateString;
      }

    getPrevDayObject(inDate)  {
        let myDate = new Date(inDate);
        let dateOffset = (24*60*60*1000) * 1; //1 days
        myDate.setTime(myDate.getTime() - dateOffset);
        return myDate;
      }

    getNextDayObject(inDate) {
        let myDate = new Date(inDate);
        let dateOffset = (24*60*60*1000) * 1; //1 days
        myDate.setTime(myDate.getTime() + dateOffset);
        return myDate;
      }
}