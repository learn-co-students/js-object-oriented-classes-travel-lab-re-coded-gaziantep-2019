class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    let endYear = this.startDate.getFullYear();
    return year - endYear;
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
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
    let x = this.endingLocation.vertical - this.beginningLocation.vertical;
    let y = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    return x + y;
  }
  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}