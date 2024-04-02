import {memo, useEffect, useState} from "react";
// import {isEqual} from "lodash-es";

export const ReactMemoProblem = () => {
    const [, setCounter] = useState(0)

    function handleClick() {
        setCounter(prev => prev + 1)
    }

    return (
        <div>
            <OneDepthProps counter={100} />
            <TwoDepthProps counter={{ counter: 100 }} />
            <button onClick={handleClick}>+</button>
        </div>
    )
}

interface IOneDepthProps {
    counter: number
}

const OneDepthProps = memo((props: IOneDepthProps) => {
    useEffect(() => {
        console.log('OneDepthProps has been rendered!')
    })

    return <h1>{props.counter}</h1>
});

interface ITwoDepthProps {
    counter: {
        counter: number
    }
}

const TwoDepthProps = memo((props: ITwoDepthProps) => {
    useEffect(() => {
        console.log('TwoDepthProps has been rendered!')
    })

    return <h1>{props.counter.counter}</h1>
}
    // , (oldProps, newProps) => isEqual(oldProps, newProps)
);
