export default function ServerComponent(){
    const items = ['java','php','C++'];
    return (
        <div>
            {items.map((item:string)=>(
                <>
                    <div>
                            <div key={item}>{item}</div>
                    </div>
                </>)
            )}
        </div>
    )
}