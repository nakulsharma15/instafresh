import {Banner , Categories , Footer , Header } from "../Components/index.js";

export default function Home () {

return (<>
    <div className="flex-column min-height">
    <Header />
     <Banner />
     <Categories />
     <Footer />
    </div>
     
</>);
}