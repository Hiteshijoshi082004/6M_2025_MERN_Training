import { useState } from "react"

export default Game

function Game(){
    const [ isGameStart, setIsGameStart] =useState(false)
    const [turn, setTurn]=useState(1)
    const [player1, setPlayer1]=useState(0) 
    const [player2, setPlayer2]=useState(0)
    const startGame = ()=>{
        setIsGameStart(true)
    }
    const changeTurn =()=>{
        let score=Math.round(Math.random()*100)
        if(turn==1){
            setPlayer1(score)
            setTurn(2)
        }else if(turn==2){
            setPlayer2(score)
            setIsGameStart(false)
        }
    }
    // const Player1 = ()=>{
    //    setPlayer1(score)
    // }
    // const Player2 =()=>{
    //     setPlayer2(score)
    // }
    const getWin=()=>{
        player1>player2?alert("Winner is player1"):player2>player1?alert("Winner is player 2"):player1==player2?alert("Tie"):
        alert("No-one")
    }
    const restart=()=>{
        setIsGameStart(false)
        setTurn(1)
        setPlayer1(0)
        setPlayer2(0)
    }
    return(
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary d-block mx-auto mt-4" onClick={startGame}>Start Game</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {isGameStart==true? 
                        <>
                        <p className="text-center text-primary mt-3">Game starts now!!</p>
                        <p style={{color:"white"}}>Turn{turn}</p>
                        </>:""
                    }
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-6" style={{color:"white"}}>
                    <h1>Player 1 Score: <span className="badge text-bg-warning">{player1}</span></h1>
                </div>
                <div className="col-md-6" style={{color:"white"}}>
                    <h1>Player 2 Score:<span className="badge text-bg-warning">{player2}</span></h1>
                </div>
            </div>

            <div className="row text-center">
                <div className="col">
                    <button className="btn btn-success d-block mx-auto" disabled={isGameStart==false} onClick={changeTurn}>Hit</button>
                </div>
                {/* <div className="col-md-6">
                    <button className="btn btn-success " disabled={isGameStart==false} onClick={Player2}>Hit</button>
                </div> */}
            </div>
            <div className="row">
                <div className="col-md-6 ">
                    <button className="btn btn-outline-danger d-block mx-auto" onClick={getWin}>Winner</button>
                </div>
                <div className="col-md-6"><button className="btn btn-outline-info d-block mx-auto"  onClick={restart}>Restart</button></div>
            </div>
        </div>
    )
}