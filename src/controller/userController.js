//UserController export
//요청시 반환
import User from "../models/User"

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

    await User.create({ //create User
        name,
        username, 
        email,
        password,
        location,
    });
    return res.redirect("/login");
};

export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => {
    res.send("Login");
};
export const logout = (req, res) => res.send("Logout");
export const see = (req, res) => res.send("see");