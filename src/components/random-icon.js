import "./random-icon.css";
import {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const RandomIcon = () => {
    const [currentIcon, setCurrentIcon] = useState();
    const [iconQueue, setIconQueue] = useState([]);
    
    const iconList = Object
    .keys(Icons)
    .filter(key => key !== "fas" && key !== "prefix" )
    .map(icon => Icons[icon]);

    const handleClick = () => {
      const random = iconList[Math.floor(Math.random() * iconList.length)];
      setIconQueue([...iconQueue, random]);
    };
    
    useEffect(() => {
        const processQueue = () => {
            if (iconQueue.length > 0) {
              setTimeout(getNextIcon, 3000);           
            }
            
        };
        function getNextIcon() {
            const nextIcon = iconQueue.shift();
            setCurrentIcon(nextIcon);
            setIconQueue([...iconQueue]);
        }

        processQueue();

    }, [iconQueue]);
  
    return (
      <div className='icon-component'>
        <FontAwesomeIcon  icon={currentIcon} size="10x"/>
        <div className="button-component">
          <button className="button-random-icon" onClick={handleClick}>Get Random Icon</button>
        </div>
      </div>
    );
  };
  export default RandomIcon;