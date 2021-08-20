async function add(req, res){
    res.render("usuario/add.ejs", req.body);
}

async function abreAdd(req, res){
    res.render("usuario/add.ejs", {});
}

module.exports = {
    add,
    abreAdd
}