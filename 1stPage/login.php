<?php
    if(isset($_POST['login'])){
        $email = $_POST['emailPHP'];
        $password = $_POST['passwordPHP'];

        exit($email)
    }
?>

<!DOCTYPE html>
<html lang="eng">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>TESV</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="myCSS.css" />
    <script src="myJS.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body id="main">
    <!-- imagine de background -->

    <div class="bg-image">
        <section id="titleElder" onclick="document.getElementById('id01').style.display='block'">
            <header>THE ELDER SCROLLS V: SKYRIM</header>
            <div id="login-txt"><br> Press To Login</div>
            <div id="fan-made"><br>- fan made site -</div>
        </section>

        <!-- The Modal -->
        <div id="id01" class="modal">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>

            <!-- Modal Content -->
            <form class="modal-content animate" method="POST" action="login.php">
                <div class="imgcontainer">
                    <img src="avatar.jpg" alt="Avatar" class="avatar">
                </div>

                <div class="container">
                    <label for="demail"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="demail" id="email" required>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" id="password"required>
                    <button type="button" name="login" id="login" value="Login">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>
                </div>
                <div class="containerDown">
                    <div class="flex">
                        <span class="psw">Forgot <a href="#">password?</a></span>
                        <span class="register" onclick="document.getElementById('id01').style.display='none';document.getElementById('id02').style.display='block'">Register</span>
                    </div>
                    <button type="button" onclick="document.getElementById('id01').style.display='none'; " class="cancelbtn">Cancel</button>


                </div>
            </form>

            <footer id="footerEnd">
                by Razvan Cazacu
                <br>
                Game by Bethesda
        </div>
        <!--Register-->
        <div id="id02" class="modal">
            <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>

            <!-- Modal Content -->

            <form class="modal-content animate" method="post" action="register.php">
                <div class="container">

                    <div class="imgcontainer">
                        <img src="avatar.jpg" alt="Avatar" class="avatar">
                    </div>
                    <h2>Register</h2>
                    <label>Name :</label>
                    <input type="text" name="dname" id="Rname">
                    <label>Email :</label>
                    <input type="text" name="demail" id="Remail">
                    <label>Password :</label>
                    <input type="password" name="password" id="rpassword">
                    <label>Confirm Password :</label>
                    <input type="password" name="cpassword" id="cpassword">
                    <div class="containerDown">
                        <input type="button" name="register" id="register" value="Register">
                        <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn">Cancel</button>
                    </div>
            </form>
        </div>


    </div>
    <span id="bg-audio-button" style="z-index: 100">
        <label for="Music-Off" id="audio-text">Audio</label>
        <label class="switch">
            <input type="checkbox" id="checkB">
            <span class="slider"></span>
        </label>
    </span>
    <footer id="footerEnd">
        by Razvan Cazacu
        <br>
        Game by Bethesda
        </div>

        <audio controls id="audio-song" autoplay>
            <source src="Song of Durin - Clamavi De Profundis.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
</body>


<script sandbox="allow-scripts" src="https://www.gstatic.com/firebasejs/5.7.3/firebase.js"></script>
<script>
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBZf5QJhhvFQ3shQUruEENa6E8a7oNs9FQ",
        authDomain: "proiect-tw-skyrim.firebaseapp.com",
        databaseURL: "https://proiect-tw-skyrim.firebaseio.com",
        projectId: "proiect-tw-skyrim",
        storageBucket: "",
        messagingSenderId: "400137457629"
    };
    firebase.initializeApp(config);
</script>


</html>