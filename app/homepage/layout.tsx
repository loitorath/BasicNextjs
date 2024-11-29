export default function HomeLayout({children,}:{children:React.ReactNode;})
{
    return(
        <section>
            <p className="inline-block">This is Page of Home by using home layout :</p>
            {children}
        </section>
    );
}