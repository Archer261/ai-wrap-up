import { logo } from '../assets';


const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt="logo" className='w-28 object-contain' />
                <button type='button' onClick={() => { window.open('https://www.google.com') }} className='black_btn'>
                    GitHub
                </button>
            </nav>

            <h1 className='head_text'>Wrap-up Articles
                <br className='max-md:hidden' />
                <span className='blue_gradient'>with AI</span>
            </h1>
            <h2 className='desc'>
                No time to read an entire article? No problem! Simply enter a link to the article you're interested in
                and we'll summarize it for you!
            </h2>
        </header>
    )
}

export default Hero