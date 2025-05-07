import passport from "passport";

export const authenticate = (req, res, next)=>{
    try {
        passport.authenticate('jwt', { session: false }, (err, user)=>{
           if(err){
            next(err);
           }
           if(!user){
              return res.status(401).json({
                message:'Unautherised User invalid Token'
              });
           }
           req.user = user;
           next();
        })(req, res, next);
    } catch (error) {
        return 
    }
}