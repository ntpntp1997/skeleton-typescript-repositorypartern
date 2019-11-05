import passPort from "passport";
import passPortLocal from "passport-local";
import { transErrors, transSuccess, transMail } from "./../../../lang/vi";
import { UserBusiness } from '../../business/userBusiness';


let LocalStrategy = passPortLocal.Strategy;

/**
 * Valid user account type : local
 * 
 */
let initPassPortLocal = () => {
    passPort.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, async(req, email, password, done, ) => {
        try {
            let userBusiness = new UserBusiness();
            let user 
             userBusiness.findBy('email', email, (err, result) => {
                if (err) {
                    console.log(err);
                    return done(null, false, transErrors.server_error);
                }
                else {
                    user = result;
                }
            });
            if (!user) {

                return done(null, false, transErrors.login_failed);
            }
            if (!user.local.isActive) {
                return done(null, false, transErrors.account_not_active);
            }

            let checkPassword = await user.comparePassword(password);
            if (!checkPassword) {
                return done(null, false, transErrors.login_failed);
            }

            //return done(null, user, req.flash("success", transSuccess.login_success(user.username)))
            return done(null, user)
        } catch (error) {
            console.log(error);
            return done(null, false, transErrors.server_error);
        }
    }));

    // save userId to session
    passPort.serializeUser((user, done) => {
        done(null, user._id);
    });

    passPort.deserializeUser((id, done) => {
        let userBusiness = new UserBusiness();
        userBusiness.findById(id, (err, user) => {
            if (err) {return done(err, null);}
            return done(null, user);
        });
    });
};

module.exports = initPassPortLocal;