import { useStore } from "@nanostores/react"
import { ruta as rutaActual } from "../nanostore/atoms"


export function NavButton ({children, ruta, url = "", text = "hola mundo"}) {
  const $ruta = useStore(rutaActual)

  const chooseRuta = () => {
  
    rutaActual.set(ruta)
    console.log($ruta);
 
  } 

  return (
    <a href={url} onClick={chooseRuta} className={`flex gap-5 w-[220px] items-center ${$ruta === ruta ? 'bg-vgray text-vgreen' : 'hover:bg-vgray'} mt-8 px-10 py-2 transition-all duration-300 rounded-full cursor-pointer`}>
      {children}
      <h1 className="text-md font-semibold text-[#393939]"> {text} </h1>
    </a>
    
  )
 
}