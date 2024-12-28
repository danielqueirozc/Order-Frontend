import { useState } from "react";
import { authService } from "../services/api"
import { useNavigate } from "react-router-dom"

export function Register() {
    const navigate = useNavigate()
    const [error, setError ] = useState<boolean>(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        
        try {
            console.log('Sending registration data:', {
                name: formData.get('name'),
                username: formData.get('username'),
                password: formData.get('password')
            });

            await authService.register({
                name: formData.get('name') as string,
                username: formData.get('username') as string,
                password: formData.get('password') as string,
            })

            navigate('/login')

            setError(false)

        } catch (error: any) {
            setError(error.response?.data?.error || 'Failed to register');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 flex justify-center flex-col">
                <h1 className="text-gray-50 font-extrabold text-3xl text-center">Login to your account</h1>
                
                <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col space-y-8">
                    { error ?
                    (<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded w-full">
                        <span>
                            erro
                        </span>
                    </div>) : !error ?
                    (<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded w-full">
                        <span>
                            Account created with success!
                        </span>
                     </div>) : <></>
                    }

                    <div className="rounded-lg shadow-sm w-full border border-zinc-500 placeholder-gray-500">
                        <input className="block border-b border-b-zinc-500 bg-transparent w-full px-4 py-2 text-zinc-50" 
                            name="name" 
                            required 
                            type="text"
                            placeholder="Name"
                        />
                        <input className="block border-b border-b-zinc-500 bg-transparent w-full px-4 py-2 text-zinc-50" 
                            name="username" 
                            required 
                            type="text"
                            placeholder="Username"
                        />
                        <input className="w-full bg-transparent px-4 py-2 text-zinc-50" 
                            name="password" 
                            required 
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <button type="submit" className="text-gray-50 py-2 px-4 bg-zinc-800 rounded-lg w-full font-medium hover:bg-zinc-700 transition-all">
                        Create account
                    </button>

                    <a href="#" className="text-zinc-500 hover:text-zinc-400 transition-all">Login</a>
                </form>
            </div>
        </div>
    )
}