import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Textarea, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useResume } from '../../../Context';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';

const Intenship = () => {

    const { intenship, setIntenship } = useResume();

    const addMore = () => {
        setIntenship([...intenship, intenship]);
    }

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        const updatedIntenship = intenship.map((work) => (
            work.id === id ? Object.assign(work, { id: uuidv4(), [name]: value }) : work
        ));

        setIntenship(updatedIntenship);
    }

    const deleteIntenship = (id) => {
        setIntenship(intenship.filter((elem) => elem.id !== id))
    }

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {
                    intenship.map((inte, index) => (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontWeight={'medium'}>{inte.position ? inte.position : "Intenship"}</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>

                                <Input value={inte.position} onChange={(e) => handleChange(e, inte.id)} name='position' type='text' variant='filled' placeholder='Position' mb={3} />

                                <HStack spacing={3}>
                                    <Input value={inte.company} onChange={(e) => handleChange(e, inte.id)} name='company' type='text' variant='filled' placeholder='Company' />
                                    <Select value={inte.type} onChange={(e) => handleChange(e, inte.id)} name='type' variant='filled' placeholder='Employment Type'>
                                        <option value='Full-time'>Full-time</option>
                                        <option value='Part-time'>Part-time</option>
                                        <option value='Internship'>Internship</option>
                                        <option value='Freelance'>Freelance</option>
                                    </Select>
                                </HStack>

                                <HStack spacing={3} mt={4}>
                                    <FormControl>
                                        <FormLabel htmlFor='startDate'>Start Date</FormLabel>
                                        <Input value={inte.startDate} onChange={(e) => handleChange(e, inte.id)} name='startDate' id='startDate' type='month' variant='filled' placeholder='Start Date' />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor='endDate'>End Date</FormLabel>
                                        <Input value={inte.endDate} onChange={(e) => handleChange(e, inte.id)} name='endDate' id='endDate' type='month' variant='filled' placeholder='Start Date' />
                                    </FormControl>

                                </HStack>

                                <FormControl mt={3}>
                                    <FormLabel htmlFor='description'>Description</FormLabel>
                                    <Textarea value={inte.description} onChange={(e) => handleChange(e, inte.id)} name='description' id='description' variant='filled' placeholder='Description...' />
                                </FormControl>

                                <Button rightIcon={<MdDelete />} onClick={() => deleteIntenship(inte.id)} mt={3} colorScheme={'red'}>Delete</Button>

                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>

            {
                intenship.length < 3 && (
                    <Button colorScheme={'purple'} my={5} onClick={addMore}>{intenship.length === 1 ? "Add More" : "Add Intenship"}</Button>
                )
            }
        </>
    )
}

export default Intenship
