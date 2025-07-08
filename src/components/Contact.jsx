import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='flex flex-row justify-center items-center py-20'>
        <div className='w-10/12 md:w-8/12 grid lg:grid-cols-2 h-auto justify-center gap-10'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-white text-3xl md:text-5xl font-semibold'>Lets get in touch.</h1>
                <p className='text-lg md:text-xl text-gray-300 '>Have a question, new opportunity, or just want to have a quick chat? Feel free to send me a message.</p>
            </div>
            <div className='flex justify-center '>
                <form className='w-full flex flex-col gap-4 text-white text-xs md:text-base' action="https://formspree.io/f/xwpbjqjv" method="POST">
                    <input required type="text" name="name" placeholder="Name" className="bg-black rounded-2xl p-4 outline-none border border-[#292929]" />
                    <input required type="email" name="email" placeholder="Email" className="bg-black rounded-2xl p-4 outline-none border border-[#292929]"/>
                    <textarea required name="message" rows="5" placeholder="💬 Type your message here..." className=" outline-none bg-black rounded-2xl p-4 border border-[#292929]" />
                    <button type="submit" className="cursor-pointer text-xs md:text-base bg-black rounded-2xl px-4 py-3 w-fit opacity-80 text-left font-semibold border border-[#3b3b3b] hover:brightness-150">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact