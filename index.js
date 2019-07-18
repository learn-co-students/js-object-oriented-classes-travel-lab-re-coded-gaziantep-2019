 let startDate = 1995;
 let endDate = 2017;
 class Driver {
  constructor(name, startDate){
    this.name = name ;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endDate) {
    this.endDate = new Date(endDate);
    return this.endDate.getFullYear() - this.startDate.getFullYear();
  }
}

class Route {
  constructor (startLocation, endLocation){
    this.startLocation = {horizontal : park, vertical : 34};
    this.endLocation = {horizontal : park, vertical : 45};
  }
  blocksTravelled() {
    return this.endLocation - this.startLocation ;
  }
}

/* describe('Route', function() {
  let route;

  describe('blocksTravelled', function() {
    it('calculates the number of blocksTravelled', function() {
      let route = new Route(
        { horizontal: 'Park', vertical: '34' },
        { horizontal: 'Park', vertical: '45' }
      );
      expect(route.blocksTravelled()).to.equal(11);
    });

    it('calculates the number of horizontal blocks travelled', function() {
      let route = new Route(
        { horizontal: '1st Avenue', vertical: '34' },
        { horizontal: 'Park', vertical: '34' }
      );
      expect(route.blocksTravelled()).to.equal(4);
    });

    it('combines horizontal and vertical blocks travelled', function() {
      let route = new Route(
        { horizontal: '1st Avenue', vertical: '34' },
        { horizontal: 'Park', vertical: '45' }
      );
      expect(route.blocksTravelled()).to.equal(15);
    });
  });

  describe('estimatedTime', function() {
    it('estimates time in minutes, with travel time of three blocks in a minute', function() {
      let route = new Route(
        { horizontal: '1st Avenue', vertical: '34' },
        { horizontal: 'Park', vertical: '45' }
      );
      expect(route.estimatedTime()).to.equal(5);
    });

    it('estimates time in minutes, with travel time of two blocks in a minute during peak hours', function() {
      let route = new Route(
        { horizontal: '1st Avenue', vertical: '34' },
        { horizontal: 'Park', vertical: '46' }
      );
      expect(route.estimatedTime(true)).to.equal(8);
    });
  });
});

*/