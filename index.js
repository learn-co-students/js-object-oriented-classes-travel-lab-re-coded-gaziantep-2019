class Driver{
    constructor(name, startDate){
      this.name = name;
      this.startDate = new Date(startDate);
    }
  
    yearsExperienceFromBeginningOf(year){
      let e = this.startDate.getFullYear();
  
      return year - e;
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
  
    estimatedTime(peakHours){
        
      let z = this.blocksTravelled();
  
      if(peakHours){
        return z / 2;
      }
  
      return z / 3;
    }
  }
  
   
