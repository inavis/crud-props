import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function EditReceipe({ name, setname, picturelink, setpicturelink, ingredients, setingredients, receipe, setreceipe, videolink, setvideolink, notes, setnotes, preptime, setpreptime, cooktime, setcooktime, soakingtime, setsoakingtime, fermentationtime, setfermentationtime, totaltime, settotaltime, course, setcourse, cuisine, setcuisine, servings, setservings, calories, setcalories, carbohydrates, setcarbohydrates, protein, setprotein, fat, setfat, sodium, setsodium, potassium, setpotassium, fiber, setfiber, sugar, setsugar, calcium, setcalcium, iron, setiron, vitamina, setvitamina, vitaminc, setvitaminc, receipelist, setreceipelist, form2visible, form2style, setform2visible, editindex, seteditindex }) {

  const elekey = receipelist[editindex];
  const buttonstyle = { background: "black", color: "white", border: "2px solid white" };
  const buttonstyle2 = { background: "gray", color: "white", border: "2px solid white" };


  //Form to get data of receipes
  return (
    <div className='form' style={form2style}>
      <div>
        <TextField id="filled-basic" className="textbox" label="Dish Name" variant="filled"
          value={name} onChange={(event) => setname(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Dish picture link" variant="filled"
          value={picturelink}
          onChange={(event) => setpicturelink(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Ingredients" variant="filled"
          value={ingredients}
          onChange={(event) => setingredients(event.target.value)} />
        <div className='form-labels'>Enter all ingredients and quantity separated by comma (,) </div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Instructions / steps to do" variant="filled"
          value={receipe}
          onChange={(event) => setreceipe(event.target.value)} />
        <div className='form-labels'>Enter all steps clearly separated by fullstop (.) </div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Notes / points to remember" variant="filled"
          value={notes}
          onChange={(event) => setnotes(event.target.value)} />
        <div className='form-labels'>Enter all points clearly separated by fullstop (.) </div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Video link" variant="filled"
          value={videolink}
          onChange={(event) => setvideolink(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Prep time" variant="filled"
          value={preptime}
          onChange={(event) => setpreptime(event.target.value)} />
        <div className='form-labels'>Enter time with unit. Example:5 mins</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="cooking time needed" variant="filled"
          value={cooktime}
          onChange={(event) => setcooktime(event.target.value)} />
        <div className='form-labels'>Enter time with unit. Example:15 mins</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="soaking time needed" variant="filled"
          value={soakingtime}
          onChange={(event) => setsoakingtime(event.target.value)} />
        <div className='form-labels'>Enter time with unit. Example:15 mins</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="fermentation time needed" variant="filled"
          value={fermentationtime}
          onChange={(event) => setfermentationtime(event.target.value)} />
        <div className='form-labels'>Enter time with unit. Example:4 hrs</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Total time needed" variant="filled"
          value={totaltime}
          onChange={(event) => settotaltime(event.target.value)} />
        <div className='form-labels'>Enter time with unit. Example:50 mins</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="course type" variant="filled"
          value={course}
          onChange={(event) => setcourse(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Cuisine" variant="filled"
          value={cuisine}
          onChange={(event) => setcuisine(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="servings" variant="filled"
          value={servings}
          onChange={(event) => setservings(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Calories" variant="filled"
          value={calories}
          onChange={(event) => setcalories(event.target.value)} />
        <div className='form-labels'>Enter amount in KCal (Kilo Calories). Example:100</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Carbohydrates" variant="filled"
          value={carbohydrates}
          onChange={(event) => setcarbohydrates(event.target.value)} />
        <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Protein" variant="filled"
          value={protein}
          onChange={(event) => setprotein(event.target.value)} />
        <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Fat" variant="filled"
          value={fat}
          onChange={(event) => setfat(event.target.value)} />
        <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Sodium" variant="filled"
          value={sodium}
          onChange={(event) => setsodium(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Potassium" variant="filled"
          value={potassium}
          onChange={(event) => setpotassium(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Fiber" variant="filled"
          value={fiber}
          onChange={(event) => setfiber(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Sugar" variant="filled"
          value={sugar}
          onChange={(event) => setsugar(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Calcium" variant="filled"
          value={calcium}
          onChange={(event) => setcalcium(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Iron" variant="filled"
          value={iron}
          onChange={(event) => setiron(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Vitamin A" variant="filled"
          value={vitamina}
          onChange={(event) => setvitamina(event.target.value)} />
        <div className='form-labels'>Enter amount in IU (International Unit). Example:1516</div>
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Vitamin C" variant="filled"
          value={vitaminc}
          onChange={(event) => setvitaminc(event.target.value)} />
        <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br>
      <br></br>
      <div>
        <Button style={buttonstyle} variant='contained' onClick={() => {

          //adding edited one as new  receipe object to list
          // console.log(receipelist.filter((ele,index)=>index!==editindex))
          const list = [...receipelist.filter((ele, index) => index !== editindex), {
            name: name.toUpperCase(),
            picturelink: picturelink,
            ingredients: (ingredients.toString().trim().length > 0) ? ingredients.toString().split(",") : ["NA"],
            receipe: (receipe.toString().trim().length > 0) ? receipe.toString().split(".") : ["NA"],
            videolink: videolink,
            notes: (notes.toString().trim().length > 0) ? notes.toString().split(".") : ["NA"],
            preptime: preptime,
            cooktime: cooktime,
            soakingtime: soakingtime,
            fermentationtime: fermentationtime,
            totaltime: totaltime,
            course: course,
            cuisine: cuisine,
            servings: servings,
            calories: calories,
            carbohydrates: carbohydrates,
            protein: protein,
            fat: fat,
            sodium: sodium,
            potassium: potassium,
            fiber: fiber,
            sugar: sugar,
            calcium: calcium,
            iron: iron,
            vitamina: vitamina,
            vitaminc: vitaminc
          }];
          // console.log(list);
          setreceipelist([...list]);
          // console.log(receipelist)
          //after adding setting teh fields to empty values
          setname("");
          setpicturelink("");
          setingredients("");
          setreceipe("");
          setvideolink("");
          setnotes("");
          setpreptime("");
          setcooktime("");
          setsoakingtime("");
          setfermentationtime("");
          settotaltime("");
          setcourse("");
          setcuisine("");
          setservings("");
          setcalories("");
          setcarbohydrates("");
          setprotein("");
          setfat("");
          setsodium("");
          setpotassium("");
          setfiber("");
          setsugar("");
          setcalcium("");
          setiron("");
          setvitamina("");
          setvitaminc("");
        }}>
          UPDATE RECEIPE
        </Button>
      </div>
      <br></br>
      <div>
        <Button variant='contained' style={buttonstyle2} onClick={() => setform2visible(false)}>
          Cancel/close the form
        </Button>
      </div>
    </div>

  );
}
