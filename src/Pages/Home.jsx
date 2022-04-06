import {Banner , Categories , Footer , Header } from "../Components/index.js";

export default function Home () {

return (<>
    <div className="flex-column" style={{minHeight: "100vh"}}>
    <Header />
     <Banner />
     <Categories />
     <Footer />
    </div>
     
</>);
}