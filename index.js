const f = document.getElementById('form');
            const q = document.getElementById('query');
            const google = 'https://www.google.com/search?q=+';
            function submitted(event) 
            {
              event.preventDefault();
              const url = google + '+' + q.value;
              const win = window.open(url, '_blank');
              win.focus();
            }
            f.addEventListener('submit', submitted);
        function r1(){
            window.open("https://myaccount.google.com/deleteaccount");
        }
        function r2(){
            window.open("https://www.youtube.com/");
        }
        function r3(){
            window.open("")
        }
        function r3(){
            window.open("https://www.linkedin.com/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D5559396%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522state%2522%253A%2522meGCSbmnVSKVGlKJyIh6hX63gZhC5oGvYLN60Hm3%2522%252C%2522appId%2522%253A5559396%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1669627129674%252C%2522redirectUri%2522%253A%2522https%253A%252F%252F24slides%2Ecom%252Ftemplates%252Fauth%252Fsocial%252Fcallback%2522%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D5559396%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522state%2522%253A%2522meGCSbmnVSKVGlKJyIh6hX63gZhC5oGvYLN60Hm3%2522%252C%2522appId%2522%253A5559396%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1669627129674%252C%2522redirectUri%2522%253A%2522https%253A%252F%252F24slides%2Ecom%252Ftemplates%252Fauth%252Fsocial%252Fcallback%2522%257D")
        }
        function r4(){
            window.open("http://rakesh2002.infinityfreeapp.com/");
        }
        function r5(){
            window.open("https://www.sololearn.com/learning/1068");
        }
        function r6(){
            window.open("https://accounts.google.com/Logout");
        }
        function r7(){
            window.open("https://github.com/github-login");
        }
        function r8(){
            window.open("https://classroom.google.com/?authuser=0");
        }
        function r9(){
            window.open("https://meet.google.com/?hs=197&pli=1&authuser=0");
        }
        function r10(){
            window.open("https://docs.google.com/forms/?authuser=0&usp=forms_alc");
        }
        function r(){
            window.open("https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com&service=mail");
        }
