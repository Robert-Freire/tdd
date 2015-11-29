  


testSuite ("format dates", function () {

  testSetup (function(){
    this.date = new Date(2009, 9, 2, 22, 14, 45);
  });

  describe ("test format specifier %Y", function (){
     assert("%Y should return full year",
       Date.formats.Y(this.date) === 2009);
  });

  describe ("test format specifier %m", function (){
     assert("%m should return month",
       Date.formats.m(this.date) === "10");
  });

  describe ("test format specifier %d", function (){
     assert("%d should return date",
       Date.formats.d(this.date) === "02");
  });

  describe ("test format specifier y", function (){
     assert("%y should return year as two digits",
       Date.formats.y(this.date) === "09");
  });
  describe ("test format specifier %Y", function (){
     assert("%F should act as %Y-%m-%d",
       Date.formats.F === "%Y-%m-%d");
  });
});

