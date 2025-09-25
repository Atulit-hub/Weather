export function Search({changeCity,update}){
    
    return(
        <div className="parent">
        <h1>Weather</h1>
        <input type="text" placeholder="enter city name" onChange={changeCity}></input>
        <button onClick={update}>search</button>
        </div>
    )
}