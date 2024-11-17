const ContainerSticky = ({children}) => {

    return (
        <>
        <div className="sticky breakpoints rounded-lg bg-slate-700 border-x-stone-600 text-slate-100 m-auto">
            {children}
        </div>
        </>
    )
};

export default ContainerSticky;