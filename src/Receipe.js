import { useState } from 'react';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Tooltip from '@mui/material/Tooltip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Remove';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Receipedisplay } from './Receipedisplay';
import { Ingredients } from './Ingredients';

//Creates cards for eact receipe
export function Receipe({ name, setname, picturelink, setpicturelink, ingredients, setingredients, receipe, setreceipe, videolink, setvideolink, notes, setnotes, preptime, setpreptime, cooktime, setcooktime, soakingtime, setsoakingtime, fermentationtime, setfermentationtime, totaltime, settotaltime, course, setcourse, cuisine, setcuisine, servings, setservings, calories, setcalories, carbohydrates, setcarbohydrates, protein, setprotein, fat, setfat, sodium, setsodium, potassium, setpotassium, fiber, setfiber, sugar, setsugar, calcium, setcalcium, iron, setiron, vitamina, setvitamina, vitaminc, setvitaminc, receipelist, setreceipelist, index, setform2visible, form2visible, editindex, seteditindex }) {
  // console.log(name,picturelink,ingredients,receipe,videolink,notes,preptime,cooktime,soakingtime,
  //   fermentationtime,totaltime,course,cuisine,servings,calories,carbohydrates,protein,fat,sodium,potassium,
  //     fiber,sugar,calcium,iron,vitamina,vitaminc)

  //style so that data appaears only when button is clicke
  const [visible1, setvisible1] = useState(false);
  const [visible2, setvisible2] = useState(false);
  const [visible3, setvisible3] = useState(false);
  const [visible4, setvisible4] = useState(false);

  //down arrow / up arrow changes when button is clicked
  const button1 = (visible1) ? <Button variant='outlined' style={{ color: "#E2DFD2" }} onClick={() => setvisible1(!visible1)}><ArrowDropUpIcon />Time Needed </Button> : <Button variant='outlined' style={{ color: "#E2DFD2" }} onClick={() => setvisible1(!visible1)}><ArrowDropDownIcon />Time Needed</Button>;
  const button2 = (visible2) ? <Button variant='outlined' style={{ color: "#E2DFD2" }} onClick={() => setvisible2(!visible2)}><ArrowDropUpIcon />Nutrition </Button> : <Button variant='outlined' style={{ color: "#E2DFD2" }} onClick={() => setvisible2(!visible2)}><ArrowDropDownIcon />Nutrition</Button>;
  const button3 = (visible3) ? <Button variant='outlined' style={{ color: "#E2DFD2" }} onClick={() => setvisible3(!visible3)}><ArrowDropUpIcon />Ingredients </Button> : <Button variant='outlined' style={{ color: "#E2DFD2" }} onClick={() => setvisible3(!visible3)}><ArrowDropDownIcon />Ingredients</Button>;
  const button4 = (visible4) ? <Button variant='outlined' style={{ color: "#E2DFD2" }} onClick={() => setvisible4(!visible4)}><ArrowDropUpIcon />Receipe </Button> : <Button variant='outlined' style={{ color: "#E2DFD2" }} onClick={() => setvisible4(!visible4)}><ArrowDropDownIcon />Receipe</Button>;

  const style1 = (visible1) ? { display: "block" } : { display: "none" };
  const style2 = (visible2) ? { display: "block" } : { display: "none" };
  const style3 = (visible3) ? { display: "block" } : { display: "none" };
  const style4 = (visible4) ? { display: "block" } : { display: "none" };

  //display calroies only if we have a value for that
  const calorievalue = (calories === "") ? "" : <Tooltip title="calories"><Chip label={calories + " KCal"} icon={<LocalFireDepartmentIcon />} variant="outlined" style={{ color: "#FAF9F6" }} /></Tooltip>;


  //display NA if a value is not there
  const preptimevalue = (preptime === "") ? "NA" : preptime;
  const cooktimevalue = (cooktime === "") ? "NA" : cooktime;
  const soakingtimevalue = (soakingtime === "") ? "NA" : soakingtime;
  const fermentationtimevalue = (fermentationtime === "") ? "NA" : fermentationtime;
  const totaltimevalue = (totaltime === "") ? "NA" : totaltime;

  const carbohydratesvalue = (carbohydrates === "") ? "NA" : carbohydrates + " g";
  const proteinvalue = (protein === "") ? "NA" : protein + " g";
  const fatvalue = (fat === "") ? "NA" : fat + " g";
  const sodiumvalue = (sodium === "") ? "NA" : sodium + " mg";
  const potassiumvalue = (potassium === "") ? "NA" : potassium + " mg";
  const fibervalue = (fiber === "") ? "NA" : fiber + " mg";
  const sugarvalue = (sugar === "") ? "NA" : sugar + " mg";
  const calciumvalue = (calcium === "") ? "NA" : calcium + " mg";
  const ironvalue = (iron === "") ? "NA" : iron + " mg";
  const vitaminavalue = vitamina === "" ? "NA" : vitamina + "IU";
  const vitamincvalue = vitaminc === "" ? "NA" : vitaminc + " mg";


  return (
    <div className='card'>
      {/* delete button to delete the receipes and rceipe is removed based on index value*/}


      <Tooltip title="delete the receipe">
        <Fab aria-label="delete receipe " color="sec" size="medium" className='Fab-button' onClick={() => {
          const deleteindex = index;
          console.log(deleteindex);
          setreceipelist(receipelist.filter((ele, ind) => ind != deleteindex));
        }}>
          {/* <ClearIcon/> */}
          <RemoveIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Edit the receipe">
        <Fab aria-label="edit receipe " color="sec" size="medium" style={{ float: "right" }} className='Fab-button' onClick={() => {
          console.log(index);
          const { name, picturelink, ingredients, receipe, videolink, notes, preptime, cooktime, soakingtime, fermentationtime, totaltime, course, cuisine, servings, calories, carbohydrates, protein, fat, sodium, potassium, fiber, sugar, calcium, iron, vitamina, vitaminc } = receipelist[index];
          setform2visible(true);

          setname(name);
          setpicturelink(picturelink);
          setingredients(ingredients);
          setreceipe(receipe);
          setvideolink(videolink);
          setpreptime(preptime);
          setcooktime(cooktime);
          setsoakingtime(soakingtime);
          setfermentationtime(fermentationtime);
          settotaltime(totaltime);
          setcourse(course);
          setcuisine(cuisine);
          setservings(servings);
          setcalories(calories);
          setcarbohydrates(carbohydrates);
          setprotein(protein);
          setfat(fat);
          setsodium(sodium);
          setpotassium(potassium);
          setfiber(fiber);
          setsugar(sugar);
          setiron(iron);
          setvitamina(vitamina);
          setvitaminc(vitaminc);
          setnotes(notes);
          setcalcium(calcium);
          seteditindex(index);

        }}>
          <ModeEditOutlineOutlinedIcon />
        </Fab>
      </Tooltip>
      <br></br>

      <div>
        <img src={picturelink} />
        {/* <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
    <ImageList sx={{ width: 400, height: 450 }}  cols={3} gap={1}>
 
    <ImageListItem >
      <img
        src={`${picturelink}?w=248&fit=crop&auto=format`}
        srcSet={`${picturelink}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={picturelink}
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem key={picturelink}>
      <img
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nUoxrPMQs32vv7Dj1CytIiFiRaYPsqhqCQ&usqp=CAU?w=248&fit=crop&auto=format`}
        srcSet={`${picturelink}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={picturelink}
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem key={picturelink}>
      <img
        src={`${picturelink}?w=248&fit=crop&auto=format`}
        srcSet={`${picturelink}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={picturelink}
        loading="lazy"
      />
    </ImageListItem>
  
</ImageList>
</Box> */}
      </div>
      <br></br>

      <div className='heading'>
        <h1>{name}</h1>
      </div>
      <div className='flex-row'>
        <div>
          <Tooltip title="course">
            <Chip label={course} variant="outlined" style={{ color: "#E2DFD2" }} />
          </Tooltip>
        </div>
        <div>
          <Tooltip title="cuisine">
            <Chip label={cuisine} variant="outlined" style={{ color: "#E2DFD2" }} />
          </Tooltip>
        </div>
        <div>
          <Tooltip title="servings">
            <Chip label={servings} icon={<LocalDiningIcon />} variant="outlined" style={{ color: "#E2DFD2" }} />
          </Tooltip>
        </div>
        <div>
          {calorievalue}
        </div>
      </div>
      <br></br>
      {/* <div className='flex-row'>
              < div className='badge'><LocalDiningIcon className='p-5'/> <span >{servings}</span></div>
              <div className='badge'><LocalFireDepartmentIcon className='p-5'/> <span >{calories}</span></div>
            </div>
            <br></br> */}
      <div>
        {button1}
      </div>
      <div style={style1} className='snippet'>
        {/* <div className='heading'><h3>Time needed</h3></div>
            <div>Prep time:  {preptime}</div>
            <div>Cook time: {cooktime}</div>
            <div>Soaking time:  {soakingtime}</div>
            <div>Fermentation time: {fermentationtime}</div>
            <div>Total time: {totaltime}</div> */}
        <TableContainer component={Paper} className='table'>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> Time</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Prep time</TableCell>
                <TableCell>{preptimevalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cook time</TableCell>
                <TableCell>{cooktimevalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Soaking time</TableCell>
                <TableCell>{soakingtimevalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fermentation time</TableCell>
                <TableCell>{fermentationtimevalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total time</TableCell>
                <TableCell>{totaltimevalue}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
        {button2}
      </div>
      <div style={style2} className='snippet'>
        {/* <div className='heading'><h3>Nutrients</h3></div>
            <div>Carbohydrates: {carbohydrates}</div>
            <div>Protein: {protein}</div>
            <div>Fat: {fat}</div>
            <div>Sodium: {sodium}</div>
            <div>Potassium: {potassium}</div>
            <div>Fiiber: {fiber}</div>
            <div>Sugar: {sugar}</div>
            <div>Calcium: {calcium}</div>
            <div>Iron: {iron}</div>
            <div>Vitamin A :{vitamina}</div>
            <div>Vitamin C :{vitaminc}</div> */}
        <TableContainer component={Paper} className='table'>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> Nutrient</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Carbohydrates</TableCell>
                <TableCell>{carbohydratesvalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Protein</TableCell>
                <TableCell>{proteinvalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fat</TableCell>
                <TableCell>{fatvalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sodium</TableCell>
                <TableCell>{sodiumvalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Potassium</TableCell>
                <TableCell>{potassiumvalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fiber</TableCell>
                <TableCell>{fibervalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sugar</TableCell>
                <TableCell>{sugarvalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Calcium</TableCell>
                <TableCell>{calciumvalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Iron</TableCell>
                <TableCell>{ironvalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Vitamin A</TableCell>
                <TableCell>{vitaminavalue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Vitamin C</TableCell>
                <TableCell>{vitamincvalue}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        {button3}
      </div>
      <div style={style3} className='snippet'>
        {/* <div className='heading'><h3>Ingredients</h3></div> */}
        <ul>
          {<Ingredients ingredients={ingredients} />}
        </ul>
      </div>
      <div>
        {button4}
      </div>
      <div style={style4} className='snippet'>
        {/* <div className='heading'><h3>Receipe</h3></div> */}
        <ul>
          {/* as we perform split with "." for final sentence there is a final element which is " " */}
          {<Receipedisplay receipe={receipe} />}
        </ul>
      </div>
      <br></br>

    </div>
  );

}
