export default function Template({
    children,
}:{
    children:React.ReactNode;
}) {
    return(
        <div>
            <div className="bg-orange-400 p-4 
            text-white border border-black shadow-lg">Title of Template</div>
            <div>{children}</div>
        </div>
    );
}