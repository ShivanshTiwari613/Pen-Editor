import React, { useState, useEffect, useContext, useRef } from 'react';
import EditorNavbar from '../Components/EditorNavbar';
import Editor from '@monaco-editor/react';
import { MdLightMode } from 'react-icons/md';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { api_base_url } from '../Helper';
import { ThemeContext } from '../Context/ThemeContext';

const EditorPage = () => {
  const [tab, setTab] = useState("html");
  const { isLightMode, toggleTheme } = useContext(ThemeContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [htmlCode, setHtmlCode] = useState("<h1>Hello world</h1>");
  const [cssCode, setCssCode] = useState("body { background-color: #f4f4f4; }");
  const [jsCode, setJsCode] = useState("// some comment");

  const iframeRef = useRef(null);

  const { projectID } = useParams();

  const run = () => {
    const html = htmlCode;
    const css = `<style>${cssCode}</style>`;
    const js = `<script>${jsCode}</script>`;

    if (iframeRef.current) {
      iframeRef.current.srcdoc = html + css + js;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      run();
    }, 200);
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
        projId: projectID // Use projectID here
      })
    })
      .then(res => res.json())
      .then(data => {
        setHtmlCode(data.project.htmlCode);
        setCssCode(data.project.cssCode);
        setJsCode(data.project.jsCode);
      });
  }, [projectID]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Prevent the default save file dialog

        // Ensure that projectID and code states are updated and passed to the fetch request
        fetch(api_base_url + "/updateProject", {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: localStorage.getItem("userId"),
            projId: projectID,  // Make sure projectID is correct
            htmlCode: htmlCode,  // Passing the current HTML code
            cssCode: cssCode,    // Passing the current CSS code
            jsCode: jsCode       // Passing the current JS code
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

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectID, htmlCode, cssCode, jsCode]);

  return (
    <>
      <EditorNavbar />
      <div className='flex'>
        <div className={`left ${isExpanded ? 'w-full' : 'w-1/2'}`}>
          <div className="tabs flex items-center justify-between gap-2 w-full bg-[#1A1919] h-[50px] px-[40px]">
            <div className="tabs flex items-center gap-2">
              <div onClick={() => setTab("html")} className={`tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]`}>HTML</div>
              <div onClick={() => setTab("css")} className={`tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]`}>CSS</div>
              <div onClick={() => setTab("js")} className={`tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]`}>JavaScript</div>
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
                run();
              }}
                height="82vh" theme={isLightMode ? "vs-light" : "vs-dark"} language="html" value={htmlCode} />
              : tab === "css" ?
                <Editor onChange={(value) => {
                  setCssCode(value || "");
                  run();
                }}
                  height="82vh" theme={isLightMode ? "vs-light" : "vs-dark"} language="css" value={cssCode} />
                :
                <Editor onChange={(value) => {
                  setJsCode(value || "");
                  run();
                }}
                  height="82vh" theme={isLightMode ? "vs-light" : "vs-dark"} language="javascript" value={jsCode} />
          }
        </div>
        {!isExpanded && <iframe ref={iframeRef} sandbox="allow-scripts" className='w-1/2 min-h-[50vh] bg-[#fff] text-black'></iframe>}
      </div>
    </>
  );
};

export default EditorPage;