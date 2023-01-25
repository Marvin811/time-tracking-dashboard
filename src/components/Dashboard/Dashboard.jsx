import React, {useState} from "react";
import {SideBar} from '../SideBar/SideBar';
import {CardsTask} from '../CardsTask/CardsTask'

export function Dashboard() {

    const [filter, setFilter] = useState('weekly');
    const [weekly, setWeekly] = useState(true);
    const [daily, setDaily] = useState(false);
    const [monthly, setMonthly] = useState(false);

    return (
        <div>
            <main>
                <SideBar setFilter={setFilter} weekly={weekly}
                         setWeekly={setWeekly} daily={daily} setDaily={setDaily}
                         monthly={monthly} setMonthly={setMonthly}

                />
                <CardsTask filter={filter}/>
            </main>
        </div>
    )
}
