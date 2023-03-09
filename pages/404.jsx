import Link from "next/link";

const NotFound = () => {
    return (
        <div id="not-found">
            <div className="bg-gray-900 text-white font-mono">

                <div className="flex flex-col gap-y-5 items-center justify-center h-screen">
                    <h1 className="lg:text-3xl xl:text-9xl xl:leading-snug font-extrabold bg-gray-900 text-blue-400"><code>Ooops!</code></h1>
                    <h2 className="lg:text-xl xl:text-3xl xl:leading-snug font-bold text-white w-fit">That page doesn't exist.</h2>
                    <h3 className="py-10">Back to the <Link legacyBehavior href="/"><a className="text-pink-400 underline hover:text-gray-300 duration-500">Homepage</a></Link></h3>
                </div>
            </div>
        </div>
    )
}

export default NotFound;