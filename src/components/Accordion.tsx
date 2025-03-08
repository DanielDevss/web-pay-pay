import { AccordionContent, AccordionItem, AccordionTrigger, Accordion as Container } from "@/components/ui/accordion"
import { ElementType, ReactNode } from "react"

/* ---------------------------------- Item ---------------------------------- */

type SectionProps = {
  title: string
  children : ReactNode
  icon?: ElementType
}

const Section = ({ title, children, icon : Icon } : SectionProps) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className="space-x-2">
        <h2 className="flex items-center space-x-2 font-bold">
          {Icon && <Icon />}
          {title}
        </h2>
      </AccordionTrigger>
      <AccordionContent>
        {children}
      </AccordionContent>
    </AccordionItem>
  )
}

/* ---------------------------------- Main ---------------------------------- */

type AccordionProps = {
  children: ReactNode
}

const Accordion = ({ children } : AccordionProps) => {
  return (
    <Container type="multiple">
      {children}
    </Container>
  )
}

// Convinar
Accordion.Section = Section

export default Accordion