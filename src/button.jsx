function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}


export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
} 