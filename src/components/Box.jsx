const Box = ({description, icon}) => {

    return (
        <>
        <div className="flex-none w-24 m-5">
            <img src={icon} />
            <p display="none">{description}</p>
        </div>
        </>
    )
};

export default Box;