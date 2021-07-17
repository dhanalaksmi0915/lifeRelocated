// apple gallery
var form=document.getElementById('form');
var parentDiv=document.getElementById('result');
form.addEventListener('submit',function(event){
  event.preventDefault()

var reader=new FileReader();
var name =document.getElementById("image").files[0].name;

reader.addEventListener('load',function(){
  if(this.result && localStorage){
  window.localStorage.setItem(name,this.result);
  alert("image stored in local storage");
  showImages();
}
else {
  alert("not successful");
}
});
reader.readAsDataURL(document.getElementById('image').files[0]);
console.log(name); 
});

function showImages(){
  for(let i=0;i<window.localStorage.length;i++)
  {
  let res=window.localStorage.getItem(window.localStorage.key(i))
  var image=new Image();
  image.src=res;
  parentDiv.appendChild(image);
}
}
