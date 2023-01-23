import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from "@mui/material/Rating";
import {AccessTime} from "@mui/icons-material";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    },
                }
            ]
        }
    }
})
const TourCard = () => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img
                        src="https://images.unsplash.com/photo-1635866177311-72dcdc726417?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt=""
                        className={"img"}
                    />
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2" gutterBottom>
                            Immerse into the Falls
                        </Typography>
                        <Box
                            sx={{display: "flex", alignItems: "center"}}
                        >
                            <AccessTime sx={{width: 12.5}}/>
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                5 hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{display: "flex", alignItems: "center"}} marginTop={3}
                        >
                            <Rating
                                name="read-only"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size="small"
                            />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                4.5
                            </Typography>
                            <Typography variant="body3" component="p" marginLeft={1.5}>
                                (655 reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginTop={0}>
                                From C $147
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default TourCard;
