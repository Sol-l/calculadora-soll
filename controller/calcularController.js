async function abreCalc(req, res){
    res.render("calcular/calc.ejs", { });
}
async function calc(req, res){
    var valor1 = req.body.valor1;
    var valor2 = req.body.valor2;
    var operacao = req.body.operacao;
    var result;

    switch (operacao) {
        case "somar": result = parseInt(valor1) + parseInt (valor2)
        break;
        case "subtrair": result = parseInt(valor1) - parseInt (valor2)
        break;
        case "multiplicar": result = parseInt(valor1) * parseInt (valor2)
        break;
        case "dividir": result = parseInt(valor1) / parseInt (valor2)
        break;
        default:
        break;
        }

        res.render("calcular/result.ejs", { msg: "Resultado: " + result});
    }

module.exports = {
    abreCalc,
    calc,
}