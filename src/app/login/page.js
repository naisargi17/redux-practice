// "use client";
// import Link from "next/link";
// import React, {useEffect} from "react";
// import {useRouter} from "next/navigation";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// export default function LoginPage() {
//     const router = useRouter();
//     const [user, setUser] = React.useState({
//         email: "",
//         password: "",
       
//     })
//     const [buttonDisabled, setButtonDisabled] = React.useState(false);
//     const [loading, setLoading] = React.useState(false);


//     const onLogin = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.post("/api/users/login", user);
//             console.log("Login success", response.data);
//             toast.success("Login success");
//             router.push("/profile");
//         } catch (error:any) {
//             console.log("Login failed", error.message);
//             toast.error(error.message);
//         } finally{
//         setLoading(false);
//         }
//     }

//     useEffect(() => {
//         if(user.email.length > 0 && user.password.length > 0) {
//             setButtonDisabled(false);
//         } else{
//             setButtonDisabled(true);
//         }
//     }, [user]);

//     return (
//     // <div className="flex flex-col items-center justify-center min-h-screen py-2">
//     //     <h1>{loading ? "Processing" : "Login"}</h1>
//     //     <hr />
        
//     //     <label htmlFor="email">email</label>
//     //     <input 
//     //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//     //         id="email"
//     //         type="text"
//     //         value={user.email}
//     //         onChange={(e) => setUser({...user, email: e.target.value})}
//     //         placeholder="email"
//     //         />
//     //     <label htmlFor="password">password</label>
//     //     <input 
//     //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//     //         id="password"
//     //         type="password"
//     //         value={user.password}
//     //         onChange={(e) => setUser({...user, password: e.target.value})}
//     //         placeholder="password"
//     //         />
//     //         <button
//     //         onClick={onLogin}
//     //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
//     //         <Link href="/signup">Visit Signup page</Link>
//     //     </div>
//     <div className="flex flex-col items-center justify-center min-h-screen" >
//             <div className="border-2 border-black rounded-lg p-8" >
//                 <h1 className="py-4 text-[2vw]">{loading ? "Processing" : "Sign in"}</h1>

//                 <form method="POST">
//                     <label htmlFor="email">Email</label><br />
//                     <input
//                         className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//                         id="email"
//                         type="email"
//                         value={user.email}
//                         onChange={(e) => setUser({ ...user, email: e.target.value })}
//                         placeholder="Enter you email address"
//                     /><br />
//                     <label htmlFor="password">Password</label><br />
//                     <input
//                         className="p-2 w-[25vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//                         id="password"
//                         type="password"
//                         value={user.password}
//                         onChange={(e) => setUser({ ...user, password: e.target.value })}
//                         placeholder="Enter your password"
//                     /><br />
//                     <button
//                         onClick={onLogin}
//                         className="p-2 w-[25vw] bg-amber-400 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Sign in</button>
//                 </form>
//                 <hr className="my-2 mx-8 border-1 shadow-black shadow-lg" />
//                 <div className="mt-4">
//                     Does not have an account?{" "}
//                     <Link href="/signup">
//                         <button className="text-amber-400">
//                             Sign In
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )

// }

"use client";
import { IconName } from "react-icons/bs";
import { CgAbstract } from "react-icons/cg";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";





export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? "Processing" : "Login"}</h1>
        <hr />
        
        <CgAbstract/> 
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
            <Link href="/signup">Visit Signup page</Link>
        </div>
    )

}