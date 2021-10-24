import './Team.css';

function Group(props) {
    const { startGroup, setStartGroupObj } = props;
    console.log(startGroup)
    return (
        <div className="team">
            {
                startGroup.map((member, i) => {
                    return <div key={i}
                        className={member.active ? 'team__member--active' : 'team__member--nonactive'}
                        onClick={() => handleToggle(i)}
                    >
                        {member.member} {member.active?"true":'false'}
                    </div>
                })
            }
        </div>
    );

    function handleToggle(i) {
        console.log(i);
        const teamObj = startGroup;
        teamObj[i].active = !startGroup[i].active;
        console.log(teamObj)
        setStartGroupObj(teamObj)
    }
}

export default Group;