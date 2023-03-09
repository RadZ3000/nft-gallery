import Link from "next/link";
import Head from "next/head";

const Navbar = () => {
    return (
        <>
        <Head>
                <title>NFT Gallery</title>
                <meta
                    name="description"
                    content="Cleanly Displaying NFT Collections"
                />
            </Head>
        <nav className="flex flex-row bg-gray-900 text-white py-5 font-mono w-full">
            <div className="w-1/2 text-left pl-5">
                <Link legacyBehavior href="/"><a className="bg-pink-400 text-black text-xl px-2 hover:text-white duration-700"><code>&lt;NFT-Gallery&gt;</code></a></Link>
            </div>

        </nav>
        </>
    );
}

export default Navbar;