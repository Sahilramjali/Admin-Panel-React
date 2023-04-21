import { Box,useTheme,Typography } from "@mui/material";
import Header from '../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Faq=()=>{
    const theme=useTheme();
    const color=tokens(theme.palette.mode);
    return(
<Box m="20px" height="75vh">
        <Header title="FAQ" subtitle="Frequently Asked Questions"/>
        <Accordion style={{marginBottom:"12px"}} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={color.greenAccent[500]} variant="h5">
                    An important qeuestion
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, hic expedita eum doloribus, similique, soluta quia architecto labore cum voluptatibus maxime repellendus? Minima dignissimos veniam ullam explicabo iusto cum voluptas labore saepe eaque esse fugit, ratione dolorum accusantium unde ipsam veritatis eum eveniet consequuntur fuga odio quibusdam fugiat similique! Officiis.

                </Typography>
            </AccordionDetails>
            
        </Accordion>
        <Accordion style={{marginBottom:"12px"}} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={color.greenAccent[500]} variant="h5">
                    An important qeuestion
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, hic expedita eum doloribus, similique, soluta quia architecto labore cum voluptatibus maxime repellendus? Minima dignissimos veniam ullam explicabo iusto cum voluptas labore saepe eaque esse fugit, ratione dolorum accusantium unde ipsam veritatis eum eveniet consequuntur fuga odio quibusdam fugiat similique! Officiis.

                </Typography>
            </AccordionDetails>
            
        </Accordion>
        <Accordion style={{marginBottom:"12px"}} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={color.greenAccent[500]} variant="h5">
                    An important qeuestion
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, hic expedita eum doloribus, similique, soluta quia architecto labore cum voluptatibus maxime repellendus? Minima dignissimos veniam ullam explicabo iusto cum voluptas labore saepe eaque esse fugit, ratione dolorum accusantium unde ipsam veritatis eum eveniet consequuntur fuga odio quibusdam fugiat similique! Officiis.

                </Typography>
            </AccordionDetails>
            
        </Accordion>
        <Accordion style={{marginBottom:"12px"}} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={color.greenAccent[500]} variant="h5">
                    An important qeuestion
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, hic expedita eum doloribus, similique, soluta quia architecto labore cum voluptatibus maxime repellendus? Minima dignissimos veniam ullam explicabo iusto cum voluptas labore saepe eaque esse fugit, ratione dolorum accusantium unde ipsam veritatis eum eveniet consequuntur fuga odio quibusdam fugiat similique! Officiis.

                </Typography>
            </AccordionDetails>
            
        </Accordion>
        <Accordion style={{marginBottom:"12px"}} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={color.greenAccent[500]} variant="h5">
                    An important qeuestion
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, hic expedita eum doloribus, similique, soluta quia architecto labore cum voluptatibus maxime repellendus? Minima dignissimos veniam ullam explicabo iusto cum voluptas labore saepe eaque esse fugit, ratione dolorum accusantium unde ipsam veritatis eum eveniet consequuntur fuga odio quibusdam fugiat similique! Officiis.

                </Typography>
            </AccordionDetails>
            
        </Accordion>
        <Accordion style={{marginBottom:"12px"}} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={color.greenAccent[500]} variant="h5">
                    An important qeuestion
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, hic expedita eum doloribus, similique, soluta quia architecto labore cum voluptatibus maxime repellendus? Minima dignissimos veniam ullam explicabo iusto cum voluptas labore saepe eaque esse fugit, ratione dolorum accusantium unde ipsam veritatis eum eveniet consequuntur fuga odio quibusdam fugiat similique! Officiis.

                </Typography>
            </AccordionDetails>
            
        </Accordion>
        
</Box>
    );
}
export default Faq;