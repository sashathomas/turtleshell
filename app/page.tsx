"use client";
import React from 'react';
const javascriptterminal = require('javascript-terminal-turtle');

import hacker from './themes/hacker'
import hackersmall from './themes/hacker-small'
import hackercat from './themes/hacker-cat'
import hackercatsmall from './themes/hacker-cat-small'
import { useState, useEffect } from 'react';
import Terminal from './input/ReactTerminal.js'
import fs from "./terminal/filesystem.js"
import customCommandMapping from './terminal/customCommands.js'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiHackthebox, SiTryhackme } from "react-icons/si";

// lol sorry dan
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Create initial emulator statestate
let customState = javascriptterminal.EmulatorState.create({
  'fs': fs,
  'commandMapping': customCommandMapping
});

// create new emulator object
const emulator = new javascriptterminal.Emulator();


export default function Home() {
  const [emulatorState, setEmulatorState] = useState(javascriptterminal.EmulatorState.createEmpty());
  const [command, setCommand] = useState(String);
  const [theme, setTheme] = useState(getTheme());
  const [prompt, setPrompt] = useState(getPrompt());
  const [focus, setFocus] = useState(getFocus());

  const runCommand = async (cmd: String) => {
    // "clear" everything from the current state
    customState = emulator.execute(customState, 'clear', []);
    setEmulatorState(customState);
    setCommand('');

    // build the new command 1 char at a time to "type" it
    let builder = "";
    for (let i = 0; i < cmd.length; i++) {
      builder += cmd[i];
      await sleep(20);
      setCommand(builder);
    };

    // rebuild original emulator state
    customState = javascriptterminal.EmulatorState.create({
      'fs': fs,
      'commandMapping': customCommandMapping,
    });

    // set state to include the "typed" command
    customState = emulator.execute(customState, cmd, []);
    setEmulatorState(customState);

    // clear command buffer
    setCommand('');
  }

  // toggle theme based on size and cat
  const toggleCat = () => {
    customState = emulator.execute(customState, 'clear', []);
    setEmulatorState(customState);
    setCommand('');
    switch (theme) {
      case hacker:
        setTheme(hackercat);
        break;
      case hackersmall:
        setTheme(hackercatsmall);
        break;
      case hackercatsmall:
        setTheme(hackersmall);
        break;
      default:
        setTheme(hacker);
    }
  };

  useEffect(() => {
    // cat aboutme.txt on first load
    let ignore = false;
    if (!ignore) {
      runCommand("cat /home/murphy/about.txt")
      ignore = true;
    }

    // get theme and prompt based on window size
    const handleResize = () => {
      setTheme(getTheme());
      setPrompt(getPrompt());
      setFocus(getFocus());
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getTheme() {
    return typeof window !== 'undefined' && window.innerWidth <= 1024 ? hackersmall : hacker;
  }

  function getPrompt() {
    return typeof window !== 'undefined' && window.innerWidth <= 425 ? "murphy:" : "murphy@turtle:";
  }

  function getFocus() {
    return typeof window !== 'undefined' && window.innerWidth <= 1024 ? false : true;

  }

  return (
    <main className="turtle-window font-roboto min-h-screen flex flex-col lg:p-12 p-4">
      <div className='turtle-header'>
        <div className="pb-5">
          <div className="justify-start">
            <button onClick={async () => {
              runCommand("cat /home/murphy/about.txt")
            }} className="flex justify-between">
              <h1 className="m-0 p-0 text-left font-roboto font-bold sm:text-3xl text-3xl text-white">turtleshell.me &gt;&gt; Sasha Thomas</h1>
            </button>
          </div>
        </div>
      </div>
      <div className='turtle-links pb-12'>
        <div className="grid grid-cols-5 max-w-xs">
          <div className=''>
            <a href="https://github.com/sashathomas" target='_blank'>
              <FaGithub color="white" size={"30px"} />
            </a>
          </div>
          <div className=''>
            <a href="https://www.linkedin.com/in/sasha-thomas2718/" target='_blank'>
              <FaLinkedin color="white" size={"30px"} />
            </a>
          </div>
          <div className=''>
            <a href="mailto:thoma987@purdue.edu">
              <FaEnvelope color="white" size={"30px"} />
            </a>
          </div>
          <div className=''>
            <a href="https://app.hackthebox.com/profile/229472" target='_blank'>
              <SiHackthebox color="white" size={"30px"} />
            </a>
          </div>
          <div className=''>
            <a href="https://tryhackme.com/p/MurphyTheTurtle" target='_blank'>
              <SiTryhackme color="white" size={"30px"} />
            </a>
          </div>
        </div>
      </div>
      <div className='turtle-body flex-1'>
        <div className='flex flex-col sm:flex-row'>
          <div className="flex flex-row sm:flex-col justify-between sm:justify-normal sm:pr-24 pb-4">
            <div className='turtle-button sm:pb-10 sm:pr-0'>
              <button onClick={async () => {
                runCommand("cat /home/murphy/experience.txt")
              }} className="text-white text-sm lg:text-base md:text-md font-roboto rounded-full bg-blue-500 hover:bg-blue-700 py-2 px-2.5 sm:w-32">Experience
              </button>
            </div>
            <div className='turtle-button sm:pb-10 sm:pr-0'>
              <button onClick={async () => {
                runCommand("cat /home/murphy/personal.txt")
              }} className="text-white text-sm md:text-base font-roboto rounded-full bg-blue-500 hover:bg-blue-700 py-2 px-2 sm:w-32">Personal
              </button>
            </div>
            <div className='turtle-button sm:pb-10'>
              <button onClick={async () => {
                runCommand("cat /home/murphy/about.txt")
              }} className="text-white text-sm md:text-base font-robot rounded-full bg-blue-500 hover:bg-blue-700 py-2 px-2 sm:w-32">About
              </button>
              <div className="items-center pt-12 hidden md:flex">
                <p className="mr-4 text-3xl text-white">🐱</p>
                <label className="relative cursor-pointer">
                  <input type="checkbox" className="sr-only peer" onClick={toggleCat} />
                  <div
                    className="w-[53px] h-7 flex items-center bg-gray-300 rounded-full text-[9px] peer-checked:text-[#007bff] text-gray-300 font-extrabold after:flex after:items-center after:justify-center peer after:content-[''] peer-checked:after:content-[''] peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#007bff]">
                  </div>
                </label>
              </div>
            </div>

          </div>
          <div className='turtle-terminal col-start-2 col-span-5 w-full'>
            <div className=''>
              <Terminal
                clickToFocus
                emulatorState={customState}
                inputStr={command}
                theme={theme}
                promptSymbol={prompt}
                autoFocus={focus}
              />
            </div>
          </div>
        </div>
      </div >
      <div className='turtle-footer'>
        <footer className="bg-transparent">
          <div className="container mx-auto text-center text-white">
            Made with ❤️ in the PNW
          </div>
        </footer>
      </div>
    </main >
  )
}
