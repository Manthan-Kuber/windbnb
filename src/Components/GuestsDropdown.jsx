import React , {useState,useContext} from 'react'
import { ResultsContainer} from "./Header.styles";
import PersonCounter from "./PersonCounter";
import { SearchContext } from './SearchBlock';

const GuestsDropdown = () => {
    const [counters, setCounters] = useState({ counter1: 0, counter2: 0 });
    const searchContext = useContext(SearchContext);
  return (
    <ResultsContainer>
          <PersonCounter
            label={"Ages 13 or above"}
            value={counters.counter1}
            handleIncrement={() => {
              setCounters({ ...counters, counter1: counters.counter1 + 1 });
              searchContext.dispatch({ type: "incGuests" });
            }}
            handleDecrement={() => {
              if (counters.counter1 === 0) return counters.counter1;
              setCounters({ ...counters, counter1: counters.counter1 - 1 });
              searchContext.dispatch({ type: "decGuests" });
            }}
          >
            Adults
          </PersonCounter>
          <PersonCounter
            label={"Ages 2-12"}
            value={counters.counter2}
            handleIncrement={() => {
              setCounters({ ...counters, counter2: counters.counter2 + 1 });
              searchContext.dispatch({ type: "incGuests" });
            }}
            handleDecrement={() => {
              if (counters.counter2 === 0) return counters.counter2;
              setCounters({ ...counters, counter2: counters.counter2 - 1 });
              searchContext.dispatch({ type: "decGuests" });
            }}
          >
            Children
          </PersonCounter>
        </ResultsContainer>
  )
}

export default GuestsDropdown