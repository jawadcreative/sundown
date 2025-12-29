
const Navbar = () => {
    return (
        <nav>
            <div className="nav flex h-12 w-full items-center justify-between">
                <a href="/">
                    <img className="dark:invert-100" src="/img/logo.svg" alt="" />
                </a>
                <ul className="flex items-center gap-x-5">
                    {['Work', 'Studio', 'Contact'].map((item, i) => (
                        <a key={i} href={`/${item.toLowerCase()}`}><li className="font-gilroy font-extrabold">{item}</li></a>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar