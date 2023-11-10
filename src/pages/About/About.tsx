const About: React.FC = () => {
    return (
        <div className="mx-2 mt-2 flex flex-col gap-2">
            <h2 className="text-3xl">About Me</h2>

            <div>
                <img src="./images/banners/chelo.jpg" alt="" className="float-left mr-2 w-1/2 max-w-[200px]" />
                <p className="pb-2 tracking-wide">
                    Hello there!, my name is Marcelo.
                    <br />
                    I&apos;m a committed Full Stack Developer specializing in Ruby on Rails, JavaScript, and React. My
                    fascination with computers dates back to my childhood, sparking a lifelong passion for technology.
                    <br />
                    If you share the same enthusiasm, I&apos;d love to connect and have a friendly chat.
                    <br />
                    Outside of the tech realm, I enjoy exploring diverse philosophical perspectives, delving into books,
                    and hold great admiration for the history of the ancient Roman Empire.
                    <br />
                    <span className="underline">Currently open to new professional opportunities.</span>
                    <br />
                    <span className="text-darkBlue">
                        Whatsapp: +59174021543
                        <br />
                        <a href="mailto:marceloalarconbarrenechea@gmail.com">marceloalarconbarrenechea@gmail.com</a>
                        <br />
                        <a href="https://www.linkedin.com/in/marceloalarconb/">Linkedin</a>
                        <br />
                        <a href="https://github.com/chelobotix/">Github</a>
                    </span>
                </p>
            </div>

            <h2 className="text-3xl">About The Project</h2>
            <p>
                Welcome to Huyguens Luxury Watch, a digital homage to the brilliance of Dutch scientist Huyguens, the
                pioneer behind pendulum discoveries. At Huyguens, I blend luxury with technology, crafting an exquisite
                platform that seamlessly marries elegance and innovation.
                <br />
                My focus is on presenting and retailing luxury watches, with a meticulous attention to detail and a
                dedication to providing an unparalleled user experience. Featuring an extensive search page, users
                navigate through dynamically generated lists, allowing them to refine their search based on an array of
                criteria—all dynamically generated from our robust database.
                <br />
                Behind the scenes, the technological backbone is robust. I&apos;ve invested considerable effort in
                building React components validated by TypeScript. My commitment to excellence is evident in the
                creation of scalable, reusable, and secure components. The codebase is a testament to cleanliness,
                incorporating design patterns like custom hooks to ensure efficiency and maintainability.
                <br />
                Join me at Huyguens Luxury Watches a testament to precision in both timepieces and technology.
            </p>

            <h3 className="text-xl">Technologies that I used:</h3>
            <ul>
                <li className="text-darkBlue underline">
                    <a href="https://reactjs.org/">React</a>
                </li>
                <li className="text-darkBlue underline">
                    <a href="https://reactrouter.com/">React Router</a>
                </li>
                <li className="text-darkBlue underline">
                    <a href="https://redux-toolkit.js.org/">Redux Toolkit</a>
                </li>
                <li className="text-darkBlue underline">
                    <a href="https://reactpatterns.com/">React Patterns</a>
                </li>
                <li className="text-darkBlue underline">
                    <a href="https://reactjs.org/docs/hooks-custom.html">Custom Hooks</a>
                </li>
                <li className="text-darkBlue underline">
                    <a href="https://www.typescriptlang.org/">TypeScript</a>
                </li>
                <li className="text-darkBlue underline">
                    <a href="https://styled-components.com/">Styled Components</a>
                </li>
                <li className="text-darkBlue underline">
                    <a href="https://tailwindcss.com/">Tailwind CSS</a>
                </li>
                <li className="text-darkBlue underline">
                    <a href="https://rubyonrails.org/">Ruby on Rails</a>
                </li>
                <li className="text-darkBlue underline">
                    <a href="https://www.postgresql.org/">PostgreSQL</a>
                </li>
            </ul>
        </div>
    )
}
export { About }
