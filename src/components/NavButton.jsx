export function NavButton({ children, ruta, url = "", text = "hola mundo" }) {

  return (
    <a href={url} className={`flex gap-5 w-[220px] items-center ${ruta == url ? 'bg-vgray text-vgreen' : 'hover:bg-vgray'} mb-8 px-10 py-2 transition-all duration-300 rounded-full cursor-pointer`}>
      {children}
      <h1 className="text-md font-semibold text-[#393939]"> {text} </h1>
    </a>
  )
}