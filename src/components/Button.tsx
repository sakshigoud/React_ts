import react, { use, useState } from "react";
import { useCounter } from "../provider/Context";

interface ButtonProps {
    text: string | number | boolean;
    onClick?: () => void;
}
// type props = {
//     text: string;
// }
//custom interface
// interface Book {
//     title: string;
//     price: number;
// }
//Functional component..
const Button: React.FC<ButtonProps> = (props) => {
    // const [value, setValue] = useState<Book>({ title: "React", price: 100 });
    // const [value, setValue] = useState<string | undefined>();
    // const { text, onClick } = props;
    // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.target.value);
    // };

    // const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log(e);
    // };
    const context = useCounter();
    return (
        <h1 onClick={() => context?.setCount(context?.value + 1)}>{context?.value}</h1>
        // <div>

        //      <h2>Title {value.title} Price {value.price}</h2>
        //     <button onClick={() => setvalue({ title: "Angular", price: 200 })}>{text}</button> */}
        //     <form onSubmit={handleOnSubmit}>
        //         <input onChange={handleOnChange} type="text" placeholder="Type here" value={value} />
        //         <button type="submit">Submit</button>
        //         <h1>{value}</h1>
        //     </form> 
        // </div>
    )
}
export default Button;