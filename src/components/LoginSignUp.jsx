import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

function LoginSignUp() {

    const belowAnimate = useRef();
    const location = useLocation()
    const pathName = location.pathname.split("/")[1];

    useEffect(() => {
        console.log(pathName)
    }, [pathName])

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.pwd.value);
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(belowAnimate.current, {
                opacity: 0,
                y: 100,
                duration: 0.75,
            });
        })
        return () => ctx.revert();
    }, [pathName])

    return (
        <section className="" ref={belowAnimate}>
            <div className="h-screen flex justify-center items-center flex-col md:w-6/12 md:mx-auto w-full md:px-0 px-4">
                <Link to="/" className="p-2 bg-[#1b1b21] rounded-lg absolute top-4 left-4">Back to Home</Link>
                <img src="https://ugc.production.linktr.ee/83ebb150-33fc-4639-8f2b-0bd315a84a1b_Worko.jpeg?io=true&size=avatar-v1_0" alt="" className="rounded-full h-10 aspect-square" />
                {
                    pathName === "login" &&
                    <>
                        <h2 className="text-4xl bg-clip-text font-semibold mt-3 mb-6" style={{ backgroundImage: "linear-gradient(0deg, rgb(97, 100, 107) 0%, rgb(255, 255, 255) 100%)", WebkitTextFillColor: "transparent" }}>
                            Welcome Back
                        </h2>
                        <h4 className="text-sm text-gray-400">
                            Don't have an account?
                            <Link to="/sign-up" className="ms-2 text-[#b17af5] font-medium">Sign up</Link>
                        </h4>
                    </>
                }
                {
                    pathName === "sign-up" &&
                    <>
                        <h2 className="text-4xl bg-clip-text font-semibold mt-3 mb-6" style={{ backgroundImage: "linear-gradient(0deg, rgb(97, 100, 107) 0%, rgb(255, 255, 255) 100%)", WebkitTextFillColor: "transparent" }}>
                            Create an account
                        </h2>
                        <h4 className="text-sm text-gray-400">
                            Already have an account?
                            <Link to="/login" className="ms-2 text-[#b17af5] font-medium">Sign in</Link>
                        </h4>
                    </>
                }
                <form className="flex flex-col md:w-6/12 w-full gap-y-8 my-6" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="email" className="flex flex-col text-gray-400 text-base">
                        Email
                        <input type="email" name="email" id="email" className="rounded-lg border border-gray-800 px-2 py-3 mt-2 bg-[#09090f]" placeholder="Email" />
                    </label>
                    <label htmlFor="pwd" className="flex flex-col text-gray-400 text-base">
                        Password
                        <input type="password" name="pwd" className="rounded-lg border border-gray-800 px-2 py-3 mt-2 bg-[#09090f]" placeholder="Password" />
                    </label>
                    {
                        pathName === "login" &&
                        <>
                            <button type="submit" className="px-2 py-3 bg-[#7808ff] rounded-lg font-semibold">Sign In</button>
                        </>
                    }
                    {
                        pathName === "sign-up" &&
                        <>
                            <button type="submit" className="px-2 py-3 bg-[#7808ff] rounded-lg font-semibold">Sign Up</button>
                        </>
                    }
                </form>
                <button className="px-2 py-3 bg-[#1b1b21] rounded-lg md:w-6/12 w-full my-10">Continue with email</button>
                <p className="md:w-6/12 w-full text-center text-sm text-gray-400">You acknowledge that you read, and agree to our Terms of Service and our Privacy Policy.</p>
            </div>
        </section>
    )
}

export default LoginSignUp