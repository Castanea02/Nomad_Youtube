//UserController export
//요청시 반환
import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
    return res.render("join", {pageTitle:"Join"});
};

export const postJoin = async(req, res) => {
    const {name, username, email, password, password2, location} = req.body;

    const pageTitle = "Join";
    if(password !== password2){ //password check
        return res.status(400).render("join", {
            pageTitle, 
            errorMessage:"Password Confirmation does not match",
        });
    }

    const exists = await User.exists({$or: [{username},{email}]}); //error check
    if(exists){
        return res.status(400).render("join", {
            pageTitle, 
            errorMessage:"This username/email is already taken",
        });
    }
    try{
        await User.create({ //create User
            name,
            username, 
            email,
            password,
            location,
        });
        return res.redirect("/login");
    }catch{
        return res.status(400).render("join", {
            pageTitle:"Upload Video",
            errorMessage:error._message,
        });
    }
};

export const getLogin = (req, res) => {
    res.render("login",{
        pageTitle:"Login",
    });
};

export const postLogin = async (req, res) => {
    const {username, password} = req.body;
    const pageTitle ="Login";
    const user = await User.findOne({username});//username Check
    if(!user){
        return res.status(400).render("login", {
            pageTitle, 
            errorMessage:"An account with this username does not exists.",
        });
    }

    const ok = await bcrypt.compare(password, user.password); 
    if(!ok){//password check
        return res.status(400).render("login", {
           pageTitle,
           errorMessage:"Wrong password",
        });
    }
    console.log("Log User In!");
    return res.redirect("/");
};

export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const logout = (req, res) => res.send("Logout");
export const see = (req, res) => res.send("see");