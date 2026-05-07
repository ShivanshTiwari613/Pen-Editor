import React, { useState, useEffect } from 'react';
import EditorNavbar from '../Components/EditorNavbar';
import Editor from '@monaco-editor/react';
import { MdLightMode } from 'react-icons/md';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { api_base_url } from '../Helper';
import { useTheme } from '../Context/ThemeContext';

const EditorPage = () => {
  const [tab, setTab] = useState("html");
  const { isLightMode, toggleTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [htmlCode, setHtmlCode] = useState("<h1>Hello world</h1>");
  const [cssCode, setCssCode] = useState("body { background-color: #f4f4f4; }");
  const [jsCode, setJsCode] = useState("// some comment");

  const { projectId } = useParams(); // useParams matches the route path in App.jsx

  const run = () => {
    const html = htmlCode;
    const css = `<style>${cssCode}</style>`;
    const js = `<script>${jsCode}</script>`;
    const iframe = document.getElementById("iframe");

    if (iframe) {
      iframe.srcdoc = html + css + js;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      run();
    }, 200);
    return () => clearTimeout(timer);
  }, [htmlCode, cssCode, jsCode]);

  useEffect(() => {
    fetch(api_base_url + "/getProject", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
        projId: projectId 
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setHtmlCode(data.project.htmlCode || "");
          setCssCode(data.project.cssCode || "");
          setJsCode(data.project.jsCode || "");
        }
      });
  }, [projectId]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); 

        fetch(api_base_url + "/updateProject", {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: localStorage.getItem("userId"),
            projId: projectId,  
            htmlCode: htmlCode,  
            cssCode: cssCode,    
            jsCode: jsCode       
          })
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              alert("Project saved successfully");
            } else {
              alert("Something went wrong");
            }
          })
          .catch((err) => {
            console.error("Error saving project:", err);
            alert("Failed to save project. Please try again.");
          });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectId, htmlCode, cssCode, jsCode]);

  return (
    <div className={`editorPage min-h-screen ${isLightMode ? "bg-[#f4f4f4] text-black" : "bg-[#141414] text-white"}`}>
      <EditorNavbar />
      <div className='flex'>
        <div className={`left ${isExpanded ? 'w-full' : 'w-1/2'}`}>
          <div className={`tabs flex items-center justify-between gap-2 w-full ${isLightMode ? "bg-[#e0e0e0]" : "bg-[#1A1919]"} h-[50px] px-[40px]`}>
            <div className="tabs flex items-center gap-2">
              <div onClick={() => setTab("html")} className={`tab cursor-pointer p-[6px] ${tab === "html" ? (isLightMode ? "bg-white" : "bg-[#333]") : (isLightMode ? "bg-[#ccc]" : "bg-[#1E1E1E]")} px-[10px] text-[15px]`}>HTML</div>
              <div onClick={() => setTab("css")} className={`tab cursor-pointer p-[6px] ${tab === "css" ? (isLightMode ? "bg-white" : "bg-[#333]") : (isLightMode ? "bg-[#ccc]" : "bg-[#1E1E1E]")} px-[10px] text-[15px]`}>CSS</div>
              <div onClick={() => setTab("js")} className={`tab cursor-pointer p-[6px] ${tab === "js" ? (isLightMode ? "bg-white" : "bg-[#333]") : (isLightMode ? "bg-[#ccc]" : "bg-[#1E1E1E]")} px-[10px] text-[15px]`}>JavaScript</div>
            </div>

            <div className='flex items-center gap-2'>
              <i className='text-[20px] cursor-pointer' onClick={toggleTheme}><MdLightMode /></i>
              <i className='text-[20px] cursor-pointer' onClick={() => { setIsExpanded(!isExpanded); }}><AiOutlineExpandAlt /> </i>
            </div>
          </div>
          {
            tab === "html" ?
              <Editor onChange={(value) => {
                setHtmlCode(value || "");
              }}
                height="82vh" theme={isLightMode ? "vs-light" : "vs-dark"} language="html" value={htmlCode} />
              : tab === "css" ?
                <Editor onChange={(value) => {
                  setCssCode(value || "");
                }}
                  height="82vh" theme={isLightMode ? "vs-light" : "vs-dark"} language="css" value={cssCode} />
                :
                <Editor onChange={(value) => {
                  setJsCode(value || "");
                }}
                  height="82vh" theme={isLightMode ? "vs-light" : "vs-dark"} language="javascript" value={jsCode} />
          }
        </div>
        {!isExpanded && <iframe id='iframe' title="output" sandbox="allow-scripts" className='w-1/2 min-h-[50vh] bg-[#fff] text-black'></iframe>}
      </div>
    </div>
  );
};

export default EditorPage;
