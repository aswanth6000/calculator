import React,{useState} from 'react'
import './calc.css'

export default function Calc() {
    const [num,setNum]=useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();
    function  inputNum(e){
       let inp=e.target.value;
        if (num === 0)
        {
            setNum(inp)
        }
        else{
            setNum(num+inp)
        }
    }
     function clear() {
        setNum(0);
    }
    function del(){
        setNum(num-num)
    }
    function percentage(){
        setNum(num/100)
    }
    function oph(e){
        let opi=e.target.value;
        setOperator(opi);
        setOldNum(num);
        setNum(0)
        
    }
    function eq(){
        if (operator==='/')
        {
            setNum(parseFloat(oldNum) / parseFloat(num));
        }
        else if(operator==='x')
        {
            setNum(parseFloat(oldNum) * parseFloat(num));
        }
        else if(operator==='-')
        {
            setNum(parseFloat(oldNum) - parseFloat(num));
        }
        else if(operator==='+')
        {
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
    }
    

  return (
    <div>
        <div className='main'>
            <div className="display">
            <h2>{num}</h2>
            </div>
            <div className="num">
                <div className="row">
                    <button style={{backgroundColor:"#9f9e9e"}} onClick={clear} value={'ac'}>AC</button>
                    <button style={{backgroundColor:"#9f9e9e"}} onClick={del} value={'d'}>D</button>
                    <button style={{backgroundColor:"#9f9e9e"}} onClick={percentage} value={'%'}>%</button>
                    <button style={{backgroundColor:"#f79907"}} onClick={oph} value={'/'}>/</button>
                </div>
                <div className="row">
                    <button style={{backgroundColor:"#303031"}}  onClick={inputNum} value={7}>7</button>
                    <button style={{backgroundColor:"#303031"}} onClick={inputNum} value={8}>8</button>
                    <button style={{backgroundColor:"#303031"}} onClick={inputNum} value={9}>9</button>
                    <button style={{backgroundColor:"#f79907"}} onClick={oph} value={'x'}>x</button>
                </div>
                <div className="row">
                    <button style={{backgroundColor:"#303031"}} onClick={inputNum} value={4}>4</button>
                    <button style={{backgroundColor:"#303031"}} onClick={inputNum} value={5}>5</button>
                    <button style={{backgroundColor:"#303031"}} onClick={inputNum} value={6}>6</button>
                    <button style={{backgroundColor:"#f79907"}} onClick={oph} value={'-'}>-</button>
                </div>
                <div className="row">
                    <button style={{backgroundColor:"#303031"}} onClick={inputNum} value={1}>1</button>
                    <button style={{backgroundColor:"#303031"}} onClick={inputNum} value={2}>2</button>
                    <button style={{backgroundColor:"#303031"}} onClick={inputNum} value={3}>3</button>
                    <button style={{backgroundColor:"#f79907"}} onClick={oph} value={'+'}>+</button>
                </div>
                <div className="row">
                    <button style={{width:"130px",backgroundColor:"#303031"}} onClick={inputNum} value={0}>0</button>
                    <button style={{backgroundColor:"#303031"}} onClick={inputNum} value={'.'}>.</button>
                    <button style={{backgroundColor:"#f79907"}} onClick={eq} >=</button>
                </div>

            </div>

        </div>
    </div>
  )
}
