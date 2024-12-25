export function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 flex justify-center flex-col">
                <h1 className="text-gray-50 font-extrabold text-3xl text-center">Login to your account</h1>
                
                <form className="flex justify-center items-center flex-col space-y-8">
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded w-full">
                        <span>
                            Account created with success!
                        </span>
                    </div>

                    <div className="rounded-lg shadow-sm w-full border border-zinc-500 placeholder-gray-500">
                        <input className="block border-b border-b-zinc-500 bg-transparent w-full px-4 py-2" 
                            name="name" 
                            required 
                            type="text"
                            placeholder="Name"
                        />
                        <input className="block border-b border-b-zinc-500 bg-transparent w-full px-4 py-2" 
                            name="username" 
                            required 
                            type="text"
                            placeholder="Username"
                        />
                        <input className="w-full bg-transparent px-4 py-2" 
                            name="username" 
                            required 
                            type="text"
                            placeholder="Password"
                        />
                    </div>

                    <button className="text-gray-50 py-2 px-4 bg-zinc-800 rounded-lg w-full font-medium hover:bg-zinc-700 transition-all">
                        Create account
                    </button>

                    <a href="#" className="text-zinc-500 hover:text-zinc-400 transition-all">Login</a>
                </form>
            </div>
        </div>
    )
}