const name = "Estuardo";
let arrN = [1,2,3,4,5,6];
let stringN = "";
arrN.forEach((n)=>{
    stringN += `${n}\n`;
})
const returnN = (n1, n2)=>{
    return n1 + n2;
}
export const FirstApp = ()=>{
    //imprimir variables en el jsx podemos utilizar el valor de una cariable media vez no sea object
    return(//no podemos retornar varios elementos html entonces debemos encerrar todo dentro de un div
        <>
        <h1>{name}</h1>
        <p>{stringN}</p>
        <p>{arrN}</p>
        <p>{returnN(5, 5)}</p>
        </>
    ); 
};