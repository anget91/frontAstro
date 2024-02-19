import {Eye} from 'lucide-react'
import {EyeOff} from 'lucide-react'
import { useState } from 'react'

export function BtnEye() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="cursor-pointer" onClick={() => {setIsActive(!isActive)}}>
      {!isActive ?
        <Eye/>
        : 
        <EyeOff/>
      }
    </div>
  )
}