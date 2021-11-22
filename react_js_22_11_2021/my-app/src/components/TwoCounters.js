import Counter from "./Counter"

export default function TwoCounters() {
    const startValue1 = -4
    const startValue2 = 15
    return(
        <div>
            <Counter startValue = {startValue1}/>
            <Counter startValue = {startValue2}/>
        </div>
    )
} 