class Driver{
  constructor(name, startDate){
    this.name=name;
    this.startDate=new Date(startDate);
  }
  
 
  yearsExperienceFromBeginningOf(day2){
    let date1 = new Date(this.startDate);
    let date2 = new Date(day2);
    return date2.getFullYear()-date1.getFullYear();
  }
}
class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation=beginningLocation;
    this.endingLocation=endingLocation;
  }
  

  blocksTravelled(){
let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
      let fark= Math.abs(eastWest.indexOf(this.beginningLocation.horizontal)-eastWest.indexOf(this.endingLocation.horizontal))+Math.abs(this.beginningLocation.vertical-this.endingLocation.vertical)
      return fark;
  }
  estimatedTime(peak){
  let zaman1= this.blocksTravelled()/3;
  let zaman2= this.blocksTravelled()/2;
     if(peak)return zaman2 ;
     else return zaman1;
   
}

}













