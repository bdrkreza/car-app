import { Box, Button, Container, CssBaseline } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

export default function CarUpload() {
  const [formData, setFormData] = useState([]);
  const [bodyName, setBodyName] = React.useState([]);
  const [seatNum, setSeatNum] = React.useState([]);
  const [transmission, setTransmission] = React.useState([]);
  const [grade, setGrade] = React.useState([]);
  const [engine, setEngine] = React.useState([]);
  const [fuel, setFuel] = React.useState([]);
  const [drive, setDrive] = React.useState([]);
  const [year, setYear] = React.useState([]);

  const onSubmit = () => {
    const body = {
      cn: formData.cn,
      maker: formData.maker,
      model: formData.model,
      body: bodyName,
      seat: seatNum.map((i) => Number(i)),
      transmission: transmission,
      grade: grade,
      engine: engine.map((i) => Number(i)),
      fuel: fuel,
      drive: drive,
      year: year.map((i) => Number(i)),
    };
    console.log(body);
    fetch("https://car-app.vercel.app/api/car-upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          component="form"
          sx={{
            textAlign: "center",
            padding: "10px",
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            name="cn"
            label="chassis Number"
            variant="filled"
            onChange={handleOnChange}
          />
          <FormControl variant="filled" className="w-full ml-2">
            <InputLabel
              id="demo-simple-select-filled-label "
              className="text-black"
            >
              Maker
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              className="text-black"
              id="demo-simple-select-filled"
              name="maker"
              onChange={handleOnChange}
            >
              {maker_name.map((maker, index) => (
                <MenuItem key={index} value={maker.maker}>
                  {maker.maker}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="filled-basic"
            label="model"
            name="model"
            onChange={handleOnChange}
            variant="filled"
          />
          <Autocomplete
            multiple
            id="tags-filled"
            options={body_type.map((option) => option?.body)}
            // defaultValue={[top100Films?.title]}
            freeSolo
            onChange={(e, body) => setBodyName(body)}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="body"
                placeholder="Favorites"
              />
            )}
          />
          <Autocomplete
            multiple
            id="tags-filled"
            options={top100Films.map((option) => option?.seat)}
            // defaultValue={[top100Films?.title]}
            freeSolo
            onChange={(e, seat) => setSeatNum(seat)}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Seat"
                placeholder="Favorites"
              />
            )}
          />
          <Autocomplete
            multiple
            id="tags-filled"
            options={top100Films.map((option) => option?.transmission)}
            onChange={(e, transmission) => setTransmission(transmission)}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Transmission"
                placeholder="Favorites"
              />
            )}
          />
          <Autocomplete
            multiple
            id="tags-filled"
            options={top100Films.map((option) => option?.grade)}
            onChange={(e, grade) => setGrade(grade)}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="grade"
                placeholder="Favorites"
              />
            )}
          />
          <Autocomplete
            multiple
            id="tags-filled"
            options={top100Films.map((option) => option?.engine)}
            onChange={(e, engine) => setEngine(engine)}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="engine"
                placeholder="Favorites"
              />
            )}
          />

          <Autocomplete
            multiple
            id="tags-filled"
            options={fuel_type.map((option) => option?.fuel_type)}
            onChange={(e, fuel) => setFuel(fuel)}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="fuel"
                placeholder="Favorites"
              />
            )}
          />
          <Autocomplete
            multiple
            id="tags-filled"
            options={car_drive.map((option) => option?.drive)}
            onChange={(e, drive) => setDrive(drive)}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="drive"
                placeholder="Favorites"
              />
            )}
          />
          <Autocomplete
            multiple
            id="tags-filled"
            options={car_year.map((option) => option?.year)}
            onChange={(e, year) => setYear(year)}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="year"
                placeholder="Favorites"
              />
            )}
          />
        </Box>
        <Box className="text-black   flex justify-end">
          <Button
            variant="contained"
            type="submit"
            className="text-black flex px-12 justify-end"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
}

const car_year = [
  {
    year: 1990,
  },
  {
    year: 1991,
  },
  {
    year: 1992,
  },
  {
    year: 1993,
  },
  {
    year: 1994,
  },
  {
    year: 1995,
  },
  {
    year: 1996,
  },
  {
    year: 1997,
  },
  {
    year: 1998,
  },
  {
    year: 1999,
  },
  {
    year: 2001,
  },
  {
    year: 2002,
  },
  {
    year: 2003,
  },
  {
    year: 2004,
  },
  {
    year: 2005,
  },
  {
    year: 2006,
  },
  {
    year: 2007,
  },
  {
    year: 2008,
  },
  {
    year: 2009,
  },
  {
    year: 2010,
  },
  {
    year: 2011,
  },
  {
    year: 2012,
  },
  {
    year: 2013,
  },
  {
    year: 2015,
  },
  {
    year: 2016,
  },
  {
    year: 2017,
  },
  {
    year: 2018,
  },
  {
    year: 2019,
  },
  {
    year: 2020,
  },
  {
    year: 2021,
  },
  {
    year: 2022,
  },
];
const fuel_type = [
  {
    fuel_type: "Octane",
  },
  {
    fuel_type: "CNG",
  },
  {
    fuel_type: "LPG",
  },
  {
    fuel_type: "Diesel",
  },
  {
    fuel_type: "Hybrid",
  },
  {
    fuel_type: "Plug-In Hybrid",
  },
  {
    fuel_type: "Electric",
  },
  {
    fuel_type: "Petrol",
  },
  {
    fuel_type: "Fuel Cell Ev",
  },
];

const car_drive = [
  {
    drive: "Front Wheel Drive (FWD)",
  },
  {
    drive: "Rear Wheel Drive(RWD)",
  },
  {
    drive: "All Wheel Drive(AWD)",
  },
  {
    drive: "4-Wheel Drive(4WD)",
  },
];

const top100Films = [
  {
    seat: 4,
    transmission: "automatic",
    grade: "Base",
    engine: 800,
  },
  {
    seat: 5,
    transmission: "Manual",
    grade: "Package",
    engine: 2000,
  },
  {
    seat: 6,
    transmission: "Tiptronic",
    grade: "G Package",
    engine: 5000,
  },
  {
    seat: 7,
    transmission: "CVT",
    grade: "X Package",
    engine: 8000,
  },
];

const body_type = [
  {
    body: "Sedan",
  },
  {
    body: "Suv",
  },
  {
    body: "Crossover",
  },
  {
    body: "Hatchback",
  },
  {
    body: "minivan",
  },
  {
    body: "van",
  },
  {
    body: "off Reader",
  },
  {
    body: "Wagon",
  },
  {
    body: "mini MPV",
  },
  {
    body: "Compact",
  },
  {
    body: "Pickup",
  },
  {
    body: "Coupe",
  },
  {
    body: "Convertible",
  },
  {
    body: "Electric",
  },
  {
    body: "Supercar",
  },
  {
    body: "Hypercar",
  },
];
const maker_name = [
  {
    maker: "Toyota",
  },
  {
    maker: "Honda",
  },
  {
    maker: "Mitsubishi",
  },
  {
    maker: "Hyundai",
  },
  {
    maker: "Kia",
  },
  {
    maker: "BMW",
  },
  {
    maker: "Mercedes Benz",
  },
  {
    maker: "Land Rover",
  },
  {
    maker: "Mazda",
  },
  {
    maker: "Haval",
  },
  {
    maker: "lexus",
  },
  {
    maker: "Audi",
  },
  {
    maker: "Volovo",
  },
  {
    maker: "Morris",
  },
  {
    maker: "Subaru",
  },
  {
    maker: "Dfsk",
  },
  {
    maker: "Volkaswagen",
  },
  {
    maker: "Porsche",
  },
  {
    maker: "Jaguar",
  },
  {
    maker: "Suzuki",
  },
  {
    maker: "Infiniti",
  },
  {
    maker: "Alfa Romeo",
  },
  {
    maker: "Bentley",
  },
  {
    maker: "Cadillac",
  },
  {
    maker: "Chevrolet",
  },
  {
    maker: "Daihatsu",
  },
  {
    maker: "Fiat",
  },
  {
    maker: "Ford",
  },
  {
    maker: "GMC",
  },
  {
    maker: "Mahindra",
  },
  {
    maker: "Maruti Suzuki",
  },
  {
    maker: "Peugeot",
  },
  {
    maker: "Renault",
  },
  {
    maker: "Tata",
  },
  {
    maker: "Tesla",
  },
];
