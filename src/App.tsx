import Countdown from "react-countdown";
import "./App.css";
import marioImg from "./assets/mario.webp";

function App() {
  return (
    <>
      <div>
        <img src={marioImg} className='logo mario' alt='Paper Mario' />
      </div>

      <div className='card'>
        <Countdown
          date={new Date(2024, 4, 23)}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return <h1>The game is live! Go play!</h1>;
            }

            const displayDays = days > 0;
            const displayHours = hours > 0 || days > 0;
            const displayMinutes = minutes > 0 || hours > 0 || days > 0;
            const displaySeconds =
              seconds > 0 || minutes > 0 || hours > 0 || days > 0;

            const countdown: string[] = [];

            if (displayDays) {
              countdown.push(`${days} ${days === 1 ? "day" : "days"}`);
            }

            if (displayHours) {
              countdown.push(`${hours} ${hours === 1 ? "hours" : "hours"}`);
            }

            if (displayMinutes) {
              countdown.push(
                `${minutes} ${minutes === 1 ? "minute" : "minutes"}`
              );
            }

            if (displaySeconds) {
              countdown.push(
                `${seconds} ${seconds === 1 ? "second" : "seconds"}`
              );
            }

            return (
              <>
                <h1>Paper Mario: TTYD releases in</h1>
                <h1>{countdown.join(", ")}</h1>
              </>
            );
          }}
        ></Countdown>
      </div>
    </>
  );
}

export default App;
