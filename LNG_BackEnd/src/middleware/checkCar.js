const car = (req, res, next) => {
    var check = req.user.title;
    if (check === "QuanLy_Xe" || check === "admin") {next();}
    else { res.send("Không đủ quyền")}
}
module.exports = car;