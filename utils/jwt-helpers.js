import jwt from 'jsonwebtoken';

function jwtTokens({user_id,user_name,user_email}) {
    const user = {user_id,user_name,user_email};
    console.log(process.env.ACCESS_TOKEN_SECRET)
    const accessToken = jwt.sign(user,'543ertyuihghjhgfgbngfghgfgbn',{expiresIn:'5m'});
    const refreshToken = jwt.sign(user,'rtyuiugfdfvbnbvfdfghjffghgfdfgg',{expiresIn:'5m'});
    console.log("access token = ",accessToken)
    console.log("refresh token =",refreshToken)
    return ({accessToken,refreshToken});


}

export {jwtTokens};