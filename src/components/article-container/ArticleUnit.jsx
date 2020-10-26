import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    card: {
        width: 200,
        padding: 6,
        marginTop: 50,
        margin: 10
    },
    title: {
        marginBottom: 15
    },
    media: {
        height: 200,
        width: 200,
    },
    buttons: {
        backgroundColor: '#282c50',
        color: '#D6DFE7',
        marginTop: 15,
        marginBottom: 10,
        margin: theme.spacing(1),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#FCFCFC',
            color: '#282c50',
            borderColor: '#282c50',
            boxShadow: 'none',
        },
    }
});


class ArticleUnit extends Component {

    deleteArticle = () => {
        prompt("Write 'yes' if you really want to delete the article");
    };

    render() {
        const {classes} = this.props;
        return (
            <Card
                className={classes.card}>
                <Grid container justify={"center"} alignItems={"center"}>
                    <Grid item>
                        <Typography
                            className={classes.title}
                        >
                            {this.props.column.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            image={this.props.column.imageUrl}
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        className={classes.buttons}
                        variant={"outlined"}
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={this.deleteArticle}
                        className={classes.buttons}
                        variant={"outlined"}
                    >
                        Delete
                    </Button>
                </Grid>
            </Card>
        )
    }
}

export default withStyles(styles, {withTheme: true})(ArticleUnit);