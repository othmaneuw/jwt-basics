

const login = async (req,res) =>{
    res.send('Login post request');
}

const dashboard = async (req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg : 'Hello Othmane',secret : `Here is your secret Number ${luckyNumber}`});
}


module.exports = {
    login,
    dashboard
};