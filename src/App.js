import React, {Component} from 'react';
import './App.css';
import {Grid} from "@material-ui/core";
import ArticleUnit from "./components/article-container";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainData: [],
        };
    }

    componentDidMount() {
        fetch('https://storage.googleapis.com/aller-structure-task/test_data.json')
            .then(response => response.json())
            .then((jsonData) => {
                this.setState({
                    mainData: jsonData[0]
                })
            })
            .catch((error) => {
                console.error(error)
            });
    };

    getRows = () => {
        return this.state.mainData.map(articleRow => {
            return (
                <Grid container justify={"center"}>
                    {this.getArticles(articleRow)}
                </Grid>
            )
        });
    };

    getArticles = (articleRow) => {
        return articleRow.columns.map(column => {
            return (
                <ArticleUnit column={column}/>
            )
        });
    };

    render() {
        return (
            <div className="App">
                <Grid container justify={"center"}>
                    <Grid item xs={7}>
                        <Grid
                            container
                            justify={"center"}
                        >
                            {this.getRows()}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default App;
