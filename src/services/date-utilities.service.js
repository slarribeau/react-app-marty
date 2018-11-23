export class DateUtilitiesService {
    dateObject2String(date) {
        let dateString = date.getFullYear() + "-";
        dateString += date.getMonth()+1 + "-";
        dateString += date.getDate();
        console.log(dateString)
        return dateString;
      }
}