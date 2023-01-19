import {connect} from "react-redux";
import './App.css'
import TaskList from "./TaskList";


function App(props) {

    const {header, version} = props;

    return (
        <div className="App">
            <h1>{header}</h1>
            <h3>{version}</h3>
            <TaskList/>
        </div>
    );
}

const mapStateToProps = state => ({
    header: state.appHeader,
    version: state.version,
})
export default connect(mapStateToProps)(App);
