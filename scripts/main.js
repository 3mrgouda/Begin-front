// dropdown list for services
function over() {
    let servList = document.getElementById('servList');
   let serv = document.getElementById("serv");

  if (serv.hidden != true) {
     serv.hidden = true ;

      } else {
    serv.hidden = false;
    servList.hidden = true;
  }

}
function out() {
    servList.style.visibility = 'visibl';
  let serv = document.getElementById("serv");
  if (serv.hidden != true) {
    serv.hidden = true;
  } else {
    serv.hidden = false;
  }
}
//end


 

