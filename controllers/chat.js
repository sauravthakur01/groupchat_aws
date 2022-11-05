const User = require('../models/user');
const Chat = require('../models/chats');

exports.postMessage = async(req,res,next)=>{
    const {message} = req.body;
    const groupId = req.params.groupId ;
    try {
        if(!message || !groupId){
            return res.status(400).json({message:'nothing entered'})
        }
        const data = await req.user.createChat({message , groupId})
        const name = req.user.name
        
        const arr = []
        const details = {
            id :data.id ,
            groupId:data.groupId,
            name:req.user.name ,
            message:data.message,
            createdAt:data.createdAt
        }
        arr.push(details);
        res.status(201).json({arr , message:'sucessfully added chat message'})
    } catch (err) {
        res.status(500).json({message:'unable to add expwnse'})
    }
}

exports.getMessage = async(req,res,next)=>{
    let msgId = req.query.msg ; 
    let groupId = req.params.groupId
    // console.log(groupId);
    // console.log('///////////////////////////',msgId)

    try {
        const data = await Chat.findAll({where:{groupId}});
        // console.log(data.length)
        let index = data.findIndex(chat => chat.id == msgId)
        // console.log('.......................',index);
        let messagestosend = data.slice(index+1)
        console.log(messagestosend)
        
        let arr = [];

        for(let i = 0 ; i<messagestosend.length ; i++){

            const user = await User.findByPk(messagestosend[i].userId);

            const details = {
                id :messagestosend[i].id ,
                groupId:messagestosend[i].groupId,
                name:user.name ,
                message:messagestosend[i].message,
                createdAt:messagestosend[i].createdAt
            }

            arr.push(details)
        }
       
        res.status(200).json({arr})
    } catch (error) {
        res.status(500).json({message:'unable to get chats'})
    }
    
    
} 