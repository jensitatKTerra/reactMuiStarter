import { Link, Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function Root() {
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} width="100%">
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid
            item
            sx={{
              width: "15%",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem divider>
                <Link to={`/users`}>
                  <ListItemText primary="Users" />
                </Link>
              </ListItem>
            </List>
            <Paper />
          </Grid>
          <Grid
            item
            sx={{
              width: "75%",
            }}
          >
            <Paper
              sx={{
                padding: "15px",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Outlet />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
