import HomeLayout from "../components/Layout/HomeLayout";
import { ExpertiseProvider } from "../utils/Context/expertise-context-provider";
import { PageProvider } from "../utils/Context/page-context-provider";
import About from "./section/About";
import Contact from "./section/Contact";
import Expertise from "./section/Expertise";
import Hero from "./section/Hero";
import Project from "./section/Project";

const Home = () =>{
    return <>
        <PageProvider>
            <ExpertiseProvider>
                <HomeLayout>
                    <Hero />
                    <About/>
                    <Expertise/>
                    <Project/>
                    <Contact/>
                </HomeLayout>
            </ExpertiseProvider>
        </PageProvider>
    </>
}
export default Home;