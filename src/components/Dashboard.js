import React, { Component } from "react";
import {
  Grid,
  Switch,
  Slider,
  MenuItem,
  Select,
  InputLabel,
  Typography,
  Card,
  CardActions,
  CardContent,
  makeStyles
} from "@material-ui/core";

class Dashboard extends Component {
  state = {
    checkedA: true,
    sliderValue: 1,
    quality: 1,
    messages: []
  };
  handleQuality = (event, value) => {
    const text =
      "Music quality is degraded. Increase quality if your connection allows it.";
    const messages = [...this.state.messages];
    this.setState({
      quality: event.target.value
    });

    if (this.state.quality == 1) {
      if (this.state.messages[messages.length - 1] != text) {
        messages.push(text);
      }
      this.setState({ quality: value, messages: messages });
    } else {
      const idx = messages.indexOf(text);
      messages.splice(idx, 1);
      this.setState({ quality: value, messages: messages });
    }
  };

  handleChange = () => {
    const text =
      "Your application is offline. You won't be able to share or stream music to other devices.";
    const messages = [...this.state.messages];
    if (this.state.checkedA) {
      messages.push(text);
      this.setState({ checkedA: false, messages: messages });
    } else {
      const idx = messages.indexOf(text);
      messages.splice(idx, 1);

      this.setState({ checkedA: true, messages: messages });
    }
  };

  handleVolume = (e, value) => {
    const text =
      "Listening to music at a high volume could cause long-term hearing loss.";
    const messages = [...this.state.messages];
    if (this.state.sliderValue > 80) {
      if (this.state.messages[messages.length - 1] != text) {
        messages.push(text);
      }
      this.setState({ sliderValue: value, messages: messages });
    } else {
      const idx = messages.indexOf(text);
      messages.splice(idx, 1);

      this.setState({ sliderValue: value, messages: messages });
    }
  };
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <Card style={{ width: "30%", margin: "30px" }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {" "}
              <Typography id="discrete-switch" gutterBottom>
                Online Mode
              </Typography>
              <p>Is this application connected to the internet?</p>
              <Switch
                aria-labelledby="discrete-switch"
                valueLabelDisplay="auto"
                checked={this.state.checkedA}
                onChange={this.handleChange}
                value="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />{" "}
            </Grid>
          </Card>
          <Card style={{ width: "30%", margin: "30px" }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Typography id="discrete-slider" gutterBottom>
                Master Volume
              </Typography>
              <p>Overrides all other sound settings in this applicaiton</p>
              <Slider
                // getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
                style={{ width: "300px" }}
                onChange={this.handleVolume}
                value={this.state.sliderValue}
              />
            </Grid>
          </Card>
          <Card style={{ width: "30%", margin: "30px" }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Typography id="discrete-select" gutterBottom>
                Sound Quality
              </Typography>
              <p>
                Manually control the music quality in event of poor connection
              </p>
              <Select
                aria-labelledby="discrete-select"
                valueLabelDisplay="auto"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.quality}
                onChange={this.handleQuality}
              >
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Normal</MenuItem>
                <MenuItem value={3}>Quality</MenuItem>
              </Select>
            </Grid>
          </Card>
        </div>
        <div>
          <h2>System Notifications</h2>
          {this.state.messages.map(message => {
            return <p>{message}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard;
