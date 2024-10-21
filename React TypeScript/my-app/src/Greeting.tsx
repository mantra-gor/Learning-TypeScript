import React from "react"; 

interface GreetingProps {
    name: string;
    age: number;
}

const Greeting: React.FC<GreetingProps> = ({name, age}) => {
 return(
    <div>
        <h1>Hello, {name}</h1>
        <p>You are {age} old.</p>
    </div>
 )
}

export default Greeting