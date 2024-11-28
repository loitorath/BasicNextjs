export default function DashboardLayout({
    children, //declear variable
}:{
    children:React.ReactNode; //set type of variable

}){
    return(
        <section>
            <nav>Next Website</nav>

            {children}
        </section>
    );    
}