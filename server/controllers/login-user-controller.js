const loginUser = require("../models/login-user-model")
const bcrypt = require('bcrypt');
const cookie = require('cookie');
const jwt = require('jsonwebtoken');

const secret_key = process.env.SECRET_KEY


// SIGN-UP 
const createUser = async(req, res) => {
    console.log("Inside create user");

    try {
        const pass_hash = await bcrypt.hash(req.body.password, 10);
        console.log(`hashed_password: ${pass_hash}, type ${typeof(pass_hash)}`);
        const create_user_call = new loginUser({
            fullName: req.body.fullName,
            userName: req.body.userName,
            email: req.body.email, 
            password: `${pass_hash}`
        })

        const save_user = await create_user_call.save()
        console.log(`user created, data: ${save_user}`);

        // Create a JWT token for new users 
        const token = jwt.sign({ userId: save_user._id }, `${secret_key}`);
        console.log(`token created: ${token}`);

        // Set the token as a cookie  
        res.setHeader('Set-Cookie', cookie.serialize('token', token, {
            httpOnly: true,
            maxAge: 60*60, 
            sameSite: 'strict',
            path: '/'
        }));

        return res.status(200).json({
            message: 'New user created',
            data: save_user,
            token: token, 
        })

    } catch (err) {
        console.error(`error in creating new user: ${err}`);
        return res.status(500).json({
            message: 'error in creating user',
            error: err
        })
    }
}

// LOGIN
const signinUser = async(req, res) => {
    console.log("Inside signin user");
    const { userName, password } = req.body;
    console.log(userName, password);

    try {
        const user = await loginUser.findOne({ userName });
        console.log(`user data: ${user}`);
        if (!user) {
            console.log(`invalid username: ${userName}`);
            return res.status(401).json({ 
                message: 'Invalid username or password' 
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            console.log(`password does not match ${password}, saved password: ${user.password}`);
            return res.status(401).json({ 
                message: 'Invalid username or password' 
            });
        }

        // Create a JWT token for the authenticated user
        const token = jwt.sign({ userId: user._id }, `${secret_key}`);
        console.log(`generated toke: ${token}`);

        // Set the token as a cookie
        res.setHeader('Set-Cookie', cookie.serialize('token', token, {
            httpOnly: true,
            maxAge: 60 * 60,  
            sameSite: 'strict',
            path: '/'
        }));

        return res.status(200).json({
            message: 'User signed in',
            data: user,
            token: token
        })

    } catch (err) {
        console.error(`error in signing in user: ${err}`);
        return res.status(500).json({
            message: 'error in signing in user',
            error: err
        })
    }
}

// LOGOUT
const logout = async (req, res) => {
    console.log(`Logout request made..`);
    try {
        res.clearCookie('token')

        res.status(200).json({
            message: 'user session cleared',
            logout: 'done'
        })
    } catch (err) {
        console.error(`error clearing session: ${err}`);
        res.status(400).json({
            message: 'error clearing user session',
            error: err
        })
    }
}

exports.createUser = createUser
exports.signinUser = signinUser
exports.logout = logout