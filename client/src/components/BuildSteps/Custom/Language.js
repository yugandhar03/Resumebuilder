import { Box, Button, FormControl, FormLabel, HStack, Input, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useResume } from '../../../Context';
import { useToast } from '@chakra-ui/react';

const Language = () => {

    const toast = useToast();
    const [skill, setSkill] = useState("");
    const { languages, setLanguage } = useResume();
    console.log("langugu", languages)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!skill || skill === " ") {
            toast({
                title: 'Empty Input',
                status: 'error',
                isClosable: true,
            })
            return;
        }
        const newSkill = {
            id: uuidv4(),
            name: skill,
        }
        setLanguage([...languages, newSkill]);
        setSkill("");
    }

    const deleteLanguage = (id) => {
        setLanguage(languages.filter((elem) => elem.id !== id))
    }

    return (
        <>
            <HStack spacing={4} alignItems={'flex-end'} as='form' onSubmit={(e) => handleSubmit(e)}>
                <FormControl>
                    <FormLabel htmlFor='skill'>Add Languages</FormLabel>
                    <Input onChange={(e) => setSkill(e.target.value)} value={skill} name='skill' id='skill' type='text' variant='filled' placeholder='Languages' />
                </FormControl>
                <Button type='submit' colorScheme={'purple'}>Add</Button>
            </HStack>

            <Box borderWidth={'1px'} rounded={'sm'} my={4} p={2}>
                {languages.length > 0 ? languages.map((language, index) => (
                    <Tag
                        size={'lg'}
                        key={index}
                        borderRadius='full'
                        variant='solid'
                        colorScheme='purple'
                        m={0.5}
                        key={language.id}
                    >
                        <TagLabel>{language.name}</TagLabel>
                        <TagCloseButton onClick={() => deleteLanguage(language.id)} />
                    </Tag>
                )) : (
                    "No languages Added"
                )}
            </Box>
        </>
    )
}

export default Language
