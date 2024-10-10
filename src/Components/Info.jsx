const Info = ({ detail }) => {
    return (
        <div>
            {detail.map((curItem) => {
                return (
                    <div className="bodymeaning">
                        <p>{curItem.meanings[0].definitions[0].definition}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Info;
