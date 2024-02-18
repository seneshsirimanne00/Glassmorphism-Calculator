import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Calculator() {

  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [numThree, setNumThree] = useState(0);
  const [solveSquare, setSolveSquare] = useState(false);
  const [takeInputForPower, setTakeInputForPower] = useState(false);
  const [takeInputForRoot, setTakeInputForRoot] = useState(false);

  const keyPress = (key: string) => {
    if(takeInputForPower){
        setNumOne(numOne.concat(key));
        setSolveSquare(true);
    }else if(takeInputForRoot){
      let num = parseInt(key);
        setNumThree(num);
        setNumOne(`√(${key}`);
    }else{
      setNumOne(numOne.concat(key));
    }
  };

  const solve = () => {
    try {
      if(solveSquare){
        let str = numOne.split("^").pop();
        let strNum = parseInt(str!);
        setNumOne(`${numThree} ^ ${str}`);
        setNumTwo(Math.pow(numThree,strNum).toString());
        setTakeInputForPower(false);
        setSolveSquare(false);
      }else{
        setNumTwo(eval(numOne));
      }
    }
    catch(err) {
      setNumTwo("Error occurred");
    }
  };

  const clear = () => {
    setNumOne("");
    setNumTwo("");
    setNumThree(0);
    setTakeInputForPower(false);
    setSolveSquare(false);
    setTakeInputForRoot(false);
  };

  const del = () => {
    setNumOne(numOne.slice(0,-1));
    console.log("del",numOne);
  };
  
  const Square = () => {
    if(numOne === ""){
      setNumTwo("invalid format used");
    }else{
      setNumThree(eval(numOne));
      setNumOne(`${eval(numOne)} ^`);
      setTakeInputForPower(true);
    }
  };

  const root = () => {
    if(numOne === ""){
      setNumOne("√(");
      setTakeInputForRoot(true);
    }else{
      setNumOne("invalid format used");
    }
  };



  return (
    <div className='container'>
      <h2 style={{margin: "0", padding: "25px 0"}}>Welcome to Glass calc!</h2>
      <div className='ellipse'></div>
      <div className='box-invisible'>
        <div className='ellipse2'></div>
        <div className='ellipse3'></div>
        <div className='box'>
          <div className='answerBox'>
            <div className='topAnswer'><span><h3>{numOne}</h3></span></div>
            <div className='bottomAnswer'><span><h1>{numTwo}</h1></span></div>
          </div>
            <div className='keyBox topBox' style={{marginTop: '14px'}}>
              <div className='key topKeys symbolKey'><p className='topKeyFont' onClick={()=>{keyPress("(")}}>(</p></div>
              <div className='key topKeys symbolKey'><p className='topKeyFont' onClick={()=>{keyPress(")")}}>)</p></div>
              <div className='key topKeys symbolKey'><p className='topKeyFont' onClick={()=>{Square()}}>xʸ</p></div>
              <div className='key topKeys symbolKey'><p className='topKeyFont' onClick={()=>{del()}}>del</p></div>
              <div className='key topKeys symbolKey'><p className='topKeyFont' onClick={()=>{clear()}}>clear</p></div>
            </div>
            <div className='keyBox'> 
              <div className='key' onClick={()=>{keyPress("7")}}><p>7</p></div>
              <div className='key' onClick={()=>{keyPress("8")}}><p>8</p></div>
              <div className='key' onClick={()=>{keyPress("9")}}><p>9</p></div>
              <div className='key symbolKey' onClick={()=>{keyPress("%")}}><p><b>%</b></p></div>
              <div className='key symbolKey' onClick={()=>{root()}}><p><b>√</b></p></div>
            </div>
            <div className='keyBox'>
              <div className='key' onClick={()=>{keyPress("4")}}><p>4</p></div>
              <div className='key' onClick={()=>{keyPress("5")}}><p>5</p></div>
              <div className='key' onClick={()=>{keyPress("6")}}><p>6</p></div>
              <div className='key symbolKey' onClick={()=>{keyPress("*")}}><p>x</p></div>
              <div className='key symbolKey' onClick={()=>{keyPress("/")}}><p><b>÷</b></p></div>
            </div>
            <div className='keyBox'>
              <div className='key' onClick={()=>{keyPress("1")}}><p>1</p></div>
              <div className='key' onClick={()=>{keyPress("2")}}><p>2</p></div>
              <div className='key' onClick={()=>{keyPress("3")}}><p>3</p></div>
              <div className='key symbolKey' onClick={()=>{keyPress("+")}}><p><b>+</b></p></div>
              <div className='key symbolKey' onClick={()=>{keyPress("+")}}><p><b>-</b></p></div>
            </div>
            <div className='keyBox'>
              <div className='key symbolKey' onClick={()=>{keyPress(".")}}><p>.</p></div>
              <div className='key' onClick={()=>{keyPress("0")}}><p>0</p></div>
              <div className='key symbolKey' onClick={()=>{keyPress("-")}}><p>±</p></div>
              <div className='key enterKey' onClick={()=>{solve()}}><p>ENTER</p></div>
            </div>
        </div>
        <div className='ellipse4Whole'>
          <div className='ellipse4shadow'></div>
          <div className='ellipse4'></div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;