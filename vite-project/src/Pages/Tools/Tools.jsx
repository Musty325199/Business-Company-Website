import React from 'react'
import Header from '../../Components/Header/Header';
import ContactAll from '../../Components/ContactAll/ContactAll';
import HeaderAll from '../../Components/HeaderAll/HeaderAll';
import ToolsItem from '../../Components/ToolsItems/ToolsItems';
import '../Tools/Tools.css';

const Tools = () => {
  return (
<>
<HeaderAll name='TOOLS & TIPS' />
<p className='tools-sub-text text-center'>Use this area to upload files you wish to share with your users. 
    You can manage who has access to your files and what they can do, such as view & download, upload items and more</p>
    <div className="tools">
        <span>Files & Folders</span>
        <ToolsItem/>
    </div>
<Header/>
<ContactAll/>
</>
  )
}

export default Tools