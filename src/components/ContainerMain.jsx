const ContainerMain = ({children}) => {

    return (
        <>
        <div className="breakpoints flex flex-col justify-center items-center min-h-screen bg-slate-900">
            {children}
        </div>
        </>
    )
};

export default ContainerMain;