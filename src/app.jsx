import { MoviesGrid } from "./components/movies_grid";
import styles from './css/App.module.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function App() {
    return <Router>
        <header>
            <h1 className={styles.title}>Movies</h1>
        </header>
        <main>
            <Switch>
                <Route path="/">
                    <MoviesGrid/>
                </Route>
            </Switch>
        </main>
    </Router>
}