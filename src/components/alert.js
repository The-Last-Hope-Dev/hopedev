const AlertTypes = {
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error"
}

export default function Alert({ alertType, message }) {

    const renderMessage = () => {
        switch (alertType) {
            case AlertTypes.WARNING:
                return <span>Warning: {message}</span>
            case AlertTypes.ERROR:
                return <span>Error! {message}</span>
            default:
                return <span>{message}</span>
        }

    }
    return (<>
        {alertType ?
            (<div className={`alert alert-${alertType} shadow-lg`}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {renderMessage()}
                </div>
            </div>)
            :
            (<div className={`alert shadow-lg`}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{message}</span>
                </div>
            </div>)}
    </>)
}