function Card({code,profName}){
    return (
        <div className="card">
            <h2>
                {code}
            </h2>
            <p>{profName}</p>
        </div>
    );

}
export default Card