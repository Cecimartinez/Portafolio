
export const Footer = () => {
return (
  
<footer className ="  shadow h-20 items-center justify-between bg-red-400 footer-container absolute w-screen px-24 self-end " >
    <div className ="flex tems-center item  ">

        <img src="../img/logo-footer.png" alt="logo" className={`w-10 h-10 `}/>
        {/* <span className ="self-center text-2xl font-semibold white space-nowrap dark:text-white">Footer</span> */}
        <ul className ="flex flex-wrap items-center mb-1 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className ="mr-4 hover:underline md:mr-3 ">About Me</a>
            </li>
            <li>
                <a href="#" className ="mr-4 hover:underline md:mr-3">Proyects</a>
            </li>
            <li>
                <a href="#" className ="mr-4 hover:underline md:mr-3 ">Languages</a>
            </li>
            <li>
                <a href="#" className ="hover:underline">Contact</a>
            </li>
        </ul>
        
    </div>
    {/* <hr className ="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className ="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©  All Rights Reserved.</span> */}
</footer>

)}