// Serach City 
var fromplaces = [
    "Select City",
    "Pune",
    "Mumbai",
    "Hyderabad",
    "Kerala",
    "Delhi",
    "UP",
    "Punjab",
    "Karnataka",
    "Goa",
  ];
  var toplaces = [
    "Select City",
    "Goa",
    "Karnataka",
    "Punjab",
    "UP",
    "Delhi",
    "Kerala",
    "Hyderabad",
    "Mumbai",
    "Pune",
  ];
  var seats = ["Select Seat", 1, 2, 3, 4, 5];
  punjab = ["Golenn Temple", "Khalasa College"];
  up = ["Taj Mahal", "Agra Fort"];
  delhi = ["India Gate", "Red Fort", "Qutab Minar"];
  kerla = ["Padmavati", "Temple"];
  hyderabad = ["Ramoji Filmcity", "Char Minar", "Nehru Zoo Park"];
  mumbai = ["Gateway Of India", "Pawai Lake", "Juhu Beach"];
  pune = ["Shivneri Fort", "Shanivarwada", "Sinhgad", "Loavala"];
  // places Name
  goa = ["Baga Beach", "Dudhsagar Fort", "Chapora Fort"];
  karnataka = ["mysore", "Humpi"];

  // all
  var all = [];
  function LoadAll() {
    document.getElementById("places").innerHTML = "";
    for (var allitems of all) {
      var option4 = document.createElement("option");
      option4.text = allitems;
      option4.value = allitems;
      document.querySelector("#places").appendChild(option4);
    }
  }
  // From
  function LoadPlaces1() {
    for (var item of fromplaces) {
      var option1 = document.createElement("option");
      option1.text = item;
      option1.value = item;
      document.querySelector("#fromplaces").appendChild(option1);
    }
  }
  function SelectFrom() {}
  // To
  function LoadPlaces2() {
    for (var item2 of toplaces) {
      var option2 = document.createElement("option");
      option2.text = item2;
      option2.value = item2;
      document.querySelector("#toplaces").appendChild(option2);
    }
  }
  // Dates
  function LoadSeats() {
    for (var item3 of seats) {
      var option3 = document.createElement("option");
      option3.text = item3;
      option3.value = item3;
      document.querySelector("#seates").appendChild(option3);
    }
  }
  // BodyLoad
  function BodyLoad() {
    LoadPlaces1();
    LoadPlaces2();
    LoadSeats();
  }

  //SelectTo
  function SelectTo() {
    var placesall = document.getElementById("toplaces").value;
    if (placesall == "Goa") {
      all = goa;
      LoadAll();
    } else if (placesall == "Karnataka") {
      all = karnataka;
      LoadAll();
    } else if (placesall == "Pune") {
      all = pune;
      LoadAll();
    } else if (placesall == "Punjab") {
      all = punjab;
      LoadAll();
    } else if (placesall == "UP") {
      all = up;
      LoadAll();
    } else if (placesall == "Delhi") {
      all = delhi;
      LoadAll();
    } else if (placesall == "Kerala") {
      all = kerla;
      LoadAll();
    } else if (placesall == "Hyderabad") {
      all = hyderabad;
      LoadAll();
    } else if (placesall == "Mumbai") {
      all = mumbai;
      LoadAll();
    } else {
      all = ["Please Select City"];
      LoadAll();
    }
  }
  //Book Ticket click :-
  function BookClick() {
    //for modal
    document.getElementById("lblfrom").innerHTML =
      document.getElementById("fromplaces").value;
    document.getElementById("lblto").innerHTML =
      document.getElementById("toplaces").value;
    document.getElementById("lblplace").innerHTML =
      document.getElementById("places").value;
    document.getElementById("lblseats").innerHTML =
      document.getElementById("seates").value;
  }
  // confirm  Submit ticket by modal
  function SubmitClick() {
    //for on screen
    alert("You Have submitted successfully.....");
    document.getElementById("ticketprint").style.display = "block";
    document.getElementById("lblfrom2").innerHTML =
      document.getElementById("fromplaces").value;
    document.getElementById("lblto2").innerHTML =
      document.getElementById("toplaces").value;
    document.getElementById("lblplace2").innerHTML =
      document.getElementById("places").value;
    document.getElementById("lblseats2").innerHTML =
      document.getElementById("seates").value;
    document.getElementById("ticketicon").className =
      "bi bi-check-circle-fill";
    document.getElementById("ticketicon").style.color = "green";
  }