"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useState } from "react"

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
  customID?: string
}

const Tab = ({ text, selected, setSelected, customID }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={` ${
        selected ? "text-primary" : " hover:text-foreground"
      } relative rounded-md  px-2 py-1 text-sm font-medium text-muted-foreground transition-colors duration-300 focus-within:outline-primary/50`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.div
          className="absolute left-0 top-0 flex size-full h-full w-full items-end justify-center"
          layoutId={customID + "linetab"}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[60%] rounded-t-full bg-primary"></span>
        </motion.div>
      )}
    </button>
  )
}

interface LineTabsProps {
  tabs: string[]
  center?: boolean
  customID?: string
  onTabChange: (tab: string) => void
}

const LineTabs = ({ tabs, center, customID, onTabChange }: LineTabsProps) => {
  const [selected, setSelected] = useState<string>(tabs[0])

  const handleTabChange = (tab: string) => {
    setSelected(tab)
    onTabChange(tab)
  }

  return (
    <div className={cn("mb-8 flex flex-wrap items-center gap-2 border-b border-muted", center && "justify-center")}>
      {tabs.map((tab) => (
        <Tab text={tab} selected={selected === tab} setSelected={handleTabChange} key={tab} customID={customID} />
      ))}
    </div>
  )
}

export default LineTabs

