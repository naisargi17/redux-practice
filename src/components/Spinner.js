const Spinner = () => {
    return (
        <div className="flex items-center min-h-screen justify-center">
            {/* <div className="relative"> */}
                <div className="w-24 h-24 rounded-full absolute border-4 border-dashed border-amber-300"></div>
                <div className="w-24 h-24 rounded-full animate-spin absolute border-4 border-dashed border-amber-500 border-t-transparent"></div>
            {/* </div> */}
        </div>
    )
}
export default Spinner;