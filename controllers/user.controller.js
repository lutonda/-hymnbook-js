let User = require('../models/user')


exports.create = async (req, res) => {

    
    const {name} = req.body;

    User.findOne({name:name}, async (err, u) => 
    {
        if(u)
            res.json({status: 200, message: "Already in"}); 
        else 
        {
            let user = await User.create(req.body,(e,s)=>{
                res.json({status: 200, message: "success", data: e||s}); 
            });


        }
        
    })

}

exports.getAll = async (req, res)=>{
    let user = await User.find({});

    res.json({status: 200, message: "success", data: user}); 

}
exports.getOneBy = async (req, res)=>{
    let user = await User.findById(req.params.id, (err, data) => {
        
        res.json({
            status: 200,
            message: "sucess",
            data: data || err
        })
    });


}