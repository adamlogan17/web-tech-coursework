function myFunction(){
  if(sessionStorage.getItem('vaccineSelected') == 'No Vaccine') {
    window.open('noVaxScreen.html','_self');
  } else {
    window.open('successScreen.html','_self');
  } 
}
