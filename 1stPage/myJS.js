window.onload = function () {
  function clickCounter() {
    if (typeof (Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
    }
  }
  document.body.addEventListener("keypress", move);
  // Get the modal
  var modal = document.getElementById('id01');

  var modal2 = document.getElementById('id02');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal || event.target == modal2) {
      modal.style.display = "none";
      modal2.style.display = "none";
    }
  }
  var audio = document.getElementById('audio-song');
  audio.onload = function () {
    audio.play();
  }

  var checkB = document.getElementById('checkB');
  checkB.onchange = function () {
    if (checkB.checked == true) {

      var elems = document.querySelectorAll("video, audio");

      [].forEach.call(elems, function (elem) { muteMe(elem); });
    } else {
      var elems = document.querySelectorAll("video, audio");
      [].forEach.call(elems, function (elem) { playMe(elem); });
    }
  }
  function muteMe(elem) {
    elem.muted = true;
    elem.pause();
  }
  function playMe(elem) {
    elem.muted = false;
    elem.play();
  }

  $(document).ready(function () {
    $("#register").click(function () {
      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var cpassword = $("#cpassword").val();
      if (name == '' || email == '' || password == '' || cpassword == '') {
        alert("Please fill all fields !");
      } else if ((password.length) < 6) {
        alert("Password should at least 6 character in length !");
      } else if (!(password).match(cpassword)) {
        alert("Your passwords don't match. Try again?");
      } else {
        $.post("register.php", {
          name1: name,
          email1: email,
          password1: password
        }, function (data) {
          alert();
          if (data == "You have Successfully Registered") {
            $("form")[0].reset();
          }
          alert(data);
        });
      }
    });
  });

  $(document).ready(function () {
    $("#login").click(function () {
      var email = $("#email").val();
      var password = $("#password").val();
      // Checking for blank fields.
      if (email == '' || password == '') {
        $('input[type="text"],input[type="password"]').css("border", "2px solid red");
        $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
        alert("Please fill all fields!");
      } else {
        /*
        $.post("login.php", { email1: email, password1: password },
          function (data) {
            if (data == 'Invalid Email') {
              $('input[type="text"]').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });
              $('input[type="password"]').css({ "border": "2px solid #00F5FF", "box-shadow": "0 0 5px #00F5FF" });
              alert(data);
            } else if (data == 'Email or Password is wrong...!!!!') {
              $('input[type="text"],input[type="password"]').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });
              alert(data);
            } else if (data == 'Successfully Logged in...') {
              $("form")[0].reset();
              $('input[type="text"],input[type="password"]').css({ "border": "2px solid #00F5FF", "box-shadow": "0 0 5px #00F5FF" });
              alert(data);
            } else {
              alert(data);
            }
          });*/

        if (email == 'admin' && password == 'admin') {
          clickCounter();
          window.open("D:/Stuffs/Facultate/ANUL 2/SEMESTRUL 1/Tehnici Web/proiect si examen tw cazacu/Proiect Tehnici WEB/2ndPage/2ndHTML.html");
        } else {
          myWindow = window.open("", "myWindow", "width=200, height=100");
          myWindow.document.write("<p>Wrong Email or Password</p>");
          width = 10;
        }
      }
    });
  });

  var width = 10;
  var title = document.getElementById('titleElder');
  function move() {
    var elem = document.getElementById("myBar");
    var id = setInterval(frame, 10, elem);
    function frame(elem) {
      if (width >= 100) {
        document.getElementById("myBar").setAttribute("style", "background-color: red; width: 100%;"); // Al treilea parametru nu ma intreseaza
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = width * 1 + '%';
      }
    }
  }
}