import '../FancyButton.css';

export default function FancyButton({ name, link }: { name: string, link: string }) {
    return (
        <a className="fancy relative inline-block bg-transparent border-2 border-black text-white cursor-pointer float-right font-bold tracking-wide m-0 outline-none p-5 text-center no-underline transition-all duration-300 ease-in-out select-none text-sm" href={link} target="_blank">
            <span className="top-key absolute h-0.5 w-6 left-2.5 -top-0.5 bg-gray-300 transition-all duration-500 ease-out"></span>
            <span className="text block text-lg leading-8 pl-8 text-left transition-all duration-300 ease-in-out no-underline text-black">
                {name}
            </span>
            <span className="bottom-key-1 absolute h-0.5 w-6 -right-7 -bottom-0.5 bg-gray-300 transition-all duration-500 ease-out"></span>
            <span className="bottom-key-2 absolute h-0.5 w-2.5 right-2.5 -bottom-0.5 bg-gray-300 transition-all duration-500 ease-out"></span>
        </a>
    );
}
