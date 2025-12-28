function aceitarAviso(){
  localStorage.setItem("aviso_script","ok");
  document.getElementById("aviso").style.display="none";
}
function recusarAviso(){
  window.location.href="index.html";
}
function checarAviso(){
  if(localStorage.getItem("aviso_script")!=="ok"){
    document.getElementById("aviso").style.display="flex";
  }
}
function copiarScript(id){
  const txt=document.getElementById(id);
  txt.select();
  document.execCommand("copy");
  alert("Script copiado ✅");
}
