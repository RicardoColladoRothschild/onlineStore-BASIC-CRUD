const btn_acceder = document.querySelector('#acceder');



async function requestAccess(){
    const response = await fetch('http://localhost:3000/obtener-datos');
    if(!response.ok){
        throw new Error('Error en la socilitud: ' + response.status);
    }

    const datos = await response.json();
    console.log(datos);
    /*const d = JSON.stringify(datos, null, 2);
    console.log(d);*/
}
btn_acceder?.addEventListener('click', ()=>{
    requestAccess();
    console.log('testing dom manipulation');
});