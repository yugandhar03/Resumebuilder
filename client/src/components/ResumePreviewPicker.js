import ResumePickers from "./ResumePicker"
import { useNavigate } from "react-router-dom"
import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from './Layout/Navbar';
const ResumePreviewPicker = () => {
    const props = 4
    const Navigation = useNavigate()
    const ResumePreviewList = [];
    Object.keys(ResumePickers).forEach(key => {
        let ResumePicker = ResumePickers[key]

        ResumePreviewList.push(
            <div key={key} style={{ transform: `scale(.7)`, height: 850 * props.size / 100, width: 600 * props.size / 100 }}>
                <ResumePicker onClickArtboard={() => onSetArtboard(key)} />
            </div>
        )
    })
    console.log("====", ResumePreviewList)
    const onSetArtboard = (id) => {
        Navigation('/', { state: { id } })
        console.log("====", ResumePreviewList, id)
    }

    return (
        <>
            <Navbar />
            <Grid templateColumns='repeat(2, 1fr)' gap={4} background=" var(--chakra-colors-gray-50)">
                {ResumePreviewList.map((item) => <GridItem>{item}</GridItem>)}
            </Grid>
        </>

    );
}
export default ResumePreviewPicker;