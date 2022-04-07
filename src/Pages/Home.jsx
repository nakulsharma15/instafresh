import {Banner , Categories , Footer , Header } from "../Components/index.js";

export default function Home () {

return (<>
    <div className="flex-column stick-bottom">
    <Header />
     <Banner />
     <Categories />
     <Footer />
    </div>
     
</>);
}
