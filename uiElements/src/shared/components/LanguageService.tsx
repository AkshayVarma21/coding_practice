import { useState, useMemo } from 'react';
import { languageMapping } from "../static/jsons/languageMapping";
import { languageList } from "../static/jsons/languageList";
import { ISelectedLanguage } from '../static/Constants';

const LanguageService = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
    const onSelectLanguage = (event: any) => {
        setSelectedLanguage(event.target.value)
    }
    const setConvertedValue = () => {
        const selectedOption: ISelectedLanguage | undefined = languageMapping.find(item => item.language === selectedLanguage)
        if (selectedOption)
            return selectedOption;
    }
    const contentDetails: ISelectedLanguage | undefined = useMemo(() => setConvertedValue(), [selectedLanguage]);


    return (
        <div className="m-4">
            <h2 className="section-title"> Language Service </h2>
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <h3 className="section-title">{contentDetails && contentDetails.languageHeader} </h3>
                        <select value={selectedLanguage} className="custom-select" onChange={(e) => { onSelectLanguage(e) }}>
                            {languageList.map((item) => <option value={item.value}> {item.label} </option>)}
                        </select>
                        <hr className="my-3" />
                        {contentDetails &&
                            <div className="jumbotron">
                                <h1 className="display-1"> {contentDetails.header}</h1>
                                <p className="lead"> {contentDetails.content}</p>
                                <hr className="my-3" />
                                <p> {contentDetails.subContent} </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LanguageService;