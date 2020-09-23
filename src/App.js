import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
    </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>


      
    </div>
  );
}

export default App;
