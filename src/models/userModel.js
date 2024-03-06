// // import mongoose from "mongoose";

// // const userSchema = new mongoose.Schema({
// //     // username:{
// //     //     type:String,
// //     //     required:[true,"Please enter your Name"],
// //     //     maxLength:[30,"Name cannot exceed more than 30 characters"],
// //     //     minLength:[6,"Name cannot be less than 6 characters"]
// //     // },
// //     email:{
// //         type:String,
// //         required:[true,"Please enter your email address"],
// //         unique:true,
// //     },
// //     password:{
// //         type:String,
// //         required:[true,"Please enter your Password"],
// //         minLength:[8,"Password must be more than 8 characters"],
// //     },
// //     // storeLocation:{
// //     //     address:{
// //     //         type:String,
// //     //         required:true,
// //     //     },
// //     //     city:{
// //     //         type:String,
// //     //         required:true,
// //     //     },
// //     //     pinCode:{
// //     //         type:Number,
// //     //         required:true,
// //     //     },
// //     //     state:{
// //     //         type:String,
// //     //         required:true,
// //     //     },
// //     //     country:{
// //     //         type:String,
// //     //         required:true,
// //     //     }
// //     // },
// //     // storeName:{
// //     //     tye:String,
// //     //     required:true,
// //     //     minLength:[4,"Store name must exceeds 4 characters"],
// //     // },
// //     // storeManager:{
// //     //     type:String,
// //     //     required:true,
// //     // },
// //     // phoneNumber:{
// //     //     type:Number,
// //     //     required:true,
// //     // },
// //     isVerfied:{
// //         type:Boolean,
// //         default:false,
// //     },
// //     isAdmin:{
// //         type:Boolean,
// //         default:false,
// //     },
// //     createdAt: {
// //         type: Date,
// //         default: Date.now,
// //     },
// //     forgotPasswordToken: String,
// //     forgotPasswordTokenExpiry: Date,
// //     verifyToken: String,
// //     verifyTokenExpiry: Date,
// // });

// // export const User = mongoose.model("users",userSchema);


// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, "Please provide a username"],
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: [true, "Please provide a email"],
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: [true, "Please provide a password"],
//     },
//     // phoneNumber:{
//     //     type:Number,
//     //     required:true,
//     // },
//     isVerfied: {
//         type: Boolean,
//         default: false,
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false,
//     },
//     forgotPasswordToken: String,
//     forgotPasswordTokenExpiry: Date,
//     verifyToken: String,
//     verifyTokenExpiry: Date,
// })

// const User = mongoose.models.users || mongoose.model("users", userSchema);

// export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;