export default function Page({params,}:{params:{slug:string}}){
    return (
                <div>
                My Post Request : {params.slug}
                </div>
            )
    }