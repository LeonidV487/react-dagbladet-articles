import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core";

function App() {

    let state = {
        mainData: [],
        mainData2: []
    };

    const setData = () => {
        fetch('https://storage.googleapis.com/aller-structure-task/test_data.json')
            .then(response => response.json())
            .then((jsonData) => {
                state.mainData = jsonData[0];
            })
            .catch((error) => {
                console.error(error)
            });
    };

    const getArticles = () => {
        console.log(state.mainData);

        state.mainData2 = state.mainData.map((article) => {
            console.log(article);
            return article;
        });
        console.log(state.mainData2);
    };

    return (
        <div className="App">
            {setData()}
            <header className="App-header">

            </header>
            <main>
                <div>
                    <button onClick={getArticles}>Get Article</button>
                    <ul>
                        {
                            state.mainData2.map((article, index) => {
                                console.log(article);
                                return <li key={index}>{article.type}</li>
                            })
                        }
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default App;
