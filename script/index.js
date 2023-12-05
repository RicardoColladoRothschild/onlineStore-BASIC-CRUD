"use strict";
const btn_acceder = document.querySelector('#acceder');
async function requestAccess() {
    const response = await fetch('http://localhost:3000/obtener-datos');
    const datos = await response.json();
    console.log(datos);
    /*const d = JSON.stringify(datos, null, 2);
    console.log(d);*/
}
btn_acceder === null || btn_acceder === void 0 ? void 0 : btn_acceder.addEventListener('click', () => {
    requestAccess();
    console.log('testing dom manipulation');
});
