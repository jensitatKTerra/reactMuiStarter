import React, { useEffect, useState } from "react";
import { getUser } from "../libs/data";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import UserForm from "./UserForm";

const UserCard = () => {
  const [user, setUser] = useState<User | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setUser(getUser(id));
    }
  }, []);

  return (
    <>
      <Box>
        <Card variant="outlined">
          {user && (
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                User: {user.id}
              </Typography>
              <Typography variant="h5" component="div">
                {user.firstname} {user.lastname}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Age: {user.age}
              </Typography>
              <Typography variant="body2">
                joined at.
                <br />
                {user.created_at}
              </Typography>
            </CardContent>
          )}
        </Card>
      </Box>
      {user && <UserForm id={user.id} />}
    </>
  );
};

export default UserCard;
