const admin = (req, res, next) =>{
    if (req.user.title === "admin") {
        next()
    } else { res.send("bạn không đủ quyền ")}
}

module.exports = admin