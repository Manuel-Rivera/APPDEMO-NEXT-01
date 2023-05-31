import React, { FC, FunctionComponent } from 'react'




//Se pasa el hijo
export const LigthLayout:FC<{children?:React.ReactNode}> = ({children}) => {
  return (
    <div>
        {/* Declarando stylos directamente sobre un componente */}
        {/* Seleccionar colores con paleta Crtl+shift+i */}
        <div style={{
            backgroundColor:'rgba(254, 252, 252, 0.03)',
            padding:'10px',
            borderRadius:'5px'
        }}>
         <h3>Light-layout</h3>
            {children}
        </div>
    </div>
  )
}
