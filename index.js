class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
}
class Route {
  constructor(beginingLocation, endingLocation) {
    this.beginingLocation = beginingLocation;
    this.endingLocation   = endingLocation;
  }
  blocksTravelled() {
        let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    return (this.endingLocation.vertical  - this.beginingLocation.vertical) + eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginingLocation.horizontal);
  }
  estimatedTime(peakHours) {
    if(peakHours){
      return this.blocksTravelled() / 2;
    }
    return this.blocksTravelled() / 3;
  }
}
