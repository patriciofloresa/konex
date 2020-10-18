function calcularIva(){
    try {
        var a = (document.getElementById("primaAfecta").value) || 0;
            a = a.toString().replace(",",".")
            b = 0.19;
            c = a * b;
            c = c.toFixed(2)
            console.log('A: '+a + ' B: '+b+ ' C: '+c)
            
        document.getElementById("iva").value = c;
    } catch (error) {
        console.log(error)
    }
}

function calcularAfecta(){
   
};

function calcularNeta(){
    try {
        var a = (document.getElementById("primaAfecta").value).toString()|| 0;
            b = (document.getElementById("primaExenta").value).toString()|| 0;
            c = +a + +b; 
            c = c.toFixed(2)
            console.log('A: '+a + ' B: '+b+ ' C: '+c)
            
        document.getElementById("primaNeta").value = c;
        calcularBruta();
    } catch (error) {
        console.log(error)
    }
};
function calcularBruta(){
    try {
        var a = (document.getElementById("primaNeta").value).toString()|| 0;
            b = (document.getElementById("iva").value).toString()|| 0;
            c = +a + +b; 
            c = c.toFixed(2)
            console.log('A: '+a + ' B: '+b+ ' C: '+c)
        document.getElementById("primaBruta").value = c;
        $('#primaBruta').val(c).trigger('input');
    } catch (error) {
        console.log(error)
    }
};

function calcularKonex(){
    try {
        var a = (document.getElementById("primaAfecta").value).toString()|| 0;
            b = (document.getElementById("primaExenta").value).toString()|| 0;
            c = (document.getElementById("comisionAfecta").value).toString()|| 0;
            d = (document.getElementById("comisionExenta").value).toString()|| 0;
            if ( c == 0 && d == 0)
                e = 0
            else if (c == 0 )
                e = (b*(d/100)).toFixed(2)
                else if ( d == 0)
                e = (a*(c/100)).toFixed(2)
                else (
                    e = (a*(c/100)) + (b*(d/100))
                )
            console.log('A: '+a + ' B: '+b+ ' C: '+c+' D: '+d+' E: '+e)
        
        e = e.toFixed(2);
        document.getElementById("montoTotal").value = e.toFixed(2);
    } catch (error) {
        console.log(error)
    }
};

function editar(){
    document.getElementById("nombrePropuesta").value = "POLIZA";
}
function excluir(){
    document.getElementById("nombrePropuesta").value = "EXCLUIR";
}
function incorporar(){
    document.getElementById("nombrePropuesta").value = "INCORPORAR";
    console.log( "incorporacion "+ document.getElementById("nombrePropuesta").value)
}
function modificar(){
    document.getElementById("nombrePropuesta").value = "MODIFICAR";
    console.log( "incorporacion "+ document.getElementById("nombrePropuesta").value)
}
function anular(){
    document.getElementById("nombrePropuesta").value = "ANULAR";
    console.log( "incorporacion "+ document.getElementById("nombrePropuesta").value)
}
function cancelar(){
    document.getElementById("nombrePropuesta").value = "CANCELAR";
    console.log( "incorporacion "+ document.getElementById("nombrePropuesta").value)
}

function calcReferido(){
    try {
        var a = (document.getElementById("comisionReferido").value).toString()|| 0;
            b = (document.getElementById("montoTotal").value).toString()|| 0;
            c = (b*(a/100)).toFixed(2);
            console.log('A: '+a + ' B: '+b+ ' C: '+c)
        console.log(c)
        document.getElementById("valorReferido").value = c;
    } catch (error) {
        console.log(error)
    }
}