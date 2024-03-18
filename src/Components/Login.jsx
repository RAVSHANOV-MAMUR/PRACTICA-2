import rasm from "./Login/img/image.png"


function Login() {
    return (
        <>
        <main className="main">
            <div className="container-xl">
                <div className="flex items-center gap-48">
                        <img className="h-full" src={rasm} alt="Bac" width={720} height={799}/>

                        {/* Login */}

                    <div className="flex flex-col">
                        <h1 className="text-xl pb-8 decoration-black font-sans font-bold">
                        <span className="text-sm font-sans font-normal">Welcome back</span> <br/>
                             Login to your account</h1>

                             {/* Email */}

                        <form className="form flex flex-col gap-10">
                            <label >
                                <span>Email</span><br/>
                                <input className="w-80 h-12 rounded-lg pl-4 font-serif" type="email" placeholder="Enter Your Email"/>
                            </label>
                            {/* Password */}

                            <label >
                                <span>Password</span><br/>
                                <input className="w-80 h-12 rounded-lg pl-4 font-serif" type="password" placeholder="Enter Your Password"/>
                            </label>

                            {/* Text */}

                            <label className="flex">
                                <input type="checkbox" /> <span className="pl-4">Remember me</span>
                                <a href="none"  className="pl-14">Forgot password?</a>
                            </label>

                            {/* hovver */}

                           <a href="https://chromewebstore.google.com/category/themes?hl=ru">
                           <button type="submit" className="bg-green-600 w-80 h-12 rounded-lg  hover:bg-sky-700 ">Log in</button>
                           </a>
                            <a href="https://www.google.com/account/about/">
                            <button type="submit" className=" bg-black w-80 h-12 rounded-lg text-white hover:bg-red-700">Or sign-in with google</button>
                            </a>

                        </form>

                        {/* NoName */}

                        <div className="mt-6">
                            <a className="mt-6" href="#link">Dont have an account? Join free today</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
};

export default Login;