// src/App.js

import React, { useState, useEffect } from "react";  
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 50  
  },
  title: {
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 2,
    fontWeight: "bold"
  },
  message: {
    fontStyle: "italic",
    color: "#616161",
    fontSize: 24    
  }
});

function App() {
  const classes = useStyles();  
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h2" component="h1">
          Data Message 
        </Typography>
        {message && (
          <Typography className={classes.message}>
            {message}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default App;