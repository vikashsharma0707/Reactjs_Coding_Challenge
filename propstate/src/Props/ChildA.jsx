import ChildB from "./ChildB";



const ChildA=({username})=>{
    return(
        <>
        
        
        <ChildB  username={username}/>
        </>
    )
}

export default ChildA;