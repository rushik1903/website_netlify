import React, { useState } from 'react';
import MainPage from './MainPage';
import SidebarContent from './SidebarContent';
import Mainpage from './MainPage';

const CombinedPage: React.FC = () => {
  const [isClassChanged, setClassChanged] = useState(false);

  const handleClassChange = () => {
    setClassChanged(!isClassChanged);
  };

  return (
    <>
    <div onClick={handleClassChange}
    className="CombinedPage"
    style={{
        position:'fixed',
        width:'50px',
        padding:'8px 10px',
        margin:'5px'
    }}>
        <i className="fa fa-bars" aria-hidden="true" style={{
            fontSize:'35px',
            color:'white'
        }}></i>
    </div>
    <Sidebar isClassChanged={isClassChanged} />
    <Mainpage isClassChanged={isClassChanged} />
    </>
  );
};

interface SidebarProps {
  isClassChanged: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isClassChanged }) => {
  return (
    <>
    <div className={"sidebar " + (isClassChanged ? 'sidebarTransition' : '')}
      >
       <SidebarContent></SidebarContent> 
    </div>
    </>
  );
};

export default CombinedPage;
