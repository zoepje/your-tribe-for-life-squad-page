const squad1d = document.getElementById('squad1d')
const squad1e = document.getElementById('squad1e')
const squad1f = document.getElementById('squad1f')

function showSquad(val){
  if(val==1){
    squad1d.style.display='flex'
    squad1e.style.display='none'
    squad1f.style.display='none'
  }
  if(val==2){
    squad1d.style.display='none'
    squad1e.style.display='flex'
    squad1f.style.display='none'
  }
  if(val==3){
    squad1d.style.display='none'
    squad1e.style.display='none'
    squad1f.style.display='flex'
  }
}