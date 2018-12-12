import React, {useState, useEffect} from 'react';

const AppVisibilityManagerFunc = (props) => {
    let [isActive, setIsActive] = useState(true);

    function handleVisibilityChange(hidden){
        setIsActive(!hidden);
    }

    function setVisibilityToFalse(){
        setIsActive(false)
    }

    function setVisibilityToTrue(){
        setIsActive(true)
    }

    useEffect(()=>{
        document.addEventListener("visibilitychange", () => handleVisibilityChange(document.hidden));
       
    });

    useEffect(()=>{
        window.addEventListener('blur', setVisibilityToFalse)
        return function cleanUp(){
            window.removeEventListener('blur', setVisibilityToFalse)
        }
    })

    useEffect(()=>{
        window.addEventListener('focus', setVisibilityToTrue);
        return function cleanUp(){
            window.removeEventListener('blur', setVisibilityToTrue)
        }
    })
    return (
        <React.Fragment>
            {props.render(isActive)}
        </React.Fragment>
    );
};

export default AppVisibilityManagerFunc;