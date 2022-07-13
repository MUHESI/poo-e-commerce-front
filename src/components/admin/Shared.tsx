import React from "react";
import { Grid } from "@material-ui/core";
import { substringText } from "../../services/functions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export function Card_() {
  const tabProjects = [
    {
      title: "projetc Two",
      description: "hegy udgusdsui ",
      repository: "sjcsducds",
      isPublic: false,
      img: "imgProject1",
      link: ""
    }
  ];

  return (
    <div className='mainProjects'>
      <Grid container spacing={5}>
        {tabProjects.map((project: any) => (
          <Grid item xs={12} sm={12} md={3} xl={3}>
            <div className='container'>
              <div className='content-img'>
                <img src={project.img} alt='...' />
              </div>
              <div className='content-text'>
                <h3>{project.title}</h3>
                <h4>2020-2021 </h4>
                <div className='description'>
                  {substringText(project.description || "", 150)}
                </div>

                <div
                  className='content-actions'
                  style={{
                    textAlign: "center",
                    paddingLeft: "10px"
                  }}
                ></div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  }
});

export function CardHomeText() {
  const classes = useStyles();

  return (
    <div className='mainCardHomeText'>
      <Title title='Home text' />
      <Card className={classes.root}>
        <CardReadOnly />
        <CardActions>
          <Button size='small' color='primary'>
            edit
          </Button>
          <Button size='small' color='primary'>
            Home
          </Button>
        </CardActions>
      </Card>
      <div className='group-input    margin-top-2'>
        <TextField
          className='field'
          label='Main text'
          placeholder='Ex: I m MUHESI...'
          multiline
          variant='outlined'
        />
        <TextField
          className='field'
          label='Image'
          placeholder='Put a link'
          multiline
          variant='outlined'
        />

        <TextField
          className='field'
          label='Your resume'
          placeholder='put a link'
          multiline
          variant='outlined'
        />
        <TextField
          className='field'
          label='Social media'
          placeholder='put a link'
          multiline
          variant='outlined'
        />
      </div>
    </div>
  );
}

const Title = ({ title }: any) => (
  <div className='admintitle'>
    <h3>{title} </h3>
  </div>
);

const CardReadOnly = ({ data }: any) => {
  return (
    <CardActionArea>
      <CardMedia
        component='img'
        alt='Contemplative Reptile'
        height='140'
        image='/static/images/cards/contemplative-reptile.jpg'
        title='Contemplative Reptile'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'></Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  );
};
//==================== About me==========================

export function CardAboutMeText() {
  const classes = useStyles();

  return (
    <div className='mainCardHomeText'>
      <Title title='About Me' />

      <Card className={classes.root}>
        <CardReadOnly />
        <CardActions>
          <Button size='small' color='primary'>
            edit
          </Button>
          <Button size='small' color='primary'>
            Home
          </Button>
        </CardActions>
      </Card>
      <div className='group-input    margin-top-2'>
        <TextField
          className='field'
          label='Title'
          placeholder='Title'
          multiline
          variant='outlined'
          style={{ width: "95%" }}
        />
        <TextField
          className='field'
          label='Multiline'
          multiline
          rows={4}
          defaultValue='Default Value'
          variant='outlined'
          style={{ width: "95%" }}
        />
        <TextField
          className='field'
          label='Image'
          placeholder='Put a link'
          multiline
          variant='outlined'
          style={{ width: "95%" }}
        />
        <div className='field'>{/* <AddToListInput /> */}</div>
      </div>
    </div>
  );
}

//==================== Education==========================

export function CardEducation() {
  const classes = useStyles();

  return (
    <div className='mainCardHomeText'>
      <Title title='Education' />

      <Card className={classes.root}>
        <CardReadOnly />
        <CardActions>
          <Button size='small' color='primary'>
            edit
          </Button>
          <Button size='small' color='primary'>
            Home
          </Button>
        </CardActions>
      </Card>
      <div className='group-input    margin-top-2'>
        <TextField
          className='field'
          label='Title'
          placeholder='Title'
          multiline
          variant='outlined'
          style={{ width: "95%" }}
        />
        <TextField
          className='field'
          label='Multiline'
          multiline
          rows={4}
          defaultValue='Default Value'
          variant='outlined'
          style={{ width: "95%" }}
        />
        <div className='field'>{/* <AddToListInput /> */}</div>
      </div>
    </div>
  );
}

//==================== Education==========================

export function CardSkillsPrograming() {
  const classes = useStyles();

  return (
    <div className='mainCardHomeText'>
      <Title title='Skills Progr.' />

      <Card className={classes.root}>
        <CardReadOnly />
        <CardActions>
          <Button size='small' color='primary'>
            edit
          </Button>
          <Button size='small' color='primary'>
            Home
          </Button>
        </CardActions>
      </Card>
      <div className='group-input    margin-top-2'>
        <TextField
          className='field'
          label='Title'
          placeholder='ex: React'
          multiline
          variant='outlined'
        />
        <TextField
          className='field'
          label='Image'
          placeholder='put skill link '
          multiline
          variant='outlined'
        />
        <TextField
          className='field'
          label='Value'
          placeholder=' ex: 85'
          multiline
          variant='outlined'
        />
      </div>
    </div>
  );
}

//==================== Education==========================

export function CardWorkHistory() {
  const classes = useStyles();

  return (
    <div className='mainCardHomeText'>
      <Title title='Work History' />

      <Card className={classes.root}>
        <CardReadOnly />
        <CardActions>
          <Button size='small' color='primary'>
            edit
          </Button>
          <Button size='small' color='primary'>
            Home
          </Button>
        </CardActions>
      </Card>
      <div className='group-input    margin-top-2'>
        <TextField
          className='field'
          label='Title'
          placeholder='Title'
          multiline
          variant='outlined'
          style={{ width: "95%" }}
        />
        <TextField
          className='field'
          label='Multiline'
          multiline
          rows={4}
          defaultValue='Default Value'
          variant='outlined'
          style={{ width: "95%" }}
        />
      </div>
    </div>
  );
}

//==================== Projects==========================

export function CardProjects() {
  const classes = useStyles();

  return (
    <div className='mainCardHomeText'>
      <Title title='Projects' />

      <Card className={classes.root}>
        <CardReadOnly />
        <CardActions>
          <Button size='small' color='primary'>
            edit
          </Button>
          <Button size='small' color='primary'>
            Home
          </Button>
        </CardActions>
      </Card>
      <div className='group-input    margin-top-2'>
        <TextField
          className='field'
          label='Main text'
          placeholder='Ex: I m MUHESI...'
          multiline
          variant='outlined'
        />
        <TextField
          className='field'
          label='Date'
          placeholder='ex: 2019'
          multiline
          variant='outlined'
        />
        <TextField
          className='field'
          label='link of project'
          placeholder='ex: joinafrik.com'
          multiline
          variant='outlined'
        />
        <TextField
          className='field'
          label='link of Repo. project'
          placeholder='ex: github.com/MUHESI/..'
          multiline
          variant='outlined'
        />
        <TextField
          className='field'
          label=' is Public ?'
          placeholder='You mut put here a radio'
          multiline
          variant='outlined'
        />

        <TextField
          className='field'
          label='Image'
          placeholder='Put a link'
          multiline
          variant='outlined'
        />

        <TextField
          className='field'
          label='Descriptions'
          multiline
          rows={4}
          defaultValue=''
          variant='outlined'
          style={{ width: "95%" }}
        />
      </div>
    </div>
  );
}

//==================== Projects==========================

export function CardInterests() {
  const classes = useStyles();

  return (
    <div className='mainCardHomeText'>
      <Title title='Interests' />

      <div className='group-input    margin-top-2'>
        <TextField
          className='field'
          label='Title'
          placeholder='Ex: I m MUHESI...'
          multiline
          variant='outlined'
          style={{ width: "95%" }}
        />

        <TextField
          className='field'
          label='Descriptions'
          multiline
          rows={4}
          defaultValue=''
          variant='outlined'
          style={{ width: "95%" }}
        />
      </div>
    </div>
  );
}
