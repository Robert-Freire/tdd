  var date = new Date(2009, 9, 2, 22, 14, 45);

  try {
    
    assert("%Y should return full year",
      Date.formats.Y(this.date) === 2009);
    assert("%m should return month",
       Date.formats.m(this.date) === "10");
    assert("%d should return date",
           Date.formats.d(this.date) === "02");
    assert("%y should return year as two digits",
           Date.formats.y(this.date) === "09");
    assert("%F should be shortcut for %Y-%m-%d",
           Date.formats.F === "%Y-%m-%d");

    console.log (assert.count + "test OK ");
  } catch (e) {
    console.log ("Test failed: " + e.message);
  }


