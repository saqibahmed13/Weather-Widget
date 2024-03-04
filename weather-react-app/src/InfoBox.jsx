import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const IMG_URL =
    "https://images.unsplash.com/photo-1460411794035-42aac080490a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdHklMjBza3l8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="infobox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={IMG_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>Weather feels like = {info.feelsLiks}&deg;C</p>
              <p>
                Weather can be described as{" "}
                <i>
                  <b>{info.weather}</b>
                </i>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
