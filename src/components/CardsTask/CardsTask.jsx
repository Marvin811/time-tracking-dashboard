import data from '../../data.json'

export function CardsTask({filter}) {
    return (
        <>
            {data.map((task) => {
                return (
                    <div key={task.title}>
                        <img src={process.env.PUBLIC_URL + task.icon} alt={task.title}/>
                        <article>
                            <div>
                                <h2>{task.title}</h2>
                                <img src={process.env.PUBLIC_URL + '/images/icon-ellipsis.svg'} alt="icon-ellipsis" />
                            </div>
                            <h3>{task.timeframes[filter].current}hrs</h3>
                            <span>Last Week - {task.timeframes[filter].previous}hrs</span>
                        </article>
                    </div>
                )
            })}
        </>
    )
}


