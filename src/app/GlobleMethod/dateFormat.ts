export class DateFormat {
  public formatDateInput(date: Date):string{
    const day = date.getDate();
    const year = date.getFullYear();
    const month  = date.getMonth()+1;

    return day + "/" + month + "/" + year;
  }
}
