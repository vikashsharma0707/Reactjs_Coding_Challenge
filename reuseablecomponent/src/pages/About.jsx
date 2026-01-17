import Button from "../components/Button";
import Card from "../components/Card";



const About=()=>{
    return(
        <>
        <h1>This is About page</h1>

        <Card   title="Reuseable component" description="react component"/>
         <Card   title="Reuseable component" description="react component"/>

         <Button text="click here"  onClick={()=>{alert("This is about page")}} />
        
        
        </>
    )
}

export default About;