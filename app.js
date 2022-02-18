function loadRepos() {

   let url=`https://api.github.com/users/testnakov/repos`;
    console.log(url)

     fetch(url)
         .then(res=>res.json())
         .then(data=>{
             console.log(data);

             let div=document.getElementById('res');

                 div.innerHTML=data.map(object=>`<p><a href="${object.url}" >${object.name}</a>"></p>`).join('')

         })

}