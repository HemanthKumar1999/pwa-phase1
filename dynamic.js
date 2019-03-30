function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
profile(data.profile);
career(data.career);
Education(data.Education);
skills(data.skills);
})
var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);
  var name=document.createElement("h3");
  name.textContent=p.name;
  left.append(name);
  var Designation=document.createElement("h3");
  Designation.textContent=p.Designation;
  left.append(Designation);


  var mobile=document.createElement("h3");
  mobile.textContent=p.mobile;
  left.append(mobile);

  var email=document.createElement("h3");
  email.textContent=p.email;
  left.append(email);

}
var right=document.querySelector(".right");
function career(c){
  var h1=document.createElement("h2");
  h1.textContent="Carrer";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var info=document.createElement("p");
  info.textContent=c.info;
  right.append(info);
}
function Education(ed){
  var E=document.createElement("h2");
  E.textContent="Education";
  right.append(E);
  var hr=document.createElement("hr");
  right.append(hr);

  var table=document.createElement("table");
   table.border="1";
  var tr1="<tr><th>Qualification</th><th>Institute</th><th>percentage</th><th>year</th></tr>";
  var tr2=" ";
  for(i=0;i<ed.length;i++)
  {
    tr2=tr2+"<tr><td>"+ed[i].Qualification+"</td><td>"+ed[i].Institute+"</td><td>"+ed[i].percentage+"</td><td>"+ed[i].year+"</td></tr>";
  }
  table.innerHTML=tr1+tr2;
  right.append(table);
}
function skills(sk){
  var E=document.createElement("h2");
  E.textContent="Skills";
  right.append(E);
  var hr=document.createElement("hr");
  right.append(hr);
  var ul=document.createElement("ul");
  for(var i in sk)
  {
    var li=document.createElement("li")
    li.innerHTML="<b>"+sk[i].name+"</b>   :<br>   "+sk[i].info;
    ul.append(li);
  }
  right.append(ul);
}
