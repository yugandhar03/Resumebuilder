import { TabList, Tabs, Tab, TabPanels, TabPanel, Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useResume } from '../Context'
import About from './BuildSteps/About'
import Education from './BuildSteps/Education'
import Projects from './BuildSteps/Projects'
import Skills from './BuildSteps/Skills'
import Work from './BuildSteps/Work'
import Custom from './BuildSteps/Custom/Custom'
const Builder = () => {
    const { percentage, setPercentage } = useResume()
    const [value, setValue] = useState([])
    console.log("buil", value)
    setPercentage(value)
    return (
        <Box
            bg={'white'}
            w={'full'}
            maxW={'xl'}
            // minH={'100vh'}
            rounded={'md'}
            shadow={'md'}
            overflow={'hidden'}
        >
            <Tabs isFitted variant='enclosed'>
                <TabList>
                    <Tab onClick={() => setValue(10)}><Text fontWeight={'medium'}>About</Text></Tab>
                    <Tab onClick={() => setValue(20)}><Text fontWeight={'medium'}>Education</Text></Tab>
                    <Tab onClick={() => setValue(40)}><Text fontWeight={'medium'}>Skills</Text></Tab>
                    <Tab onClick={() => setValue(60)}><Text fontWeight={'medium'}>Work</Text></Tab>
                    <Tab onClick={() => setValue(80)}><Text fontWeight={'medium'}>Projects</Text></Tab>
                    <Tab onClick={() => setValue(100)}><Text fontWeight={'medium'}>Custom</Text></Tab>
                </TabList>
                <TabPanels>
                    <TabPanel >
                        <About />
                    </TabPanel>
                    <TabPanel >
                        <Education />
                    </TabPanel>
                    <TabPanel>
                        <Skills />
                    </TabPanel>
                    <TabPanel>
                        <Work />
                    </TabPanel>
                    <TabPanel>
                        <Projects />
                    </TabPanel>
                    <TabPanel>
                        <Custom />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Builder
