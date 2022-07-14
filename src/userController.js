const route = require("./route")
const userModel = require("./userModel")
const aws = require("./aws")


const createUser = async (req, res) => {
    try {

        const userData = req.body;
        const { name, designation, companyName, contactNumber, emailId, websiteUrl, socialUrl } = userData;
        const createData = await userModel.create(userData);

        let files = req.files   
        if(files && files.length > 0){
            let uploadedFileUrl = await aws.uploadFile(files[0]);
            userData.companyLogo = uploadedFileUrl
        }else{
            return res.status(400).send({status:false,message:"Please Enter a companyLogo"})
        }
        res.status(201).send({ status: true, userDetails: createData })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
};

const getUserDetails = async (req, res) => {
    try {
        const {userId} = req.params
        const getData = await userModel.findById(userId).select({
            name:1, 
            designation:1, 
            companyName:1, 
            contactNumber:1,
            emailId:1,
            websiteUrl:1,
            socialUrl:1,
            companyLogo:1,        
            });

        res.status(200).send({ status: true, userDetails: getData });
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
}


module.exports.createUser = createUser;
module.exports.getUserDetails = getUserDetails;