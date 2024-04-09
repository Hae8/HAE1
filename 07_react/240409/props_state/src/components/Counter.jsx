const Counter = () => {
    let number = 0;
    return (
        <h1>
            {number}
            <button onClick={() => number+1}>클릭</button>
        </h1>
    );
}

export default Counter;