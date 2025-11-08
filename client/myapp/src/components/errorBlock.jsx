

const ErrorBlock = ({errorMessage})=>{
    return(
        <>
            <div className="d-flex justify-content-center align-items-center py-5 border text-secondary fw-semibold">
                <h4>
                    {errorMessage}
                </h4>
            </div>
        </>
    )
}

export default ErrorBlock