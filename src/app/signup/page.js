"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
        mobileNumber: "",
    })
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");

        } catch (error) {
            console.log("Signup failed", error.message);

            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen" >
            <div className="border-2 border-black rounded-lg p-8" >
                <h1 className="py-4 text-[2vw]">{loading ? "Processing" : "Create Account"}</h1>

                {/* <form method="POST"> */}
                    <label htmlFor="username">Your name</label><br />
                    <input
                        className="p-2 mt-2 md:w-[50vw] lg:w-[25vw] border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="First and last name"
                    /><br />
                    <label htmlFor="email">Email</label><br />
                    <input
                        className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="email"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="Email"
                    /><br />
                    <label htmlFor="mobileNumber">Mobile number</label><br />
                    <input
                        className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="mobileNo"
                        type="tel"
                        value={user.mobileNumber}
                        onChange={(e) => setUser({ ...user, mobileNumber: e.target.value })}
                        placeholder="Mobile number"
                    /><br />
                    <label htmlFor="password">Password</label><br />
                    <input
                        className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="At least 6 characters"
                    /><br />
                    <button
                        onClick={onSignup}
                        className="p-2 w-[25vw] bg-amber-400 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup</button>
                {/* </form> */}
                <hr className="my-2 mx-8 border-1 shadow-black shadow-lg" />
                <div className="mt-4">
                    Already have an account?{" "}
                    <Link href="/login">
                        <button className="text-amber-400">
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )

}


// "use client";
// import Link from "next/link";
// import React, { useEffect } from "react";
// import {useRouter} from "next/navigation";
// import axios from "axios";
// import { toast } from "react-hot-toast";




// export default function SignupPage() {
//     const router = useRouter();
//     const [user, setUser] = React.useState({
//         email: "",
//         password: "",
//         username: "",
//     })
//     const [buttonDisabled, setButtonDisabled] = React.useState(false);
//     const [loading, setLoading] = React.useState(false);

//     const onSignup = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.post("/api/users/signup", user);
//             console.log("Signup success", response.data);
//             router.push("/login");
            
//         } catch (error:any) {
//             console.log("Signup failed", error.message);
            
//             toast.error(error.message);
//         }finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
//             setButtonDisabled(false);
//         } else {
//             setButtonDisabled(true);
//         }
//     }, [user]);


//     return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//         <h1>{loading ? "Processing" : "Signup"}</h1>
//         <hr />
//         <label htmlFor="username">username</label>
//         <input 
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//             id="username"
//             type="text"
//             value={user.username}
//             onChange={(e) => setUser({...user, username: e.target.value})}
//             placeholder="username"
//             />
//         <label htmlFor="email">email</label>
//         <input 
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//             id="email"
//             type="text"
//             value={user.email}
//             onChange={(e) => setUser({...user, email: e.target.value})}
//             placeholder="email"
//             />
//         <label htmlFor="password">password</label>
//         <input 
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//             id="password"
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({...user, password: e.target.value})}
//             placeholder="password"
//             />
//             <button
//             onClick={onSignup}
//             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
//             <Link href="/login">Visit login page</Link>
//         </div>
//     )

// }