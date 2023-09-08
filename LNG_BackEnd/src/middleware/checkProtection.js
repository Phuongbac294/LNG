const protection = (req, res, next) => {
    var check = req.user.title;
    if (check === "protection" || check === "admin") {next();}
    else { res.send("Không đủ quyền")}
}
module.exports = protection;