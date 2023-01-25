import React from "react";

export function SideBar({weekly, setWeekly, daily, setDaily, monthly, setMonthly, setFilter}) {
    return (
        <div weekly={weekly} daily={daily} monthly={monthly}>
            <div>
                <img src={process.env.PUBLIC_URL + "/images/image-jeremy.png"} alt="jeremy"/>
                <div>
               <span>
                    Report for
               </span>
                    <h1>
                        Jeremy Robson
                    </h1>
                </div>

                <ul>
                    <li>
                        <button onClick={() => {
                            setFilter('daily');
                            if (!daily) setDaily(true);
                            setWeekly(false);
                            setMonthly(false);

                        }}>Daily</button>
                    </li>
                    <li>
                        <button onClick={() => {
                            setFilter('weekly');
                            if (!weekly) setWeekly(true);
                            setDaily(false);
                            setMonthly(false);
                        }}>
                            Weekly</button>
                    </li>
                    <li>
                        <button onClick={() => {
                            setFilter('monthly');
                            if (!monthly) setMonthly(true);
                            setDaily(false);
                            setMonthly(false);
                        }}>Monthly</button>
                    </li>
                </ul>
            </div>

        </div>
    )
}
