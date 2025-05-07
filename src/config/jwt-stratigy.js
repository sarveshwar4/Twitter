import jwt from "passport-jwt";
import User from "../models/user.js";

const ExtractJwt = jwt.ExtractJwt;
const JwtStrategy = jwt.Strategy;

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "TwitterSecret",
};

export const passportAuth = (passport) => {
  passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
        try {
      const user = await User.findOne({email : jwt_payload.email});
      console.log("User Found:", user);

      if (!user) {
        console.log("User not found");
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      console.error("Error in JWT Strategy:", error);
      return done(error, false);
    }
  }));
};
