const Box = ({description, icon}) => {

    return (
        <>
        <div className="breakpoints">
            <img href={icon}></img>
            <p>{description}</p>
        </div>
        </>
    )
};

export default Box;