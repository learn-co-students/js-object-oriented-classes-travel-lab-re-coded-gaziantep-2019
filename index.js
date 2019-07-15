class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year){
    let yearsExperience = this.startDate.getFullYear();
    
    return year - yearsExperience;
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled(){
    let v = this.endingLocation.vertical - this.beginningLocation.vertical;
    
    let h = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    
    return h + v;
  }
  
  estimatedTime(peakHours){
    let blocks = this.blocksTravelled();
    
    if(peakHours){
      return blocks / 2;
    }
    
    return blocks / 3;
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
