import GetCustomer from "./Get-Customer.js";
import { group, sleep } from "k6";
import { htmlReport } from './libs/bundle.js';

export function handleSummary(data) {
  return {
    "report.html": htmlReport(data),
  };
}

export default () => {
    group('Endpoint Get Customer - Controller Customer - OnionArchitecture.Api', () => {
        GetCustomer();
    });
    
    sleep(1);
}