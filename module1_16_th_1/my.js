class date {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
getday(){
       return this.day;
}
getmonth() {
        return this.month;
}
getyear(){
        return this.year;
}
setday(day){
      this.day=day;
}
setmonth (month){
        this.month = month;
}
setyear (year){
        this.year = year;
}
tostring (){
        return document.write(this.day + "/" + this.month + "/"  + this.year);
}
}
let day1 = new date(1,2,2021);
// document.write(day1.day);
// document.write(day1.getday());
day1.setday(2)
// document.write(day1.day)
// document.write(day1.getday())
day1.tostring()

