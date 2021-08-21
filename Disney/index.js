var images = new Array( 'sabesp.gif', 'petrobras.gif', 'CVRD.gif');
var numImg = 3;
var atualImage =0;

function ChangeImg()
{
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
