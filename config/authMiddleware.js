const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) =>{
    let token
    if(req.headers.authorization && req.headers.authorization.startWith('Bearer')){
        try {
            token.headers.authorization.split(" ")[1]
            const user = jwt.verify(token, "Secretkey123")
            req.body.user = user
            next()
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    
    if(!token){
        res.status(401).json({msg :"not authorised"})
    }
}