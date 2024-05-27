import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import classNames from 'classnames';
import { languageListLib } from "../../shared/static/jsons/languageList";
import './Sidebar.scss';
import i18n from "../../i18n";
import LocaleContext from "../../LocaleContext";
import { useTranslation } from "react-i18next";

interface SideBarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: Function;
}
const Sidebar = (props: SideBarProps) => {
    const history = useNavigate();
    const { locale, setLocale } = useContext(LocaleContext);
    const onSelectLanguage = (event: any) => {
        const l = event.target.value;
        if (locale !== l) {
            setLocale(l);
            i18n.changeLanguage(l);
        }
    }
    const { isSidebarOpen, setIsSidebarOpen } = props;
    const [activeComponent, setActiveComponent] = useState<string>(window.location.pathname.split("/")[1]);
    const onClickComponent = (value: string) => {
        setIsSidebarOpen(false);
        setActiveComponent(value);
        history(`/${value}`);
    }
    const { t  } = useTranslation();

    return (
        <>
            <header className="app-header app-header-dark">
                <div className="top-bar">
                    <div className="top-bar-brand">
                        <button className="hamburger hamburger-squeeze mr-2" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                        <div className="header-text">
                        {t("heading")}
                        </div>
                    </div>
                    <div className='top-bar-item top-bar-item-right px-0 d-none d-sm-flex'>

                        <div className="d-flex">
                            <select value={locale} className="custom-select" onChange={(e) => { onSelectLanguage(e) }}>
                                {languageListLib.map((item) => <option key={item.value} value={item.value}> {item.label} </option>)}
                            </select>
                        </div>
                        <div className='dropdown d-flex'>
                            <button className="btn-account d-none d-md-flex">
                                <span className="user-avatar user-avatar-md">
                                    <FontAwesomeIcon icon={faCircleUser} />
                                </span>
                                <span className="account-summary pr-lg-4 d-none d-lg-block">
                                    <span className="account-name">Akshay</span>
                                    <span className="account-description">{t('profile')}</span>
                                </span>
                            </button>

                        </div>

                    </div>
                </div>
            </header>
            <aside className={classNames("app-aside", "app-aside-light", { "app-aside-expand-md": isSidebarOpen === true })}>
                <div className="aside-content">
                    <div className="aside-menu ps--active-y ">
                        <nav className="stacked-menu">
                            <ul className="menu">
                                <li className="menu-item">
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "buttons" || activeComponent === "" })} onClick={() => onClickComponent("buttons")}>
                                        {t('buttons')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "input-element" })} onClick={() => onClickComponent("input-element")}>
                                        {t('inputEle')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "tables" })} onClick={() => onClickComponent("tables")}>
                                        {t('tables')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "indicators" })} onClick={() => onClickComponent("indicators")}>
                                        {t('indicators')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "progress-bars" })} onClick={() => onClickComponent("progress-bars")}>
                                        {t('progressBars')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "icons" })} onClick={() => onClickComponent("icons")}>
                                        {t('icons')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "list-views" })} onClick={() => onClickComponent("list-views")}>
                                        {t('listViews')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "converter" })} onClick={() => onClickComponent("converter")}>
                                        {t('converter')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "calendar" })} onClick={() => onClickComponent("calendar")}>
                                        {t('calender')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "dialog" })} onClick={() => onClickComponent("dialog")}>
                                        {t('dialog')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "checkboxes" })} onClick={() => onClickComponent("checkboxes")}>
                                        {t('checkboxes')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "spinners" })} onClick={() => onClickComponent("spinners")}>
                                        {t('spinners')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "container-elements" })} onClick={() => onClickComponent("container-elements")}>
                                        {t('ContainerElements')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "radios" })} onClick={() => onClickComponent("radios")}>
                                        {t('radioButtons')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "metrics" })} onClick={() => onClickComponent("metrics")}>
                                        {t('metrics')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "activity" })} onClick={() => onClickComponent("activity")}>
                                        {t('activityTimeline')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "steps" })} onClick={() => onClickComponent("steps")}>
                                        {t('steps')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "event-calendar" })} onClick={() => onClickComponent("event-calendar")}>
                                        {t("eventCalender")}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "language-service" })} onClick={() => onClickComponent("language-service")}>
                                        {t('languageService')}
                                    </div>
                                    <div className={classNames("menu-link menu-link-hoverable", { "selected-component": activeComponent === "tree-component" })} onClick={() => onClickComponent("tree-component")}>
                                        {t('treeComponent')}
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;