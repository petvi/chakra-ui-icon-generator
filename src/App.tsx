import React, { useState } from 'react'
import './App.css'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-monokai";

import { chakra } from '@chakra-ui/react';

function App() {


  const [output, setOutput] = useState("")

  function onChange(newValue: string) {
    console.log("change", newValue);

    const newOutput = `import { createIcon } from "@chakra-ui/icons"
    
export const Icon = createIcon({
    displayName: "Icon",
    viewBox: "0 0 200 200",
    d: "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0",
})`
    setOutput(newOutput)
  }

  return (

    <chakra.div color="#2D3748" overflow="hidden" h="100vh" >
      <chakra.h1>SVG to <chakra.span color="#319795">Chakra Icon</chakra.span> generator</chakra.h1>
      <chakra.div h="100%" d="flex">
        <chakra.div w="100%">
          <chakra.h2>Code</chakra.h2>
          <AceEditor
            fontSize="18px"
            height="100%"
            width="100%"
            mode="jsx"
            showPrintMargin={false}
            onChange={onChange}
            theme="monokai"
            name="2"
            editorProps={{ $blockScrolling: true }}
          />
        </chakra.div>
        <chakra.div w="100%" h="100%">
          <chakra.h2>Output</chakra.h2>
          <AceEditor
            height="100%"
            width="100%"
            mode="jsx"
            showPrintMargin={false}
            theme="monokai"
            name="1"
            fontSize="18px"
            editorProps={{ $blockScrolling: true }}
            value={output}
            readOnly
          />
        </chakra.div>
      </chakra.div>


    </chakra.div>
  )
}

export default App
