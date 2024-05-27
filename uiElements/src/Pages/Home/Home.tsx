import { Suspense, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import {
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Buttons from "../../shared/components/Buttons";
import Indicators from "../../shared/components/Indicators";
import ProgressBars from "../../shared/components/ProgressBars";
import Inputs from "../../shared/components/Inputs";
import Checkboxes from "../../shared/components/Checkboxes";
import Radios from "../../shared/components/Radios";
import Spinners from "../../shared/components/Spinners";
import ContainerElements from "../../shared/components/ContainerElements";
import Icons from "../../shared/components/Icons";
import ListViews from "../../shared/components/ListViews";
import Metrics from "../../shared/components/Metrics";
import Tables from "../../shared/components/Tables";
import Dialog from "../../shared/components/Dialog";
import Converter from "../../shared/components/MetricConverters";
import Activity from "../../shared/components/Activity";
import Steps from "../../shared/components/Steps";
import Calendar from "../../shared/components/Calendar";
import TreeComponent from "../../shared/components/TreeComponent";
import EventCalendar from "../../shared/components/EventCalendar";
import LanguageService from "../../shared/components/LanguageService";
import i18n from "../../i18n";
import LocaleContext from "../../LocaleContext";
import Loading from "../../shared/components/Loading";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [locale, setLocale] = useState(i18n.language);
    i18n.on('languageChanged', (lng) => setLocale(i18n.language));
    return (
        <>
            <LocaleContext.Provider value={{ locale, setLocale }}>
                <Suspense fallback={<Loading />}>
                <HashRouter>
                    <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)} />
                    <div className="app-main page">
                        <Routes>
                            <Route path="/buttons" element={<Buttons />} />
                            <Route path="/input-element" element={<Inputs />} />
                            <Route path="/tables" element={<Tables />} />
                            <Route path="/indicators" element={<Indicators />} />
                            <Route path="/progress-bars" element={<ProgressBars />} />
                            <Route path="/checkboxes" element={<Checkboxes />} />
                            <Route path="/radios" element={<Radios />} />
                            <Route path="/spinners" element={<Spinners />} />
                            <Route path="/container-elements" element={<ContainerElements />} />
                            <Route path="/icons" element={<Icons />} />
                            <Route path="/list-views" element={<ListViews />} />
                            <Route path="/metrics" element={<Metrics />} />
                            <Route path="/dialog" element={<Dialog />} />
                            <Route path="/converter" element={<Converter />} />
                            <Route path="/activity" element={<Activity />} />
                            <Route path="/steps" element={<Steps />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/event-calendar" element={<EventCalendar />} />
                            <Route path="/language-service" element={<LanguageService />} />
                            <Route path="/tree-component" element={<TreeComponent />} />
                        </Routes>
                    </div>
                </HashRouter>
                </Suspense>
                </LocaleContext.Provider>
            </>
            )
}

            export default Home;