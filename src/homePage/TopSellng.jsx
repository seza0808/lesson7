import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function TopSelling() {
  return (
    <div style={{ width: "90%", margin: "5% auto" }}>
      <Typography
        variant="h4"
        align="center"
        fontSize="48px"
        fontWeight="700"
        margin="5% auto"
      >
        Top Selling
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4.3%" }}>
        <Card
          sx={{
            width: 296,
            height: 450,
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <CardMedia
            sx={{
              height: 320,
              background:
                "url(<path-to-image>), lightgray 50% / cover no-repeat",
              borderRadius: 4,
            }}
            image="https://om-saratov.ru/files/pages/113404/1654867891general_pages_09_june_2022_i113404_mujskaya_sportivnaya_odejda_k.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize="20"
              fontWeight={700}
            >
              Lizard
            </Typography>
            <Stack spacing={1} margin="8px 0">
              <Rating name="half-rating" defaultValue={0} precision={1} />
            </Stack>
            <Typography
              variant="body2"
              color="black"
              fontSize="24px"
              fontWeight="700"
            >
              120KGS
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          border: "1px solid black",
          marginLeft: "46%",
          marginTop: "4%",
        }}
      >
        View All
      </Button>
    </div>
  );
}
