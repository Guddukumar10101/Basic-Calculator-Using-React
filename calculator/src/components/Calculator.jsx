import React, { useState } from 'react'
import style from '../css/calculator.module.css'
export default function Calculator() {
    let buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "*", "/","C","Back" ,"="]
    const [display,setdisplay]=useState('')
    let errorshow="";

    const onbuttonclick=(key)=>{
        let input=(key)


            if(key=='C'){
                setdisplay('')
                return 
            }
            else if(key=='='){
                try{
                setdisplay(eval(display))
                }
                catch(e){
            setdisplay("invalid input")
                }
                return
            } 

            else if(key=='Back'){
                let lastdata=display.length
                let back=display.slice(0,lastdata-1)
                setdisplay(back)
                return
            }
                                   


        setdisplay(display+input)
    }
    return (<>
        <div className={style.calculatorContainer}>
            <div className={style.calculator}>
                <h2>calculator</h2>
              {errorshow}
                <input className={style.display} type="text" placeholder={display} readOnly />
                <div className={style.buttonContainer}>
                    {buttons.map((key,val=1) => <div onClick={()=>onbuttonclick(key)
                    }  className={style.button}>{key}</div>)}


                </div>
            </div>

        </div>
    </>
    )
}
