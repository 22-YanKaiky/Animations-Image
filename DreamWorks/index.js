var images = new Array( 'jim-trollhunters.gif', 'dreamworks.gif', 'banguela2.jpg');
var numImg = 3;
var atualImage =0;

function ChangeImg() {
     document.getElementById('body')

    if (atualImage < (numImg - 1) )
   {
        atualImage = atualImage + 1;
   }
   else
   {
        atualImage = 0;
   }
    document["img_apoio"].src    = "dir_img/" + images[atualImage];
   var y = setTimeout ("ChangeImg()", 5000);
}
