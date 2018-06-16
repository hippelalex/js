 var menubtn = document.getElementById('hamburger-menu');
  var menu = document.getElementsByTagName('nav')[0];

       menubtn.onclick = toggleMenuAnimation;

       function toggleMenuAnimation(){
        menubtn.classList.toggle('animate');
        menu.classList.toggle('opened');
       }





        var progressbar  = document.getElementsByClassName('progressbar')[0];
         var progress  = document.getElementsByClassName('progress')[0];
         // var span = document.getElementsByTagName('span')[0];
         var currentProgress = 0;
         var value = progressbar.getAttribute('data-value');
         var interval = setInterval(function(){
             animateProgress();
       },50);

        

        function animateProgress(){
        
               if (currentProgress <= value){
                   progress.style.width = currentProgress + '%';
                    // span.innerText = currentProgress + '%';
                    currentProgress++;
                }
                else{
                    clearInterval(interval);
                }

             }


       var progressbars = document.getElementsByClassName('progressbar');
       console.log(progressbars);

