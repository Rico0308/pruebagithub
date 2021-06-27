import { Consulta } from './components/Consulta.jsx';
import { FormUser } from './components/FormUser.jsx';
import { Grid, Card } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Grid container spacing={3}>

          <Grid item xs={12} align="center">
            <h1>GitInnova</h1>
          </Grid>

          <Grid item xs={8} align="center">
            <Card
              style={{ backgroundColor: "#FEFFDE" }}>
              <Consulta />
            </Card>
          </Grid>

          <Grid item xs={4} align="center">
            <Card style={{ backgroundColor: "#FFF5DA" }}>
              <FormUser />
            </Card>
          </Grid>

        </Grid>
      </div>
    </Provider>
  );
}

export default App;
