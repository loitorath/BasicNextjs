import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page";
import Header from "../props/page";
export default function Page(){
    return(
        <>
            <div>Header And Props</div>
            <Header title="My Products from Server"/>
            <div>My Product from Server</div>
            <ServerComponent/>
            <div>My Product from Client</div>
            <ClientComponent/>
        </>
    )
    
}