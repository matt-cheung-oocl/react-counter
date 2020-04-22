import axios from "axios";

class CounterApi {
  static getCounterSize() {
    const COUNTER_API_BASE_URI =
      "https://5e9ed3a0fb467500166c47b3.mockapi.io/counters";
    return axios.get(COUNTER_API_BASE_URI);
  }

  static updateCounterSize(size) {
    const COUNTER_API_BASE_URI =
      "https://5e9ed3a0fb467500166c47b3.mockapi.io/counters/1";
    return axios.put(COUNTER_API_BASE_URI, { size });
  }
}

export default CounterApi;
