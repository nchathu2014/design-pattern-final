import { useState } from 'react';

export function useCounter(counterState,{KEY}) {
    const stateProp = counterState.getState()[KEY]
		const [counter, setCounter] = useState(stateProp);

		const increment = () => {
			counterState.increment(KEY);
			setCounter(counterState.getState()[KEY]);
		};

		const decrement = () => {
			counterState.decrement(KEY);
			setCounter(counterState.getState()[KEY]);
		};

    return [counter,increment,decrement];
	}