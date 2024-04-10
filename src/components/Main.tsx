import Gameboard from "./Gameboard";
import Scoreboard from "./Scoreboard";

const Main = (): JSX.Element => {
    return (
        <main>
            <Scoreboard />
            <Gameboard />
        </main>
    );
};

export default Main;