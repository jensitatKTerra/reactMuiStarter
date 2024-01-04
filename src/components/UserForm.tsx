import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { getUser } from "../libs/data";
import Button from "@mui/material/Button";
import { useQuery, useSubscription } from "@apollo/client";
import { CHARGER_SUBSCRIPTION, CHARGER_QUERY } from "../graphql/query";

interface IProps {
  id: string;
}

const UserForm = ({ id }: IProps) => {
  const [user, setUser] = useState<User | null>(null);

  const {data} = useSubscription(CHARGER_SUBSCRIPTION)
  // const {data} = useQuery(CHARGER_QUERY)

  useEffect(() => {
    if (id) {
      setUser(getUser(id));
    }
  }, []);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextField
          id="firstname"
          label="Firstname"
          variant="outlined"
          value={user?.firstname}
        />
      </Box>

      <Box>
        <TextField
          id="firstname"
          label="Lastname"
          variant="outlined"
          value={user?.firstname}
        />
      </Box>

      <Box>
        <TextField id="age" label="Age" variant="outlined" value={user?.age} />
      </Box>
      <Box>
        <Button variant="contained">Save</Button>
      </Box>
      <Box>
        {data?.api_charger && <Box>{JSON.stringify(data)}</Box>}
      </Box>
    </Box>
  );
};

export default UserForm;
