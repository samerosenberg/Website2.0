import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import "./index.css";

var lines: JSX.Element[] = [];
var currentFolder: string = "";
var folders = {
  about: ["Me.txt", "Hobbies.txt", "Sports.txt"],
  education: ["Pitt.txt"],
  experience: ["Epic.py", "TechBlue.txt"],
  portfolio: ["Github.lnk"],
  socials: ["linkedin.lnk"],
};
var shortcuts = {
  "Github.lnk": "https://github.com/serose99",
  "linkedin.lnk": "https://www.linkedin.com/in/serose99/",
};
//Use this as a key on ConsoleInput because it won't re-render on clear typically
var count = 0;

//#region Main App
const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Something went wrong!");
}

const root = ReactDOM.createRoot(rootEl);
addOutput();

//#endregion

//#region Components

function ConsoleLine() {
  return (
    <p>
      samrosenberg:\{currentFolder}
      {">"} <ConsoleInput />
    </p>
  );
}

function ConsoleInput() {
  const handleEnterPressed = (event) => {
    if (event.key === "Enter") {
      readLine(event);
    }
  };

  return (
    <input
      type="text"
      autoFocus
      onKeyDown={handleEnterPressed}
      key={count++}
    ></input>
  );
}

function Console() {
  return (
    <>
      <Helmet>
        <title>Sam's Website</title>
      </Helmet>
      <div id="console">{lines}</div>
    </>
  );
}

function Folders() {
  return (
    <p>
      <strong>
        {Object.keys(folders).map((value) => {
          return value + "\t";
        })}
      </strong>
    </p>
  );
}

function Files() {
  return (
    <p>
      {folders[currentFolder].map((value) => {
        return value + "\t";
      })}
    </p>
  );
}

function TextLine(props) {
  return (
    <>
      <p>{props.text}</p>
    </>
  );
}

function HelpText() {
  return (
    <div>
      <h2>Welcome to my website!</h2>
      <p>
        This is meant to be a fun side project to display more about myself and
        my work
      </p>
      <p>
        It will be an eternal WIP so if something isn't working, feel free to
        add an issue on the github page
      </p>
      <br></br>
      <p>
        This probably isn't like most websites so I'll fill you in on how to
        navigate around here
      </p>
      <br></br>
      <p>Try out this list of commands and see what you can find:</p>
      <p>
        <strong>ls</strong>: lists out "subdirectories" and "files"
      </p>
      <p>
        <strong>
          cd {"<"}directory name{">"}
        </strong>
        : change working directory to new specified directory
      </p>
      <p>
        <strong>
          nano {"<"}filename{">"}
        </strong>
        : open the specified file to view it's content
      </p>
      <p>
        <strong>clear</strong>: clear the terminals output
      </p>
      <br></br>
      <p>
        Type <strong>help</strong> at any point to bring this screen back up if
        you need a refresher
      </p>
      <br></br>
    </div>
  );
}

function AboutMe() {
  return <p>I'm a software developer, duh!</p>;
}

function Hobbies() {
  return <p></p>;
}

function Sports() {
  return <p></p>;
}

function Pitt() {
  return <p></p>;
}

function Epic() {
  return (
    <div>
      <h2>
        <strong>Epic Systems</strong>
      </h2>
      <h3>Software Developer</h3>
      <p>June 2021-Present</p>
      <br></br>
      <p>
        I am currently a software developer at Epic on the Ambulatory Notes team
      </p>
      <p>
        I create software to enhance the efficiency of clinician documentation
        so they can focus on what really matters, the patient
      </p>
      <br></br>
    </div>
  );
}

function TechBlue() {
  return <p></p>;
}

//#endregion

//#region Helper Functions
function addOutput(line?: JSX.Element) {
  if (line) {
    lines.push(line);
  }
  lines.push(<ConsoleLine />);
  root.render(<Console />);
}

function readLine(event) {
  const command = event.target.value.split(" ")[0];
  const args = event.target.value.split(" ")[1];
  switch (command) {
    case "help":
      printHelpText();
      break;
    case "ls":
      printList();
      break;
    case "clear":
      clearConsole();
      break;
    case "cd":
      changeFolder(args);
      break;
    case "nano":
      info(args);
      break;
    case "start":
      start(args);
      break;
    case "":
      return;
    default:
      commandNotUnderstood(command);
      break;
  }
  event.target.disabled = true;
}

function printHelpText() {
  addOutput(<HelpText />);
  root.render(<Console />);
}

function printList() {
  if (currentFolder === "") {
    addOutput(<Folders />);
  } else {
    addOutput(<Files />);
  }
}

function clearConsole() {
  lines = [];
  addOutput();
}

function changeFolder(folder: string) {
  if (Object.keys(folders).includes(folder)) {
    currentFolder = folder;
  } else if (folder === "..") {
    currentFolder = "";
  }
  addOutput();
}

function info(file: string) {
  if (folders[currentFolder].includes(file)) {
    const func = file.split(".")[0];
    addOutput(eval(func + "()"));
  }
}

function start(shortcut: string) {
  if (Object.keys(shortcuts).includes(shortcut)) {
    window.open(shortcuts[shortcut], "_blank", "noreferrer");
  }
  addOutput();
}

function commandNotUnderstood(command: string) {
  const whatCommand = '"' + command + '"' + " not recognized";
  addOutput(<TextLine text={whatCommand} />);
}
