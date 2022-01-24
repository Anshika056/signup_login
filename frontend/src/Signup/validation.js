const validation = (userdata) =>{
    let errors={};

    if(!userdata.username){
        errors.username = "username is required";
    }

    if(!userdata.email){
        errors.email= "email is required";
    }

    if(!userdata.password){
        errors.password = "password is required";
    } else if (userdata.password !== userdata.retypepassword){
        errors.retypepassword = "passwords don't match "
    }

    return errors;
    
}

export default validation;