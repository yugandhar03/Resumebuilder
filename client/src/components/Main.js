import {
    Container,
    Stack,
    Heading,
    Button,
} from '@chakra-ui/react';
import Builder from './Builder';
import ResumeSelect from './ResumeSelect';
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../Context';
import { MdOutlineFileDownload } from 'react-icons/md';
import { useNavigate } from "react-router-dom"
import { ProgressBar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Layout/Navbar';

const Main = () => {
    // const percentage = 73
    const { printElem, percentage } = useResume();
    console.log("per", percentage)
    const Navigation = useNavigate()
    const handlePrint = useReactToPrint({
        content: () => printElem.current,
    });
    const handleTemplate = () => {
        Navigation('/temp')
    }
    return (

        <>
            <Navbar />
            <Container
                bg={'gray.50'}
                minW={'full'}
                py={10}
                id='builder'
            >

                <Heading as='h4' size='lg' textAlign={'center'} color={'gray.700'} style={{ fontFamily: 'Poppins' }} fontWeight={'medium'}>Builder Dashboard</Heading>

                <Container maxW={'7xl'} px={8} my={3}>

                    <Stack justifyContent={'center'} pt={4} direction={{ base: 'column', sm: 'row' }}>
                        <ThemeSelect />
                        <Button rightIcon={<MdOutlineFileDownload />} onClick={handlePrint} colorScheme={'purple'} >Download</Button>
                        <Button onClick={handleTemplate} colorScheme={'purple'}>Template</Button>
                    </Stack>
                    <br />
                    {/* <ProgressBar now={percentage} label={`${percentage}% completed`} /> */}
                </Container>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    // mt={16}
                    gap={4}
                    mx={{ base: 2, md: 12 }}
                    my={8}
                    alignItems={'flex-start'}
                    justifyContent={'space-between'}
                >
                    <Builder />
                    <ResumeSelect />

                </Stack>
            </Container>
        </>
    )
}

export default Main
