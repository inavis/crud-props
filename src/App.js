import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
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
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Fab from '@mui/material/Fab';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';



function App() {

  // We have data for receipes

  const [name,setname]=useState("");
  const [picturelink, setpicturelink] = useState("");
  const [ingredients,setingredients]=useState("");
  const [receipe,setreceipe]=useState("");
  const [videolink,setvideolink]=useState("");
  const [preptime,setpreptime]=useState("");
  const [cooktime,setcooktime]=useState("");
  const [soakingtime,setsoakingtime]=useState("");
  const [totaltime,settotaltime]=useState("");
  const [course,setcourse]=useState("");
  const [cuisine,setcuisine]=useState("");
  const [servings,setservings]=useState("");
  const [calories,setcalories]=useState("");
  const [carbohydrates,setcarbohydrates]=useState("");
  const [protein,setprotein]=useState("");
  const [fat,setfat]=useState("");
  const [sodium,setsodium]=useState("");
  const [potassium,setpotassium]=useState("");
  const [fiber,setfiber]=useState("");
  const [sugar,setsugar]=useState("");
  const [calcium,setcalcium]=useState("");
  const [iron,setiron]=useState("");
  const [vitamina,setvitamina]=useState("");
  const [vitaminc,setvitaminc]=useState("");
  const[notes,setnotes]=useState("");
  const [fermentationtime,setfermentationtime] = useState("")

  const [receipeobj,setreceipeobj]=useState("");

  
const [receipelist,setreceipelist]=useState([
  {
    name:"EGGLESS OATS OMLETTE",
    picturelink:"https://cookilicious.com/wp-content/uploads/2018/08/omelet-12-960x1440.jpg",
    ingredients:["1 cup oats (rolled)", "1/4 cup rava / semolina (coarse) ","1/4 cup besan" ,"1 tsp cumin" ,"1/4 tsp turmeric" ,"1/2 tomato (chopped)" , "1/2 carrot (chopped)", "1/2 onion (finely chopped)" ,"1/2 capsicum (chopped)" ,"1/2 cup curd" ,"1/2 tsp salt" ,"1/2 tsp chilli flakes" ,"1/2 cup water" ,"1/2 tsp eno fruit salt ","oil (for roasting)"],
    receipe:[
    "firstly, in a mixer jar take 1 cup oats and finely powder it." ,
    "make sure to use unflavoured quick or rolled oats.",
    "transfer the oats powder to a large bowl.",
    "add ¼ cup besan, 1 tsp cumin and 1/4th tsp turmeric.",
    "also add ½ tomato, ½ carrot, ½ onion, ½ capsicum, ¼ cup curd and ½ tsp salt.",
    "mix well combining everything well.further, add ½ tsp chilli flakes and ½ cup water.",
    "mix well forming a smooth batter.",
    "rest the batter for 5 minutes, or until the oats and rava are soaked well.",
    "now add water as required and form a smooth batter.",
    "just before making an omelette, add ½ tsp eno fruit salt and mix gently.",
    "mix until the batter turns frothy.",
    "immediately, heat 2 tsp oil in a pan and pour the prepared batter.",
    "swirl a little to spread uniformly.",
    "sprinkle chilli flakes, cover and cook for 2 minutesonce the base is cooked well, flip over and cook both sidesalso, slit in the centre and add oil, for roasting ½ tsp butter, few coriander for extra flavour.",
    "finally, oats omelette recipe tastes great when served hot and with lots of vegetables."
  ],
    videolink:"https://www.youtube.com/embed/QkkTH5U88Nk",
    notes:[
    "firstly, make sure to make the omelette slightly thick, else it will not be fluffy.",
    "also, instead of eno you can use baking soda.additionally, add vegetables of your choice to make it nutritious.",
    "finally, in this oats omelette recipe i have not used egg, hence besan and curd is a good replacement"
    ],
    preptime:"5 mins",
    cooktime:"5 mins",
    soakingtime:"5 mins",
    fermentationtime:"",
    totaltime:"15 mins",
    course:"Breakfast",
    cuisine:"Indian",
    servings:"5 servings",
    calories:"140",
    carbohydrates:"24",
    protein:"6",
    fat:"2",
    sodium:"249",
    potassium:"228",
    fiber:"4",
    sugar:"2",
    calcium:"40",
    iron:"2",
    vitamina:"1561",
    vitaminc:"18"
  },
  {
    name:"MASALA DOSA",
    picturelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQ3pPz1D5EppoJcKYOnLvE4UEHDwi-xc2FQ&usqp=CAU",
    ingredients:[
      "1 1/2 cup red rice",
      "1 1/2 cup raw rice",
      "1 tsp methi / fenugreek",
      "1 cup urad dal",
      "2 tbsp chana dal",
      "2 tbsp urad dal,1 cup poha / avalakki (thin)",
      "2 tbsp oil,1 tsp mustard",
      "1/2 tsp urad dal",
      "1/2 tsp chana dal",
      "pinch hing",
      "few curry leaves",
      "3 chilli (finely chopped)",
      "1 inch ginger (finely chopped)",
      "1 onion (sliced)",
      "1/4 tsp turmeric",
      "4 potato (boiled & mashed)",
      "1/2 tsp salt,3 tsp lemon juice",
      "2 tbsp coriander (finely chopped)" ],
    receipe:[
     " Frist we will prepare dosa batter for that firstly, in a large bowl take 1½ cup red rice, 1½ cup raw rice and 1 tsp methi.",
       "rinse well and soak the rice for 5 hours." ,
       "also soak 1 cup urad dal, 2 tbsp chana dal and 2 tbsp urad dal for 2 hours." ,
       "drain off the water from the dal and transfer it to the grinder.grind for 30 minutes, adding water as required." ,
       "make sure to have soft and fluffy urad dal batter." ,
       "transfer the urad dal batter to a large vessel and keep it aside." ,
       "in the same grinder, add soaked rice, 1 cup poha." ,
       "grind the rice to coarse batter adding water as required." ,
       "transfer the rice batter to the same bowl." , 
       "mix well, making sure everything is well combined." ,
       "cover and ferment the batter for 8 hours or until the batter is well fermented. " ,
       "if you are living in a cold climate then you can keep it in an instant pot (yoghurt mode) or in the oven (just heat the oven until it turns slightly warm and then turn off) to ferment." ,
       "after the batter has fermented well, mix gently adding salt as required."  ,
       "dosa batter is ready to make dosa." ,
       "Secondly we will prepare the aloo , for that firstly, in a large kadai heat 2 tbsp oil." ,
        "add 1 tsp mustard, ½ tsp urad dal, ½ tsp chana dal, pinch hing and few curry leave." ,
        "splutter the tempering on medium flame.also add 3 chilli, 1 inch ginger and saute slightly."  ,
        "further, add 1 onion and saute until the onions shrink without turning brown." ,
        "now add ¼ tsp turmeric and saute slightly." ,
        "further add 4 potato, ½ tsp salt and mix well." ,
        "mash the potato well until it turns smooth.add 3 tsp lemon juice and 2 tbsp coriander."  ,
        "mix well.aloo bhaji is ready to enjoy masala dosa." ,
        "thirdly use the prepared items in the following manner for that firstly, add a ladleful of batter on hot tawa." , 
        "spread slightly thick to make bangalore style dosa." ,
        "spread some oil and butter uniformly." ,
        "also, place 2 tbsp of prepared aloo masala in the centre.roast until the dosa turns golden brown and crisp.",
        "scrape the sides of the dosa and fold half." ,
        "finally, bangalore hotel style masala dosa recipe is ready to serve with coconut chutney." ],
    videolink:"https://www.youtube.com/embed/0JF8RfBSFRk",
    notes:[
      "firstly, adding red rice helps to get dark golden brown colour.",
      "also, to make extra crispy dosa, you can add rice flour to the fermented batter.",
      "additionally, roasting the dosa with oil and butter helps to get a crispy texture.",
      "finally, bangalore hotel style masala dosa recipe tastes great when prepared slightly thick and crispy."
    ],
    preptime:"10 mins",
    cooktime:"50 mins",
    soakingtime:"",
    fermentationtime:"8hrs",
    totaltime:"9 hrs",
    course:"dosa",
    cuisine:"south indian",
    servings:"4 litre",
    calories:"",
    carbohydrates:"",
    protein:"",
    fat:"",
    sodium:"",
    potassium:"",
    fiber:"",
    sugar:"",
    calcium:"",
    iron:"",
    vitamina:"",
    vitaminc:""
  },
  {
    name:"HIGN PROTEIN SALAD",
    picturelink:"https://media1.popsugar-assets.com/files/thumbor/-9pgtx7th1WY_FfIjSv6AIxEyxk/0x744:1440x2184/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/16/916/n/1922729/72b5e5cd5cddcf51b5ccb0.16218706_/i/High-Protein-Salad-Recipes.jpg",
    ingredients:[
      "1/2 cup olive oil",
      "2 tbsp lemon juice",
      "1/2 tsp mixed herbs",
      "1/2 tsp pepper (crushed)",
      "1/2 tsp garlic paste",
       "1/2 tsp salt,2 cup chana / chickpea (boiled)",
       "1/2 onion (sliced)",
       "1/2 cucumber (sliced)",
       "5 cherry tomato (halves)",
       "1/2 capsicum (sliced)",
       "2 chilli (chopped)",
       "handful salad leaves",
       "handful lettuce",
       "handful moong beans sprouts",
       "2 cup moong sprouts",
      " 1/2 onion (sliced)",
       "1/2 cucumber (sliced)",
      " 5 cherry tomato (halves)",
      " 1/2 capsicum (sliced)",
       "2 chilli (chopped)",
       "2 tsp olive oil",
       "1 cup tofu",
       "1/2 tsp pepper (crushed)",
       "1/2 tsp salt" ],
    receipe:[ 
     " to make homemade salad dressing:firstly, in a bowl take ½ cup olive oil, 2 tbsp lemon juice, ½ tsp mixed herbs, ½ tsp pepper, ½ tsp garlic paste and ½ tsp salt." ,
      "mix well making sure everything is well combined.salad dressing is ready. ",
      "keep aside",
       " to roast tofu:firstly, in a pan heat 2 tsp olive oil and add 1 cup tofu/roast on low flame until the tofu turns crisp.",
        "now add ¼ tsp pepper and ¼ tsp salt.mix well making sure the spices are coated well. ",
        "crispy tofu is ready.",
        "to make chana salad for healthy weight loss:firstly, in a bowl take 2 cup chana.",
         "make sure to soak and boil the chickpeas.",
         "add ½ onion, ½ cucumber, 5 cherry tomato, ½ capsicum and 2 chilli.also, add 1 tbsp prepared salad dressing.",
        " mix well making sure everything is well combined.",
         "now add handful salad leaves, handful lettuce and handful moong beans sprouts.",
         "mix well combining everything well.",
         "finally, top with crispy tofu and enjoy chana salad with salad dressing as required.",
         "to make moong sprouts salad for healthy weight loss:firstly, in a bowl take 2 cup moong sprouts.",
         "add ½ onion, ½ cucumber, 5 cherry tomato, ½ capsicum and 2 chilli.",
         "also, add 1 tbsp prepared salad dressing.",
         "mix well making sure everything is well combined.",
         "now add handful salad leaves, handful lettuce and handful moong beans sprouts.",
         "mix well combining everything well.",
         "finally, top with crispy tofu and enjoy moong sprouts salad with salad dressing as required."
    ],
    videolink:"https://www.youtube.com/embed/MonVmZkFI0E",
    notes:[],
    preptime:"10 mins",
    cooktime:"10 mins",
    soakingtime:"",
    fermentationtime:"",
    totaltime:"20 mins",
    course:"Salad",
    cuisine:"International",
    servings:"5 servings",
    calories:"649",
    carbohydrates:"749",
    protein:"22",
    fat:"32",
    sodium:"455",
    potassium:"697",
    fiber:"13",
    sugar:"16",
    calcium:"180",
    iron:"7",
    vitamina:"1648",
    vitaminc:"131"
  },
  {
    name:"PANEER BRIYANI",
    picturelink:"https://img-global.cpcdn.com/recipes/fc94a007b8b618e3/1360x964cq70/paneer-biryani-without-garlic-onion-recipe-main-photo.webp",
    ingredients:[
      "1 cup curd / yogurt (thick)" ,
          "1 tsp ginger garlic paste" ,
         " ¼ tsp turmeric" ,
          "¾ tsp kashmiri red chilli powder" ,
         " 2 tbsp biryani masala" ,
          "2 tbsp coriander (finely chopped)" ,
          "2 tbsp mint / pudina (chopped)" ,
          "1 tsp oil" ,
          "1 tbsp lemon juice ",
          "1 tsp salt" ,
          "15 cubes paneer/ cottage cheese" , 
          "½ onion (petals)" ,
         " ½ capsicum (cubed)" ,
          "6 cup water" ,
          "2 pods cardamom" ,
          "4 cloves" ,
          "1 inch cinnamon" ,
          "2 bay leaf / tej patta" ,
          "1 tsp pepper" ,
          "1 tsp salt" ,
          "2 tsp oil" ,
         " 1 chilli (slit)" ,
          "1 cup basmati rice (soaked 20 minutes)" ,
         " 2 tbsp oil" ,
          "1 tsp ghee / clarified butter" , 
        "  2 bay leaf / tej patta" ,
         " 1 star anise" ,
          "1 pod black cardamom" ,
          "1 mace / javitri" ,
          "2 pods cardamom" ,
          "1 tsp shah jeera" ,
          "½ onion (sliced)" ,
          "1 tomato (finely chopped)" ,
          "2 tbsp coriander (chopped)" ,
         " 2 tbsp mint / pudina (chopped)" ,
          "2 tbsp fried onion" ,
          "pinch biryani masala" ,
          "2 tbsp saffron milk" ,
          "1 tsp ghee / clarified butter" ,
         " ¼ cup water" 
    ],
    receipe:[
      " for marination paneer:firstly, in a large bowl take 1 cup curd, 1 tsp ginger garlic paste, ¼ tsp turmeric, ¾ tsp chilli powder and 2 tbsp biryani masala.",
        "also add 2 tbsp coriander, 2 tbsp mint, 1 tsp oil, 1 tbsp lemon juice and 1 tsp salt." ,
        "whisk and combine well making sure the spices are well combined." ,
        "further add 15 cubes paneer, ½ onion and ½ capsicum." ,
       " mix gently making sure everything is combined well." ,
        "cover and marinate for 30 minutes." ,
        "for biryani rice preparation:firstly, in a large vessel take 6 cup water." ,
        "add spices like 2 pods cardamom, 4 cloves, 1 inch cinnamon, 2 bay leaf, ½ tsp pepper." ,
       " also add 1 tsp salt, 2 tsp oil and 1 chilli." ,
        "boil for 2 minutes or until flavours is in the water." ,
        "add in 1 cup basmati rice and stir well. make sure to soak rice for at least 20 minutes." ,
        "boil for 3 minutes or until rice is half cooked. do not cook fully." ,
        "drain off the rice and keep aside." ,
        "for paneer biryani preparation:firstly, in a large kadai heat 2 tbsp oil and 1 tsp ghee." ,
       " saute 2 bay leaf, 1 star anise, 1 pod black cardamom, 1 mace, 2 pods cardamom and 1 tsp shah jeera." ,
        "add ½ onion and saute until it turns golden brown." ,
        "also add 1 tomato and saute until it turns soft and mushy." ,
        "add in marinated paneer and saute well." ,
       " saute until the oil separates from sides. do not overcook as paneer turns rubbery." ,
        "further spread prepared rice uniformly." ,
        "also top with 2 tbsp coriander, 2 tbsp mint and 2 tbsp fried onion." ,
        "further sprinkle pinch biryani masala, 2 tbsp saffron milk, 1 tsp ghee and ¼ cup water." ,
        "cover with aluminium foil and close the lid. you can also use the dough to seal." ,
        "simmer for 20 minutes or until rice is cooked fully." ,
        "finally, enjoy paneer biryani with raita and slices of onion. "
    ],
    videolink:"https://www.youtube.com/embed/ncqmk7RhIr4",
    notes:[
      "firstly, marinating paneer helps to get soft and moist panner." , 
      "also, add vegetables of your choice to make it nutritious." , 
      "additionally, you can pressure cook for 2 whistles if you are using raw basmati rice." , 
     " finally, paneer biryani recipe tastes great when prepared with fresh homemade paneer."
    ],
    preptime:"30 mins",
    cooktime:"30 mins",
    soakingtime:"",
    fermentationtime:"",
    totaltime:"",
    course:"briyani",
    cuisine:"south indian",
    servings:"3 servings",
    calories:"",
    carbohydrates:"",
    protein:"",
    fat:"",
    sodium:"",
    potassium:"",
    fiber:"",
    sugar:"",
    calcium:"",
    iron:"",
    vitamina:"",
    vitaminc:""
  },
  {
    name:"OREO CHOCOLATE CAKE",
    picturelink:"https://i.pinimg.com/originals/27/d7/08/27d708652ba754c74fd323130f336b13.jpg",
    ingredients:[
      "300 grams oreo biscuit" ,
        "1¼ cup milk" ,
        "½ tsp eno fruit salt" ,
        "200 grams dark chocolate chips" ,
        "1 cup cream (hot)"
    ],
    receipe:[
     "to prepare oreo cake in a steamer:firstly, take 300 grams oreo biscuit in the mixi and blend to a fine powder. you can use any cream biscuit of your choice." ,
    "transfer the powdered biscuit into a large bowl." ,
    "add 1 cup milk and mix using the whisk." ,
    "mix until a smooth lump-free batter is formed adding milk if required." ,
   " just before steaming, add ½ tsp eno fruit salt and mix gently adding 2 tbsp of milk. you can alternatively use ¼ tsp baking soda or ½ tsp baking powder." ,
    "pour the batter into a bowl. make sure to grease the bowl and line with parchment paper." ,
    "place the bowl into steamer and steam for 45 minutes." ,
    "steam until the toothpick inserted comes out clean. make sure to keep an eye, as water in steamer may reduce." ,
    "unmould the cake and cool completely." ,
    "to make the chocolate glaze:firstly, in a glass bowl take 200 grams of dark chocolate chips. you can alternatively use chopped chocolate here." ,
    "pour in 100 grams of hot whipping cream." ,
    "stir and melt the chocolate chips completely. you can microwave or use double boiler method if your chocolate is not melting completely." ,
    "silky shiny chocolate mirror glaze is ready to decorate. make sure the glaze is not too hot." ,
    "pour the glaze immediately over the cake." ,
    "finally, eggless oreo chocolate cake ready to enjoy decorated with strawberry. "
    ],
    videolink:"https://www.youtube.com/embed/OFxgJ85GDRw",
    notes:[
      "firstly, make sure to powder the biscuit finely. else there will be lumps in the batter." ,
      "also, decorating the cake with chocolate glaze is optional. you can immediately serve after steaming." ,
      "additionally, add evaporated milk in place of milk for a richer flavour. ",
     " finally, eggless oreo chocolate recipe can also be baked in the oven at 180-degree celcius for 45 minutes"
          ],
    preptime:"10mins",
    cooktime:"545mins",
    soakingtime:"",
    fermentationtime:"",
    totaltime:"55mins",
    course:"Cake",
    cuisine:"International",
    servings:"1 Cake",
    calories:"3494",
    carbohydrates:"346",
    protein:"48",
    fat:"220",
    sodium:"1816",
    potassium:"2492",
    fiber:"16",
    sugar:"207",
    calcium:"1171",
    iron:"29",
    vitamina:"4019",
    vitaminc:"2"
  },
  {
    name:"",
    picturelink:"",
    ingredients:[],
    receipe:[],
    videolink:"",
    notes:[],
    preptime:"",
    cooktime:"",
    soakingtime:"",
    fermentationtime:"",
    totaltime:"",
    course:"",
    cuisine:"",
    servings:"",
    calories:"",
    carbohydrates:"",
    protein:"",
    fat:"",
    sodium:"",
    potassium:"",
    fiber:"",
    sugar:"",
    calcium:"",
    iron:"",
    vitamina:"",
    vitaminc:""
  },
])

const [formvisible,setformvisible] = useState(false)
const formstyle = (formvisible)?{display:"block"}:{display:"none"}

const [form2visible,setform2visible] = useState(false)
const form2style = (form2visible)?{display:"block"}:{display:"none"}
const [editindex,seteditindex] = useState("")

//for tabs change
const [value, setValue] = React.useState('one');
const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    <div className="App">
      {/* <div className='bar flex-row'>
        <div>
          <h3>Receipe Corner</h3>
        </div>
        <div>
          <Button>Add new receipe</Button>
        </div>
      </div> */}
      <br></br>

      {/* <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
          wrapped
        >
          <div>Eat</div>
          </Tab>
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box> */}

    
        {/* Button to add receipes */}
       <div style={{textAlign:"center"}}>
       <Tooltip title="add receipe">
        <Fab  aria-label="Add receipe "  size="large"  color="secondary" onClick={()=>{
                setformvisible(!formvisible)
              }} >
                  <AddIcon/>
        </Fab>
        </Tooltip>
       </div>
       <br></br>
       

                <AddReceipe 
                      name={name} setname={setname}
                      picturelink={picturelink} setpicturelink={setpicturelink}
                      ingredients={ingredients} setingredients={setingredients}
                      receipe={receipe} setreceipe={setreceipe}
                      videolink={videolink} setvideolink={setvideolink}
                      notes={notes} setnotes={setnotes}
                      preptime={preptime} setpreptime={setpreptime}
                      cooktime={cooktime} setcooktime={setcooktime}
                      soakingtime={soakingtime} setsoakingtime={setsoakingtime}
                      fermentationtime={fermentationtime} setfermentationtime={setfermentationtime}
                      totaltime={totaltime} settotaltime={settotaltime}
                      course={course} setcourse={setcourse}
                      cuisine={cuisine} setcuisine={setcuisine}
                      servings={servings} setservings={setservings}
                      calories={calories} setcalories={setcalories}
                      carbohydrates={carbohydrates} setcarbohydrates={setcarbohydrates}
                      protein={protein} setprotein={setprotein}
                      fat={fat} setfat={setfat}
                      sodium={sodium} setsodium={setsodium}
                      potassium={potassium} setpotassium={setpotassium}
                      fiber={fiber} setfiber={setfiber}
                      sugar={sugar} setsugar={setsugar}
                      calcium={calcium} setcalcium={setcalcium}
                      iron={iron} setiron={setiron}
                      vitamina={vitamina} setvitamina={setvitamina}
                      vitaminc={vitaminc} setvitaminc={setvitaminc}
                      receipelist={receipelist} setreceipelist={setreceipelist}

                      formvisible={formvisible} formstyle={formstyle} setformvisible={setformvisible}
                      />
                  <br></br>
                  <br></br>

                  <EditReceipe 
                      name={name} setname={setname}
                      picturelink={picturelink} setpicturelink={setpicturelink}
                      ingredients={ingredients} setingredients={setingredients}
                      receipe={receipe} setreceipe={setreceipe}
                      videolink={videolink} setvideolink={setvideolink}
                      notes={notes} setnotes={setnotes}
                      preptime={preptime} setpreptime={setpreptime}
                      cooktime={cooktime} setcooktime={setcooktime}
                      soakingtime={soakingtime} setsoakingtime={setsoakingtime}
                      fermentationtime={fermentationtime} setfermentationtime={setfermentationtime}
                      totaltime={totaltime} settotaltime={settotaltime}
                      course={course} setcourse={setcourse}
                      cuisine={cuisine} setcuisine={setcuisine}
                      servings={servings} setservings={setservings}
                      calories={calories} setcalories={setcalories}
                      carbohydrates={carbohydrates} setcarbohydrates={setcarbohydrates}
                      protein={protein} setprotein={setprotein}
                      fat={fat} setfat={setfat}
                      sodium={sodium} setsodium={setsodium}
                      potassium={potassium} setpotassium={setpotassium}
                      fiber={fiber} setfiber={setfiber}
                      sugar={sugar} setsugar={setsugar}
                      calcium={calcium} setcalcium={setcalcium}
                      iron={iron} setiron={setiron}
                      vitamina={vitamina} setvitamina={setvitamina}
                      vitaminc={vitaminc} setvitaminc={setvitaminc}
                      receipelist={receipelist} setreceipelist={setreceipelist}

                      form2visible={form2visible} form2style={form2style} setform2visible={setform2visible}
                      editindex={editindex} seteditindex={seteditindex}
                      />
                  <br></br>
                  <br></br>

      <div className='content'>


        {
          //creating receipe card 
          receipelist.map(({name,picturelink,ingredients,receipe,videolink,notes,preptime,cooktime,soakingtime,
                  fermentationtime,totaltime,course,cuisine,servings,calories,carbohydrates,protein,fat,sodium,potassium,
                    fiber,sugar,calcium,iron,vitamina,vitaminc},index) => (
                      
              

                       <Receipe 
                       name={name} setname={setname}
                       picturelink={picturelink} setpicturelink={setpicturelink}
                       ingredients={ingredients} setingredients={setingredients}
                       receipe={receipe} setreceipe={setreceipe}
                       videolink={videolink} setvideolink={setvideolink}
                       notes={notes} setnotes={setnotes}
                       preptime={preptime} setpreptime={setpreptime}
                       cooktime={cooktime} setcooktime={setcooktime}
                       soakingtime={soakingtime} setsoakingtime={setsoakingtime}
                       fermentationtime={fermentationtime} setfermentationtime={setfermentationtime}
                       totaltime={totaltime} settotaltime={settotaltime}
                       course={course} setcourse={setcourse}
                       cuisine={cuisine} setcuisine={setcuisine}
                       servings={servings} setservings={setservings}
                       calories={calories} setcalories={setcalories}
                       carbohydrates={carbohydrates} setcarbohydrates={setcarbohydrates}
                       protein={protein} setprotein={setprotein}
                       fat={fat} setfat={setfat}
                       sodium={sodium} setsodium={setsodium}
                       potassium={potassium} setpotassium={setpotassium}
                       fiber={fiber} setfiber={setfiber}
                       sugar={sugar} setsugar={setsugar}
                       calcium={calcium} setcalcium={setcalcium}
                       iron={iron} setiron={setiron}
                       vitamina={vitamina} setvitamina={setvitamina}
                       vitaminc={vitaminc} setvitaminc={setvitaminc}

                      receipelist={receipelist}
                      setreceipelist={setreceipelist}

                      index={index}

                      setform2visible={setform2visible} form2visible={form2visible}

                      editindex={editindex} seteditindex={seteditindex}
                      />

                    ))
        }
      </div>
   
    </div>
  );
}

export default App;

function AddReceipe({name,setname,picturelink,setpicturelink,ingredients,setingredients,receipe,setreceipe,
  videolink,setvideolink,notes,setnotes,preptime,setpreptime,cooktime,setcooktime,soakingtime,setsoakingtime,
  fermentationtime,setfermentationtime,totaltime,settotaltime,course,setcourse
  ,cuisine,setcuisine,servings,setservings,calories,setcalories,carbohydrates,setcarbohydrates,protein,setprotein,
  fat,setfat,sodium,setsodium,potassium,setpotassium, fiber,setfiber,sugar,setsugar,calcium,setcalcium,
  iron,setiron,vitamina,setvitamina,vitaminc,setvitaminc,receipelist,setreceipelist,formvisible,formstyle,setformvisible}){

    //Form to get data of receipes
  return(
    <div className='form' style={formstyle}>
      <div>
        <TextField id="filled-basic"  className="textbox" label="Dish Name" variant="filled" required
                onChange={(event)=>setname(event.target.value)} />
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Dish picture link" variant="filled" 
                  onChange={(event)=>setpicturelink(event.target.value)} />
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Ingredients" variant="filled" 
                  onChange={(event)=>setingredients(event.target.value)} />
                  <div className='form-labels'>Enter all ingredients and quantity separated by comma (,) </div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Instructions / steps to do" variant="filled" 
                  onChange={(event)=>setreceipe(event.target.value)} />
                  <div className='form-labels'>Enter all steps clearly separated by fullstop (.) </div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Notes / points to remember" variant="filled" 
                  onChange={(event)=>setnotes(event.target.value)} />
                  <div className='form-labels'>Enter all points clearly separated by fullstop (.) </div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Video link" variant="filled" 
                  onChange={(event)=>setvideolink(event.target.value)} />
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Prep time" variant="filled" 
                  onChange={(event)=>setpreptime(event.target.value)} />
                  <div className='form-labels'>Enter time with unit. Example:5 mins</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="cooking time needed" variant="filled" 
                  onChange={(event)=>setcooktime(event.target.value)} />
                  <div className='form-labels'>Enter time with unit. Example:15 mins</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="soaking time needed" variant="filled" 
                  onChange={(event)=>setsoakingtime(event.target.value)} />
                  <div className='form-labels'>Enter time with unit. Example:15 mins</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="fermentation time needed" variant="filled" 
                  onChange={(event)=>setfermentationtime(event.target.value)} />
                  <div className='form-labels'>Enter time with unit. Example:4 hrs</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Total time needed" variant="filled" 
                  onChange={(event)=>settotaltime(event.target.value)} />
                  <div className='form-labels'>Enter time with unit. Example:50 mins</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="course type" variant="filled" 
                  onChange={(event)=>setcourse(event.target.value)} />
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Cuisine" variant="filled" 
                  onChange={(event)=>setcuisine(event.target.value)} />
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="servings" variant="filled" 
                  onChange={(event)=>setservings(event.target.value)} />
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Calories" variant="filled" 
                  onChange={(event)=>setcalories(event.target.value)} />
          <div className='form-labels'>Enter amount in KCal (Kilo Calories). Example:100</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Carbohydrates" variant="filled" 
                  onChange={(event)=>setcarbohydrates(event.target.value)} />
                  <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Protein" variant="filled" 
                  onChange={(event)=>setprotein(event.target.value)} />
                  <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Fat" variant="filled" 
                  onChange={(event)=>setfat(event.target.value)} />
                  <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Sodium" variant="filled" 
                  onChange={(event)=>setsodium(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Potassium" variant="filled" 
                  onChange={(event)=>setpotassium(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Fiber" variant="filled" 
                  onChange={(event)=>setfiber(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Sugar" variant="filled" 
                  onChange={(event)=>setsugar(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Calcium" variant="filled" 
                  onChange={(event)=>setcalcium(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Iron" variant="filled" 
                  onChange={(event)=>setiron(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Vitamin A" variant="filled" 
                  onChange={(event)=>setvitamina(event.target.value)} />
                  <div className='form-labels'>Enter amount in IU (International Unit). Example:1516</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Vitamin C" variant="filled" 
                  onChange={(event)=>setvitaminc(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br>
      <br></br>
      <Button color='secondary' variant='contained' className='textbox' onClick={()=>{
       
       //adding new receipe object to list
        setreceipelist([...receipelist,{
          name:name.toString().trim().toUpperCase(),
          picturelink:picturelink,
          ingredients:(ingredients.toString().trim().length>0)?ingredients.toString().split(","):["NA"],
          receipe:(receipe.toString().trim().length>0)?receipe.toString().split("."):["NA"],
          videolink:videolink,
          notes:(notes.toString().trim().length>0)?notes.toString().split("."):["NA"],
          preptime:preptime,
          cooktime:cooktime,
          soakingtime:soakingtime,
          fermentationtime:fermentationtime,
          totaltime:totaltime,
          course:course,
          cuisine:cuisine,
          servings:servings,
          calories:calories,
          carbohydrates:carbohydrates,
          protein:protein,
          fat:fat,
          sodium:sodium,
          potassium:potassium,
          fiber:fiber,
          sugar:sugar,
          calcium:calcium,
          iron:iron,
          vitamina:vitamina,
          vitaminc:vitaminc
        }]);

        //after adding setting teh fields to empty values
        setname("");
        setpicturelink("")
        setingredients("")
        setreceipe("")
        setvideolink("")
        setnotes("")
        setpreptime("")
        setcooktime("")
        setsoakingtime("")
        setfermentationtime("")
        settotaltime("")
        setcourse("")
        setcuisine("")
        setservings("")
        setcalories("")
        setcarbohydrates("")
        setprotein("")
        setfat("")
        setsodium("")
        setpotassium("")
        setfiber("")
        setsugar("")
        setcalcium("")
        setiron("")
        setvitamina("")
        setvitaminc("")

        setformvisible(!(formvisible))
      }}>
          ADD NEW RECEIPE
      </Button>
      <br></br>
    </div>
    
  )
}


function EditReceipe({name,setname,picturelink,setpicturelink,ingredients,setingredients,receipe,setreceipe,
  videolink,setvideolink,notes,setnotes,preptime,setpreptime,cooktime,setcooktime,soakingtime,setsoakingtime,
  fermentationtime,setfermentationtime,totaltime,settotaltime,course,setcourse
  ,cuisine,setcuisine,servings,setservings,calories,setcalories,carbohydrates,setcarbohydrates,protein,setprotein,
  fat,setfat,sodium,setsodium,potassium,setpotassium, fiber,setfiber,sugar,setsugar,calcium,setcalcium,
  iron,setiron,vitamina,setvitamina,vitaminc,setvitaminc,receipelist,setreceipelist,
  form2visible,form2style,setform2visible,editindex,seteditindex}){

  const elekey = receipelist[editindex];
  

    //Form to get data of receipes
  return(
    <div className='form' style={form2style}>
      <div>
      <TextField id="filled-basic" className="textbox" label="Dish Name" variant="filled" 
      value={name} onChange={(event) => setname(event.target.value)}/>
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Dish picture link" variant="filled" 
              value={picturelink}
                  onChange={(event)=>setpicturelink(event.target.value)} />
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Ingredients" variant="filled" 
          value={ingredients}
                  onChange={(event)=>setingredients(event.target.value)} />
                  <div className='form-labels'>Enter all ingredients and quantity separated by comma (,) </div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Instructions / steps to do" variant="filled" 
          value={receipe}
                  onChange={(event)=>setreceipe(event.target.value)} />
                  <div className='form-labels'>Enter all steps clearly separated by fullstop (.) </div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Notes / points to remember" variant="filled" 
          value={notes}
                  onChange={(event)=>setnotes(event.target.value)} />
                  <div className='form-labels'>Enter all points clearly separated by fullstop (.) </div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Video link" variant="filled" 
          value={videolink}
                  onChange={(event)=>setvideolink(event.target.value)} />
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Prep time" variant="filled" 
          value={preptime}
                  onChange={(event)=>setpreptime(event.target.value)} />
                  <div className='form-labels'>Enter time with unit. Example:5 mins</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="cooking time needed" variant="filled" 
          value={cooktime}
                  onChange={(event)=>setcooktime(event.target.value)} />
                  <div className='form-labels'>Enter time with unit. Example:15 mins</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="soaking time needed" variant="filled" 
          value={soakingtime}
                  onChange={(event)=>setsoakingtime(event.target.value)} />
                  <div className='form-labels'>Enter time with unit. Example:15 mins</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="fermentation time needed" variant="filled" 
          value={fermentationtime}
                  onChange={(event)=>setfermentationtime(event.target.value)} />
                  <div className='form-labels'>Enter time with unit. Example:4 hrs</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Total time needed" variant="filled" 
          value={totaltime}
                  onChange={(event)=>settotaltime(event.target.value)} />
                  <div className='form-labels'>Enter time with unit. Example:50 mins</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="course type" variant="filled" 
          value={course}
                  onChange={(event)=>setcourse(event.target.value)} />
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Cuisine" variant="filled" 
          value={cuisine}
                  onChange={(event)=>setcuisine(event.target.value)} />
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="servings" variant="filled" 
          value={servings}
                  onChange={(event)=>setservings(event.target.value)} />
      </div>
      <br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Calories" variant="filled" 
          value={calories}
                  onChange={(event)=>setcalories(event.target.value)} />
          <div className='form-labels'>Enter amount in KCal (Kilo Calories). Example:100</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Carbohydrates" variant="filled" 
          value={carbohydrates}
                  onChange={(event)=>setcarbohydrates(event.target.value)} />
                  <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Protein" variant="filled" 
          value={protein}
                  onChange={(event)=>setprotein(event.target.value)} />
                  <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Fat" variant="filled" 
          value={fat}
                  onChange={(event)=>setfat(event.target.value)} />
                  <div className='form-labels'>Enter amount in g (grams). Example:10</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Sodium" variant="filled" 
          value={sodium}
                  onChange={(event)=>setsodium(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Potassium" variant="filled" 
          value={potassium}
                  onChange={(event)=>setpotassium(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Fiber" variant="filled" 
          value={fiber}
                  onChange={(event)=>setfiber(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Sugar" variant="filled" 
          value={sugar}
                  onChange={(event)=>setsugar(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Calcium" variant="filled" 
          value={calcium}
                  onChange={(event)=>setcalcium(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Iron" variant="filled" 
          value={iron}
                  onChange={(event)=>setiron(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Vitamin A" variant="filled" 
          value={vitamina}
                  onChange={(event)=>setvitamina(event.target.value)} />
                  <div className='form-labels'>Enter amount in IU (International Unit). Example:1516</div>
      </div>
      <br></br><br></br>
      <div>
          <TextField id="filled-basic"  className="textbox" label="Vitamin C" variant="filled" 
          value={vitaminc}
                  onChange={(event)=>setvitaminc(event.target.value)} />
                  <div className='form-labels'>Enter amount in mg (milli grams). Example:3</div>
      </div>
      <br></br>
      <br></br>
      <div>
      <Button color='secondary' variant='contained' onClick={()=>{

            //adding edited one as new  receipe object to list
            // console.log(receipelist.filter((ele,index)=>index!==editindex))
            const list = [...receipelist.filter((ele,index)=>index!==editindex),{
              name:name.toUpperCase(),
              picturelink:picturelink,
              ingredients:(ingredients.toString().trim().length>0)?ingredients.toString().split(","):["NA"],
              receipe:(receipe.toString().trim().length>0)?receipe.toString().split("."):["NA"],
              videolink:videolink,
              notes:(notes.toString().trim().length>0)?notes.toString().split("."):["NA"],
              preptime:preptime,
              cooktime:cooktime,
              soakingtime:soakingtime,
              fermentationtime:fermentationtime,
              totaltime:totaltime,
              course:course,
              cuisine:cuisine,
              servings:servings,
              calories:calories,
              carbohydrates:carbohydrates,
              protein:protein,
              fat:fat,
              sodium:sodium,
              potassium:potassium,
              fiber:fiber,
              sugar:sugar,
              calcium:calcium,
              iron:iron,
              vitamina:vitamina,
              vitaminc:vitaminc
            }];
            // console.log(list);
            setreceipelist([...list]);
            // console.log(receipelist)



            //after adding setting teh fields to empty values
            setname("");
            setpicturelink("")
            setingredients("")
            setreceipe("")
            setvideolink("")
            setnotes("")
            setpreptime("")
            setcooktime("")
            setsoakingtime("")
            setfermentationtime("")
            settotaltime("")
            setcourse("")
            setcuisine("")
            setservings("")
            setcalories("")
            setcarbohydrates("")
            setprotein("")
            setfat("")
            setsodium("")
            setpotassium("")
            setfiber("")
            setsugar("")
            setcalcium("")
            setiron("")
            setvitamina("")
            setvitaminc("")
            }}>
              UPDATE RECEIPE
            </Button>
      </div>
      <br></br>
      <div>
      <Button variant='contained' color="primary" onClick={()=>setform2visible(false)}>
          Cancel/close the form
      </Button>
      </div>
    </div>
    
  )
}



function Receipe({name,setname,picturelink,setpicturelink,ingredients,setingredients,receipe,setreceipe,
  videolink,setvideolink,notes,setnotes,preptime,setpreptime,cooktime,setcooktime,soakingtime,setsoakingtime,
  fermentationtime,setfermentationtime,totaltime,settotaltime,course,setcourse
  ,cuisine,setcuisine,servings,setservings,calories,setcalories,carbohydrates,setcarbohydrates,protein,setprotein,
  fat,setfat,sodium,setsodium,potassium,setpotassium, fiber,setfiber,sugar,setsugar,calcium,setcalcium,
  iron,setiron,vitamina,setvitamina,vitaminc,setvitaminc,receipelist,setreceipelist,index,
  setform2visible,form2visible,editindex,seteditindex}) {

      // console.log(name,picturelink,ingredients,receipe,videolink,notes,preptime,cooktime,soakingtime,
      //   fermentationtime,totaltime,course,cuisine,servings,calories,carbohydrates,protein,fat,sodium,potassium,
      //     fiber,sugar,calcium,iron,vitamina,vitaminc)


     

      //style so that data appaears only when button is clicke
      const [visible1,setvisible1] = useState(false);
      const [visible2,setvisible2] = useState(false);
      const [visible3,setvisible3] = useState(false);
      const [visible4,setvisible4] = useState(false);

      //down arrow / up arrow changes when button is clicked
      const button1 = (visible1)?<Button variant='outlined' color="secondary"  onClick={()=>setvisible1(!visible1)}><ArrowDropUpIcon/>Time Needed </Button>:<Button variant='outlined' color="secondary" onClick={()=>setvisible1(!visible1)}><ArrowDropDownIcon/>Time Needed</Button>;
      const button2 = (visible2)?<Button variant='outlined' color="secondary"  onClick={()=>setvisible2(!visible2)}><ArrowDropUpIcon/>Nutrition </Button>:<Button variant='outlined' color="secondary" onClick={()=>setvisible2(!visible2)}><ArrowDropDownIcon/>Nutrition</Button>;
      const button3 = (visible3)?<Button variant='outlined' color="secondary"  onClick={()=>setvisible3(!visible3)}><ArrowDropUpIcon/>Ingredients </Button>:<Button variant='outlined' color="secondary" onClick={()=>setvisible3(!visible3)}><ArrowDropDownIcon/>Ingredients</Button>;
      const button4 = (visible4)?<Button variant='outlined' color="secondary"  onClick={()=>setvisible4(!visible4)}><ArrowDropUpIcon/>Receipe </Button>:<Button variant='outlined' color="secondary" onClick={()=>setvisible4(!visible4)}><ArrowDropDownIcon/>Receipe</Button>;

      const style1=(visible1)?{display:"block"}:{display:"none"};
      const style2=(visible2)?{display:"block"}:{display:"none"};
      const style3=(visible3)?{display:"block"}:{display:"none"};
      const style4=(visible4)?{display:"block"}:{display:"none"};

      //display calroies only if we have a value for that
      const calorievalue=(calories==="")?"":<Tooltip title="calories"><Chip label={calories+" KCal"} icon={<LocalFireDepartmentIcon/> }  variant="outlined" color="secondary" /></Tooltip>


      //display NA if a value is not there
      const preptimevalue = (preptime==="")?"NA":preptime
      const cooktimevalue = (cooktime==="")?"NA":cooktime
      const soakingtimevalue = (soakingtime==="")?"NA":soakingtime
      const fermentationtimevalue = (fermentationtime==="")?"NA":fermentationtime
      const totaltimevalue = (totaltime==="")?"NA":totaltime

      const carbohydratesvalue = (carbohydrates==="")?"NA":carbohydrates+" g";
      const proteinvalue = (protein==="")?"NA":protein+" g";
      const fatvalue = (fat==="")?"NA":fat+" g";
      const sodiumvalue = (sodium==="")?"NA":sodium+" mg";
      const potassiumvalue = (potassium==="")?"NA":potassium+" mg"
      const fibervalue = (fiber==="")?"NA":fiber+" mg";
      const sugarvalue = (sugar==="")?"NA":sugar+" mg"
      const calciumvalue = (calcium==="")?"NA":calcium+" mg"
      const ironvalue = (iron==="")?"NA":iron+" mg"
      const vitaminavalue = vitamina===""?"NA":vitamina+"IU";
      const vitamincvalue = vitaminc===""?"NA":vitaminc+" mg";
    

          return(
            <div className='card' >
              {/* delete button to delete the receipes and rceipe is removed based on index value*/}
             <Tooltip title="delete the receipe">
             <Fab  aria-label="delete receipe "  color="secondary" size="medium"  className='Fab-button' onClick={()=>{
                const deleteindex=index;
                console.log(deleteindex)
                setreceipelist(receipelist.filter((ele,ind)=>ind!=deleteindex))
              }} >
                  {/* <ClearIcon/> */}
                  <RemoveIcon/>
              </Fab>
             </Tooltip>
             <Tooltip title="Edit the receipe">
             <Fab  aria-label="edit receipe " color="secondary" size="medium" style={{float:"right"}}  className='Fab-button' onClick={()=>{
                console.log(index)
                const {name,picturelink,ingredients,receipe,videolink,notes,preptime,cooktime,soakingtime,
                  fermentationtime,totaltime,course,cuisine,servings,calories,carbohydrates,protein,fat,sodium,potassium,
                    fiber,sugar,calcium,iron,vitamina,vitaminc} = receipelist[index];
                    setform2visible(true)
                
                setname(name);
                setpicturelink(picturelink)
                setingredients(ingredients)
                setreceipe(receipe)
                setvideolink(videolink)
                setpreptime(preptime)
                setcooktime(cooktime)
                setsoakingtime(soakingtime)
                setfermentationtime(fermentationtime)
                settotaltime(totaltime)
                setcourse(course)
                setcuisine(cuisine)
                setservings(servings)
                setcalories(calories)
                setcarbohydrates(carbohydrates)
                setprotein(protein)
                setfat(fat)
                setsodium(sodium)
                setpotassium(potassium)
                setfiber(fiber)
                setsugar(sugar)
                setiron(iron)
                setvitamina(vitamina)
                setvitaminc(vitaminc)
                setnotes(notes)
                setcalcium(calcium)
                seteditindex(index)
                
              }} >
                  <ModeEditOutlineOutlinedIcon/> 
              </Fab>
             </Tooltip>
             
                <div className='heading'>
                  <h1>{name}</h1>
                </div>
                <div className='flex-row'>
                  <div>
                      <Tooltip title="course">
                          <Chip label={course} variant="outlined" color="secondary" />
                      </Tooltip>
                  </div>
                  <div>
                      <Tooltip title="cuisine">
                        <Chip label={cuisine} variant="outlined" color="secondary" />
                      </Tooltip>
                  </div>
                  <div>
                      <Tooltip title="servings">
                        <Chip label={servings} icon={<LocalDiningIcon/>} variant="outlined" color="secondary" />
                      </Tooltip>
                  </div>
                  <div>
                        {calorievalue}      
                  </div>
                </div>
                <br></br>
                <div>
                  <img src={picturelink}/>
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
                  <TableContainer component={Paper } className='table'>
                    <Table sx={{ minWidth: 100}} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell  > Time</TableCell>
                        <TableCell >Value</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell >Prep time</TableCell>
                        <TableCell  >{preptimevalue}</TableCell>
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
                  <TableContainer component={Paper } className='table'>
                    <Table sx={{ minWidth: 100}} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell  > Nutrient</TableCell>
                        <TableCell >Value</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell >Carbohydrates</TableCell>
                        <TableCell  >{carbohydratesvalue}</TableCell>
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
                      {
                        
                       <Ingredients ingredients={ingredients}/>
                      }
                  </ul>
                </div>
                <div>
                    {button4}
                </div>
                <div style={style4} className='snippet'>
                  {/* <div className='heading'><h3>Receipe</h3></div> */}
                  <ul>
                    {/* as we perform split with "." for final sentence there is a final element which is " " */}
                    {  
                       <Receipedisplay receipe={receipe}/>
                      }
                  </ul>
                </div>
            </div>
          )

}
function Ingredients({ingredients}){
  return (
    <div>
      {
        ingredients.map((ele)=><Steps content={ele}/>)
      }
    </div>
  )
}
function Receipedisplay({receipe}){
  return (
    <div>
      {
        receipe.map((ele)=><Steps content={ele}/>)
      }
    </div>
  )
}

function Steps({content}) {
  return(
   <li>{content}</li>
  )
}

